function Lacivert({ temaRengi }) {
  let butonClass = temaRengi === "acik" ? "btn btn-light" : "btn btn-dark";

  return (
    <div>
      <h4>Lacivert component</h4>
      <button className={butonClass}>Action</button>
    </div>
  );
}

export default Lacivert;
