var newAccount = {}
function BankAccount(userName,initialDeposit,balance) {
  this.userName = userName;
  this.initialDeposit = parseFloat(initialDeposit);
  this.balance = parseFloat(initialDeposit);
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


//UI Logic
$(document).ready(function(){
  var balance = 0;
  var account = {};
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val();
    console.log(name, initialDeposit)
    newAccount = new BankAccount(name, initialDeposit, initialDeposit);
    console.log(newAccount);
    $('#balance').text('$' + newAccount.balance);
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
    console.log(newAccount.balance);
    $('#balance').text('$' + newAccount.balance.toFixed(2));
  });
});
