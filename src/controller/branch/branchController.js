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

  async create({ body }) {
    debug('BranchController - create:', JSON.stringify(body));

    const branch = new Branch(body)
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
}

module.exports = BranchController.getInstance();
