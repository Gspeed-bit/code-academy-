
const getDrugGram = () => {
    const drugGram = prompt("How many gram do you wanna order?",);
    return drugGram;
}
const getUserPrescription = () => {
    const prescription = prompt("kindly submit your doctor's prescription code", 'If drug grams is lower than 400g enter (419)');
    return prescription;
}



const getUnderAge = () => {
    // Handle underage people
    const prescription = getUserPrescription()
    const drugGram = getDrugGram()
    prescription == null ? console.log(`Ooopss Sorry you can't order this drug because you are under age and you dont have doctors prescription `) :
        drugGram < 400 || prescription === 419 ? console.log("Your drug will be shipped to you very soon") :
            drugGram >= 400 || prescription ? console.log(" You are underage but you have got a doctor prescription 😉😉 Note: Once the doctors prescription is verified we will ship your Drug") :
                console.log("Sorry you can't order this drug because you are under age and you dont have doctors prescription");

} 

const getOverAge = () => {
    // Handle overage people
    const prescription = getUserPrescription()
    const drugGram = getDrugGram();
    prescription == null ? console.log("Ooopss Sorry you can't order this drug because you dont have doctors prescription") : drugGram < 400 || prescription === 419 ?
        console.log("Your drug will be shipped to you very soon") :
        drugGram >= 400 || prescription ?
            console.log("Your drug will be shipped to you very soon once your doctors prescription is verified ") :
            console.log("Sorry you are can't order this drug because you dont have a doctors prescription")

}


const phamarcyDetailCheck = () => {
    let age = prompt("What's your age", '');
    age < 18 ? getUnderAge() : getOverAge()
}
phamarcyDetailCheck();