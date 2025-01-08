const fs = require('fs');
const zlib = require('zlib');

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    zlib.gzip(data, (err, compressedData) => {
        if (err) {
            console.error('Error compressing data:', err);
            return;
        }   

        fs.writeFile('./data.json.gz', compressedData, (err) => {
            if (err) {
                console.error('Error writing compressed file:', err);
            } else {
                console.log('File compressed successfully!');
            }
        });
    });
});
