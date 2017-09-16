// all the actions flow through all the middlewares
export default function ({ dispatch }) {
  // returning a function that returns a function o___o
  return next => action => {
    // If the action does not have a payload 
    // or the payload does not have a .then property
    // we dont care about it, send it on
    if (!action.payload || !action.payload.then) {
      // next() passes the action onto the next middleware in the chain    
      return next(action)
    }

    // Make sure the actions promise resolves
    action.payload
      .then(function(response) {
        // Create a new action with the old type, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response }
        // Send the action through all the reducers again with dispatch()
        // now our actions payload nolonger contains a promise with "then"
        // so it will hit our first if statement this time instead
        // we dispatch() here instead of next() because we want
        // the resolved action to also hit all the middlewares we have
        // instead of just passing it directly to the reducers
        // once its resolved.
        dispatch(newAction)
      })
  }
  // the same written in es5 syntax for clarity
  /*
  return function(next) {
    return function(action) {
      ...code
      next(action)
    }
  }*/

}
