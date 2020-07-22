/** @format */

const { PaymentType } = require('../../repositories');

const { debug } = require('@ylz/logger');
const { responses } = require('@ylz/common');

class PaymentTypeController {
  static getInstance() {
    if (!PaymentTypeController.instance) {
      PaymentTypeController.instance = new PaymentTypeController();
    }

    return PaymentTypeController.instance;
  }

  async create({ body }) {
    debug('PaymentTypeController - create:', JSON.stringify(body));
    const paymentType = new PaymentType(body)
    await paymentType.save();

    return new responses.CreatedResponse(paymentType);
  }

  async list({ query }) {
    debug('PaymentTypeController - list:', JSON.stringify(query, null, 2));

    const { limit, skip } = query;
    const data = await PaymentType.find({}, null, {
      limit,
      skip,
      sort: { name: 1 },
    })

    return new responses.OkResponse(data);
  }
}

module.exports = PaymentTypeController.getInstance();
