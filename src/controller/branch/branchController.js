/** @format */

const { Branch } = require('../../repositories');

const { debug } = require('@ylz/logger');
const { responses } = require('@ylz/common');

class BranchController {
  static getInstance() {
    if (!BranchController.instance) {
      BranchController.instance = new BranchController();
    }

    return BranchController.instance;
  }   
       
  async create({ body, locals }) {
    debug('BranchController - create:', JSON.stringify(body, locals));
    const adminID = locals.adminID

    const branch = new Branch(body)
    branch.createdBy = adminID
    
    await branch.save();

    return new responses.CreatedResponse(branch);
  }               

  async list({ query }) {
    debug('BranchController - list:', JSON.stringify(query, null, 2));

    const { limit, skip } = query;
    const data = await Branch.find({}, null, {
      limit,
      skip,
      sort: { name: 1 },
    })

    return new responses.OkResponse(data);
  }

  async update({ query, params, body }) {
    debug('BranchController - update:', JSON.stringify(query, params, body))
    const _id = params.id

    const branch = await Branch.findByIdAndUpdate(_id, body, {new: true, runValidators: true})

    return new responses.OkResponse(branch)
  }

  async delete({ params, locals }) {
    debug('BranchController - delete:', JSON.stringify(params));
    const _id = params.id;
    const adminID = locals.adminID

    let branch = await Branch.findById(_id)
    if(branch.deletedAt !== null) {
      return new responses.BadRequestResponse('Branch was already deleted!')
    }

    branch = await Branch.findByIdAndUpdate(_id,
      { deletedAt: new Date(), deletedBy: adminID },
      { new: true, runValidators: true }
    );

    return branch
      ? new responses.OkResponse(branch)
      : new responses.NotFoundResponse('Branch not exist!');
  }
}

module.exports = BranchController.getInstance();
