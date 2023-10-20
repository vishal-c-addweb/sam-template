import { Model } from 'sequelize';

export default (sequelize: any, DataTypes: any) => {
    class FinancialSetting extends Model {}
    FinancialSetting.init(
        {
            currency_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            symbol: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            exchange_rate: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: 'financial_setting',
            timestamps: true,
            paranoid: true,
            underscored: true,
        },
    );
    return FinancialSetting;
};
