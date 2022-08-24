'use strict';
function addDigits(num) {

    var numLength = num.length;
    var zero = '0';
    for (var i=numLength; i < 6; i++) {
        num = zero+num;
    }
    return num+'.pdf';
}


var menu = {
    timer: null,

    init: function () {
        menu.bind();
    },

    bind: function () {
        $('.tkn_manu > ul > li[data-trig="menu"]').bind('mouseenter', function (e) {
            var target = $(e.target);
            if (!target.attr('data-trig')) {
                target = target.parents('[data-trig]');
            }
            $('.tkn_sub_menu', target).stop(true, true).fadeIn('fast');
        });

        $('.tkn_manu > ul > li[data-trig="menu"]').bind('mouseleave', function (e) {
            var target = $(e.target);
            if (!target.attr('data-trig')) { target = target.parents('[data-trig]'); }

            menu.timer = setTimeout(function () {
                $('.tkn_sub_menu', target).stop(true, true).fadeOut('fast', function () {

                });
            }, 0);
        });
    }
};

$(document).ready(menu.init);


function checkBrowserVersion() {
	var ua = window.navigator.userAgent;
	if( (ua.match('MSIE 9.')) || (ua.match('MSIE 8.')) || (ua.match('MSIE 7.')) || (ua.match('MSIE 6.'))){
		window.alert('האתר תומך בגרסאות אקספלורר 10 ומעלה,כרום ומוזילה');
	}
}

function changeCSSClass(page) {

   page = extractURLFromPage(page);

  $("#mainClass li").removeClass('tbk_menu_show');


  switch (page) {
    case "":
      $('#about').addClass('tbk_menu_show');
      return;
    case "about":
      $('#about').addClass('tbk_menu_show');
      return;
    case "standards1":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards2":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards3":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards4":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards5":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards6":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards7":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "standards8":
      $('#menu').addClass('tbk_menu_show');
      return;
    case "faq":
      $('#faq').addClass('tbk_menu_show');
      return;
    case "contact":
      $('#contact').addClass('tbk_menu_show');
      return;
    case "licence":
      $('#licence').addClass('tbk_menu_show');
      return;
  }
}


function extractURLFromPage(page) {
  var locationStart = new String(page).search("#/");
  var locationEnd;
  if (locationStart > 0) {
    page = new String(page).substring(locationStart+2).toString();
    locationEnd = new String(page).indexOf("/");
    if (locationEnd>0) {
      page = new String(page).replace("/","");
    }
  }
  return page;
}
