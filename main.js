document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('numbers-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let clientISN = document.getElementById('client-isn').value;
        let serverISN = document.getElementById('server-isn').value;

        // If input is missing for either box, 
        // send a message and stop function
        
        const isClientEmpty = clientISN.trim() === '';
        const isServerEmpty = serverISN.trim() === '';
        

        if(isClientEmpty == true && isServerEmpty == true) {
            console.log('Client ISN and Server ISN are both missing');
            alert('You forgot to enter a number for the Client and Server!')
        } else if(isClientEmpty == true) {
            console.log('Client ISN input is missing');
            alert('You forgot to enter a number for the Client ISN!');
            return;
        } else if(isServerEmpty) {
            console.log('Server ISN input is missing');
            alert('You forgot to enter a number for the Server ISN!');
            return;
        }

        const synCalc = document.getElementById('syn-calculation');
        const synAckCalc = document.getElementById('syn-ack-calculation');
        const ackCalc = document.getElementById('ack-calculation');
        
        const synAckCurrent = Number(clientISN) + 1;

        synCalc.innerHTML = `Client: Seq = ${clientISN}`;
        synAckCalc.innerHTML = `Server: Seq = ${serverISN} and Ack = ${synAckCurrent}`;
        ackCalc.innerHTML = `Client: Seq = ${synAckCurrent} and Ack = ${Number(serverISN) + 1}`;

        // For testing
        console.log(`The Client ISN is ${clientISN}. The Server ISN is ${serverISN}`);

    });
});

