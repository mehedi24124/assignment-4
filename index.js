//Problem -1

function calculateTax(income, expense){
    if(income < 0 || expense < 0){
        return 'invalid input';
    }
    else if(income <= expense){
        return 'invalid input';
    }
    else{ 
        let difference = income - expense;
        let tax = difference * .20;
        return tax;

    }
}
//Problem -2

function sendNotification(email){
    if(!email.includes('@')){
        return 'invalid Email';
    }

    const [username , domain] = email.split('@') ;
    const result = username + ' sent you an email from ' + domain
    return result;
}
//Problem -3

function checkDigitsInName(name){
    if(typeof name !== "string"){
        return 'invalid input';
    }
    for (let i = 0; i < name.length; i++) {
        const nums = name[i];
        if (!isNaN(nums) && nums !== ' ') {
            return true;
        }
    }
    return false;
}
//Problem -4

function calculateFinalScore(obj){
    const {name,testScore,schoolGrade,isFFamily} = obj;
    if(testScore > 50 || schoolGrade > 30){
        return false
    }
    let finalScore = testScore + schoolGrade
    if(isFFamily){
        finalScore += 20

    }
    return finalScore >= 80;
}
//Problem -5

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let totalWaitingTime = 0;
    for(let i =0; i < serialNumber-1; i++){
        totalWaitingTime += waitingTimes[i]
    }
    return totalWaitingTime
}
