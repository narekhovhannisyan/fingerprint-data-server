'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('workers', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name_surname: {
        type: DataTypes.STRING
      },
      fingerprint_id: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'workers',
      timestamps: false
    })
}
