document.getElementById("buttonAdd").addEventListener("click", function(){
    document.getElementById("formAddBackground").style.display = "block";
});

document.getElementById("FormAddClose").addEventListener("click", function(){
    document.getElementById("formAddBackground").style.display = "none";
});

document.getElementById("addSubmit").addEventListener("click", function(e){
    e.preventDefault();
    fetch('https://akademija.teltonika.lt/api3/cities', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: document.getElementById("addName").value,
        area: document.getElementById("addPlot").value,
        population: document.getElementById("addPopulation").value,
        postcode: document.getElementById("addPostalCode").value,
        country_id: document.getElementById("addCountryId").value
    }),
  })
  .then((response) => {
    if (response.status == 200)
    {
      alert("Miestas sėkmingai pridėtas!");
      console.log("City added successfully ", response.status);
      location.reload();
    }
    else
    {
      alert("Nepavyko pridėti miesto");
      console.log("Error", response.status);
    }
  })
})