$("nav ul a:last").on("click", function () {
  $("nav ul a:last").attr("href", "../index.html");
});

const liste = JSON.parse(localStorage.getItem("memos"));
const index = location.href.split("index=")[1];
const memo = liste[index];

$("h5").text(memo.nom);
$(".card img").attr("src", memo.image);
$(".card-text").text(memo.description);
