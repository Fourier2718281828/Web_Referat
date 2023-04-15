const fs = require('fs');

function encodeImage(path)
{
    if(!path) return undefined;
    console.log(`path = ${path}`);
    const imageData = fs.readFileSync(path);
    const base64Data = imageData.toString("base64");
    return `data:image/png;base64,${base64Data}`;
}

module.exports = { 
    encodeImage 
}