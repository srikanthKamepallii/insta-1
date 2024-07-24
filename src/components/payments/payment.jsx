// import QRCode from 'qrcode.react';
// import './payment.css';
// export function Payment() {
//     function generateQRCode() {
//         // Get the value from the input field
//         var amount = document.getElementById("amount").value;
//         if (amount) {
//             // Clear previous QR code
//             document.getElementById("qrcode").innerHTML = "";
//             // Generate the QR code
//             new QRCode(document.getElementById("qrcode"), amount);
//         } else {
//             alert("Please enter an amount.");
//         }
//     }
//     return (
//         <div>
//             <h2>Enter Amount</h2>
//             <input type="number" id="amount" placeholder="Enter amount" />
//                 <button onclick={()=>{generateQRCode()}}>Pay</button>
//                 <div id="qrcode"></div>

//         </div>
//     )
// }

//====================================================


// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
// import './payment.css';

// export function Payment() {
//     const [amount, setAmount] = useState('');
//     const [showQRCode, setShowQRCode] = useState(false);

//     const handleInputChange = (e) => {
//         setAmount(e.target.value);
//         setShowQRCode(false);
//     };

//     const handlePayClick = () => {
//         if (amount) {
//             setShowQRCode(true);
//         } else {
//             alert("Please enter an amount.");
//         }
//     };

//     return (
//         <div>
//             <h2>Enter Amount</h2>
//             <input 
//                 type="number" 
//                 id="amount" 
//                 value={amount}
//                 onChange={handleInputChange}
//                 placeholder="Enter amount" 
//             />
//             <button onClick={handlePayClick}>Pay</button>
//             {showQRCode && <QRCode value={amount} />}
//         </div>
//     );
// }
//==============================================================


import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './payment.css';

export function Payment() {
    const [amount, setAmount] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const handleInputChange = (e) => {
        setAmount(e.target.value);
        setShowQRCode(false);
    };

    const handlePayClick = () => {
        if (amount) {
            setShowQRCode(true);
        } else {
            alert("Please enter an amount.");
        }
    };

    return (
        <div>
            
            {!showQRCode && (
                <>
                <h2>Enter Amount</h2>
                    <input 
                        type="number" 
                        id="amount" 
                        value={amount}
                        onChange={handleInputChange}
                        placeholder="Enter amount" 
                    />
                    <button onClick={handlePayClick}>Pay</button>
                </>
            )}
            {showQRCode && <QRCode value={amount} />}
        </div>
    );
}
