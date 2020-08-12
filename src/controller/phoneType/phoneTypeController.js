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

  async update({ query, params }) {
    debug('PhoneTypeController - update:', JSON.stringify(query, params))
    const _id = params.id

    const phoneType = await PhoneType.findByIdAndUpdate(_id, body, {new: true, runValidators: true})

    return new responses.OkResponse(phoneType)
  }

  async delete({ params, locals }) {
    debug('PhoneTypeController - delete:', JSON.stringify(params));
    const _id = params.id;
    const adminID = locals.adminID

    let phoneType = await PhoneType.findById(_id);
    if(phoneType.deletedAt !== null) {
      return new responses.BadRequestResponse('PhoneType was already deleted!')
    }

    phoneType = await PhoneType.findByIdAndUpdate(
      _id,
      { deletedAt: new Date(), deletedBy: adminID },
      { new: true, runValidators: true }
    );

    return phoneType
      ? new responses.OkResponse(phoneType)
      : new responses.NotFoundResponse('PhoneType not exist!');
  }
}

module.exports = PhoneTypeController.getInstance();
