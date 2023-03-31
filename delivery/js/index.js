let titles = [
  `Каша на завтрак`,
  `Хачапури`,
  `Крабовый салат`,
  `Макароны с тефтелями`,
  `Куриный суп`,
  `Медовик`
];
let prices = [150, 300, 200, 250, 100, 150];
let available = [false, true, true, true, true, false];
let foodCost = 0;

let container = document.querySelector(`.food-container`);

for (let i = 1; i < titles.length + 1; i++) {
    let title = titles[i-1];
    let price = prices[i-1];

    if (available[i-1]) {
      container.innerHTML += `
      <div class="col">
      <div class="card card-available">
        <img src="assets/${i}.jpeg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
            <span class="food-title">${title}</span>
            <span class="food-price badge bg-secondary">${price}</span>
          </h5>
        </div>
      </div>
    </div>`;
    } else {
      container.innerHTML += `
    <div class="col">
      <div class="card card-not-available">
        <img src="assets/${i}.jpeg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
            <span class="food-title">${title}</span>
            <span class="food-price badge bg-secondary">-</span>
          </h5>
        </div>
      </div>
    </div>`;
    }

    
}

let fCost = 0

document.querySelectorAll('.card-available').forEach(
  item => item.addEventListener('click', function() {
    fCost += Number(this.querySelector(`.food-price`).innerHTML)
    document.querySelector(`#result`).innerHTML = fCost
  })
);

