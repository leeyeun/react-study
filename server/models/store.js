module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'store', 
        {
            storeid: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER

            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            address: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            number: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            time: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            sit: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            image: {
                type: DataTypes.STRING(1024),
                allowNull: true
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
            freezeTableName: true,
        }
    )
};