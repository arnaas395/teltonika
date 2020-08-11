function openEditForm (id) {
  document.getElementById("formEditBackground").style.display = "block";
  getElementWithId(id);
}

function getElementWithId (id) {
  let request = new XMLHttpRequest();
  url = 'https://akademija.teltonika.lt/api3/countries/'+id;

  request.onload = function () {
      let data = JSON.parse(this.response);
      fillEditForm(data);
  }

  request.open('GET', url, true);
  request.send();
}

function fillEditForm (country) {
  document.getElementById("elementId").value = country.id;
  document.getElementById("editName").value = country.name;
  document.getElementById("editPlot").value = country.area;
  document.getElementById("editPopulation").value = country.population;
  document.getElementById("editCountryCode").value = country.calling_code;
}

document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("editSubmit").addEventListener("click", function ChangeEditInfo (e){
      e.preventDefault();
      id = document.getElementById("elementId").value;
      
      fetch('https://akademija.teltonika.lt/api3/countries/'+id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify
          ({
              name: document.getElementById("editName").value,
              area: document.getElementById("editPlot").value,
              population: document.getElementById("editPopulation").value,
              calling_code: document.getElementById("editCountryCode").value
          }),
        })
        .then((response) => {
          if (response.status == 200)
          {
            alert("Šalis sėkmingai redaguota!");
            console.log("Country updated successfully ", response.status);
            location.reload();
          }
          else
          {
            alert("Nepavyko redaguoti šalies");
            console.log("Error", response.status);
          }
        })
  })


  document.getElementById("FormEditClose").addEventListener("click", function(){
      document.getElementById("formEditBackground").style.display = "none";
  })

})