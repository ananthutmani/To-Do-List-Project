$("input[type='text']").val("");

// check off specific todos
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

// Removal Method X
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which===13)
    {
        var todoText=$(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> "+todoText+"</li>");

    }
});

$("#ploo").click(function(){
    $("input[type='text']").fadeToggle();
})