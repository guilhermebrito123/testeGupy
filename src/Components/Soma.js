import { useState } from "react";

const Soma = () => {
  const [indice] = useState(12);
  let [soma, setSoma] = useState(0);
  let [k, setK] = useState(1);

  do {
    setK((k = k + 1));
    setSoma(soma + k);
  } while (k < indice);

  return <div>Soma</div>;
};

export default Soma;
