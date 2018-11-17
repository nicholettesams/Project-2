$(function() {
    $(".dropdown-content").on("click", ".dd-values", function(event) {

        var id = $(this).data("table_id");

    console.log(id)
  

    });

    // Load drop down
    $.ajax("/api/zoos", {
    type: "GET",
    }).then(
    function(res) {

        for(i=0; i< res.length; i++){
            var el = $('<a>')
            el.attr("table_id", res[i].id)
            el.addClass("dd-values")
            el.text(res[i].zoo_name)
            $(".dropdown-content").append(el);  

        }
    }
    );

    

});