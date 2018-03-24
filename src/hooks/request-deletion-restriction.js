// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const id = context.id

    if (id === null) {
      //Make sure params are safe here and we dont delete a good request
    }
    else{
      //Will error if we dont have access
      await context.service.get(id)
    }

    return context;
  };
};
