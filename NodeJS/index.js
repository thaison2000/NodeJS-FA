const {app} = require('./app');

const PORT = 3000;

function main() {
  app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
  });
}

main();
