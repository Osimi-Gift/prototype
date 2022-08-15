paypal.Buttons({
    style : {
        color: 'blue',
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '0.1'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
           URL:actions.redirect('http://localhost:63342/tutorial/paypal/success.html')
        })
    },
    onCancel: function (data) {
        window.location.replace("http://localhost:63342/tutorial/paypal/Oncancel.html")
    }
}).render('#paypal-payment-button');