import Sequelize from 'sequelize';

import dbConfig from '../config/database';
import Expense from '../app/models/Expense';

const models = [Expense];

class Database {
  constructor() {
    this.init();
  };

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  };
};

export default new Database();