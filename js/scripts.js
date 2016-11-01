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
  };
};

BankAccount.prototype.deposit = function(amount) {
  this.balance += parseFloat(amount);
};

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= parseFloat(amount);
};

BankAccount.prototype.compound = function(months) {
  projectedBalance = this.balance * Math.pow((1 + this.interestRate), months)
    return projectedBalance;
};


//UI Logic
$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();
    $('#current-balance').show();
    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val();
    var accountType = $("#account-type").val();
    newAccount = new BankAccount(name, accountType, initialDeposit);
    $('#balance').text(newAccount.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    $('#account-id').text(newAccount.userName + " " + newAccount.accountType);
  });
  $("form#deposit-withdrawal").submit(function(event){
    event.preventDefault();
    var deposit = $("input#deposit").val();
    var withdrawal = $("input#withdrawal").val();
    if (deposit != "") {
      newAccount.deposit(deposit);
    }
    if (withdrawal != "") {
      newAccount.withdraw(withdrawal);
    }
    $('#balance').text(newAccount.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    $("input#deposit").val("");
    $("input#withdrawal").val("");
  });
  $("form#projection-form").submit(function(event){
    event.preventDefault();
    $('#projected').show();
    var months = $("input#months").val();
    $('#projected').text(newAccount.compound(months).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
  });
});
