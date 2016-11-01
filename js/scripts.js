function BankAccount(userName,initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}

//UI Logic
$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val();
    alert("Submission");
    console.log(name);
    console.log(initialDeposit);
  });
  $("form#deposit-withdrawal").submit(function(){

  });
});
