import styled from "styled-components";

const Ambient = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const LoadingBall = styled.div`
  background: linear-gradient(180deg, #ff6f31 0%, #2858ff 100%);
  width: 100vw;
  height: 100vh;
  position: relative;
  animation: dropBall 5000ms;
  @keyframes dropBall {
    0% {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      top: calc(50vh - 25px);
      left: calc(50vw - 25px);
      transform: translateY(-50vh);
    }
    5% {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      top: calc(50vh - 25px);
      left: calc(50vw - 25px);
      transform: translateY(0);
    }
    8% {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      top: calc(50vh - 25px);
      left: calc(50vw - 25px);
      transform: translateY(-30px);
    }
    12% {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      top: calc(50vh - 25px);
      left: calc(50vw - 25px);
      transform: translateY(0);
    }
    16% {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      top: calc(50vh - 20px);
      left: calc(50vw - 20px);
    }
    18% {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      top: calc(50vh - 50px);
      left: calc(50vw - 50px);
    }
    28% {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      top: calc(50vh - 50px);
      left: calc(50vw - 50px);
    }
    30% {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      top: calc(50vh - 40px);
      left: calc(50vw - 40px);
    }

    35% {
      width: 150px;
      height: 150px;
      border-radius: 75px;
      top: calc(50vh - 75px);
      left: calc(50vw - 75px);
    }

    45% {
      width: 150px;
      height: 150px;
      border-radius: 75px;
      top: calc(50vh - 75px);
      left: calc(50vw - 75px);
    }
    48% {
      width: 110px;
      height: 110px;
      border-radius: 55px;
      top: calc(50vh - 55px);
      left: calc(50vw - 55px);
    }
    52% {
      width: 250px;
      height: 250px;
      border-radius: 125px;
      top: calc(50vh - 125px);
      left: calc(50vw - 125px);
    }
    64% {
      width: 250px;
      height: 250px;
      border-radius: 125px;
      top: calc(50vh - 125px);
      left: calc(50vw - 125px);
    }

    80% {
      width: 2000px;
      height: 2000px;
      border-radius: 1000px;
      top: calc(50vh - 1000px);
      left: calc(50vw - 1000px);
    }
    100% {
      width: 2000px;
      height: 2000px;
      top: calc(50vh - 1000px);
      left: calc(50vw - 1000px);
    }
  }
`;

const FirstGrow = styled.div`
  background: linear-gradient(180deg, #ff6f31 0%, #2858ff 100%);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  top: calc(50vh - 25px);
  left: calc(50vw - 25px);
  animation: grow 4000ms;
  z-index: 1;
  @keyframes grow {
    0% {
      transform: scale(0);
    }
    20%,
    50% {
      transform: scale(0);
    }
    60% {
      transform: scale(1.6);
    }
    80%,
    100% {
      transform: scale(2);
    }
  }
`;

export { Ambient, LoadingBall, FirstGrow };
