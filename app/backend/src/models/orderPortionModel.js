module.exports = (sequelize, DataTypes) => {
  const OrderPortion = sequelize.define('OrderPortion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nDup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dVenc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vDup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availableToMarket: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'orderportions',
    timestamps: true,
  });

  OrderPortion.associate = (models) => {
    OrderPortion.belongsTo(models.Order, {
      foreignKey: 'orderId',
      as: 'order',
    });
  };

  return OrderPortion;
};
