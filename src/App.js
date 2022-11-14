import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();

  // Get the cart store from the Redux store
  const { cartItems } = useSelector((store) => store.cart);

  // Get the modal store from the Redux store
  const { isOpen } = useSelector((store) => store.modal);

  // Calculate the totals whenever the cart changes
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
