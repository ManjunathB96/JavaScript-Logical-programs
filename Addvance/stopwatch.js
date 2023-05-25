//import readline from 'readline-sync'
var readline = require("readline-sync");

function stopwatchTime(startTime,endTime) {
    let msecs=endTime-startTime

    const hours=parseInt(msecs/3600000)
    msecs %=3600000
    const minutes=parseInt(msecs/60000)
    msecs %=60000
    const sec=parseInt(msecs/1000)
    msecs %=1000

    return `${hours}:${minutes}:${sec}:${msecs}`
}

let startTime
let endTime

let isStatred=false
const isStart=readline.question("you have to start stopwatch? enter y :")

if (isStart == 'y') {
    startTime=new Date();
    isStatred=true
}


if (isStatred) {
  const isEnd=readline.question("you have to stop stopwatch? enter  : ")  
  endTime = new Date()
  console.log(stopwatchTime(startTime,endTime));
}