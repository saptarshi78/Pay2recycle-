const { exec } = require('child_process');

exec('mongorestore --uri="your_mongo_uri_here" ./backup', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error during restore: ${stderr}`);
  } else {
    console.log(`Restore completed successfully: ${stdout}`);
  }
});
