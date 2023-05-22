function validateForm(){
    
    var firstName= document.getElementById("firstName").value;
    // console.log(firstName);
    var lastName=document.getElementById("lastName").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirm password").value;
    var gender=document.getElementsByClassName("gender").value;

    if (firstName.length < 2 ) {
        // alert("Not a valid name");
        document.getElementById('nameSpan').innerHTML="**not a valid name**";
       document.getElementById('nameSpan').style.color="red";
       document.getElementById('nameSpan').style.fontWeigth="bolder";
        document.getElementById("nameSpan").style.visibility="visible";
        return false; 
    }
    else{
        document.getElementById("nameSpan").style.visibility="hidden";
        document.getElementById("lastnameSpan").style.visibility="hidden";
        if(lastName.length < 2){
           
            document.getElementById('nameSpan').innerHTML="**not a valid name**";
            document.getElementById('nameSpan').style.color="red";
            document.getElementById('nameSpan').style.fontWeigth="bolder";
            document.getElementById("lastnameSpan").style.visibility="visible";
            return false;

        }
        document.getElementById("lastnameSpan").style.visibility="hidden";

    }
   
    
    
    //Password validation
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirm password").value;
    if(password==""){
    // alert("Password cannot be empty");
       document.getElementById('passwordSpan').innerHTML="Password cannot be empty";
       document.getElementById('passwordSpan').style.color="red";
       document.getElementById('passwordSpan').style.font="bolder";
        document.getElementById("passwordSpan").style.visibility="visible";
        return false;
    }
    else if(password.length<5 || password.length>20){
        // document.getElementById("passwordSpan").style.visibility="hidden";
        // alert("Password must be of length greater than 5 an less than 20");
        document.getElementById('passwordSpan').innerHTML="greater than 5 and less than 10";
        document.getElementById('passwordSpan').style.color="red";
        document.getElementById('passwordSpan').style.font="bolder";
        document.getElementById("passwordSpan").style.visibility="visible";
        return false;
    }
    else if(password!=confirmPassword){
        document.getElementById("passwordSpan").style.visibility="hidden";
        document.getElementById('confirmpasswordSpan').innerHTML="Incorrect password";
        document.getElementById('confirmpasswordSpan').style.color="red";
        document.getElementById('confirmpasswordSpan').style.font="bolder";
        document.getElementById("confirmpasswordSpan").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("passwordSpan").style.visibility="hidden";
        document.getElementById("confirmpasswordSpan").style.visibility="hidden";
         //Email validation
        var email=document.getElementById("email").value;
        var pattern= /^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
        if(!pattern.test(email)){
        document.getElementById('emailSpan').innerHTML="Not a valid email";
        document.getElementById('emailSpan').style.color="red";
        document.getElementById('emailSpan').style.font="bolder";
            document.getElementById("emailSpan").style.visibility="visible";
            return false;
    
        }else{
            document.getElementById("emailSpan").style.visibility="hidden";
             //Phone number validation
            var phonenumber=document.getElementById("number").value;
            var numberPattern=/^[789]{1}[0-9]{9}$/;
            if(phonenumber==""){
                document.getElementById('phoneSpan').innerHTML="Phone number cannot be empty";
                 document.getElementById('phoneSpan').style.color="red";
                 document.getElementById('phoneSpan').style.font="bolder";
                // alert("Phone number cannot be empty");
                document.getElementById("phoneSpan").style.visibility="visible";
                return false;
            }
            document.getElementById("phoneSpan").style.visibility="hidden"
            if(isNaN(phonenumber)){
                document.getElementById('phoneSpan').innerHTML="Phone number is not valid";
                document.getElementById('phoneSpan').style.color="red";
                document.getElementById('phoneSpan').style.font="bolder";
                // alert("Enter a valid phone number");
                document.getElementById("phoneSpan").style.visibility="visible";
                return false;
            }
            document.getElementById("phoneSpan").style.visibility="hidden"
            if(phonenumber.length!=10){
                // alert("Phone nnumber can only be of 10 digits");
                document.getElementById('phoneSpan').innerHTML="Phone number is not valid";
                document.getElementById('phoneSpan').style.color="red";
                document.getElementById('phoneSpan').style.font="bolder";
                document.getElementById("phoneSpan").style.visibility="visible";
                return false;
            }
            document.getElementById("phoneSpan").style.visibility="hidden"
            if(!numberPattern.test(phonenumber)){
                // alert("Enter a valid phone number");
                document.getElementById('phoneSpan').innerHTML="Phone number is not valid";
                 document.getElementById('phoneSpan').style.color="red";
                 document.getElementById('phoneSpan').style.font="bolder";
                document.getElementById("phoneSpan").style.visibility="visible";
                return false;
        
            }else{



              document.getElementById("phoneSpan").style.visibility="hidden";


              const jsonData={
                firstName: document.getElementById("firstName").value,
                lastName:document.getElementById("lastName").value,
                password:document.getElementById("password").value,
                // confirmPassword:document.getElementById("confirm password").value
                email:document.getElementById('email').value,
                phonenumber:document.getElementById('number').value

                // gender:document.getElementsByClassName("gender").value
              }
              var stringData=JSON.stringify(jsonData);
              localStorage.setItem("DataInserted",stringData);
              

              var getData=localStorage.getItem("DataInserted");
              var parsed=JSON.parse(getData);
              var objectfinal=Object.values(parsed);
              console.log(parsed);
              console.log(objectfinal);
              var tbody=document.createElement("tbody");
              var tr=document.createElement("tr");
              for(i=0;i<5;i++){
                var td=document.createElement("td");
                  td.innerText=objectfinal[i];
                  console.log(td.value);
                    tr.appendChild(td);
              }
              tbody.appendChild(tr);
             
            }
        }
    }
}
//         function makeTable(FirstName,LastName,Password,Email,Gender,Phonenumber){
                
//                 let arr = [`${FirstName}`,`${LastName}`,`${Password}`,`${Email}`,`${Phonenumber}`];
//                 console.log(LastName);
//                 console.log(arr[1]);
//                 const tbody =document.getElementById("tbody");
//                 // var tbody=document.createElement("tbody");
//                 var tr =document.createElement("tr");
//                 for(i=0;i<arr.length;i++){
//                     var td=document.createElement("td");
//                     console.log(i);         
//                     td.innerHTML=arr[i];
//                     tr.appendChild(td);
//                     // tbody.appendChild(tr);

//                   };
//                 //   document.getElementsByClassName('tableContainer').style.visibility="visible";
//                   tbody.appendChild(tr);

//                 }
