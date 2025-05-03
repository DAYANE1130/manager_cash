module.exports = (sequelize, DataTypes) => {
  const cnpjModel = sequelize.define('Cnpj', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'cnpjs', // importante: nome exato da tabela no banco
    timestamps: false,
  });

  return cnpjModel;
};
