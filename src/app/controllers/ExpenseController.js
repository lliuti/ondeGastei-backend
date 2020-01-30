import * as Yup from 'yup';

import Expense from '../models/Expense';

class ExpenseController {
  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required(),
      description: Yup.string(),
      price: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid or insufficient information' });
    };

    const expense = await Expense.create(req.body);

    return res.status(201).json(expense);
  };

  async index(req, res) {
    const expenses = await Expense.findAll();

    return res.status(200).json(expenses);
  };
};

export default new ExpenseController();