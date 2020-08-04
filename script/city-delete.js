function DeleteElement (id) {

    let confirmDelete = confirm("Ar tikrai norite ištrinti šį miestą?")
    if(confirmDelete === true) {
      fetch('https://akademija.teltonika.lt/api3/cities/'+id, {
        method: "DELETE",
        })
        .then((response) => {
        if (response.status == 200)
        {
          alert("Miestas sėkmingai ištrintas!");
          console.log("City deleted successfully ", response.status);
          location.reload();
        }
        else
        {
          alert("Nepavyko ištrinti miesto");
          console.log("Error", response.status);
        }
      })
    }
  }
  