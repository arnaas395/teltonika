document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("buttonAdd").addEventListener("click", function(){
      document.getElementById("formAddBackground").style.display = "block";
  });

  document.getElementById("FormAddClose").addEventListener("click", function(){
      document.getElementById("formAddBackground").style.display = "none";
  });

  document.getElementById("addSubmit").addEventListener("click", function(e){
      e.preventDefault();
      fetch('https://akademija.teltonika.lt/api3/countries', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: document.getElementById("addName").value,
          area: document.getElementById("addPlot").value,
          population: document.getElementById("addPopulation").value,
          calling_code: document.getElementById("addCountryCode").value
      }),
    })
    .then((response) => {
      if (response.status == 200)
      {
        alert("Šalis sėkmingai pridėta!");
        console.log("Country added successfully ", response.status);
        location.reload();
      }
      else
      {
        alert("Nepavyko pridėti šalies");
        console.log("Error", response.status);
      }
    })
  })
})