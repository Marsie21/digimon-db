$(function(){
    $("#searchBtn").click(function(){
        var searched = $("#searchInput").val();

        $.ajax({
            url: "https://digimon-api.vercel.app/api/digimon",
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
    });
});