const form = document.getElementById('capy_form');
const capy_name = document.getElementById('name');
const type = document.getElementById('type');
const favourite_food = document.getElementById('favourite-food');
const submit_button = document.getElementById('submit_button');

function doQuery(query, dataProcessor)
{
    return fetch('http://localhost:8000/capybaraworld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query:  query }),
    })
    .then(res => res.json())
    .then(dataProcessor)
    .catch(console.log);
}

function addCapy(name, type, food, callback)
{
    console.log("Adding:", name, type, food);
    const query = `mutation {
        createCapybara(name: "${name}", type: "${type}", favouriteFood: "${food}") {
          name
        }
      }`;
      console.log(query);
    doQuery(query, callback);
}

function OnAddButtonPressed(event) {
    event.preventDefault();
    addCapy(capy_name.value, type.value, favourite_food.value, 
        () => window.location.href = 'manage_list.html'
        );
}

form.addEventListener("submit", OnAddButtonPressed);