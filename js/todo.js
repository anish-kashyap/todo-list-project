$("ul").on("click", "li", function(){
    $(this).toggleClass("check");
    
});

$("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    })
    event.stopPropagation();
});


$("input[type='text']").on("keypress", function(event){
    if(event.which===13)
    {
        var tex=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " +tex+ " </li>")
    }
})


$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
})