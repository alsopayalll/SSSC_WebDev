let input = document.getElementById("marks");
let result = document.getElementById("result");
let gradeBtn = document.getElementById("seeGrade");

gradeBtn.addEventListener("click", (e)=>{
    let marks = input.value;
    if(marks>=90 && marks<=100) {
        result.innerHTML = `Your grade is A`;
    }
    else if(marks>=75 && marks<90){
        result.innerHTML = `Your grade is B`;
    }
    else if(marks>=60 && marks<75){
        result.innerHTML = `Your grade is C`;
    }
    else if(marks>=30 && marks<60){
        result.innerHTML = `Your grade is D`;
    }
    else if(marks<30 && marks>=0){
        result.innerHTML = `FAIL`;
    }
    else result.innerHTML = `Number out of range. Kindly enter correct marks.`;
});