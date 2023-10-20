import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import { financialSettingsController } from './controller/financial_settings_controller';

const controller: financialSettingsController = new financialSettingsController();
const financialSettings = controller.financialSettings;

export const lambdaHandler = middy(financialSettings).use(httpErrorHandler());
