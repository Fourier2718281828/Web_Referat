const { CapybaraDBSchema } = require('./Schema');

const DB = [];
let nextId = 0;

function initDB()
{
    addCapybara("Pepe The Capybara", "Curious Capybara", ["Special salad"], "photos\\image.png");
    addCapybara("John", "Loving snow Capybara", ["Snow", "Melted snow", "Water-dissolved snow"], "photos\\image.png");
    addCapybara("Dave", "Concealment-Master Capybara", ["Hay"], "photos\\image.png");
    addCapybara("Joana", "Gorgeous Capybara", ["Lattuce"], "photos\\image.png");
    addCapybara("Sleepy", "Dreaming Capybara", ["Dreams", "Oranges"], "photos\\image.png");
    console.log(DB);
    console.log("DB initialized");
}

function indexOfCapy(id)
{
    return DB.findIndex(capy => capy.id === id)
}

function getAllCapybaras()
{
    return DB;
}

function getCapyByID(id)
{
    return DB.find(capy => capy.id === id);
}

function addCapybara(name, type, favouriteFood, photoUrl)
{
    const capy = new CapybaraDBSchema(nextId++, name, type, favouriteFood, photoUrl);
    DB.push(capy);
    return capy;
}

function updateCapybara(id, {name, type, favouriteFood, photoUrl})
{
    const index = indexOfCapy(id);
    if(index !== -1) {
        if(name)            DB[index].name          = name;
        if(type)            DB[index].type          = type;
        if(favouriteFood)   DB[index].favouriteFood = favouriteFood;
        if(photoUrl)        DB[index].photoUrl      = photoUrl;
        return DB[index];
    } else {
        throw Error(`Capybara with id ${id} not found`);
    }
}

function deleteCapybara(id)
{
    const index = indexOfCapy(id);
    if(index === -1)
    throw Error(`Capybara with id ${id} not found`);
    const capy = DB[index];
    DB.splice(index, 1);
    return capy;
}

module.exports = {
    getAllCapybaras,
    getCapyByID,
    addCapybara,
    updateCapybara,
    deleteCapybara,
    initDB,
};