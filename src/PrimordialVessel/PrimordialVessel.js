import styled, { keyframes } from 'styled-components';
import { rubberBand } from 'react-animations';
import Fruit from "../Fruit/Fruit.js"

const rubberAnimation = keyframes`${rubberBand}`;

const RubberP = styled.p`
    animation: 1s ${ rubberAnimation };
`;

function PrimordialVessel() {
  return (
    <main className="container d-flex flex-column" style={{"height":"100vh"}}>
        <header className="page-header p-2 align-self-start container">
            <h1>
                <RubberP> bumba </RubberP>
                <small> i czuję się bomba! </small>
            </h1>
        </header>
        <section className="p-2 flex-fill align-self-stretch">
            <Fruit name="🍎"/>
        </section>
        <footer>
            <p className="lead p-2 mt-auto align-self-end">
                designed by &copy; 2020 - projekcik bumba
            </p>
        </footer>
    </main>
  );
}

export default PrimordialVessel;
