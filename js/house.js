var amounts = [];
var names = [];
var total = 0;

function deposit(amount,name){
	if (amount + total < 0) {
		throw new Error('Not enough balance for ${name}');
	}

	amounts.push(amount);
	names.push(name);
	total +=amount;
}

function print(){
	var result = '';
	for(var i=0; i < amounts.length; i++){
		console.log(`${amounts[i] > 0 ? '입금' : '출금'}\t${names[i]}\t${amounts[i]}`);
	}
	console.log(`잔액:\t${total}`);
}

try{
	deposit(100, "월급");
	deposit(200, "용돈");
	deposit(-150, "월세");
	deposit(-300, "보험료");
} catch (e) {
	console.log(e);
}

print();

/**
Error: Not enough balance for 보험료 ...
입금 월급 100
입금 용돈 200
출금 월세 -150
잔액: 150
**/