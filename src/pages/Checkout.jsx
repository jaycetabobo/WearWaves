import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import UserInfo from '../components/UserInfo/UserInfo'

const Checkout = () => {
    const { cartList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // middlware to localStorage
    const totalPrice = cartList.reduce(
        (price, item) => price + item.qty * item.price,
        0
    );
    useEffect(() => {
        window.scrollTo(0, 0);
        // if(CartItem.length ===0) {
        //   const storedCart = localStorage.getItem("cartItem");
        //   setCartItem(JSON.parse(storedCart));
        // }
    }, []);
    return (
        <section className="cart-items">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <UserInfo />
                    </Col>
                    <Col md={4}>
                        <div className="cart-total">
                            <h2>Cart Summary</h2>
                            {cartList.map((item) => {
                                const productQty = item.price * item.qty;
                                return (
                                    <div key={item.id}>
                                        <h6>{item.productName} ₱{item.price}.00 * {item.qty} = ₱{productQty}.00</h6>
                                    </div>
                                );
                            })}
                            <div className=" d_flex">
                                <h4>Total Price :</h4>
                                <h3>₱{totalPrice}.00</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Checkout;
