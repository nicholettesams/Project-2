
$(function() {
    // Load zoo drop down
    $.ajax("/api/zoos", {
        type: "GET",
    }).then(
        function (res) {

            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your zoo")
            $("#zoo_id").append(el);

            for (i = 0; i < res.length; i++) {
                var el = $('<option>')
                el.attr("value", res[i].id)
                // el.attr("value", res[i].zoo_name)
                el.text(res[i].zoo_name)
                $("#zoo_id").append(el);

            }
        });


    // Load species drop down
    $.ajax("/api/species", {
        type: "GET",
    }).then(
        function (res) {

            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your species")
            $("#species_id").append(el);

            for (i = 0; i < res.length; i++) {
                var el = $('<option>')
                el.attr("value", res[i].id)
                // el.attr("value", res[i].species_name)
                el.text(res[i].species_name)
                $("#species_id").append(el);

            }
        });


    // Load mom drop down
    $.ajax("/api/animals", {
        type: "GET",
    }).then(
        function (res) {

            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your animal")
            $("#mom_id").append(el);

            for (i = 0; i < res.length; i++) {
                var el = $('<option>')
                el.attr("value", res[i].id)
                // el.attr("value", res[i].animal_name)
                el.text(res[i].animal_name)
                $("#mom_id").append(el);
            }
        });

    // Load dad drop down
    $.ajax("/api/animals", {
        type: "GET",
    }).then(
        function (res) {

            var el = $('<option>')
            el.attr("table_id", 0)
            el.attr("selected")
            el.text("Select your animal")
            $("#dad_id").append(el);

            for (i = 0; i < res.length; i++) {
                var el = $('<option>')
                el.attr("value", res[i].id)
                // el.attr("value", res[i].animal_name)
                el.text(res[i].animal_name)
                $("#dad_id").append(el);

            }
        });

    });

