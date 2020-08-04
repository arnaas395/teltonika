function setUrl (urlExtention) {
    if(urlExtention !== undefined) return 'https://akademija.teltonika.lt/api3/countries?'+urlExtention;
    return 'https://akademija.teltonika.lt/api3/countries';
}

let url = setUrl();
loadData(url);

function loadData (url) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        let data = JSON.parse(this.response);
        printData(data.countires);
    }

    request.open('GET', url, true);
    request.send();

    function printData (DataArray) {
        let output = '';
        DataArray.forEach(countrie => {
            output += `
            <tr">
                <td>  <button onclick="setIdLocal(${countrie.id})"> ${countrie.name} </button>  </td>
                <td> ${countrie.area} </td>
                <td> ${countrie.population} </td>
                <td> ${countrie.calling_code} </td>
                <td class="element-actions"> 
                    <button onclick="DeleteElement(${countrie.id})"> <img src="images/delete.png"> </button>
                    <div class="verticle-line"></div>
                    <button onclick="openEditForm(${countrie.id})"> <img src="images/edit.png"> </button>
                </td>
            </tr> `;
        });
        document.getElementById("bot_table").innerHTML = output;
    }
}

function setIdLocal (countryId) {
    localStorage.setItem("country-id", countryId);
    window.location.href = "cities.html";
}