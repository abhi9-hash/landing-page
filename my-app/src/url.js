var i=0;
 document.addEventListener("mouseleave", function(e){
     if( e.clientY < 0&&i==0 )
     {

          alert("Hey don't leave. I have a lot more for you");
          ++i;
     }
 }, false);





 