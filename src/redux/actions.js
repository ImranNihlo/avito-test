export const loadPhotos = () => {
    return dispatch => {
        dispatch({
            type: 'photos/load/start'
        });

        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'photos/load/success',
                    payload: json
                })
            })
    }
};

export const loadImages = (id) => {
    return dispatch => {
        dispatch({
            type: 'images/load/start'
        });

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'images/load/success',
                    payload: json
                })
            })
    }
};

export const addComment = (text, showCurrentDate) => {
    return {
        type: 'images/addComment',
        payload: { text, showCurrentDate }
    }
};

