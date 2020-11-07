var all_blogs = [];



const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}



    
$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })




    //owl-crousel blog 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        dots:false,
        nav:true,
        responsive:responsive
    }); 


    










    //click to scroll top
$('.move-up span').click(function(){
    $("html,body").animate({
        scrollTop:0
    },3000);
})


    $.ajax({
        url:"http://localhost:3000/blogdata",
        method :"get",
        success:(x)=>{
            console.log(x)
          
            x.forEach((result, idx) => {
                function carousel(item)
                {
                    var content=$('<div></div>').appendTo(item).addClass('container')
                    .attr('id','myContent');
                    $(`<h1>${result.title}</h1>`).appendTo(content);
                    $(`<p>${result.content}</p>`).appendTo(content);
                    $('<button class="btn post-btn">Read More<i class="fas fa-arrow-right"></i></button>').appendTo(content);
                }
            if(idx==0){
                var item= $('<div></div>').appendTo('#c').addClass('carousel-item')
.addClass('active');
carousel(item);
            }else{
                var item= $('<div></div>').appendTo('#c').addClass('carousel-item');
                carousel(item);
            }
          
        })
      
    }})





});