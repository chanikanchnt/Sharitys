OmiseCard.configure({
    publicKey: "pkey_test_5n25ayrybt8m94e2yfr"
})

var button = document.querySelector("#donateButton")
var form = document.querySelector("#donateForm")

button.addEventListener("click", (event) => {
    event.preventDefault()
    OmiseCard.open({
        amount: 100,
        currency: "THB",
        defaultPaymentMethod: "credit_card",
        onCreateTokenSuccess: (nonce) => {
            if (nonce.startsWith("tokn_")) {
                form.omiseToken.value = nonce;
            } else {
                form.omiseSource.value = nonce;
            }
          form.submit();
        }
    })
    
})