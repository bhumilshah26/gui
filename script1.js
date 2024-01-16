const fs = require('fs');
const csv = require('csv-parser');

const inputStream = fs.createReadStream('ecommerce_customer_data.csv'); // read karne k liye
const writeStream = fs.createWriteStream('output.csv', { flags: 'a' }); // flag a matlab data mein append karna naki write (w hota h for write)
const csvParser = inputStream.pipe(csv()); // csv data ko breakdown karne
function readAndDisplayCSV() {
  

  // har ek row ko dekh data h kya?
  csvParser.on('data', (row) => {
    const rowString = Object.values(row).join(','); // csv conversion (join concat karega jo array uthaya h usko)
    console.log(rowString);  

    writeStream.write(`${rowString}\n`);
  });

  // jab saare rows print ho jaye toh listen to end event
  csvParser.on('end', () => {
    clearInterval(intervalId); // Stop the interval when all rows are processed
    writeStream.end(); // abhi ye stream use nhi hogi
  });
}

// ek second k baad display karna
// readAndDisplayCSV()
const intervalId = setInterval(readAndDisplayCSV, 1000);
// console.log("xbdkgjjbs");

// fs.readFile: (pura le and phir ek ek process kar)
// when you want to read the entire file into 
// memory at once and process it sequentially.

// fs.createReadStream: (thoda thoda leke and process kar)
// when you want to stream the file and process it in chunks,
// which can be more memory-efficient for large files or scenarios where you want 
// to start processing data before the entire file is read.

// fs.readFileSync: (jab tak ye pura nhi hota uske aage ka kn nhi hota)
// jab synchronous way mein you want to display the output
// it blocks the event loop hence not recommended

// jo bhi sync functions h usse try catch mein daalo and async walo ko callback fn do 