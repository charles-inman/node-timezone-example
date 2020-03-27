import {createSelector} from 'reselect';

export const getConstants = state => state.constants;
export const getLayout = state => state.layout;

export const getTableControl = createSelector(
    getConstants,
    constants => constants.tableControl
);

export const getSidebar = createSelector(
    getLayout,
    layout => layout.sidebar
);