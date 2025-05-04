import { useDispatch } from "react-redux";
import { updateQuantity } from "../../store/reducers/cartCustomSlice";
import { toast } from "react-toastify";

const QuantitySelectorCustom = ({
  id,
  quantity,
  setQuantity,
  stock,
}: {
  id: string;
  quantity: number;
  setQuantity?: any;
  stock: number;
}) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (operation: "increase" | "decrease") => {
    let newQuantity = quantity;

    if (operation === "increase") {
      if (quantity + 1 > stock) {
        toast.error(`สามรถเพิ่มได้สูงสุด ${stock} ชิ้น`);
        return;
      }
      newQuantity = quantity + 1;
    } else if (operation === "decrease" && quantity > 1) {
      if (quantity - 1 > 0) {
        newQuantity = quantity - 1;
      }
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

export default QuantitySelectorCustom;
