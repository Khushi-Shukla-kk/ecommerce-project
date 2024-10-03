import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/cart_context'; 

const Checkout = () => {
    const navigate = useNavigate();
    const { cart } = useCartContext(); 

    const handleOrderPlace = () => {
        
        navigate('/order-confirmation');
    };

    return (
        <Wrapper>
            <h2>Checkout</h2>
            <div className="cart-details">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name}</p>
                            <p>Price: ₹{item.price}</p> 
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))
                )}
            </div>
            <button onClick={handleOrderPlace} className="place-order-button">Place Order</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;

    .cart-details {
        margin-bottom: 2rem;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 5px;
        background-color: #f9f9f9;

        .cart-item {
            margin-bottom: 1rem;
            padding: 0.5rem;
            border-bottom: 1px solid #eee;
            text-align: left;

            &:last-child {
                border-bottom: none; // Last item ke liye border nahi
            }
        }
    }

    .place-order-button {
        padding: 1rem 2rem; // Padding for the button
        background-color: #28a745; // Green color for the button
        color: #fff; // White text color
        border: none; // Remove default border
        border-radius: 5px; // Rounded corners
        cursor: pointer; // Pointer cursor on hover
        font-size: 1.2rem; // Font size
        transition: background-color 0.3s ease; // Smooth transition for hover effect

        &:hover {
            background-color: #218838; // Darker green on hover
        }
    }
`;

export default Checkout;
