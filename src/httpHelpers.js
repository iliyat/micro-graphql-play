const { send } = require('micro');

module.exports = {
  send200: (res, data) => {
    return send(res, 200, data);
  }
};