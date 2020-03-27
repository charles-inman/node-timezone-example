
import {combineReducers} from 'redux';

import constants from './reducers/constants';
import layout from './reducers/layout';

export default combineReducers({
    constants,
    layout
});
