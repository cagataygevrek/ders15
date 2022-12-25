import React from "react";
import Turuncu from "./Turuncu";

function App() {
  const [tema, temaGuncelle] = React.useState("acik");

  function temaDegistir() {
    if (tema === "acik") {
      temaGuncelle("koyu");
    } else {
      temaGuncelle("acik");
    }
  }

  return (
    <div className='container p-3'>
      <h1 className='d-flex justify-content-between'>
        Ana Component{" "}
        <button onClick={temaDegistir}>
          {tema === "acik" ? "Koyu" : "Açık"}
        </button>{" "}
      </h1>
      <Turuncu tema={tema} />
    </div>
  );
}

export default App;
