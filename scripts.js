// Toggles visibility of a selectable tag's children
$(document).ready(function () {
    $(".ns").click(function () {
        $(this).next("div").toggle();
        $(this).toggleClass('s');
        $(this).toggleClass('ns');

    });
});

// Used for projects, updates arrows
$(document).ready(function () {
    $(".ns").click(function () {
        $(this).prev(".arrow").text(function (i, text) {
            return text === ">>" ? "<<" : ">>";
        });
    });
});

// Animate highlights
$(document).ready(function () {
    $(".ns, .s").click(function () {
        $(this).css("background-color", "white")
        $(this).animate({
            backgroundColor: "black"
        }, {
            duration: 750,
            complete: function () {
                $(this).removeAttr('style')
            }
        });
    });
});

// Add brackets around hyperlinks when hovered over
$(document).ready(function () {
    $("a").hover(
        function () {
            $(this).text($(this).text() + ">>");

        },
        function () {
            $(this).text($(this).text().substring(0, $(this).text().length - 2));
        });
});