//the object is the king of javascript



//lets have a look at all the things that are objects

//1.  Booleans are objects if you declare them with new

let hasJudgeArrived = new Boolean(true);

console.log("lets find out about the judge arriving");
console.log(hasJudgeArrived.toString());
console.log(`is hasJudgeArrived an object? ${typeof(hasJudgeArrived)}`);

//2. numbers are also objects if you declare them with new

let numJurors = new Number(12);
console.log(numJurors.toExponential(2));
console.log(`is a number an object? ${typeof(numJurors)}`);

//3.  well, what about strings?  Are strings objects as well?.... YES!

let defendantName = new String("crystal methani");
console.log(defendantName.charCodeAt(0));
console.log(defendantName.includes("crystal meth"));
console.log(defendantName.split("").reverse().join(""));
console.log(`is a string an object? ${typeof(defendantName)}`);