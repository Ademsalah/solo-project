function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//adding
function generateId(n) {
  let id = Number(localStorage.getItem("index")) || 0;
  localStorage.setItem("index", (id += 1));
  return (id += 1);
}

var coursList = JSON.parse(localStorage.getItem("cours")) || [];
$(".add").click(function () {
  var name = $("#inp1").val();
  var img = $("#inp3").val();
  var type = $("#inp2").val();
  var video = $("#inp4").val();

  var cours = {
    name: "",
    Image: "",
    type: "",
    video: "",
  };
  cours.name = name;
  cours.Image = img;
  cours.type = type;
  cours.video = video;
  cours.id = generateId();

  coursList.push(cours);
  localStorage.setItem("cours", JSON.stringify(coursList));

  let container = document.getElementById("container");
  container.innerHTML = `
  
  <div class="cours" id='${cours.id}>
        <img src="${cours.Image}" alt="" />
        <title>${cours.name}</title>
        <p>${cours.type}</p>
        <button onclick="deleteMovie(${cours.id})"><i class="fa fa-remove"></i></button>

      </div>

  `;
});
let cours = JSON.parse(localStorage.getItem("cours"));

var cour = cours.map(
  (cours) =>
    `<div class="cours" id='${cours.id}>
    <img src="${cours.Image}" alt="" />
    <title>${cours.name}</title>
    <p>${cours.type}</p>
    <button onclick="deleteMovie(${cours.id})"><i class="fa fa-remove"></i></button>

  </div>
`
);

$(".container").append(cour);
