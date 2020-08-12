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

  async update({ query, params }) {
    debug('PaymentTypeController - update:', JSON.stringify(query, params))
    const _id = params.id

    const paymentType = await PaymentType.findByIdAndUpdate(_id, body, {new: true, runValidators: true})

    return new responses.OkResponse(paymentType)
  }

  async delete({ params, locals }) {
    debug('PaymentTypeController - delete:', JSON.stringify(params));
    const _id = params.id;
    const adminID = locals.adminID

    let paymentType = await PaymentType.findById(_id);
    if(paymentType.deletedAt !== null) {
      return new responses.BadRequestResponse('PaymentType was already deleted!')
    }

    paymentType = await PaymentType.findByIdAndUpdate(
      _id,
      { deletedAt: new Date(), deletedBy: adminID },
      { new: true, runValidators: true }
    );

    return paymentType
      ? new responses.OkResponse(paymentType)
      : new responses.NotFoundResponse('PaymentType not exist!');
  }
}



module.exports = PaymentTypeController.getInstance();
