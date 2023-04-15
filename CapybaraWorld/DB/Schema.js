class CapybaraDBSchema
{
    constructor(id, name, type, favouriteFood, photoUrl)
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.favouriteFood = favouriteFood;
        this.photoUrl = photoUrl;
    }
}

module.exports = {
    CapybaraDBSchema
}