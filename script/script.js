const qrinput = document.getElementById('qr-input');
const qrbtn = document.getElementById('qr-button');
const qrimg = document.getElementById('qr-img');


qrbtn.addEventListener('click', () => {
    const inputValue = qrinput.value;
    
    if (!inputValue) {
        alert('Please enter a valid URL');
        return;
    } else {
        qrimg.src =
          `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR Code for ${inputValue}`;
    }
})
