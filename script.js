function compute()
{
    // get the ammount
    var principal = document.getElementById("principal").value;
    console.log("Amount :"+ principal);
    if(principal == null || principal == '' || principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").select();
    }else{
        //get the rate
        var rate = document.getElementById("rate").value;
        console.log("rate :"+ rate);

        //get the years
        var years = document.getElementById("years").value;
        console.log("years : "+ years);

        // calculate the received ammount
        var interest = principal * years * rate /100;
        console.log("received ammount : "+ interest);

        // change the year formate 
        var year = new Date().getFullYear()+parseInt(years);
        console.log("year :"+ year);

        // display the result
        document.getElementById("result").innerHTML="If you deposit <span class ='yellow_background'>"+principal+"</span>,\<br\>"+
                                                    "at an interest rate of <span class ='yellow_background'>"+rate+"%</span>.\<br\>"+
                                                    "You will receive an amount of <span class ='yellow_background'>"+interest+"</span>,\<br\>"+
                                                    "in the year <span class ='yellow_background'>"+year+"</span>\<br\>"
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}