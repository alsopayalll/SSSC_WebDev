const studentName = prompt("Enter student name : ");
const marks=0;
let totalMarks=0;
let highestMarks=0;
let lowestMarks=100;
console.log(`Result for student : ${studentName.toUpperCase()}`);
for(let i = 1; i<=5;i++){
    let marks = Number(prompt(`Enter marks for subject ${i}`));
    if(marks>=0 && marks<=100){
        console.log(`\nSubject ${i} marks : ${marks}`);
        totalMarks= totalMarks+marks;
    }
    if(marks>highestMarks) highestMarks=marks;
    if(marks<lowestMarks) lowestMarks= marks;
    console.log(`Grade for subject ${i}`);
    if(marks>0 && marks<30) console.log("F");
    else if(marks>=30 && marks<40) console.log("E");
    else if(marks>=40 && marks<50) console.log("D");
    else if(marks>=50 && marks<60) console.log("C");
    else if(marks>=60 && marks<70) console.log("B");
    else if(marks>=70 && marks<80) console.log("B+");
    else if(marks>=80 && marks<90) console.log("A");
    else console.log("A+");

}
console.log("===========================");
console.log(`Total marks : ${totalMarks}`);

let averageMarks = totalMarks/5;
console.log(`Average Marks : ${averageMarks}`);

let percentage = (totalMarks/500)*100;
console.log(`Total Percentage : ${percentage} %`);

console.log(`Highest Marks : ${highestMarks}`);
console.log(`Lowest Marks : ${lowestMarks}`);
console.log("===========================");


const day = Number(prompt("Enter any number from 1(Monday) to 7(Sunday) for the quote "));
switch(day){
    case 1:
        console.log("Slow progress is better than no progress.");
        break;
    case 2:
        console.log("All you need is the plan, the road map, and the courage to press on to your destination.");
        break;
    case 3:
        console.log("Believe you can and you're halfway there.");
        break;
    case 4:
        console.log("Mindset shapes success.");
        break;
    case 5:
        console.log("We are who we make ourselves to be.");
        break;
    case 6:
        console.log("Your lack of dedication is an insult to those who believe in you.");
        break;
    case 7:
        console.log("It is during our darkest moments that we must focus to see the light.");
        break;
    default:
        console.log("You can do it!")
}
