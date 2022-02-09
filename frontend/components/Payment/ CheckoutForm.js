'use client'
import AlertMessage from '@/Hooks/Alert';
import { useDeleteCartMutation } from '@/redux/feature/cart/cartApi';
import { useAddPaymentMutation, useCreatePaymentIntentMutation } from '@/redux/feature/payment/paymentApi';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CheckoutForm = ({ }) => {
    const { product } = useSelector(state => state.cart)
    console.log(product);
    const { successMessage } = AlertMessage()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    const [createPaymentIntent] = useCreatePaymentIntentMutation()
    const [addPayment] = useAddPaymentMutation()
    const [deleteCart] = useDeleteCartMutation()

    useEffect(() => {
        createPaymentIntent({ price: product?.total })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [product])

    // console.log(product.tourId);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement);

        if (card == null) { return; }
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card, });

        if (error) {
            setError(error)
        } else { setError(null) }
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: product?.userEmail,
                    },
                },
            },
        );
        if (confirmationError) {
            setError(confirmationError); return;
        }
        if (paymentIntent.status === "succeeded") {
            const confirmPayment = {
                paymentID: paymentIntent.id,
                ...product,
                paymentDate: new Date().toDateString(),
            }
            addPayment(confirmPayment)
                .then(res => {
                    successMessage('Payment Successful')
                    deleteCart(product?._id)
                })
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className=" ">
                <div className="mb-4">

                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn-warning btn btn-sm mt-6' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            {error && <p className='text-red-600 mt-4'>{error.message}</p>}
        </form>
    );
};

export default CheckoutForm;