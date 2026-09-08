//Arrey of 6 Requested learners
const learners = [
    {
        studentNumber: "ST001",
        name: "Ryan",
        surname: "Ward",
        score: 85,
        attendance: 91,
        isSubmitted: true
    },
    {
        studentNumber: "ST002",
        name: "Brandon",
        surname: "De Wet",
        score: 79,
        attendance: 87,
        isSubmitted: true
    },
    {
        studentNumber: "ST003",
        name: "Elton",
        surname: "Williams",
        score: -10,
        attendance: 80,
        isSubmitted: true
    },
      {
        studentNumber: "ST004",
        name: "Johan",
        surname: "Kruger",
        score: 68,
        attendance: 125,
        isSubmitted: true
    },
      {
        studentNumber: "ST005",
        name: "Peter",
        surname: "Parker",
        score: 89,
        attendance: 40,
        isSubmitted: false
    },
      {
        studentNumber: "ST006",
        name: "Tim",
        surname: "Drake",
        score: 49,
        attendance: 64,
        isSubmitted: false
    }
]

function validateLearner(learner){
    const errors = []; // This will push errors if the learners score or attendance is is ess then 0 or more then a 100

    if (typeof learner.score !== "number" || learner.score < 0 || learner.score > 100){
        errors.push(`This score mark is invaled: ${learner.score}`);
    }//This will check if the score is valid number and cannot be less then 0 nor more then 100

    if (typeof learner.attendance !== "number" || learner.attendance <0 || learner.attendance >100){
        errors.push(`This attendance score is invalid: ${learner.attendance}`);
    }//This will check if the attendacne value is valid number and cannot be less then 0 nor more then 100

    const isValid = errors.length === 0;
    return {isValid, errors};
}

//Function to get learners results
//This will run an if statement to see if the learner's Status is Excellent, Competent or does not meet the requirments
//The if statement has an Else If as well to run through possible outcomes!
function getLearnerStatus(learner){
    const {score, attendance,isSubmitted} = learner;

    if (score >= 80 && attendance >=90 && isSubmitted === true){
        return "Excellent";
    }
    else if (score >=50 && attendance >=80 && isSubmitted === true){
        return "Competent";
    }else{
        return "Does not meet the requirments"
    }    
}
//This Function will get all the learns who are incompetent and advise the reason why.
function getLearnerInterventation(learner){
    const reasons= []
    
    if (learner.score < 50) {
        reasons.push("Learn is incompetent due to score being lower then 50%");
    }
    if (learner.attendance < 80) {
        reasons.push("Learn is incompetent due to the attendance is lower then 80%")
    }
    if (learner.isSubmitted === false){
        reasons.push("Learn is incompetent due to faling to Submit")
    }

    return reasons;
}

//This will get all the Learners details 
function displayLearnerDetails(learner, status) {
    console.log("--------------------");
    console.log(`Student Number: ${learner.studentNumber}`);
    console.log(`Name: ${learner.name}`);
    console.log(`Surname: ${learner.surname}`);
    console.log(`Score: ${learner.score}`);
    console.log(`Attendance: ${learner.attendance}`);
    console.log(`Submitted ${learner.isSubmitted}`);
    console.log(`Status: ${status}`);
}
//This will get the class average of the learners
function calculateAverage(total, count){
    if (count === 0){
        return"0.0";
    }
    return (total / count).toFixed(1);
}

// Loops through the learners array once, displaying each valid learner and builds the structure required for the summary breakdown.
function processAllLearners(learnerList){
    let totalScore = 0;
    let excellentCount = 0;
    let compentCount = 0;
    let notYetCompetentCount = 0;
    let validCount = 0;
    const invaledLearners = [];

    for (const learner of learnerList){
        const vaildation = validateLearner(learner);
// Checks invalid entries from the learners array and pushed to a invalidLearners array.
        if (!vaildation.isValid) {
            console.log("--------------------");
            console.log(`StudnetNumber: ${learner.studentNumber}`);
            console.log(`Name: ${learner.name}`);
            console.log(`Surname: ${learner.surname}`);
            console.log(`Status: Invalid Data`);
            vaildation.errors.forEach((error) => console.log(`${error}`)); //this is calling the validation const and does a forEach on the error key
            invaledLearners.push(learner);
            continue;
        }
// Will do calculations based on learner status and return how many entries are for each for the learners array.
        const status = getLearnerStatus(learner);
        displayLearnerDetails(learner, status);
        totalScore += learner.score;
        validCount++;

        if (status === "Excellent"){
            excellentCount++;
        }else if (status === "Competent"){
            compentCount++;
        }else{
            notYetCompetentCount++;
        }
    }
    
    return {
        totalScore,
        validCount,
        excellentCount,
        compentCount,
        notYetCompetentCount,
        invaledLearners,
    };
}

//This will display the learners details
function displaySummary(stats) {
    const averageScore = calculateAverage(stats.totalScore, stats.validCount);
//This will display the total number of learners as well with the Average Score
    console.log("====================\nPERFORMANCE SUMMARY\n====================");
    console.log(`Total Learners: ${stats.validCount}`);
    console.log(`Excellent Learners: ${stats.excellentCount}`);
    console.log(`Competent Learners: ${stats.compentCount}`);
    console.log(`Does not meet the requirements ${stats.notYetCompetentCount}`);
    console.log(`Average Socre: ${averageScore}%`);
//This will make sure that learners don't check double counted if they are marked as Excellent.    
    if (stats.invaledLearners.length > 0){
        console.log(`Learners Excluded: ${stats.invaledLearners.length}`);
    }
}
//This funtion will display if learners require intervation with reasons
function displayInterventionReport(learnerList){
    console.log("====================\nLEARNERS REQUIRING INTERVENTION\n====================");

    let intervationCount = 0;

    for (const learner of learnerList){
        const validation = validateLearner(learner);
        if(!validation.isValid){
            continue;
        }

        const reasons = getLearnerInterventation(learner);

        if(reasons.length > 0) {
            intervationCount++;
            console.log(`${learner.name} ${learner.surname}`);
            console.log(reasons.length === 1 ? "Reason:" : "Reason:");
            reasons.forEach((reason) => console.log(`- ${reason}`));
            console.log("");
        }
    }

    if (intervationCount === 0) {
        console.log("No learners required for interventation");
    }
}
//This will call and display all the functions
console.log("====================\nLEARNER PERFORMANCE TRACKER\n====================");
const stats = processAllLearners(learners);
displaySummary(stats);
displayInterventionReport(learners);


