$(window).scroll(function () {
  if ($(window).scrollTop() > 1800){
    $('.line').addClass('actv');
  }
});


var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

$(window).scroll(function(){
  var fromTop = $(this).scrollTop()+topMenuHeight;

  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems
        .parent().removeClass("activee")
        .end().filter("[href='#"+id+"']").parent().addClass("activee");
  }
});




function valid() {
  var form = document.getElementById('form');
  var fail = false;
  var fullName = form.fullName.value;
  var email = form.email.value;
  var textarea = form.exampleFormControlTextarea1.value;
  var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,5}$/i;


  if (fullName == "" || fullName == " ") {
    document.getElementById("fullName").style.borderColor = "#cc0000";
    fail = "Введіть будь ласка імя";
  } else {
    document.getElementById("fullName").style.borderColor = "#3fbae4";
  }

  if (email == "" || email == " ") {
    document.getElementById("email").style.borderColor = "#cc0000";
    fail = "Введіть будь ласка email"
  } else if (!r.test(email)) {
    document.getElementById("email").style.borderColor = "#cc0000";
    fail = "Email введено не вірно"
  } else {
    document.getElementById("email").style.borderColor = "#3fbae4";
  }

  if (textarea == "" || textarea == " ") {
    document.getElementById("exampleFormControlTextarea1").style.borderColor = "#cc0000";
    fail = "Введіть будь ласка повідомлення";
  } else {
    document.getElementById("exampleFormControlTextarea1").style.borderColor = "#3fbae4";
  }
  if (fail) {
    alert(fail);
    return false;
  }
  else {
    return true
  }
}