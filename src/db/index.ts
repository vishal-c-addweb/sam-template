import { Sequelize } from 'sequelize';
import config from '../../config';
const { database }: any = config;

async function loadSequelize() {
    console.log(database);
    const sequelize = new Sequelize(database.database, database.dbUserName, database.password, {
        host: database.host,
        dialect: 'mysql',
        logging: false,
        port: 3306,
        dialectModule: require('mysql2'),
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    });
    await sequelize.authenticate();
    return sequelize;
}

export { loadSequelize };
