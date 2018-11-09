data = {"init": false}

const fetch = (geneNames, animals) => {

  // Fetch response.
  console.log(geneNames)
  for (i in geneNames) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.genecards.org/cgi-bin/carddisp.pl?gene=" + geneNames[i], false);
    xhr.onreadystatechange = function() {
      $("#preloader").remove();

      if (xhr.readyState == 4) {
        doma = $('<div>').html(xhr.responseText);
        orthologs = doma.find('#orthologs');
        innerWrap = orthologs.find('.gc-subsection-inner-wrap');
        tableBody = innerWrap.find('tbody');

        for (j in animals) {
          animal = animals[j];
          animalData = tableBody.find('td:contains("' + animal + '")')
          id = animal + geneNames[i];
          newDiv = $('<div>').attr('id', id);
          newDiv.text(geneNames[i]);
          genes = []
          similarities = []
          if(animalData.length > 0) {
            row = animalData.parent()
            while(row.next().children('td').length < 6) {
              gene = row.find(':nth-child(1)').find(':nth-child(1)').text();
              similarity = row.find(':nth-child(1)').find(':nth-child(2)').text();
              genes.push(gene)
              similarities.push(similarity)
              row = row.next();
            }
            gene = row.find(':nth-child(1)').find(':nth-child(1)').text();
            similarity = row.find(':nth-child(1)').find(':nth-child(2)').text();
            genes.push(gene)
            similarities.push(similarity)
            $('#resultsPage').append(genes.toString());
            $('#resultsPage').append(similarities.toString());


            // $('#resultsPage').append(row.html());
            // console.log(genes)
            // similarity = .siblings('td:contains("gene")')
            // row = $('<div>').text(aniaml + ': ' + 'Gene: ' +  + 'Similarity: ');
            // 
          }
          // console.log(flyData.length)

        }
      }
    }
    xhr.send();
  }
}

$(window).on('load', function() {
  chrome.runtime.sendMessage({}, function(response) {
    data = response;
    fetch(data.geneNames, data.animals);
  });
});
