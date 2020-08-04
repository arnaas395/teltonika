for(let i = 1; i < 10; i++)
{
    url = setUrl("page="+i);
    loadDataForPagination(url, i);
}

function loadDataForPagination (url, pageNumber) {
    let request = new XMLHttpRequest();
    request.onload = function () {
        let data = JSON.parse(this.response);
        if(data.length != 0)
        {
            console.log(pageNumber);
            getPaginationNumber(pageNumber);
        }
    }

    request.open('GET', url, true);
    request.send();
}

function getPaginationNumber (pageNumber){
    linkOutput = "";
    linkOutput += `<button onclick="openPaginationPage(${pageNumber})"> <div class="pagination-link">${pageNumber}</div> <button>`;
    document.getElementById("paginationLinks").innerHTML += linkOutput;
}

function openPaginationPage (pageNumber) {
    url = setUrl("page=" + pageNumber);
    loadDataCities(url);
}