const { error } = require("@ylz/logger")
const { responses } = require("@ylz/common")

function controllerAdapter(controller = null, functionName = "") {
  return async (req, res, next) => {
    try {
      const {
        headers: { authorization },
        params,
        query,
        body
      } = req;
      const { locals } = res;

      if (locals.isHit) {
        return next();
      }

      const response = await controller[functionName]({ headers: { authorization }, params, query, body, locals });

      res.locals.isHit = true;

      res.status(response.code).json(response);
    } catch (err) {
      error(err);
      next(err);
    }
  };
}
module.exports = { controllerAdapter }
