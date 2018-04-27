const fs = require('fs');
const path = require('path');

let writeStream = fs.createWriteStream(path.join(__dirname, '../src/database.json'));

writeStream.write('{\n  "data": [\n', 'utf8');
for (let i = 0 ; i < 10 ; i++) {
  writeStream.cork();
  writeStream.write('    "A lot of data!",\n', 'utf8');
  writeStream.uncork();

  if (i % 100000 == 0) {
    console.log('a lot of data: '+i)
  }
}
writeStream.write('    "item-last"\n', 'utf8');
writeStream.write('  ]\n}', 'utf8');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
    console.log('wrote all data to file');
});

// close the stream
writeStream.end();
