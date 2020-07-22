/** @format */

const { PhoneType } = require('../../repositories');

const { debug } = require('@ylz/logger');
const { responses } = require('@ylz/common');

class PhoneTypeController {
  static getInstance() {
    if (!PhoneTypeController.instance) {
      PhoneTypeController.instance = new PhoneTypeController();
    }

    return PhoneTypeController.instance;
  }

  async create({ body }) {
    debug('PhoneTypeController - create:', JSON.stringify(body));
    const phoneType = new PhoneType(body)
    await phoneType.save();

    return new responses.CreatedResponse(phoneType);
  }

  async list({ query }) {
    debug('PhoneTypeController - list:', JSON.stringify(query, null, 2));

    const { limit, skip } = query;
    const data = await PhoneType.find({}, null, {
      limit,
      skip,
      sort: { name: 1 },
    })

    return new responses.OkResponse(data);
  }
}

module.exports = PhoneTypeController.getInstance();
