import styled, { keyframes } from 'styled-components';
import { rubberBand } from 'react-animations';
import FlounderCard from "../UbiquitousCard/DistinctCards/FlounderCard.js";
import ForageCard from "../UbiquitousCard/DistinctCards/ForageCard.js";
import SuccesfullInquiryCard from "../UbiquitousCard/DistinctCards/SuccesfullInquiryCard.js";

const rubberAnimation = keyframes`${rubberBand}`;

const RubberP = styled.p`
    animation: 1s ${ rubberAnimation };
`;

let count = "forage"; // do dokończenia
let el;

if(count === "flounder") {
    el = <FlounderCard/>
} else if (count === "forage") {
    el = <ForageCard/>
} else if (count === "success") {
    el = <SuccesfullInquiryCard/>
}

function PrimordialVessel() {
  return (
    <main className="container d-flex flex-column" style={{"height":"100vh"}}>
        <header className="page-header p-2 align-self-start container">
            <h1>
                <RubberP> bumba </RubberP>
                <small> i czuję się bomba! </small>
            </h1>
        </header>

        <section className="p-2 flex-fill align-self-stretch align-middle">
            {el}
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
