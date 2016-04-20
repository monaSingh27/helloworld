var accounts=[];

function createAccount(account)

{
	accounts.push(account);
	return account;

}

function getAccount(username)
{ 
	var matchedAccount;

  for(var i=0;i<accounts.length;i++)
  {
     if(accounts[i].username === username)
     {
      matchedAccount = accounts[i];
     }
   }
     return matchedAccount;
  }

	/* use of forEach loop 

  accounts.forEach(function (account){
  
  if(account.username === username)
  {
  	matchedAccount = account;
}

  });

  return matchedAccount;
}
  */


function deposit(account,amount)
{ 
   //checking wheather the amount is in number format or not

    if(typeof amount === 'number')
    {
      account.balance+=amount;
    } 

    else
     {
      console.log('Deposit Falied! Amount is not in number format');
    }
	

}

function withdraw(account,amount)
{ 
    //checking wheather the amount is in number format or not
    if(typeof amount === 'number')
    {

    account.balance-=amount;
  }
  else
  {
    console.log('Withdraw Falied! Amount is not in number format');

  }

}

function getbalance(account)
{

	return account.balance;
}
 //Cloures

function createBalanceGetter(account)
{
  return function()
  {
    return account.balance;

  }
}
 // Cloures


 var bobAccount = createAccount({ 
      username: 'bob',
      balance: 100 

         });

deposit(bobAccount,2000);
console.log(getbalance(bobAccount));

withdraw(bobAccount,200);
console.log(getbalance(bobAccount));

var bobacc = getAccount('bob');
console.log(bobacc);
var getbobbal = createBalanceGetter(bobacc);
 console.log(getbobbal());



