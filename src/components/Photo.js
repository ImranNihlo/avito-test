import React from 'react';
import {Link} from "react-router-dom";

function Photo(props) {
    return (
        <div className="photo" onClick={() => props.setActive(true)}>
            <Link to={`/${props.photo.id}`}>
                <img src={props.photo.url} alt="photo"/>
            </Link>
        </div>
    );
}

export default Photo;