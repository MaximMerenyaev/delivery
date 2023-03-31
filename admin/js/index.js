let usernames = ["Max"];
let container = document.querySelector(`.users-container`);

function render() {
  container.innerHTML = ``;
  for (let i = 0; i < usernames.length; i++) {
    container.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          ${usernames[i]}
        </div>
        <button type="button" class="user-delete btn btn-outline-primary">Х</button>
      </li>
    `;
  }
}
render()

let Find = false;
document.querySelector(`#add`).addEventListener(`click`, ()=>{
  let name = document.querySelector(`.form-control`).value;

  Find = false;
  for( let i = 0; i < usernames.length; i++) {
    if (name == usernames[i]) {
      Find = true;
    }
  }

  if (!Find) {
    usernames.push(name);
    render();
  }
})

document.querySelectorAll('.user-delete').forEach(
  item => item.addEventListener('click', function() {
    console.log(this);
  })
);