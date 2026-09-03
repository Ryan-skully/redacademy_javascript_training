/*const learners = ["Ryan Ward", "Caleb Ward", "Brandon De Wet", "Peter Parker", "Bruce Wanye"];

console.log("First Name:", learners[0].split(" ")[0]);
console.log("Surname:", learners[0].split(" ")[1]);
console.log("Number of learners:", learners.length);*/

const learners = [
    {
        studentNumber: "ST001",
        name: "Ryan",
        surname: "Ward",
        score: 49,
        attendance: 76,
        isSubmitted: true
    }
]

function getCompeteny(learners){
    if (learners.score >= 80) {
        return "Excellent";
    } else if (learners.score >=50) {
        return "Competent";
    } else {
        return "Does not meet the requirements for Excellent or Competent";
    }
}

function searchLearner() {

    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const learner = learners.find(function(learner) {

        return learner.studentNumber.toLowerCase() === searchValue; 
    });//This will allow the Script to recieve the information back from the search bar

    if(learner) {

        const competency = getCompeteny(learner);

        let result = "";
            //This check if any of the categories were met to decide if the learn passed of failed.
            //In order for the student to be marked as pass, all 3 fields must meet the requirements.
        if (learner.score >= 50 && learner.attendance >=80 && learner.isSubmitted === true) {
            result = "Pass";
        } else {
            result = "Fail"
        }
        
        document.getElementById("result").innerHTML = `
        <h2> Learner Details</h2>
        
        <p><strong>Name:</strong> ${learner.name} ${learner.surname}</p>
        <p><strong>Score:</strong> ${learner.score}</p>
        <p><strong>Attendance:</strong> ${learner.attendance}</p>
        <p><strong>Submitted:</strong> ${learner.isSubmitted ? "Yes" : "No"}</p>
        <p><strong>Competency:</strong> ${competency}</p>
        <h3>Result: ${result}</h3>
        `; //This will display the user details on the webpage level format
    } else {
        document.getElementById("result").innerHTML =
            "<p>Student not found. Please check the student number.</p>"; //
    }

}

console.log(getCompeteny(learners[0])); //Looks up the students number and reads the rest of the Array