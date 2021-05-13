$(".alert").hide();

const pseudo = "test-user";
const pass = "test1234";

$("form").on("submit", function (e) {
  e.preventDefault();

  if ($("input:first").val() === pseudo && $("input:last").val() === pass) {
    $(location).attr("href", "/Page_mes_memos/mes-memos.html");
  } else {
    $(".alert").fadeIn();
  }
});
