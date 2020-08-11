function openEditForm (id) {
    document.getElementById("formEditBackground").style.display = "block";
    getElementWithId(id);
}

function getElementWithId (id) {
    let request = new XMLHttpRequest();
    url = 'https://akademija.teltonika.lt/api3/cities';

    request.onload = function () {
        let data = JSON.parse(this.response);
        for(let i = 0; i < data.cities.length; i++)
        {
          if(data.cities[i].id === id)
          fillEditForm(data.cities[i]);
        }
    }

    request.open('GET', url, true);
    request.send();
}

function fillEditForm (city) {
    document.getElementById("elementId").value = city.id;
    document.getElementById("editName").value = city.name;
    document.getElementById("editPlot").value = city.area;
    document.getElementById("editPopulation").value = city.population;
    document.getElementById("editPostalCode").value = city.postcode;
    document.getElementById("editCountryId").value = city.country_id;
}

document.addEventListener("DOMContentLoaded", function(){
  
  document.getElementById("editSubmit").addEventListener("click", function ChangeEditInfo (e){
      e.preventDefault();
      id = document.getElementById("elementId").value;
      
      fetch('https://akademija.teltonika.lt/api3/cities/'+id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify
          ({
              name: document.getElementById("editName").value,
              area: document.getElementById("editPlot").value,
              population: document.getElementById("editPopulation").value,
              postcode: document.getElementById("editPostalCode").value,
              country_id: document.getElementById("editCountryId").value
          }),
        })
        .then((response) => {
          if (response.status == 200)
          {
            alert("Miestas sėkmingai redaguota!");
            console.log("City updated successfully ", response.status);
            location.reload();
          }
          else
          {
            alert("Nepavyko redaguoti miesto");
            console.log("Error", response.status);
          }
        })
  })


  document.getElementById("FormEditClose").addEventListener("click", function(){
      document.getElementById("formEditBackground").style.display = "none";
  });
})