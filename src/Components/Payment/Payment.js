import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SliptForm from '../SliptForm/SliptForm';


const stripePromise = loadStripe('pk_test_51Ie1CrHalbTTubXAPJKqIUilopRyVW8x7hbf8qcQcQ6dyPqvUdXlGeWIMzfJLiw0WZT8dLQZakn1bcIByAGILl3j00Nqwi7iGp');
const PaymentCard = {
    width: '50%',
    marginLeft: '26%',
    backgroundColor: 'aquamarine',

}

const Payment = ({ handlePayment }) => {
    return (
        <div>
            <div style={PaymentCard} className='text-center'>
                <Elements stripe={stripePromise}>
                    <h4 >Please pay for your device</h4>

                    <SliptForm handlePayment={handlePayment}></SliptForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;