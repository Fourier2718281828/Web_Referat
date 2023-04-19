const fs = require('fs');

function encodeImage(path)
{
    if(!path) return undefined;
    const image = fs.readFileSync(path);
    return Buffer.from(image).toString('base64');
}

module.exports = { 
    encodeImage 
}