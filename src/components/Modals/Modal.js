import React, { useState, useRef } from "react";
import { Container, Wrap } from "./modalElements";
function Modal(props) {
  const { show, setShow } = props;


  const onClick = () => setShow(!show);
  const onClickSide = (e) => {
    if (e.currentTarget === e.target) {
      console.log('e.target: ', e.target)
      console.log('e.tarcurrentTargetget: ', e.currentTarget)
      setShow(false)
    };
  }
  return (
    <div>
      <h2>모달쪽</h2>
      <Container onClick={onClickSide}>
        <Wrap>
          {props.children}
          <h2>안녕하세요</h2>
          <h3>모달입니다.</h3>
          <button onClick={onClick}>닫기</button>
        </Wrap>
      </Container>
    </div>
  );
}

export default Modal;
