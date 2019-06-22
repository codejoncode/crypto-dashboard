import { combineReducers } from 'redux';
import { reducer as toastrReducer} from 'react-redux-toastr';
import authenticateReducer from "./Register-Login/authenticateReducer";

/*every reducer is brought in to here */
const rootReducer = combineReducers({
    toastr: toastrReducer,
    user: authenticateReducer,
})

export default rootReducer;