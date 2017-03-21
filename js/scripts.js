$(document).ready(function() {
  $("#h-java").click(function() {
    $("p").hide();
    $("#def-java").show();
    });

    $("#h-op").click(function() {
      $("p").hide();
      $("#def-op").show();
      });
    $("#h-var").click(function() {
      $("#def-var").show();
      $("p").removeClass();
      });
    $("#h-var-name").click(function() {
      $("#def-var-name").show();
      $("p").removeClass();
      });

});
