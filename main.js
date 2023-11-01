'use strict';
$(function () {
  $('p').css({ 'background-color': 'red' });
  $('#segundo').css({ 'background-color': 'blue' });
  $('.primero').css({ 'background-color': 'green' });

  $('.btnhide').click(function () {
    $('#segundo').slideUp();
  });

  $('.btnshow').click(function () {
    $('#segundo').slideDown();
  });

  $('.primero').mouseenter(function () {
    $('.primero').css({ 'background-color': 'white' });
  });

  $('.primero').mouseleave(function () {
    $('.primero').css({ 'background-color': 'green' });
  });

  $('.img').click(function () {
    $('.img').animate({ width: '200px' });
  });

  $('.btnalert').click(function () {
    $('.primero').html(
      '<p>YOUR TEXT HAS BEEN <strong>REPLACED</strong>!!!!! HAHAHAHHAHAHAH!</p>'
    );
  });

  $('.btnappend').click(function () {
    $('.primero').append(
      '<p>NEW TEXT HAS BEEN <strong>ADDED</strong>!!!!! HAHAHAHHAHAHAH!</p>'
    );
  });

  $('.btnprepend').click(function () {
    $('.primero').prepend(
      '<p>NEW TEXT HAS BEEN <strong>ADDED</strong>!!!!! HAHAHAHHAHAHAH!</p>'
    );
  });

  $('.btnparrafos').click(function () {
    $('.primero').after(
      '<p>HERE COMES A NEW PARRAFO BIATCHES!!!!!</p>'
    );
  });

  $('.btnparrafosencima').click(function () {
    $('.primero').before(
      '<p>HERE COMES A NEW PARRAFO BIATCHES!!!!!</p>'
    );
  });

  $('.remove').click(function () {
    $('p').remove('.tercero');
  });

  $('.empty').click(function () {
    $('.empty').empty();
  });

  $('.turnviolet').click(function () {
    $('h1').addClass("violet");
    $('h1').removeClass("brown");
  });

  $('.turnbrown').click(function () {
    $('h1').addClass("brown");
    $('h1').removeClass("violet");
  });

});
