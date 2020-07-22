/** @format */

const { ReceivedBy } = require('../../repositories');

const { debug } = require('@ylz/logger');
const { responses } = require('@ylz/common');

class ReceivedByController {
  static getInstance() {
    if (!ReceivedByController.instance) {
      ReceivedByController.instance = new ReceivedByController();
    }

    return ReceivedByController.instance;
  }

  async create({ body }) {
    debug('ReceivedByController - create:', JSON.stringify(body));
    const receivedBy = new ReceivedBy(body)
    await receivedBy.save();

    return new responses.CreatedResponse(receivedBy);
  }

  async list({ query }) {
    debug('ReceivedByController - list:', JSON.stringify(query, null, 2));

    const { limit, skip } = query;
    const data = await ReceivedBy.find({}, null, {
      limit,
      skip,
      sort: { name: 1 },
    })

    return new responses.OkResponse(data);
  }
}

module.exports = ReceivedByController.getInstance();
