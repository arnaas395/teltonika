function DeleteElement (id) {

  let confirmDelete = confirm("Ar tikrai norite ištrinti šią šalį?")
  if(confirmDelete === true) {
    fetch('https://akademija.teltonika.lt/api3/countries/'+id, {
      method: "DELETE",
      })
      .then((response) => {
        if (response.status == 200)
        {
          alert("Šalis sėkmingai ištrinta!");
          console.log("Country deleted successfully ", response.status);
          location.reload();
        }
        else
        {
          alert("Nepavyko ištrinti šalies");
          console.log("Error", response.status);
        }
      })
  }
}
