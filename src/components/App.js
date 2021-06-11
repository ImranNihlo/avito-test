import Header from "./Header";
import Photos from "./Photos";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {loadPhotos} from "../redux/actions";
import ModalWindow from "./ModalWindow";
import { Route } from "react-router-dom"


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos())
    }, []);

    const [modalActive, setModalActive] = useState(false);

  return (
    <div className="main">
        <Header />
        <Photos  active={modalActive} setActive={setModalActive}/>
        <Route path="/:id?">
            <ModalWindow />
        </Route>
        <Footer />
    </div>
  );
}

export default App;
