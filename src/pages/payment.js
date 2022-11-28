import { Button } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import paymentApi from '../paymentApi';
import { createOrder, fetchKey, fetchPayment } from '../redux/slice/payment';
export default function Payment() {
    const [rzp, setRzp] = useState(null);
    const key = useSelector(state => state.payment.key);
    const order = useSelector(state => state.payment.order);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchKey());
    }, [])
    const createOrderHandler = () => {
        dispatch(createOrder({
            amount: "10000",
            id: "courseID",
            description: "Course Desc",
            name: "Course Name"
        }))
        handlePayment()
    }
    const handlePayment = () => {
        console.log(key)
        var options = {
            "key": key.value, // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.value.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                console.log(response);
                axios.post(paymentApi.verify, { ...response }).then(res => dispatch(fetchPayment({ paymentId: res.data })))

            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const rzpClient = new window.Razorpay(options);
        rzpClient.open()
    }
    return (
        <div>
            <Button onClick={createOrderHandler}>Pay Rs.10000/- Only</Button>
        </div>
    )
}
