$(document).ready(function(){


  var flag1 = true;
	var flag2 = true;
	var flag3= true;
	

  $('#name').focusout(function () {
    var name_value = $('#name').val();
    if (name_value.length == '' || name_value.length < 5 || name_value.length > 15) {
      $('#name_error').html('Please Enter the name between 5-15 Character Range');
      $('#name_error').addClass('text_color');
      $('#name_error').show();
      

      flag1 = false;
      
    } 
    else {
      flag3 = true;
    
      $('#name_error').removeClass('text_color');
      $('#name_error').hide();
      
    }
  });

  $('#password').focusout(function () {
    var password_value = $('#password').val();

    if (password_value.length == '' || password_value.length < 8) {
      $('#password_error').html('Please Enter the Password Upto 8 Characters');
      $('#password_error').addClass('text_color');
      $('#password_error').show();
      
      flag2= false;
      
    } 
    else {
      flag3 = true;
    
      $('#password_error').removeClass('text_color');
      $('#password_error').hide();
     
    }
  });
  
  $('#confirm_password').focusout(function () {
    var confirm_password_value = $('#confirm_password').val();
    var password_value = $('#password').val();

    if (confirm_password_value != password_value) {
      $('#confirm_password_error').html('Password is not Match!! Please Enter the Correct Password Upto 8 Characters');
      $('#confirm_password_error').addClass('text_color');
      $('#confirm_password_error').show();
      
      
     flag3 = false;
      
    }
     else {
      flag3 = true;
      
      $('#confirm_password_error').removeClass('text_color');
      $('#confirm_password_error').hide();
      
    }
  });
  $('#myForm').submit(handleFormSubmit);
});

function handleFormSubmit(e){
  if(flag1 == true && flag2 == true && flag3 ==true){
  
    alert("Form Submitted");

    return true;
  }
  
  
}