// carouse section
let div2 = document.createElement("div");
div2.className = "div2";
div2.classList.add("container");
div2.innerHTML = `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://wallpapercave.com/dwp2x/wp2290928.jpg" class="d-block w-100" alt="Motivational quote">
    <div class="carousel-caption d-none d-md-block">
      <h5>Nelson Rolihlahla Mandela </h5>
      <p>a South African anti-apartheid activist and politician who served as the first president of South Africa </p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/dwp2x/wp2014736.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Mohandas Karamchand Gandhi</h5>
      <p>an Indian lawyer, anti-colonial nationalist and political ethicist</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/dwp2x/wp4176301.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Dalai Lama</h5>
      <p>The 14th and current Dalai Lama is Tenzin Gyatso, who lives  in India</p>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</button>
</div>`;
document.body.append(div2);

// body Elements
let d1 = document.createElement("div");
d1.className = "container";
d1.classList.add("main");

let head = document.createElement("h4");
head.setAttribute("id", "hv1");
head.innerHTML =
  "Click The Below Button to See The Quotes That is Made For You❤️";

let row = document.createElement("div");
row.className = "row";

let button = document.createElement("button");
button.setAttribute("id", "dog");
button.classList.add("btn", "btn-success", "m1");
button.addEventListener("click", thiru);
button.innerHTML = "click here ";

d1.append(head, button, row);

document.body.append(d1);

// 1.fetch from api
async function thiru() {
  try {
    let result = await fetch(`https://api.goprogram.ai/inspiration`);
    if (!result.ok) throw new Error(`Sorry Server Is Busy! Try Again`);
    let final = await result.json();

    display(final);
  } catch (error) {
    display(error.message);
  }
}
// display on window
function display(array) {
  row.innerHTML = `<div class="card bg-dark text-white ">
  <img src="https://images.pexels.com/photos/931911/pexels-photo-931911.jpeg?auto=compress&cs=tinysrgb&w=1200"  class="card-img d1" alt="...">
  <div class="card-img-overlay">
    <h4 class="card-title"><strong>Quotes Of The Day❤️</strong></h4>
    <p class="card-text s1">${array.quote}</p>
    <p class="card-text s1"><strong>AUTHOR:${array.author}</strong></p>
  </div>
</div>

`;
}
