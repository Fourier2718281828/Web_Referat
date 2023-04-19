const cell_grid = document.getElementById('cell_grid');
const defaultImage = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';

// <div class="cell">
// <img src="https://via.placeholder.com/500x500" alt="Placeholder Image">
// <h2>Cell 2</h2>
// <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// </div>

function createImageChild(imageStr)
{
    const image = document.createElement('img');
    image.setAttribute('src', imageStr ? 'data:image/png;base64,' + imageStr : defaultImage);
    image.setAttribute('alt', 'Placeholder Image');
    return image;
}

function createPTextNode(tag, text)
{
    const node = document.createElement(tag);
    node.innerText = text;
    return node;
}

function addCell(name, type, favouriteFood, imageStr)
{
    const div = document.createElement('div');
    const image = createImageChild(imageStr);
    const nameNode = createPTextNode('h2', name);
    const typeNode = createPTextNode('p', type);
    const foodNode = createPTextNode('p', `Loves foods: ${favouriteFood.join(', ')}.`);
    
    div.className = "cell";
    div.appendChild(image);
    div.appendChild(nameNode);
    div.appendChild(typeNode);
    div.appendChild(foodNode);

    cell_grid.appendChild(div);
}

//addCell('capy', 'capy type', ['food1', 'food2'],null);
//'https://media.istockphoto.com/id/177228186/photo/young-capybara.jpg?s=612x612&w=0&k=20&c=MaLAlTZA3N5fa2Gp2FeCdZCwSbCLXkVVeKTks7IJIgM=');


const GET_ALL_QUERY = `
  query {
    capybaras {
        name
        type
        favouriteFood
        photo
    }
  }
`;

function getAllCapybaras()
{
    fetch('http://localhost:8000/capybaraworld', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query:  GET_ALL_QUERY }),
    })
    .then(res => res.json())
    .then(data => {
        const capies = data.data.capybaras;
        capies.forEach(capy => {
            addCell(capy.name, capy.type, capy.favouriteFood, capy.photo);
        });
    })
    .catch(err => console.log)
}

getAllCapybaras();