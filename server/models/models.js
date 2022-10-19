const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Item = sequelize.define('item', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    quantity: { type: DataTypes.INTEGER },
    distance: { type: DataTypes.INTEGER },
})

module.exports = { Item };
