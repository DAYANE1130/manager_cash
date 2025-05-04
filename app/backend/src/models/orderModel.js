module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    orderStatusBuyer: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  }, {
    tableName: 'orders',
    timestamps: true,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, {
      foreignKey: 'buyerId',
      as: 'buyer',
    });

    Order.belongsTo(models.Provider, {
      foreignKey: 'providerId',
      as: 'provider',
    });

    Order.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });

    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    Order.hasMany(models.Offer, {
      foreignKey: 'orderId',
      as: 'offers',
    })

    Order.hasMany(models.OrderPortion,{
      foreignKey:'orderId',
      as:'ordersPortions',
    })
  };

  return Order;
};
