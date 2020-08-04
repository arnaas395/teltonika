let globalUrl = undefined;

document.getElementById("searchButton").addEventListener("click", function(){
    let extention = "text=" + document.getElementById("searchText").value + "&";
    if(globalUrl != undefined)
    {
        url = globalUrl + extention;
    }
    else 
        url = setUrl(extention);

    globalUrl = url;
    loadDataCities(url);
});

document.getElementById("sortAsc").addEventListener("click", function(){
    if (globalUrl != undefined)
    {
        if (globalUrl.includes("order="))
        {
            globalUrl = globalUrl.replace("order=desc&", "order=asc&");
            loadDataCities(globalUrl);
        }
        else
        {
            url = globalUrl + "order=asc&";
            globalUrl = url;
            loadDataCities(url);
        }
    }
    else
    {
        url = setUrl("order=asc&");
        globalUrl = url;
        loadDataCities(url);
    }
});

document.getElementById("sortDesc").addEventListener("click", function(){
    if (globalUrl != undefined)
    {
        if (globalUrl.includes("order="))
        {
            globalUrl = globalUrl.replace("order=asc&", "order=desc&");
            loadDataCities(globalUrl);
        }
        else
        {
            url = globalUrl + "order=desc&";
            globalUrl = url;
            loadDataCities(url);
        }
    }
    else
    {
        url = setUrl("order=desc&");
        globalUrl = url;
        loadDataCities(url);
    }
});

document.getElementById("filterToggle").addEventListener("click", function(){
    document.getElementById("filterBox").style.display = "block";
});

document.getElementById("filterBoxClose").addEventListener("click", function(){
    document.getElementById("filterBox").style.display = "none";
});

document.getElementById("filterButton").addEventListener("click", function(){
    document.getElementById("filterBox").style.display = "none";
    let extention = "date=" + document.getElementById("sortDate").value + "&";
    if(globalUrl != undefined)
    {
        url = globalUrl + extention;
    }
    else 
        url = setUrl(extention);
    
    if (document.getElementById("sortDate").value == "")
    {
        url = setUrl();
    }
    globalUrl = url;
    loadDataCities(url);
});