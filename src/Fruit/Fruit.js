import styled, { keyframes } from 'styled-components';

const Hop = keyframes`
    0%,
    100% {
      -webkit-transform: translateX(0%);
              transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-35px) rotate(-8deg);
              transform: translateX(-35px) rotate(-8deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(8deg);
              transform: translateX(15px) rotate(8deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(-4.6deg);
              transform: translateX(-15px) rotate(-4.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(2.8deg);
              transform: translateX(9px) rotate(2.8deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(-1.4deg);
              transform: translateX(-6px) rotate(-1.4deg);
    }
`;

const SwingP = styled.p`
    font-size: 20rem;
    animation: ${Hop} 5s linear infinite;
`;

function Fruit(props) {
  return (
    <SwingP> { props.name }  </SwingP>
  );
}

export default Fruit;
