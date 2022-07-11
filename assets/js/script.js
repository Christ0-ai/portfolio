$(document).ready(function () {
  /*---------------- AFFICHAGE FENETRE DESCRIPTION DES PROJETS DU PORTFOLIO ------------------*/
  $(".first_projet").hover(function () {
    $(".info_first_projet").attr("hidden", false);
  });

  $(".first_projet").mouseleave(function () {
    $(".info_first_projet").attr("hidden", true);
  });

  $(".second_projet").hover(function () {
    $(".info_second_projet").attr("hidden", false);
  });

  $(".second_projet").mouseleave(function () {
    $(".info_second_projet").attr("hidden", true);
  });

  $(".third_projet").hover(function () {
    $(".info_third_projet").attr("hidden", false);
  });

  $(".third_projet").mouseleave(function () {
    $(".info_third_projet").attr("hidden", true);
  });

  $(".four_projet").hover(function () {
    $(".info_four_projet").attr("hidden", false);
  });

  $(".four_projet").mouseleave(function () {
    $(".info_four_projet").attr("hidden", true);
  });

  $(".fifth_projet").hover(function () {
    $(".info_fifth_projet").attr("hidden", false);
  });

  $(".fifth_projet").mouseleave(function () {
    $(".info_fifth_projet").attr("hidden", true);
  });

  /*------------------ MENU BTN ALL APP WEB --------------------*/

  $("#all").click(function () {
    $(".first_projet").show();
    $(".second_projet").show();
    $(".third_projet").show();
    $(".four_projet").show();
    $(".fifth_projet").show();

    $(this).addClass("active");
    $("#app").removeClass("active");
    $("#web").removeClass("active");
  });

  $("#app").click(function () {
    $(".first_projet").hide();
    $(".second_projet").hide();
    $(".third_projet").show();
    $(".four_projet").hide();
    $(".fifth_projet").hide();

    $(this).addClass("active");
    $("#all").removeClass("active");
    $("#web").removeClass("active");
  });

  $("#web").click(function () {
    $(".first_projet").show();
    $(".second_projet").show();
    $(".third_projet").hide();
    $(".four_projet").show();
    $(".fifth_projet").show();

    $(this).addClass("active");
    $("#all").removeClass("active");
    $("#app").removeClass("active");
  });

  /*------------------ MENU BTN ALL APP WEB --------------------*/
});
