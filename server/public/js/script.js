function click3(id){
     var offset = 0;
     $('html,body').animate({scrollTop:$(id).offset ().top - offset},500);
}
function checklogin(id){
     var login = document.getElementById('login').value;
     var password = document.getElementById('password').value;
     var admin = "admin";
     if(login == admin){
          if(password == admin){
               click3(id);
          }
          else {
               alert('Неверный пароль');
          }
     }
     else {
          alert('Неверный логин');
     }
}
$("html,body").css("overflow","hidden");
