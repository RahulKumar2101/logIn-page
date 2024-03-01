const underLine= document.querySelector('.underline');
const nameField= document.querySelector('.namefield');
const signUpBtn= document.querySelector('.signUpBtn');
const signInBtn= document.querySelector('.signInBtn');
const title= document.querySelector('.title');
const text = document.querySelector('span');

signUpBtn.addEventListener('click',()=>{
    title.innerHTML='SignIn';
    nameField.style.maxHeight="0";
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underLine.style.transform='translateX(35px)';
    text.innerHTML="Forgot Password"
});

signInBtn.addEventListener('click',()=>{
    title.innerHTML='SignUp';
    nameField.style.maxHeight="60px";
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underLine.style.transform='translateX(0px)';
    text.innerHTML='Password Suggestion'
})