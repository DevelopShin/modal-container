import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`
export const Wrap = styled.div`
        width: 300px;
        height: 200px;
        background-color: #fff;
        // Modal 창 브라우저 가운데로 조정
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        z-index:999;
        color:black;

`

// export const ModalWrapper = styled.div`
//   z-index: 999;
//   width: 300px;
//   height: 300px;
//   background-color: red

// `