class CapybaraDBSchema
{
    constructor(id, name, type, favouriteFood, photo)
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.favouriteFood = favouriteFood;
        this.photo = photo;
    }
}

module.exports = {
    CapybaraDBSchema
}