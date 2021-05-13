$("nav ul a:last").on("click", function () {
  $("nav ul a:last").attr("href", "../index.html");
});

$("form").on("submit", function (e) {
  e.preventDefault();

  const memo = {
    nom: $("#titre").val(),
    image: $("#image").val(),
    description: $("#description").val(),
  };

  const liste = JSON.parse(localStorage.getItem("memos"));

  if (!liste) {
    const tabVide = [];
    tabVide.unshift(memo);
    localStorage.setItem("memos", JSON.stringify(tabVide));
  } else {
    liste.unshift(memo);
    localStorage.setItem("memos", JSON.stringify(liste));
  }

  $(location).attr("href", "/Page_mes_memos/mes-memos.html");
});
