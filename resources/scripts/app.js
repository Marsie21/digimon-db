let digiApp = (function () {
    let digimonData = [];

    // When this method is called, fetch the list of digimons and set the listeners
    function init() {
        fetch();
        setListeners();
    }

    function fetch() {
        const digimonApiURI = 'https://digimon-api.vercel.app/api/digimon';
        
        $.ajax({
            url: digimonApiURI,
            method: "GET",
            cache: false,
            dataType: "json",

            success: function(data) {
                digimonData = data;
                render();
            },
            error: function(xhr, status, error) {
                // Handle any errors
            }
        });
    }

    function render() {
        var str="";

        for(var i=0; i < digimonData.length; i++){
            str += "<img src='" + digimonData[i].img + "'><br>" + "Name: " + digimonData[i].name + "<br>" + "Level: " + digimonData[i].level + "<br><br>";
        }
        $("#container").html(str);
    }

    function setListeners() {
        //Search for specific digimon using name
        $("#searchBtn").on('click', function(){

            var searched = $("#searchInput").val();
            const found = digimonData.find(({name}) => name === searched );
            var str="";

            str += "<img src='" + found.img + "'><br>" + "Name: " + found.name + "<br>" + "Level: " + found.level + "<br><br>";
            
            $("#container").html(str);

        });
       
    }

    return {
        init: init
    };
})();

digiApp.init();