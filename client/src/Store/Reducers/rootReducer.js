import { combineReducers } from 'redux';
import { reducer as toastrReducer} from 'react-redux-toastr';

/*every reducer is brought in to here */
const rootReducer = combineReducers({
    toastr: toastrReducer,
})

export default rootReducer;