
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#Phone');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(event)=>{
    
    validate();
    if(isFormValid()==true){
        form.submit();
    }
    else{
        event.preventDefault();
    }
});

function isFormValid(){
    const inputcontainers = form.querySelectorAll('.form-control ');
    let result=true;
    inputcontainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
} 
function validate(){
    //username
    if(username.value.trim()==""){
        setError(username,'username cannot be blank');
    }
    else if(username.value.trim().length <5 || username.value.trim().length >20){
        setError(username, 'username must be min 5 and max 20 characters ');
    }
    else if(!isNaN(username.value)){
        setError(username,'** Please enter valid user name');
    }
    else{
        setSuccess(username);
    }

//email
    if(email.value.trim()==""){
        setError(email,'**please provide Email Id');
    }
    else if(isEmailValid(email.value)){
        setSuccess(email);
    }
    else{
        setError(email,'Please enter Valid Email id');
    }

    // phone number
    if(phone.value.trim()==''){
        setError(phone,'**Please Provide Phone Number');
    }
    else if(phone.value.trim().length!=10){
        setError(phone,'Phone Number must be 10 digits only');
    }
    else if(phone.value.trim()=='1234567890' || phone.value.trim()=='0000000000'){
        setError(phone,'**Please enter valid phone number');
    }
    else{
        setSuccess(phone);
    }
   
    //password
    if(password.value.trim()==""){
        setError(password,'** Please create password');
    }
    else if (password.value.trim().length<8 || password.value.trim().length>20){
        setError(password,"Password must be min 8 and max 20 characters");
    }
    else if (password.value.trim()=='password' || password.value.trim()=='PASSWORD' || password.value == username.value){
        setError(password,'**Please create strong password');
    }
    else{
        setSuccess(password);
    }

    //confirm password
    if(cpassword.value.trim()==''){
        setError(cpassword,'**Please confirm password');
    }
    else if(cpassword.value !== password.value){
        setError(cpassword,"Password does not match");
    }
    else{
        setSuccess(cpassword);
    }
}

function setError(element,errormsgs){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const small = parent.querySelector('small');
    small.textContent = errormsgs;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(emailid){
    const atSymbol = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return atSymbol.test(emailid);
}



//more email validate
/*const isEmail = (emailval) =>{
    var atSymbol = emailval.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailval.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot===emailval.length-1) return false;
    return true;
}

// define validate function
const validate = () =>{
    
    const usernameval = username.value.trim();
    const emailval =email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    //validate  username
    if(usernameval === ""){
        setErrorMsg(username,'username cannot be blank');
    }
    else if( usernameval.length <= 4){
        setErrorMsg(username, 'please enter username min of 5 characters')
    }
    else{
        setSuccessMsg(username);
    }
     //validate email
     if(emailval === ""){
        setErrorMsg(email,'email cannot be blank');
    }
    else if( isEmail(emailval)){
        setErrorMsg(emailval,'Not valid Email Id')
    }
    else{
        setSuccessMsg(email);
    }
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
   
}*/