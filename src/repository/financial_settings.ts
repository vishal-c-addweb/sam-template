import { Sequelize } from 'sequelize';
import FinancialSettingModel from '../models/FinancialSettings';

export const findAllFinancialSetting = async (sequelize: any) => {
    const FinancialSetting = FinancialSettingModel(sequelize, Sequelize);
    const response = await FinancialSetting.findAll({
        // order: [['id', 'DESC']],
        raw: true,
        nest: true,
    });
    return response;
};
