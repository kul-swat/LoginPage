user_name="swati"
password="iscool"
 function press(){
     var usercheck = document.getElementById("usertext")
     var pwcheck = document.getElementById("pwtext")
     
    // if (usercheck.value == user_name && pwcheck.value == password){
    //      alert("Login successful")
    //  }else{
    //      alert("Login unsuccessful")
    //  } 
    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        body: JSON.stringify([usercheck.value, pwcheck.value]),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        if (json==true){
            alert("Login successful")
        }else{
            alert("Login unsuccessful")
        }


        
    });
 }
