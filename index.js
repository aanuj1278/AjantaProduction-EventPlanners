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
    window.location.href=base_url+"/AjantaProduction-EventPlanners/index.html";
  }else if(pageName == 'aboutUs'){
    window.location.href=base_url+"/AjantaProduction-EventPlanners/aboutUs.html";
  }else if(pageName == 'services'){
    window.location.href=base_url+"/AjantaProduction-EventPlanners/services.html";
  }else if(pageName == 'gallery'){
    window.location.href=base_url+"/AjantaProduction-EventPlanners/gallery.html";
  }else if(pageName == 'venues'){
    window.location.href=base_url+"/AjantaProduction-EventPlanners/venues.html";
  }else if(pageName == 'contactUs'){
    window.location.href=base_url+"/AjantaProduction-EventPlanners/contactUs.html";
  }
}
function readMoreButton(){
  let base_url = window.location.origin;
  window.location.href=base_url+"/AjantaProduction-EventPlanners/aboutUs.html";
}
function showMoreButton(){
  let base_url = window.location.origin;
  window.location.href=base_url+"/AjantaProduction-EventPlanners/gallery.html";
}
function bookMyWeddingDateButton(){
  let base_url = window.location.origin;
  window.location.href=base_url+"/AjantaProduction-EventPlanners/contactUs.html";
}
function scrollDownPage(){
  window.scrollTo(0,650)
}

let images = document.getElementsByClassName("img");

setTimeout(() => {
  if(images.length !=0){
    Array.from(images).forEach(myFunction);
  }
}, 1000);
function myFunction(image, index) {
  image.onclick = function () {
      event.stopPropagation() //important to not call the clearActiveImage() on every click
      if(images[index].classList.contains("active")){
          images[index].classList.remove("active")
      } else {
          clearActiveImage(index)
          images[index].classList.add("active")
      }
  }
}
function clearActiveImage() {
  if(images.length != 0){
    Array.from(images).forEach(image =>{
        image.classList.remove("active");
    });
  }
}
document.addEventListener("click", function(){
    clearActiveImage()
})


// gallery section JS
let count = 0;
setTimeout(() => {
  let photos = Array.from(document.getElementsByClassName("photo"));
  photos.forEach((photo) => {
      count++;
      if (count % 2) {
          photo.classList.add("even");
      }
  });
}, 1000);

document.addEventListener('scroll',()=>{
  let photos = Array.from(document.getElementsByClassName("photo"));
  photos.forEach(checkPosition);
})

function checkPosition(photo) {
  let photoWrapper = document.getElementById("photoWrapper");
    if (photo.getBoundingClientRect().right - 4 <= 0) {
        photo.remove();
        photoWrapper.append(photo);
        photoWrapper.scrollLeft = 0;
        return;
    }
}

function infiniteScroll() {
  let photoWrapper = document.getElementById("photoWrapper");
  photoWrapper.scrollLeft++;
  requestAnimationFrame(infiniteScroll);
}

setTimeout(() => {
  infiniteScroll();
}, 1000);
