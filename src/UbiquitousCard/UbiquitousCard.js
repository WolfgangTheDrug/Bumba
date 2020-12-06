function UbiquitousCard(props) {
  return (
      <article className="d-flex flex-column align-items-center h-100 ">
        {props.search}
        {props.fruit}
      </article>
  );
}

export default UbiquitousCard;
