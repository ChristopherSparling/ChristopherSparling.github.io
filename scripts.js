function show_div(id){   

}

$(document).ready(function(){
    $(".ns").click(function(){
        $(this).next("div").toggle();
        $(this).toggleClass('s');
        $(this).toggleClass('ns');
    });
});

// Used for projects, updates arrows
$(document).ready(function(){
    $(".ns").click(function(){
        $(this).prev(".arrow").text(function(i, text){
            return text === ">>" ? "<<" : ">>";
        });
    });
});