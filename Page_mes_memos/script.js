$("nav ul a:last").on("click", function () {
  $("nav ul a:last").attr("href", "../index.html");
});

const liste = JSON.parse(localStorage.getItem("memos"));

if (liste) {
  $(".vide").hide();

  for (let i = 0; i < liste.length; i++) {
    if (liste[i].description.length > 100) {
      liste[i].description = liste[i].description.substring(0, 100) + "...";
    }

    $(".recipes .liste").append(`
      <div class="card">
      <img src="${liste[i].image}" class="card-img-top" alt="photo">
      <div class="card-body">
        <h5 class="card-title">${liste[i].nom}</h5>
        <p class="card-text">${liste[i].description}</p>
        <a href="/Page_detail/detail.html?index=${i}" class="btn btn-warning">+ de détails</a>
      </div>
    </div>
      `);
  }
} else {
  $("h2").hide();
}
