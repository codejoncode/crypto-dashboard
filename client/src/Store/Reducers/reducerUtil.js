export const createReducer = (initialState, fnMap) => {
    //fnMap will serve as a look up map for our functions. 
    return (state = initialState, {type, payload} ) => {
        const handler = fnMap[type]; 
        // the equilavent to our default statement in switch type reducer.
        return handler ? handler(state,payload): state;   
    }   
  }