module.exports = (sequelize, DataTypes) => {

  const Cnpj = sequelize.define('Cnpj', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'cnpjs', //nome exato da tabela no banco
    timestamps: true,
  });

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Buyer,
      { foreignKey: 'cnpjId', as: 'buyer' });

    Cnpj.hasOne(models.Provider, {
      foreignKey: 'cnpjId',
      as: 'provider',
    });

    Cnpj.hasMany(models.Order, {
      foreignKey: 'cnpjId',
      as: 'orders',
    });

  };
  return Cnpj;
};
