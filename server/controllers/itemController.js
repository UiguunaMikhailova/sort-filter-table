const { Item } = require('../models/models');
const ApiError = require('../error/ApiError');

class ItemController {
    async setItem(req, res) {
        const { date, name, quantity, distance } = req.body;
        const item = await Item.create({date, name, quantity, distance })
        return res.json(item)
    }
    async getAll(req, res) {
        let { page = 1, limit = 10 } = req.query;
        const offset = page * limit - limit;
        const items = await Item.findAndCountAll({ limit, offset });
        return res.json(items);
    }
}

module.exports = new ItemController();