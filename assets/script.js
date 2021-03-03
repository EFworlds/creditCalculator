function calculation(){       

    let sw = document.querySelector('[name="radio"]:checked').value;
    let ratio = 1000; 
     switch(sw){
       case "1":         
         break;

       case "2":            
         ratio = 10000;
         break;

       case "3":           
         ratio = 100000;
         break;
     }     
     
     let creditAmount = ratio * (+document.getElementById('amount').value);

     if(creditAmount >= 100000){
         var x = document.getElementById('term').min = "5";                  
     }else{
       var x = document.getElementById('term').min = "1";              
     }

    document.getElementById('rangeValue').innerHTML = creditAmount;
    document.getElementById('interestValue').innerHTML = document.getElementById('interest').value;
    let creditTermPerMonth = (+document.getElementById("term").value) * 12;
    document.getElementById('termValue').innerHTML = creditTermPerMonth;

    let interestPerMonth = parseFloat(document.getElementById("interest").value) / 100 / 12;          

    let y = Math.pow( 1 + interestPerMonth, creditTermPerMonth);
    
     let paymentRatio = (y * interestPerMonth) / (y -1);       
     
     let monthlyPayment = creditAmount * paymentRatio;  
     
     let fullPayment = monthlyPayment * creditTermPerMonth;
         
     payment.innerHTML = monthlyPayment.toFixed(2);
     total.innerHTML = (fullPayment).toFixed(2);
     totalinterest.innerHTML = (fullPayment-creditAmount).toFixed(2); 
}