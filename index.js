require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 4000;
const DB_ENV = process.env.DB_ENV;

server.listen(PORT, () => {
    console.log(` ********** Server is listening on localhost: ${PORT} and the database environment is: ${DB_ENV} **********`);
});
