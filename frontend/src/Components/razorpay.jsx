import useRazorpay from "react-razorpay";
import { useCallback, useEffect, useState } from "react";

function DisplayRazorpay() {
  // const options = {
  //     key: "rzp_test_3SpvPC9jbjQ7oy"  , // Enter the Key ID generated from the Dashboard "rzp_test_3SpvPC9jbjQ7oy" process.env.RAZORPAY_ID_KEY
  //     amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     currency: data.currency,
  //     order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     name: "Acme Corp",
  //     description: "Test Transaction",
  //     image: "/src/assets/logo/Logo&Typography_LightBG.png",
  //     handler: function (response){
  //         alert(response.razorpay_payment_id);
  //         alert(response.razorpay_order_id);
  //         alert(response.razorpay_signature)
  //     },
  //     prefill: {
  //         "name": "Gaurav Kumar",
  //         "email": "gaurav.kumar@example.com",
  //         "contact": "9000090000"
  //     },
  // };

  const [Razorpay] = useRazorpay();
  const [ data, setData] = useState(null);


  useEffect (() => {
    fetch("http://localhost:5000/razorpay", { method: "POST", headers : {"Content-Type" : "application/json"}})
      .then((t) => {
        if (!t.ok) {
            throw new Error('Network response was not ok');
         }
        return t.json()})
      .then((res) => {
        setData(res);
      });
    }
  , []);
  
  const handlePayment = () => {
    // const order = await createOrder(params);

    
      console.log(data)

    const options = {
      key: "rzp_test_3SpvPC9jbjQ7oy", // Enter the Key ID generated from the Dashboard "rzp_test_3SpvPC9jbjQ7oy" process.env.RAZORPAY_ID_KEY
      amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      name: "Acme Corp",
      description: "Test Transaction",
      image: "/src/assets/logo/Logo&Typography_LightBG.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }

  return (
    
      <button className="bg-red-600 w-[600px] text-white text-xl tracking-wider px-4 py-2 rounded-lg hover:bg-red-800"
       onClick={handlePayment}>Make Payment</button>
  );
}

export default DisplayRazorpay;