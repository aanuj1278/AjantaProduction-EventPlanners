function sendEmail() {
    console.log('OUTPUT : email called');
    let fromName = document.getElementById('form4Example1').value;
    let fromEmail = document.getElementById('form4Example2').value;
    let subject = document.getElementById('form4Example3').value;
    let phoneNumber = document.getElementById('form4Example5').value;
    let fromMessage = document.getElementById('form4Example4').value;


    
    emailjs.init({
        publicKey: 'WJcVfezltZZ19ymWE',
        blockHeadless: true,
        blockList: {
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          watchVariable: 'aanj1278@gmail.com',
        },
        limitRate: {
          id: 'app',
          throttle: 10000,
        },
      });


        var templateParams = {
            from_name: fromName,
            to_name : 'Ajanta wedding planners',
            message : fromMessage,
            from_email : fromEmail,
            phone_number : phoneNumber
          };
          
          emailjs.send('service_zg45zpn', 'template_vivef54', templateParams).then(
            (response) => {
                alert('Your mail is sent!');
                document.getElementById('form4Example1').value = '';
                document.getElementById('form4Example2').value = '';
                document.getElementById('form4Example3').value = '';
                document.getElementById('form4Example5').value = '';
                document.getElementById('form4Example4').value = '';
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
}

// window.addEventListener('scroll', function (evt) {
//   console.log('OUTPUT : x axis->',screen.width);
//     if (window.scrollY == 0) {
//       console.log('OUTPUT : 51');
//       let ele = document.getElementById('header');
//         if(screen.width > 768){
//           console.log('OUTPUT : 54')
//           ele.style.removeProperty("background-color"); 
//         }
//     }
//     if(window.scrollY >= 200){
//       console.log('OUTPUT : 59')
//         let ele = document.getElementById('header');
//         ele.style.setProperty("background-color", "black");
//     }
//   });