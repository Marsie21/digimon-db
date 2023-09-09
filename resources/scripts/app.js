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
            str += 
                "<tr class='digimon'>" +
                "   <td id='image'><img class='digimonImg' src='" + digimonData[i].img + "'></td>" + 
                "   <td id='dName'>Name: " + digimonData[i].name + "</td>" + 
                "   <td id='level'>Level: " + digimonData[i].level + "</td>" +
                "</tr>";
        }
        $("table").html(str);
    }

    function setListeners() {
        //Fetches all the list of digimon again when textbox is empty 
        //Dynamic search on keyup
        $("#searchBox").keyup(function() {
            var val = $.trim(this.value).toUpperCase();
            var $cells = $("td");

            if (!this.value)
                $cells.parent().show();

            else {
                $cells.parent().hide();
                $cells.filter(function() {
                    return -1 != $(this).text().toUpperCase().indexOf(val); }).parent().show();
            }
        });

    }

    return {
        init: init
    };
})();

digiApp.init();