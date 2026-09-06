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
        score: 87,
        attendance: 91,
        isSubmitted: true
    },
    {
        studentNumber: "ST003",
        name: "Elton",
        surname: "Williams",
        score: 74,
        attendance: 80,
        isSubmitted: true
    },
      {
        studentNumber: "ST004",
        name: "Johan",
        surname: "Kruger",
        score: 68,
        attendance: 74,
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

//console.log(learners);

function getLearnerStatus(learners) {
    for (let marks of learners) {

         let iscompetency;

         if (marks.score >= 80 && marks.attendance >=90 && marks.isSubmitted === true){
            marks.iscompetency = "Excellent";
         }else if (marks.score >=50 && marks.attendance >=80 && marks.isSubmitted === true){
            marks.iscompetency = "Competent";
         }else{
            marks.iscompetency = "Does not meet the requirement";
         }
console.log("====================",
    "Learner Report",
    "===================="
)
console.log(`
StudentNumber: '${marks.studentNumber}',
Name: '${marks.name}',
Score: '${marks.score},
Attendance: '${marks.attendance},
Submitted: '${marks.isSubmitted},
Competency: '${marks.iscompetency}`);
console.log("========================================================")
    }
}
getLearnerStatus(learners); //This function will give the the layout of all learners and their marks on the webpage

function searchLearner() {

    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const learner = learners.find(function(learner) {

        return learner.studentNumber.toLowerCase() === searchValue; 
    });//This will allow the Script to recieve the information back from the search bar

    if(learner) {

        const competency = getLearnerStatus(learner);

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
