const authenticated = resolver => (rootValue, args, context, info) => {
  if (context.request.user) {
    return resolver(rootValue, args, context, info);
  }

  throw new Error('User is not authenticated');
};

export default authenticated;