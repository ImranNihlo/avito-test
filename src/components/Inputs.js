import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addComment} from "../redux/actions";
import {showCurrentDate} from "../utils/helpers";

function Inputs(props) {
    const [text, setText] = useState("");
    const [commentDate, setCommentDate] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addComment(text, showCurrentDate()));
        setText("");
        setCommentDate("");
    }

    return (
        <div>
            <input
                placeholder="Ваше имя"
                type="text"
                value={commentDate}
                onChange={(e) => setCommentDate(e.target.value)}
            />
            <input
                placeholder="Ваш комментарий"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div>
                <button onClick={handleClick}>
                    Оставить комментарий
                </button>
            </div>
        </div>
    );
}

export default Inputs;