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

//4.  how about dates?
let courtDate = new Date();
console.log(courtDate.getFullYear());
console.log(courtDate.getMonth());
console.log(courtDate.getUTCDay());
console.log(`is a date an object???  ${typeof(courtDate)}`);

//5.  math?  How about math?
 console.log(Math.PI);
 console.log(`math...definitely an object ${Math}`);

 //6.  what about an array?  surely an array couldn't be an object
 let charges = ["with a name like crystal methani??  Come on...", "jaywalking"];
 console.log(`array, also an object?  ${typeof(charges)}`);

 //7.  surely a function couldn't be an object as well could it???
function readJudgement(){
    console.log("12 years in Jail!!!!");
};
console.log(readJudgement);
console.log(`a function...is this also an object? ${typeof(readJudgement)}`);
console.log("I know, it says function, but guess what.... it's still an object!!!!");

//how do we make an object?
let courtRoom = new Object();
courtRoom.hasJudge = true;
courtRoom.hasJurors = true;
courtRoom.numJurors = 12;
courtRoom.judgeName = "Ben Chesitter";

let otherCourtRoom = {
    hasJudge: true,
    hasJurors: true,
    numJurors: 12,
    judgeName: "Ivana Arestoo",
    get jName(){
        return this.judgeName;
    },
    set jName(nom){
        this.judgeName = nom;
    }
};

//getting values from an object
console.log(courtRoom.hasJudge);
console.log(otherCourtRoom["judgeName"]);

//getting and setting values in an object
console.log(`our first judges name is: ${otherCourtRoom.jName}`);
console.log("I don't like that one.  Lets get another.");
otherCourtRoom.jName = "Bea Fritogo";

//or we can loop through all the properties
for(let legal in otherCourtRoom){
    console.log(`${legal}: ${otherCourtRoom[legal]}`);
}
