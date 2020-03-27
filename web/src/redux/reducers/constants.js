

const initialState = {
    authenticated: false,
    current_page: false,
    tableControl: [{
        name: 'ID',
        key: 'id'
    }, {
        name: 'Name',
        key: 'name'
    }, {
        name: 'Current Time',
        key: 'dateView'
    }]
};

const constants = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATED':
            return {...state, authenticated: action.payload};
        case 'SET_PAGE':
            return {...state, current_page: action.payload};
        default:
            return state;
    }
};

export const setUserAuth = auth => ({
    type: 'AUTHENTICATED',
    payload: auth
});

export const setCurrentPage = page => ({
    type: 'SET_PAGE',
    payload: page
});

export default constants;
