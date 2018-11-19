$(function() {

    // Load drop down
    $.ajax("/api/zoos", {
    type: "GET",
    }).then(
    function(res) {

        for(i=0; i< res.length; i++){
            var el = $('<a>')
            el.attr("table_id", res[i].id)
            el.attr("href", "zoo?zoo_id=" + res[i].id + "&zoo_name=" + res[i].zoo_name)
            el.addClass("dd-values")
            el.text(res[i].zoo_name)
            $(".dropdown-content").append(el);

        }
    }
    );
});