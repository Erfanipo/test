var J = $.noConflict();
function myFunc(){
    var x =document.getElementById("mynav");
    if(x.className === "navbar"){
        x.className += " responsive";
    }else{
        x.className = "navbar"
    }
}
J(window).scroll(function () {
    if(J(this).scrollTop () >= 100){
        J('#top').css({
            bottom: "20px"
        });
    }else{
        J('#top').css({
            bottom: "-60px"
        });
    }
});
J('#top').click(function (e) {
    e.preventDefault();
    J('body,html').animate({
        scrollTop:0
    });
});