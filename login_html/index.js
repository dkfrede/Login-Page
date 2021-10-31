$(function () {
    function display(bool) {
        if (bool) {
            $("#container2").show();
            $("#container").show();
        } else {
            $("#container").hide();
            $("#container2").hide();
        }
    }

    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://Fr3ckz_Opkaldliste_Login/exit', JSON.stringify({}));
            return
        }
    };
    //when the user clicks on the submit button, it will run
    $("#submit").click(function () {
        let inputValue = $("#input").val()
        let inputValue2 = $("#input2").val()
        $.post('http://Fr3ckz_Opkaldliste_Login/main', JSON.stringify({
            text: inputValue,
            text2: inputValue2,
        }));
        return;
    })
})
