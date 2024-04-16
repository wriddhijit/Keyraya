import Razorpay from "razorpay";

export async function displayRazorpay(){

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res) {
        alert('Razorpay SDK failed to load. are you Online?')
    }

    const data = await fetch('localhost', { method: 'POST'}).then((t) => t.json())

    console.log(data)

    var options = {
        key: process.env.RAZORPAY_ID_KEY  , // Enter the Key ID generated from the Dashboard "rzp_test_3SpvPC9jbjQ7oy"
        amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: data.currency,
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        name: "Acme Corp",
        description: "Test Transaction",
        image: "/src/assets/logo/Logo&Typography_LightBG.png",        
        handler: function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        prefill: {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open()

}

function loadScript(src){

    return new Promise((resolve) => {

    const script = document.createElement('script')
    script.src = src

    script.onload = () => {
        resolve(true)
    }
    script.onerror = () => {
        resolve(false)
    }
    document.body.appendChild(script)

    })   

}