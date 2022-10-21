// success box
$(document).ready(function() {
    $('.popup-btn').click(function(e) {
      $('.success-popup').fadeIn(400);
      $('.success-box').removeClass('pop-out').addClass('pop-in');
  
      e.preventDefault();
    });
  
    $('.popup-close').click(function(e) {
      $('.success-popup').fadeOut(400);
      $('.success-box').removeClass('pop-in').addClass('pop-out');
  
      e.preventDefault();
    });

    $('#submit').click(function () { 
      if ($('.valid').val() === "") {
                alert("*All Fields are mandatory*");
          } else {
                $("a").attr("href", "./index.html")
          }
    });

    var name = document.getElementById('name')
    name.addEventListener('input', function(e){
        var nameRegex = /^[a-z]{2,15}$/;
        var currentValue = e.target.value
        var ifValid = nameRegex.test(currentValue)
        if (ifValid){
            $('#name-error').css('display', 'none')
        } else{
            $('#name-error').css('display', 'block')
        }
    })

    var mobileNo = document.getElementById('mobile')
    mobileNo.addEventListener('input', function(a){
        var phoneRegex = /^(\+91)?[\d]{10}$/;
        var currentValue = a.target.value;
        var ifValid = phoneRegex.test(currentValue)
        if ((ifValid) || (mobileNo == "")){
            $('#mobile-error').css('display', 'none')
        } else{
            $('#mobile-error').css('display', 'block')
        }
    })

    var email = document.getElementById('email')
    email.addEventListener('input', function(b){
        var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var currentValue = b.target.value
        var ifValid = emailRegex.test(currentValue)
        if(ifValid){
            $('#email-error').css('display', 'none')
        } else{
            $('#email-error').css('display', 'block')
        }
    })

    var password =document.getElementById('password')
    password.addEventListener('input', function(e){
        var nameRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        var currentValue = e.target.value
        var ifValid = nameRegex.test(currentValue)
        if (ifValid){
            $('#password-error').css('display', 'none')
        } else{
            $('#password-error').css('display', 'block')
        }
    })

    var panCard =document.getElementById('pan')
    panCard.addEventListener('input', function(e){
        var nameRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
        var currentValue = e.target.value
        var ifValid = nameRegex.test(currentValue)
        if (ifValid){
            $('#pan-error').css('display', 'none')
        } else{
            $('#pan-error').css('display', 'block')
        }
    })

    var aadhar =document.getElementById('aadhar')
    aadhar.addEventListener('input', function(e){
        var nameRegex = /^\d{4}\s\d{4}\s\d{4}$/;
        var currentValue = e.target.value
        var ifValid = nameRegex.test(currentValue)
        if (ifValid){
            $('#aadhar-error').css('display', 'none')
        } else{
            $('#aadhar-error').css('display', 'block')
        }
    })
  });


function DropDown(e) {
  var pancard = e.form.elements["pan-input"];
  var adhaar = e.form.elements["aadhar-input"];
  
  pancard.style.display = (e.value == "pan") ? "" : "none";
  adhaar.style.display = (e.value == "aadhar") ? "" : "none";

  if (e.value == ""){
    pancard.focus();
  }else{
    adhaar.focus();
  }
}

// var uname = document.getElementById('username').value;
//     if(!uname){
//         document.getElementById("error").innerHTML = "Enter a username";
//         return false;
//     }
//     else{
//         // I want to submit form if this else statement executes.
//     }
