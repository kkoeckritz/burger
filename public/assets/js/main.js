$(function() {
    $("#burger_action").click((event) => {
        event.preventDefault();

        var new_data = {
            burger_name: $("#burger_name").val().trim()
        };
    
        if (new_data.burger_name.length > 0) {
            // Send the POST request.
            $.ajax("/api/add", {
                type: "POST",
                data: new_data
            }).then(() => {
                    console.log("added new burger");
                    location.reload();
            });
        }
    });

    $(".devour_action").on("click", (event) => {
        burger_id = $(event.target).data("id");

        if (burger_id != "") {
            $.ajax(`/api/burger/${burger_id}`, {
                type: "PUT",
            }).then(() => {
                console.log("devoured burger");
                location.reload();
            });            
        }
    });
});