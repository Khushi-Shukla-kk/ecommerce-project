import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #d9e3f0 50%, #f0f4f8 50%);
    text-align: center;
`;

const ConfirmationMessage = styled.h2`
    color: #333;
`;

const OrderConfirmation = () => {
    return (
        <ConfirmationContainer>
            <ConfirmationMessage>Your order has been successfully placed!</ConfirmationMessage>
            <p>Thank you for shopping with us!</p>
            <p>Your order details will be sent to your email shortly.</p>
        </ConfirmationContainer>
    );
};

export default OrderConfirmation;
