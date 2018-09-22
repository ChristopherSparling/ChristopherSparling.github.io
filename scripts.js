function show_div(id){   

}

$(document).ready(function(){
    $(".list p").click(function(){
        $(this).next(".desc").toggle();
        $(this).toggleClass('s');
        $(this).toggleClass('ns');
    });
});