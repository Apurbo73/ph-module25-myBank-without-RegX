 //handle deposit button

 document.getElementById('Deposit-button').addEventListener('click',function(){
 
    
  //get amount depositted
const depositInput= document.getElementById('Deposit-input');
const newDepositAmount =depositInput.value;
if(newDepositAmount.length==0)
{
    alert('Enter amount to deposit');
}

const depositTotal= document.getElementById('Deposit-total');


//update total deposit

const previousDepositAmount = depositTotal.innerText;
const newDepositTotal = parseFloat(previousDepositAmount) +   parseFloat(newDepositAmount);
 
depositTotal.innerText= newDepositTotal ;
//clear deposit input field
depositInput.value= '';




//update current balance

const balance= document.getElementById('Current-balance');
const previousBalance= balance.innerText;

const newCurrentBalance= parseFloat(previousBalance) + parseFloat(newDepositAmount);
balance.innerText= newCurrentBalance;



});
 


///handle withdraw button

document.getElementById('Withdraw-button').addEventListener('click',function(){

 //get amount withdrawn
 const withdrawInput= document.getElementById('Withdraw-input');
 const newWithdrawAmount =withdrawInput.value;
 if(newWithdrawAmount.length==0)
{
    alert('Enter amount to withdraw');
}
 const withdrawTotal= document.getElementById('Withdraw-total');

 

 //previous withdraw amount

const previousWithdrawAmount= withdrawTotal.innerText;

//new total withdraw amount
const newWithdrawTotal =parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);

withdrawTotal.innerText= newWithdrawTotal;

//update balance after withdrawal


const balanceAfterWithdraw= document.getElementById('Current-balance');
const currentBalance= balanceAfterWithdraw.innerText;

const updateCurrentBalance =parseFloat(currentBalance)-parseFloat(newWithdrawAmount);

balanceAfterWithdraw.innerText= updateCurrentBalance;
withdrawInput.value= '';


})