

    const form = document.getElementById('form');
    const statusDiv = document.getElementById('status');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const yourName = document.getElementById('name').value;
      const yourEmail = document.getElementById('email').value;
      const yourMessage = document.getElementById('message').value;

      const templateParams = {
        from_name: yourName,
        from_email: yourEmail,
        message: yourMessage,
      };

      emailjs.send('service_bm7y268', 'template_xvq80so', templateParams)
        .then(function(response) {
          statusDiv.textContent = 'Email sent successfully!';
          statusDiv.style.color = 'green';
          setTimeout(() => {
            statusDiv.textContent = '';
          }, 4000);

          form.reset();
        }, function(error) {
          statusDiv.textContent = 'There was an error sending the email.';
          statusDiv.style.color = 'red';
          setTimeout(() => {
            statusDiv.textContent = '';
          }, 4000);
        });
    });

