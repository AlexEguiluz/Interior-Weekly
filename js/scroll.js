//1. when we scroll, we want to run a function
//2. we want to figure out how far down the page we have scrolled
//3. we want to display the pixels we have scrolled inside of our .progress div


$(document).on('scroll', function(){
  
    var pixelsFromTop = $(document).scrollTop()
    
  
   
    if(pixelsFromTop > 50){
      $('header').addClass('hidden')
     
    } else{
       $('header').removeClass('hidden')
    }
    
    console.log(pixelsFromTop)
    
    if(pixelsFromTop < 600){
      $('body').css('background-color', '#fff')
    }else if(pixelsFromTop < 1400){
     $('body').css('background-color', '#a29c97') 
    } else if(pixelsFromTop < 2200){
     $('body').css('background-color', '#d9dfe4') 
    }else if(pixelsFromTop < 3000){
     $('body').css('background-color', '#fff0f0') 
    }else{
      $('body').css('background-color', '#cdccc7')
    }
    
    
    
    
    //1. make some VAR for our documentHeight and windowHeight
    //2. make a variable to work out 'the difference between the 2. (documentHeight - windowHeight)
    //3. using the difference and the scrollPosition, divide them into each other to make a percentage
    //4. multiply by 100 to get bacj a % valu
    //
    var documentHeight = $(document).height()
    var windowHeight = $(window).height()
    
    var difference = documentHeight - windowHeight
    
    var percentage = 100 * pixelsFromTop / difference
  
    
    $('.bar').css('width',percentage+'%')
    
  }) 