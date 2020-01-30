import Sequelize, { Model } from 'sequelize';

class Expense extends Model {
  static init(sequelize) {
    super.init({
      type: Sequelize.STRING,
      description: Sequelize.STRING,
      price: Sequelize.STRING,
    },
    {
      sequelize,
    });
    return false;
  };
};

export default Expense;
