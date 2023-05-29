const sharp = require('sharp');
const fs = require('fs');

sharp(buffer)
    .toFile('output.png', (err, info) => {
        if (err) throw err;
        console.log(info);
    });


//este codigo leera la imagen y imprimira por consola el buffer de la misma:

fs.readFile('image.jpg', (err, data) => {
    if (err) throw err;
    console.log(data);
});