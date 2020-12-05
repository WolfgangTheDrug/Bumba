import styled from 'styled-components';

const Card = styled.article`
    max-width: 90%;
`;

function UbiquitousCard(props) {
  return (
      <Card>
        {props.search}
        {props.fruit}
      </Card>
  );
}

export default UbiquitousCard;
