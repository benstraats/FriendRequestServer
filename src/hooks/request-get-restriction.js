// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    if (context.params.user !== undefined && context.params.user !== null) {
      const currUser = "" + context.params.user._id

      if (context.result.requestee !== currUser && context.result.requester !== currUser) {
        throw new Error('User not allowed to view this request')
      }
    }

    return context;
  };
};
