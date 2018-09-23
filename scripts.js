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

// Animate 
$(document).ready(function () {
            $(".ns, .s").click(function () {
                    $(this).css("background-color", "white")
                    $(this).animate({
                            backgroundColor: "#000"
                        }, {
                            duration: 750,
                            complete: function () {
                                $(this).removeAttr('style')
                            }
                        });
                    });
            });
