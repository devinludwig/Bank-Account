var newAccount = {};
var checkingInterest = 0.01;
var savingsInterest = 0.04;
function BankAccount(userName, accountType, balance) {
  this.userName = userName;
  this.accountType = accountType;
  this.balance = parseFloat(balance);
  if(accountType === "checking"){
    this.interestRate = checkingInterest;
  } else if(accountType === "savings"){
    this.interestRate = savingsInterest;
  }
};

BankAccount.prototype.deposit = function(amount) {
  this.balance += parseFloat(amount);
  console.log("Adding:" + amount);
  console.log(this.balance);
};

BankAccount.prototype.withdrawal = function(amount) {
  this.balance -= parseFloat(amount);
  console.log("Subtracting:" + amount);
  console.log(this.balance);
};

BankAccount.prototype.compound = function(months) {
  var projectedBalance = 0;
  console.log(months);
  months = parseInt(months);
  console.log(months);
  projectedBalance =  1 + this.interestRate;
    console.log(projectedBalance);
  projectedBalance = Math.pow(projectedBalance, months);
    console.log(projectedBalance);
  projectedBalance = projectedBalance * this.balance;
  console.log(projectedBalance);
    return projectedBalance;
}


//UI Logic
$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val();
    var accountType = $("#account-type").val();
    console.log(name, initialDeposit)
    newAccount = new BankAccount(name, accountType, initialDeposit);
    console.log(newAccount);
    $('#balance').text(newAccount.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    // return newAccount;
  });
  $("form#deposit-withdrawal").submit(function(event){
    event.preventDefault();
    var deposit = $("input#deposit").val();
    var withdrawal = $("input#withdrawal").val();
    console.log(deposit);
    console.log(withdrawal);
    if (deposit != "") {
      newAccount.deposit(deposit);
    }
    if (withdrawal != "") {
      newAccount.withdrawal(withdrawal);
    }
    $('#balance').text(newAccount.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
  });
  $("form#projection-form").submit(function(event){
    event.preventDefault();
    var months = $("input#months").val();
    $('#projected').text('$' + newAccount.compound(months).toCurrency());
  });
});
