const { exec } = require('child_process');

exec('mongodump --uri="your_mongo_uri_here" --out=./backup', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error during backup: ${stderr}`);
  } else {
    console.log(`Backup completed successfully: ${stdout}`);
  }
});
