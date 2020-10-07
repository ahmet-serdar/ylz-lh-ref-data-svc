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

  async create({ body, locals }) {
    debug('PaymentReasonController - create:', JSON.stringify(body, locals));
    const adminID = locals.adminID

    const paymentReason = new PaymentReason(body)
    paymentReason.createdBy = adminID

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

  async update({ query, params, body }) {
    debug('PaymentReasonController - update:', JSON.stringify(query, params, body))
    const _id = params.id

    const paymentReason = await PaymentReason.findByIdAndUpdate(_id, body, {new: true, runValidators: true})

    return new responses.OkResponse(paymentReason)
  }

  async delete({ params, locals }) {
    debug('PaymentReasonController - delete:', JSON.stringify(params));
    const _id = params.id;
    const adminID = locals.adminID

    let paymentReason = await PaymentReason.findById(_id);
    if(paymentReason.deletedAt !== null) {
      return new responses.BadRequestResponse('PaymentReason was already deleted!')
    }

    paymentReason = await PaymentReason.findByIdAndUpdate(
      _id,
      { deletedAt: new Date(), deletedBy: adminID },
      { new: true, runValidators: true }
    );

    return paymentReason
      ? new responses.OkResponse(paymentReason)
      : new responses.NotFoundResponse('PaymentReason not exist!');
  }
}

module.exports = PaymentReasonController.getInstance();