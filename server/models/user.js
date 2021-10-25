module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'user', 
        {
            userId: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            userPw: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            userName: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            userNumber: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            userEmail: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};