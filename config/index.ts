require('dotenv').config();

export default {
    database: {
        dbUserName: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        dbName: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: 'mysql',
    },
};
