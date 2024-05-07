import React, { useState,useEffect } from 'react'
import axios from 'axios';



const Payment = () => {
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState(null);

  const fetchOrderId = async () => {
    try {
      const response = await axios('http://localhost:8080/order/create/orderId', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data:{amount: '39900'}
      });

      const data = await response.data;
      console.log(data.orderId);
      setOrderId(data.orderId);
    } catch (error) {
      console.error('Error fetching order ID:', error);
    }
  };


  useEffect(() => {
    
    fetchOrderId();
  }, []);

  const handleClick = ()=>{
    var options = {
      "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "theme": {
        "color": "#3399cc"
    }
  }
  /**
    var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
  */

} 
  return (
    <div>
      <h2>
        Payment form
      </h2>
      <button onClick={handleClick}>Pay Now</button>
    </div>
  )
}

export default Payment