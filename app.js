// UI Vars 
const button = document.querySelector('.button');
const emailContent = document.querySelector('.email');
const message = document.querySelector('.message');
const inputDiv = document.querySelector('.input-text')

button.addEventListener('click', function(){
   let email = emailContent.value;

   if(validateEmail(email) === false){
       setMessage('Please provide a valid email address','hsl(354, 100%, 66%)');
       emailContent.style.borderColor= 'hsl(354, 100%, 66%)';
       emailContent.value = '';
       emailContent.placeholder = 'example@email/com'
       inputDiv.classList.add("black-placeholder")
   }else{
       message.innerHTML = '';
       emailContent.style.borderColor= 'hsl(223, 87%, 63%)';
       setTimeout(() => {
        emailContent.value = '';
        emailContent.placeholder = ''
        setMessage('Thankyou for subscribing to our newsletter','hsl(223, 87%, 63%)');
       }, 1500);
   }
})

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}