$(document).ready(function(){
  $("#submit_first").click(function(){
      if($('#summ').val() == ''){
          $('#summ').addClass('error');
          //$('#summ').effect("shake", { times:3 }, 50); 
      } else {
        $('#t').html('2 из 4');
        $('#inside').addClass('inside-2');


        $('#first_step').addClass('hide');
        $('#second_step').addClass('in');

      }
  });

  $("#submit_second").click(function(){
    var value = $('#year option:selected').val();
    if ( value == 0) { 
      $('#year').addClass('error');
      //$('#year').effect("shake", { times:3 }, 50);
    } else{
      $('#t').html('3 из 4');
      $('#inside').addClass('inside-3');


      $('#second_step').addClass('hide');
      $('#third_step').addClass('in');
    }
  });

  $("#submit_third").click(function(){
    var value = $('#rayon option:selected').val();
    if ( value == 0) { 
      $('#rayon').addClass('error');
     //$('#rayon').effect("shake", { times:3 }, 50);
    } else{
      $('#t').html('4 из 4');
      $('#inside').addClass('inside-4');


      $('#third_step').addClass('hide');
      $('#fourth_step').addClass('in');
    }
  });
});
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      autoplayTimeout: 4000,
      dots: true,    
      nav: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
  

  /*$(function(){
    //original field values
    var field_values = {
            //id        :  value
            'username'  : 'Логин',
            'password'  : 'Пароль',
            'cpassword' : 'Пароль',
            'firstname'  : 'Имя',
            'lastname'  : 'Фамилия',
            'email'  : 'email'
    };


    //inputfocus
    $('input#username').inputfocus({ value: field_values['username'] });
    $('input#password').inputfocus({ value: field_values['password'] });
    $('input#cpassword').inputfocus({ value: field_values['cpassword'] }); 
    $('input#lastname').inputfocus({ value: field_values['lastname'] });
    $('input#firstname').inputfocus({ value: field_values['firstname'] });
    $('input#email').inputfocus({ value: field_values['email'] }); 




    //reset progress bar
    $('#progress').css('width','0');
    $('#progress_text').html('0% Выполнено');

    //first_step
    $('form').submit(function(){ return false; });
    $('#submit_first').click(function(){
        //remove classes
        $('#first_step input').removeClass('error').removeClass('valid');

        //ckeck if inputs aren't empty
        var fields = $('#first_step input[type=text], #first_step input[type=password]');
        var error = 0;
        fields.each(function(){
            var value = $(this).val();
            if( value.length<4 || value==field_values[$(this).attr('id')] ) {
                $(this).addClass('error');
                $(this).effect("shake", { times:3 }, 50);
                
                error++;
            } else {
                $(this).addClass('valid');
            }
        });        
        
        if(!error) {
            if( $('#password').val() != $('#cpassword').val() ) {
                    $('#first_step input[type=password]').each(function(){
                        $(this).removeClass('valid').addClass('error');
                        $(this).effect("shake", { times:3 }, 50);
                    });
                    
                    return false;
            } else {   
                //update progress bar
                $('#progress_text').html('33% Выполнено');
                $('#progress').css('width','113px');
                
                //slide steps
                $('#first_step').slideUp();
                $('#second_step').slideDown();     
            }               
        } else return false;
    });


    $('#submit_second').click(function(){
        //remove classes
        $('#second_step input').removeClass('error').removeClass('valid');

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
        var fields = $('#second_step input[type=text]');
        var error = 0;
        fields.each(function(){
            var value = $(this).val();
            if( value.length<1 || value==field_values[$(this).attr('id')] || ( $(this).attr('id')=='email' && !emailPattern.test(value) ) ) {
                $(this).addClass('error');
                $(this).effect("shake", { times:3 }, 50);
                
                error++;
            } else {
                $(this).addClass('valid');
            }
        });

        if(!error) {
                //update progress bar
                $('#progress_text').html('66% Выполнено');
                $('#progress').css('width','226px');
                
                //slide steps
                $('#second_step').slideUp();
                $('#third_step').slideDown();     
        } else return false;

    });


    $('#submit_third').click(function(){
        //update progress bar
        $('#progress_text').html('100% Выполнено');
        $('#progress').css('width','339px');

        //prepare the fourth step
        var fields = new Array(
            $('#username').val(),
            $('#password').val(),
            $('#email').val(),
            $('#firstname').val() + ' ' + $('#lastname').val(),
            $('#age').val(),
            $('#gender').val(),
            $('#country').val()                       
        );
        var tr = $('#fourth_step tr');
        tr.each(function(){
            //alert( fields[$(this).index()] )
            $(this).children('td:nth-child(2)').html(fields[$(this).index()]);
        });
                
        //slide steps
        $('#third_step').slideUp();
        $('#fourth_step').slideDown();            
    });


    $('#submit_fourth').click(function(){
        //send information to server
        alert('Данные отправлены');
    });

});*/

	// Get message after sent
	// $('#getintouch .p-sbm').click(function(){
 //        $('#get-success').empty();
 //        setTimeout(function(){
 //          var text = $('#getintouch .wpcf7-response-output').text();          
 //          $('#get-success').html(text);
 //        }, 2000);
 //    });

	/*=== Check box disabled/enabled===*/
	// $('#agree').change(function() {
	//     if ($(this).is(':checked')) {
	//         $('#organise-submit').prop('disabled', false);
	//     } else {
	//         $('#organise-submit').prop('disabled', true);
	//     }
	// });
	/*=== Check box disabled/enabled===*/

	// $('.register').click(function(){
	// 	var section2 = $('.blue_section').offset().top;                
	// 	$('html, body').animate({scrollTop:section2}, 1000);  
	// }); 
    /*=== Hide Placeholder on focus===*/
    // $('.hideplaceholder').focus(function(){
    //     $(this).attr('data-val', $(this).attr('placeholder'));
    //     $(this).attr('placeholder', '');
    // });
    // $(".hideplaceholder").blur(function(){
    //     $(this).attr('placeholder', $(this).attr('data-val'));
    // });
    /*===// Hide Placeholder on focus===*/


	// $('.latest_box').owlCarousel({
	// 	items: 1,
	//     autoplay: true,
	//     loop: true,
	//     autoplayTimeout: 4000,
	//     dots: false,    
	//     nav: true,
	//     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	// });


	// $('.hamburger').click(function(){
	// 	$(this).toggleClass('is-active');
	// });	

   // var mql = window.matchMedia('all and (max-width: 768px)');
   //  if (mql.matches) {
   //      $('.navbar .dropdown').append('<div class="caretbox hidden-sm hidden-md hidden-lg"><i class="fa fa-angle-down" aria-hidden="true"></i></div>');
   //          $('.navbar li.dropdown > .caretbox').click(function(){
   //              $(this).parent().toggleClass('open');
   //              return false;
   //          });
   //  } else {

   //      //dropdown on hover
   //      $('.navbar .dropdown').hover(function() {
   //          $(this).addClass('open');
   //      }, function() {
   //          $(this).removeClass('open');
   //      }); 

   //      //bootstrap parent link click
   //      $('.navbar .navbar-nav>li a').click(function(){
   //          location.href = this.href;
   //      });
   //  }
});