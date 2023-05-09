import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {

  const [showModal, setShowModal] = useState(false); // react hook, first is the current and the second isa function to change the value

  function deleteHandler(){
    setShowModal(true);
  }
  function setcloseModalHandler(){
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { showModal ? <Modal  onCancel={setcloseModalHandler} onConfirm={setcloseModalHandler}/> : null}
      { showModal ? <Backdrop onClick={setcloseModalHandler}/> : null}
    </div>
  );
}

export default Todo;
