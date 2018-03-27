// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const currUser = context.params.user.email

    if (context.result.requestee !== currUser && context.result.requester !== currUser) {
      throw new Error('User not allowed to view this request')
    }

    return context;
  };
};
