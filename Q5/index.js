//Question:  Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well? 

//  Live Project link:
// https://replit.com/@NehaShanbhag1/MediumorchidCompetentLint?__cf_chl_jschl_tk__=pmd_15d025c3980d0b8f29a76ae1e759633d3ceec9f6-1629115446-0-gqNtZGzNAg2jcnBszQli#index.js

var readlineSync = require('readline-sync');

 var student=[
   {
     name:"",
     unitTest:"",
     preFinal:"",
     final:"",

   },
   {
     name:"",
     unitTest:"",
     preFinal:"",
     final:"",
   },
   { name:"",
     unitTest:"",
     preFinal:"",
     final:"",
   },
   { name:"",
     unitTest:"",
     preFinal:"",
     final:"",
   },
   { name:"",
     unitTest:"",
     preFinal:"",
     final:"",
   },

  ];

  var max=student[0];
  let sumforAverage=0;

  function studentNo(){

    for(i=0;i<student.length;i++){

      var currentStudent=student[i];
      scanMark(currentStudent,i);
    }
    unit();
    pre();
    finals();
  }

function scanMark(currentStudent,i){

  currentStudent.name=readlineSync.question("Enter name of student"+(i+1)+":");
  currentStudent.unitTest=readlineSync.question("Enter Unit Test marks: ");
  currentStudent.preFinal=readlineSync.question("Enter Pre Final marks: ");
  currentStudent.final=readlineSync.question("Enter final marks: ");
}

function unit(){
 for(i=0;i<student.length;i++){
   
   if(student[i].unitTest>max.unitTest){
      max=student[i];
   }
   sumforAverage=Number(sumforAverage)+Number(student[i].unitTest);
 }
 console.log("\nThe higher marks in unit test is: "+max.unitTest+" by "+max.name);
 average(sumforAverage);
}

function pre(){
 sumforAverage=0;
 for(i=0;i<student.length;i++){
   
   if(student[i].preFinal>max.preFinal){
      max=student[i];
   }
   
   sumforAverage=Number(sumforAverage)+Number(student[i].preFinal);
 }
 console.log("The higher marks in Pre Final is: "+max.preFinal+" by "+max.name);
 average(sumforAverage);
}

function finals(){
 sumforAverage=0;
 for(i=0;i<student.length;i++){
   
   if(student[i].final>max.final){
      max=student[i];
   }
   sumforAverage=Number(sumforAverage)+Number(student[i].final);
 }
 console.log("The higher marks in finals is: "+max.final+" by "+max.name);
 average(sumforAverage);
}

function average(sumforAverage){
   console.log("The average is:"+ sumforAverage/student.length+"\n");
   sumforAverage=0;
}

studentNo();
