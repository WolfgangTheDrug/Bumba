function UbiquitousCard(props) {
  return (
      <article className="d-flex flex-column align-items-center h-50 ">
        {props.search}
        {props.fruit}
      </article>
  );
}

export default UbiquitousCard;
