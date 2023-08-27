let digiApp = (function () {

    // When this method is called, fetch the list of digimons and set the listeners
    function init() {
        fetch();
        setListeners();
    }

    function fetch() {
        const digimonApiURI = 'https://digimon-api.vercel.app/api/digimon';
        var searched = $("#searchInput").val();

        $.ajax({
            url: digimonApiURI,
            method: "GET",
            cache: false,
            dataType: "json",

            success: function(data) {
                var str="";

                for(var i=0; i < data.length; i++){
                    str += "<img src='" + data[i].img + "'><br>" + "Name: " + data[i].name + "<br>" + "Level: " + data[i].level + "<br><br>";
                }
                $("#container").html(str);

            },
            error: function(xhr, status, error) {
                // Handle any errors
            }
        });
    }

    function setListeners() {
        $("#searchBtn").on('click', fetch);
    }

    return {
        init: init
    };
})();

digiApp.init();