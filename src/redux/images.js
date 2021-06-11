const initialState = {
    items: [],
    comments: [],
    loading: false
};

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'images/load/start':
            return {
                ...state,
                loading: true
            }

        case 'images/load/success':
            return {
                ...state,
                items: action.payload,
                comments: action.payload.comments,
                loading: false
            }

        case 'images/addComment':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {text: action.payload.text, date: action.payload.showCurrentDate},
                ]
            }

        default:
            return state;
    }

};

export default imagesReducer;