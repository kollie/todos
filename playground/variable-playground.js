var person = {
	name: 'Israel',
	age: 22
};

function updatePerson (obj) {
	obj.age = 24
}
updatePerson(person);
console.log(person);

var grades = [70, 25];

function addGrades (gradesArr) {
	gradesArr.push(45);
	debugger;
	//grades = [88, 90, 60];
}

addGrades(grades);
console.log(grades);