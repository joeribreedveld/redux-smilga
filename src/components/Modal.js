import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart()); // clear cart
              dispatch(closeModal()); // close modal
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())} // close modal
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

// Export the Modal component
export default Modal;
