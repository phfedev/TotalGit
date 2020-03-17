const Yup = require('yup');
const User = require('../models/User');

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }

    const userExists = await User.findOne({ where: { name: req.body.name } });
    if (userExists) {
      res.status(401).json({ error: 'User already exist' });
    }
    const { id, name, phone } = await User.create(req.body);
    return res.json({
      id,
      name,
      phone,
    });
  }
}

module.exports = new UserController();
