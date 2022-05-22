import React, { useState } from "react";
import Modal from "./components/Modals/Modal";
function TestPage() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  console.log(show)

  return (
    <div>

      <button onClick={onClick}>모달열기</button>
      {show ?
        <Modal show={show} setShow={setShow} ><h2>import from TestPage</h2> </Modal> : null
      }
    </div>);
}

export default TestPage;
