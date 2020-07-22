/** @format */

const { PaymentReason } = require('../../repositories');

const { debug } = require('@ylz/logger');
const { responses } = require('@ylz/common');

class PaymentReasonController {
  static getInstance() {
    if (!PaymentReasonController.instance) {
      PaymentReasonController.instance = new PaymentReasonController();
    }

    return PaymentReasonController.instance;
  }

  async create({ body }) {
    debug('PaymentReasonController - create:', JSON.stringify(body));
    const paymentReason = new PaymentReason(body)
    await paymentReason.save();

    return new responses.CreatedResponse(paymentReason);
  }

  async list({ query }) {
    debug('PaymentReasonController - list:', JSON.stringify(query, null, 2));

    const { limit, skip } = query;
    const data = await PaymentReason.find({}, null, {
      limit,
      skip,
      sort: { name: 1 },
    })

    return new responses.OkResponse(data);
  }
}

module.exports = PaymentReasonController.getInstance();