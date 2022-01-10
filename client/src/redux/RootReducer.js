import {combineReducers} from 'redux';
import DialogueReducer from './reducer/DialogueReducer';

const rootReducer = combineReducers({
    dialogue:DialogueReducer
})

export default rootReducer;