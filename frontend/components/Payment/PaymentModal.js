'use client'
import { removeCart } from '@/redux/feature/cart/cartSlice';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import CheckoutForm from './ CheckoutForm';

const PaymentModal = ({ }) => {
    const dispatch = useDispatch()
    const stripePromise = loadStripe('pk_test_51M6D28BetmksUXSc82ENaSvliF6HG6MDJv4cL2aTFQDKZVA00yZpVctAPBfcXjQq7PaRET9GUVg5DJVm7qCdbBDZ00c5vWBKMp');


    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        onClick={() => dispatch(removeCart())}
                        htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;