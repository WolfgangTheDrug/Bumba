import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';

const swingAnimation = keyframes`${ tada }`;

const SwingP = styled.p`
    animation: 1s ${swingAnimation} infinite;
    font-size: 20rem;
`;

function Fruit(props) {
    console.log(props);
  return (
    <SwingP> { props.name }  </SwingP>
  );
}

export default Fruit;
