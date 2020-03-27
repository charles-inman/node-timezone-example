
const initialState = {
    sidebar: false
};

const layout = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return {...state, sidebar: action.payload};
        default:
            return state;
    }
};

export const toggleSidebar = sidebar => ({
    type: 'TOGGLE_SIDEBAR',
    payload: sidebar
});

export default layout;
