
//   const sleepHours = {
//       monday: 8, tuesday: 6, wednesday: 8, thursday: 6, friday: 8, saturday: 8, sunday: 7
//   };
//  
//   const getSleepHours = (sleepHours) => {
//     let hours = 0;
//     Object.keys(sleepHours).map(key => hours += sleepHours[key]);
//     return hours;
//   };

// console.log(getSleepHours(sleepHours));

const getSleepHours = day => {
    day === "monday";
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 5;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 6;
        case 'friday':
            return 8;
        case 'saturday':
            return 8;
        case 'sunday':
            return 70;

    }
}


//To get the total sleep hours that you actually slept
function getActualSleepHours() {
    const totalSleep = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
    return totalSleep;
}
console.log(getActualSleepHours());

//To get the ideal sleep hours that you prefer,
const getIdealSleepHours = () => {
    let idealHours = 8 * 7;
    return idealHours;
}

console.log(getIdealSleepHours());

//Time to calculate sleep debt.
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        return "You got the perfect amount of sleep";
    } else if (actualSleepHours > idealSleepHours) {
        return `You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.You are over sleeping!!!`;
    }
    else if (actualSleepHours < idealSleepHours) {
        return `You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`;
    }

}
console.log(calculateSleepDebt()); 