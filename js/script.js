
document.getElementById('button-login').addEventListener('click', function (event){
    event.preventDefault();



    // get the number and pin

    const getnumber = document.getElementById('input-number').value;
    console.log(getnumber);
    
    const getpin = document.getElementById('input-pin').value;
    console.log(getpin);
    

    if(getnumber === '5' && getpin === '4'){
        console.log('you are login');
        window.location.href = '/home.html'
        
    }
    else{
        alert('you entered wrong email or password')
        
    }

    
})