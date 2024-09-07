// sequelizeConfig.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();
const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    {
        host: process.env.MYSQL_HOST || 'localhost', // Inclua o host do MySQL
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT) || 3306, // Porta padrão do MySQL
    }
);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection(); // Chama a função de teste de conexão
export default sequelize;
