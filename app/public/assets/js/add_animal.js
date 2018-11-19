
$(function() {
    // Load zoo drop down
    $.ajax("/api/zoos", {
    type: "GET",
    }).then(
    function(res) {

        var el = $('<option>')
        el.attr("table_id", 0)
        el.attr("selected")
        el.text("Select your zoo")
        $("#zoo-dd").append(el); 

        for(i=0; i< res.length; i++){
            var el = $('<option>')
            el.attr("table_id", res[i].id)
            el.attr("value", res[i].zoo_name)
            el.text(res[i].zoo_name)
            $("#zoo-dd").append(el);  

        }
    });


    // Load species drop down
    $.ajax("/api/species", {
        type: "GET",
        }).then(
        function(res) {
    
            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your species")
            $("#species-dd").append(el); 
    
            for(i=0; i< res.length; i++){
                var el = $('<option>')
                el.attr("table_id", res[i].id)
                el.attr("value", res[i].species_name)
                el.text(res[i].species_name)
                $("#species-dd").append(el);  
    
            }
        });


    // Load mom drop down
    $.ajax("/api/animals", {
        type: "GET",
        }).then(
        function(res) {

            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your animal")
            $("#mom-dd").append(el); 

            for(i=0; i< res.length; i++){
                var el = $('<option>')
                el.attr("table_id", res[i].id)
                el.attr("value", res[i].animal_name)
                el.text(res[i].animal_name)
                $("#mom-dd").append(el);  
            }
        });

    // Load dad drop down
    $.ajax("/api/animals", {
        type: "GET",
        }).then(
        function(res) {

            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your animal")
            $("#dad-dd").append(el);

            for(i=0; i< res.length; i++){
                var el = $('<option>')
                el.attr("table_id", res[i].id)
                el.attr("value", res[i].animal_name)
                el.text(res[i].animal_name)
                $("#dad-dd").append(el);

            }
        });
    })