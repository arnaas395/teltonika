function setUrl (urlExtention) {
    if(urlExtention !== undefined) return 'https://akademija.teltonika.lt/api3/cities/'+getCountryId() + '?' + urlExtention;
    return 'https://akademija.teltonika.lt/api3/cities/'+getCountryId();
}

function getCountryId () {
    return localStorage.getItem("country-id");
}

url = setUrl();
loadDataCities(url);

getCountryName(getCountryId());
function getCountryName (id) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        let data = JSON.parse(this.response);
        document.getElementById("country-name").innerHTML = data.name;
    }
    request.open('GET', 'https://akademija.teltonika.lt/api3/countries/'+id, true);
    request.send();
}

function loadDataCities (url) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        let data = JSON.parse(this.response);
        printData(data);
    }

    request.open('GET', url, true);
    request.send();

    function printData (DataArray) {
        let output = '';
        DataArray.forEach(city => {
            output += `
            <tr">
                <td> ${city.name} </td>
                <td> ${city.area} </td>
                <td> ${city.population} </td>
                <td> ${city.postcode} </td>
                <td class="element-actions"> 
                    <button onclick="DeleteElement(${city.id})"> <img src="images/delete.png"> </button>
                    <div class="verticle-line"></div>
                    <button onclick="openEditForm(${city.id})"> <img src="images/edit.png"> </button>
                </td>
            </tr> `;
        });
        document.getElementById("bot_table").innerHTML = output;
    }
}