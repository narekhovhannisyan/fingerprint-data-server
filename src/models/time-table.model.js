'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('timeTable', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      worker_id: {
        type: DataTypes.INTEGER
      },
      start_time: {
        type: DataTypes.DATE
      },
      end_time: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'time_table',
      timestamps: false
    })
}
