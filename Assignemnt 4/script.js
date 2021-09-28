var names = new Array();
names[0]="Kunal"
names[1]="Jhon"
names[2]="Ajay"
names[3]="jhonny"
names[4]="rajesh"
names[5]="Jay"
names[6]="Mayur"
names[7]="Rohan"
names[8]="jayesh"
names[9]="Shree"
names[10]="Jeet"

for (var i = 0; i < names.length; i++) {
	if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j') {
		console.log("Goodby " + names[i]);
	}
	else{
		console.log("hello "+ names[i]);
	}
}