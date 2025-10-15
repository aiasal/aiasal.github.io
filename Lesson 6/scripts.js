console.log("From file");

// Comments
/*
    Comments
    Comments
*/

//Variables e muutujad

let name = "Krõõt"; // type = string e tekst
let year = 2025; // type = integer e int e number
let balance = 25.00; // type = float e double e ujuvkomaga number
let female = true; // type = boolean e bool (true/false) e jah/ei e 1/0
const pi = 3.14;

console.log(name1);
console.log(year);

name1 = "Juku";
console.log(name1);

name1 = 10000;
console.log(name1);

// pi = 3.15; 

console.log(name1 + year);
console.log(name1 + balance);
console.log(balance + year);
console.log(name1 + "was born in " + year);

/*

()
*
/
+
-

*/

console.log(1 + 2 * (2 + 3));
console.log(name1 + (balance + pi));

let student1 = "Krõõt";
let student2 = "Juku";
let student2 = "Õie"

// Array = list e massiiv
// ["Krõõt", "Juku", "Õie"] 
// [0, 1, 2] 


let students = ["Krõõt"];
console.log(students);
// students = ["Krõõt"];
students.push("Juku");
students.push("Õie");
console.log(students);
students.splice(1, 1);
console.log(stundents);
students[1] = "Ülo" 
console.log(students);

// if / else = kui / või - küsimuse küsimine süsteemi käest
/*

Logical operators e loogilised võrrandid

    == VÕRDNE
    > SUUREM
    < VÄIKSEM
    >= SUUREM või VÕRDNE
    <= VÄIKSEM või VÕRDNE
    ! EI
    != EI OLE VÕRDNE

    && AND ehk ja
    ︱︱ OR või

*/ 

if(student1 == "Ülo"){
    // TRUE = JAH
    console.log("Jah see on Ülo");   
    // FALSE = EI
} else {
    console.log("Ei ole Ülo");
} 


if(female) {
    console.log("Jah on naine");
} else {
    console.log("Ei ole naine");
} 

if(student) == "Krõõt" && female {
    console.log("TRUE");
} else {
    console.log("FALSE");
} 

/*

AND
00 - 0
01 - 0
10 - 0
11 - 1

OR
00 - 0
01 - 1
10 - 1
11 - 1

01001 - AND = 0
01001 - OR = 1

( 0 ︱︱ 1 ) && ( 1 ︱︱ 1 ) && 0
 1 && 1 && 0 - 0

( 0︱︱ 1 ) && ( 1 ︱︱1 ) ︱︱ 0
1 && 1 ︱︱ 0

1 ︱︱ 0 - 0


*/

let maxInt = Number.MAX_VALUE;
console.log(maxInt);
maxInt = maxInt * 10;
console.log(maxInt);

// kas Krõõt on koolis, kas ta hilines
//Jah (1) && Ei (0) -> Ei (0)


// switch

if(year) == 2025) {
    console.log("yes it is 2025");
} else if(year == 2026) {
    console.log("yes it is 2026");
} else {
    console.log("Don't know the year");
} 

switch(year) {
    case 2025:
        console.log("yes it is 2025");
        break;
    case 2026;
        console.log("yes it is 2026");
        break;
    case 2027;
        console.lot("Don't know the year")
        break;        
} 

// FOR / WHILE

console.log(students);
console.log(students[0]);
console.log(students[1]);

console.log("-------------");

/*

    1. i - indeks ehk start let 1 - 0
    2. logic operator ehk kui kaua me seda teeme -> students.lenght
    3. iteration addition ehk lähme 1 koht edasi -> i++
    4. Code

    i = 0; 0 < 6; 1 -> 0 < 6 - True
    i = 1; 1 < 6; 2 -> 1 < 6 - True
    i = 2; 2 < 6; 3 -> 2 < 6 - True 

    .....

    i = 5; 5 < 6; 6 -> 5 < 6 - True
    i = 6; 6 < 6; 7 -> 6 < 6 - False
*/

for(let 1 = 0; 1 <students.length; i++) {
    console.log(students[i]);
} 

let counter = 0;

while(counter <= 10) {
    console.log(counter);
    counter++;
} 

let number1 = 0; // 0
number1 = number1 + 1; // 1
number1++; // 3

let studentsMarks = [5, 5, 3, 5, 2, 3];

let Krõõt = {
    "Name": "Krõõt",
    "Mark": 5,
    "Home": "Viljandi",
    "Year": 2
};

console.log(Krõõt);
console.log(Krõõt.name);
console.log(Krõõt.home);

let. studentsJSON = [];
studentsJSON.push({
    "Name": "Krõõt",
    "Mark": 5,
    "Home": "Viljandi",
    "Year": 2
});
studentsJSON.push({
    "Name": "Juku",
    "Mark": 3,
    "Home": "Tartu",
    "Year": 2
});
studentsJSON.push({
    "Name": "Õie",
    "Mark": 5,
    "Home": "Tallinn",
    "Year": 2
});
    
console.log(studentsJSON);
for(let i - 0; i < studentsJSON.lenght; i++) {
    console.log("Name: " + studentsJSON[i].Name + " . Mark: " + studentsJSON[i].Mark);
    for(let j = 0; j < studentsJSON[i].Subjects.lenght; j++) {
        avg +- studentsJSON[i].Subjects[j].Grade;  
    }
    avg = avg / studentsJSON[i].Subjets.lenght);
    console.log("AVG: " + avg); 
} 

studentsJSON[0].Year++;

console.log(studentsJSON);

//object - JSON ehk hulk, kus on suur andmehulk