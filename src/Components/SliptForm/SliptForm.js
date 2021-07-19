import React, { useMemo } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from "react";

const SliptForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess('')
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <div style={{ marginTop: '20%' }} className='mt-5'>
            <form className='form-control' onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-success mt-5 mb-5' type="submit" disabled={!stripe}>
                    Pay
           </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your Payment was Successfully </p>
            }
        </div>
    );
};

export default SliptForm;