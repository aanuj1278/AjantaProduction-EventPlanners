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
function redirectPage(event){
  let pageName= event.currentTarget.dataset.id;
  let base_url = window.location.origin;
  if(pageName == 'home'){
    window.location.href=base_url+"/index.html";
  }else if(pageName == 'aboutUs'){
    window.location.href=base_url+"/aboutUs.html";
  }else if(pageName == 'services'){
    window.location.href=base_url+"/services.html";
  }else if(pageName == 'gallery'){
    window.location.href=base_url+"/gallery.html";
  }else if(pageName == 'venues'){
    window.location.href=base_url+"/venues.html";
  }else if(pageName == 'contactUs'){
    window.location.href=base_url+"/contactUs.html";
  }
}