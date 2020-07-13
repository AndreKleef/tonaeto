
//INPUT FILE
var inputs = document.querySelectorAll( '.inputfile, .input-1, .input-2, .input-3' );
Array.prototype.forEach.call( inputs, function( input )
{
  var label  = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener( 'change', function( e )
  {
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();

    if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});


//TABS
let tab = function () {
  let tabNav = document.querySelectorAll('.registration-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

      tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
      });

  function selectTabNav() {
    tabNav.forEach(item => {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
  }
};
tab();

//STARS
$(document).ready(function () {
  $(".star label").click(function(){
    $(this).parent().find("label").css({"color": "#9e9e9e"});
    $(this).css({"color": "#F7DB39"});
    $(this).nextAll().css({"color": "#F7DB39"});
    $(this).css({"background-color": "transparent"});
    $(this).nextAll().css({"background-color": "transparent"});
  });
});

//DROPDOWN
(function($, window, document, undefined) {

  'use strict';

  var $html = $('html');

  $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
    e.preventDefault();
    let isClose = !$(this).hasClass('is-open');
    $(".js-dropdown").removeClass('is-open');
    if (isClose)
      $(this).addClass('is-open');
  });

  $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown');
    $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current').text($item.text());
  });

  $html.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown')) {
     $('.js-dropdown').removeClass('is-open');
    }
  });

 })(jQuery, window, document);


//EVENTS
let background = document.querySelector('.modal__background'),
    modalCancel = document.querySelectorAll('.modal-window-cancel'),
    modalWindow = document.querySelector('.modal-window'),

    buttonFilter = document.querySelector('.news-content__filter-button'),
    contentFilter = document.querySelector('.news-content__feedback'),

    buttonLk = document.querySelector('.lk__flex-button'),
    contentLk = document.querySelector('.lk__left'),

    burgerButton = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.page-header__nav');

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('activeburger');
  burgerMenu.classList.toggle('openmenu');
});

if (!buttonLk) {
  buttonLk = null;
} else {
  buttonLk.addEventListener('click', function() {
    contentLk.classList.toggle('open-menu');
  });
};

buttonFilter.addEventListener('click', function() {
  buttonFilter.classList.toggle('active');
  contentFilter.classList.toggle('opencontent');
});

linkPersonal.forEach(el => {
  el.addEventListener('click', function() {
    lkPersonalMenu.classList.remove('openmenu');
  });
});

if (!background) {
  background = null;
} else {
  background.addEventListener('click', function() {
    background.classList.remove('visible');
    modalWindow.classList.remove('open-window');
  });
};




