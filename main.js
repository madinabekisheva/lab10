let lab1 = [5, 5, 0, 0, 5, 0, 10];
let lab2 = [4, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 9, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let quiz1 = [34];

function get_sum(lab) {
	let sum = 0;
	for (let i = 0; i < lab.length; i++) {
		sum += lab[i];
	}
	return sum;
}

function main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1){
	let labs = [lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1];
	for (let i = 0; i < labs.length; i++) {
		lab_sum = get_sum(labs[i]);
		console.log(lab_sum);
	}
}
main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1);