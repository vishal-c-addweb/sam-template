import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { loadSequelize } from '../db';
import { findAllFinancialSetting } from '../repository/financial_settings';

let sequelize: any = null;

export class financialSettingsController {
    public financialSettings = async (event: APIGatewayProxyEvent, context: any): Promise<APIGatewayProxyResult> => {
        context.callbackWaitsForEmptyEventLoop = false;
        if (!sequelize) {
            sequelize = await loadSequelize();
            console.log('Database connected successfully');
        }
        // else {
        //     // restart connection pool to ensure connections are not re-used across invocations
        //     sequelize.connectionManager.initPools();

        //     // restore `getConnection()` if it has been overwritten by `close()`
        //     if (sequelize.connectionManager.hasOwnProperty('getConnection')) {
        //         delete sequelize.connectionManager.getConnection;
        //     }
        // }
        try {
            // await sequelize.authenticate();

            const financialSettings = await findAllFinancialSetting(sequelize);
            console.log(financialSettings);

            // Perform Sequelize operations here
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Financial settings fetched successfully', data: financialSettings }),
            };
        } catch (error) {
            console.error('Error connecting to the database:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Internal Server Error' }),
            };
        } finally {
            // close any opened connections during the invocation
            // this will wait for any in-progress queries to finish before closing the connections
            // await sequelize.connectionManager.close();
            console.log('connection');
        }
    };
}
