function myPayroll(){
	var basicSalary = document.getElementById('basicSalary').value;
	var coeSalary = document.getElementById('coeSalary').value;
	var allowance = document.getElementById('allowance').value;
	var salary;
	if(coeSalary > 5){
		salary = parseInt(basicSalary) * parseInt(coeSalary);
	} else {
		salary = parseInt(basicSalary) * parseInt(coeSalary)
		 + parseInt(allowance);
	}
	if(salary < 5000000){
		document.getElementById('salaryWarning').style.color = 'red';
		document.getElementById('salaryWarning').innerHTML = 'Ban can co gang hon!';
	}else if(salary > 30000000){
		document.getElementById('salaryWarning').style.color = 'blue';
		document.getElementById('salaryWarning').innerHTML = 'Ban qua giau!';
	}else{
		document.getElementById('salaryWarning').innerHTML = '';
	}
	document.getElementById('salaryPayroll').innerHTML = salary;
}