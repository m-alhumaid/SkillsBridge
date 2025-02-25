
function Course(Name) {

    $.ajax(
        {
            url: 'Course',
            type: "POST",
            data: { Name: Name },

            success: function (result) {
                $("#coursesSearch2-container").html(result)
            }

        }
    );
}