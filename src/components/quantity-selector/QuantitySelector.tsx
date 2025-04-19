import { useDispatch } from "react-redux";
import { updateQuantity } from "../../store/reducers/cartSlice";

const QuantitySelector = ({
  id,
  quantity,
  setQuantity,
}: {
  id: number;
  quantity: number;
  setQuantity?: any;
}) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (operation: "increase" | "decrease") => {
    let newQuantity = quantity;

    if (operation === "increase") {
      newQuantity = quantity + 1;
    } else if (operation === "decrease" && quantity > 1) {
      newQuantity = quantity - 1;
    }

    if (undefined !== setQuantity) {
      setQuantity(newQuantity);
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <>
      <div
        style={{ margin: " 0 0 0 10px", cursor: "pointer" }}
        onClick={() => handleQuantityChange("decrease")}
      >
        -
      </div>
      <input
        readOnly
        className="qty-input"
        type="text"
        name="gi-qtybtn"
        value={quantity}
      />
      <div
        style={{ margin: " 0 10px 0 0", cursor: "pointer" }}
        onClick={() => handleQuantityChange("increase")}
      >
        +
      </div>
    </>
  );
};

export default QuantitySelector;
