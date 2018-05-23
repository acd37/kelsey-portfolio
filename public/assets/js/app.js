$(document).ready(function(){

  if ($.cookie('firstTime') == null) {
        $('#sign-up-modal').modal('show');
        $.cookie('firstTime', 1, { expires: 14 });
    }
});
