import { useState } from "react";
import "./styles.css";

function Buttons() {
  const [buyprice, setbuyPrice] = useState({
    price1: [Math.random().toFixed(4)],
    buyP: [(Math.random() * 300).toFixed(2)]
  });
  const [sellprice, setsellPrice] = useState({
    price1: [Math.random().toFixed(4)],
    sellP: [(Math.random() * 300).toFixed(2)]
  });

  function transaction(type) {
    if (type.target.id === "buy") {
      setbuyPrice({
        price1: [...buyprice.price1, Math.random().toFixed(4)],
        buyP: [
          ...buyprice.buyP,
          (Math.random() * 300).toFixed(2)
        ].sort((a, b) => (a > b ? 1 : -1))
      });
    }

    if (type.target.id === "sell") {
      setsellPrice({
        price1: [...sellprice.price1, Math.random().toFixed(4)],
        sellP: [
          ...sellprice.sellP,
          (Math.random() * 300).toFixed(2)
        ].sort((a, b) => (a > b ? 1 : -1))
      });
    }
  }

  return (
    <div id="root2">
      <button id="buy" onClick={transaction}>
        Buy
      </button>
      <button id="sell" onClick={transaction}>
        Sell
      </button>
      <div class="values">
        <div className="col">
          <p class="price">
            {sellprice.price1.map((numbers) => (
              <ul>{numbers}</ul>
            ))}
          </p>
          &emsp;
          <p class="val">
            {sellprice.sellP.map((numbers) => (
              <ul id="redcol">{numbers}</ul>
            ))}
          </p>
        </div>
        <hr width="500px;"></hr>
        <div className="col">
          <p class="price">
            {buyprice.price1.map((numbers) => (
              <ul>{numbers}</ul>
            ))}
          </p>
          &emsp;
          <p class="val">
            {buyprice.buyP.map((numbers) => (
              <ul id="greencol">{numbers}</ul>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
