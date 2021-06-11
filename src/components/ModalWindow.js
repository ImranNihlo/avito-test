import Inputs from "./Inputs";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadImages} from "../redux/actions";

function ModalWindow(props) {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const images = useSelector(state => state.images.items);
    const comments = useSelector(state => state.images.comments);
    const loading = useSelector(state => state.images.loading);

    const close = () => {
        history.push('/')
    }


    useEffect(() => {
        dispatch(loadImages(params.id))
    }, [params]);

    if(!params.id) {
        return null
    }

    return (
        <div className={"deactivator active"}>
            {loading ? 'идет загрузка...' : (
                <div className="modal">
                    <div className="modal-top">
                        <div className="modal-Img">
                            <img src={images.url} alt="image"/>
                        </div>
                       <div>
                           {comments.length === 0 ? (
                               <div className="no-comment">комментариев нет</div>
                           ) : (
                               comments.map(comments => {
                                   return <div key={comments.id}>
                                       <div className="data">{comments.date}</div>
                                       <div className="comment">{comments.text}</div>
                                   </div>
                               })
                           )}
                       </div>
                    </div>
                    <div className="modal-bottom">
                        <Inputs/>
                    </div>
                    <div className="modal-close" onClick={close}>×</div>
                </div>
            )}
        </div>
    );
}


export default ModalWindow;