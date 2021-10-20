module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'cstmr', 
        {//cctv db에 새로운 table생성
            name: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};