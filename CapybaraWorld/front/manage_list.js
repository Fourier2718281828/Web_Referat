const capy_list = document.getElementById('capy_list');

const GET_NAMES_QUERY = `
  query {
    capybaras {
        name
    }
  }
`;

function doQuery(query, dataProcessor)
{
    return fetch('http://localhost:8000/capybaraworld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query:  query }),
    })
    .then(res => res.json())
    .then(dataProcessor)
    .catch(console.log)
}

function clearList()
{
    while (capy_list.firstChild) {
        capy_list.removeChild(capy_list.firstChild);
    }
}

function getAllCapybaras()
{
    clearList();
    doQuery(GET_NAMES_QUERY, data => {
        const capies = data.data.capybaras;
        capies.forEach(capy => {
            addItem(capy.name);
        })});
}

function removeCapybaraFromDB(name)
{
    console.log("Deleting name: ", name);
    doQuery(`mutation {
        deleteCapybara(name: \"${name}\")
      }`, _ => {});
}

function listItem(name)
{
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerText = name;
    li.appendChild(a);
    return li;
}

function addItem(name)
{
    const li = listItem(name);
    li.addEventListener("click", removeClicked);
    capy_list.appendChild(li);
}

function removeClicked(event)
{
    const clicked = event.target;
    const nameToDelete = clicked.innerText;
    //document.removeChild(clicked);
    clicked.remove();
    removeCapybaraFromDB(nameToDelete);
}

getAllCapybaras();