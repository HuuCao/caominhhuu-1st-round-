const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const compressedData = JSON.stringify(JSON.parse(data));

    fs.writeFile('./data_compressed.json', compressedData, (err) => {
        if (err) {
            console.error('Error writing compressed file:', err);
        } else {
            console.log('File compressed successfully!');
        }
    });
});
