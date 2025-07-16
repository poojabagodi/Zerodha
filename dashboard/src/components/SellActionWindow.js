import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import "../index.css";
const SellActionWindow = ({ uid }) => {
  const [quantity, setQuantity] = useState("");
  const generalContext = useContext(GeneralContext);

  const handleSell = () => {
    if (quantity) {
      alert(`Selling ${quantity} shares of ${uid}`);
      // Place your API call or logic here
      generalContext.closeSellWindow();
    }
  };

  const handleCancel = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="action-window sell">
      <h3>Sell Stock</h3>
      <p>UID: {uid}</p>
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <div className="action-buttons">
        <button className="confirm-sell" onClick={handleSell}>
          Sell
        </button>
        <button className="cancel-sell" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SellActionWindow;
