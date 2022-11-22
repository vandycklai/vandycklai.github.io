let job = [
    {
        Title: "Jira Administrator | Team Lead | Developer",
        Company: "Asia Pacific University of Technology and Innovation (APU / APIIT)",
        Date: "24/03/2021 ~ Present",
        Description: "For student by student. In CTI, I am working as a student developer in providing the best user experience to the university members.",
        Responsibilities: [
            "HTML email template",
            "Jira Administration & Configuration",
            "Confluence Documentation",
            "Icon/Banner Digital Art Design",
            "Chatbot",
            "AWS SDK Integration",
            "Restful API",
        ]
    },
    {
        Title: "Software Engineering Intern",
        Company: "Infront Consulting APAC",
        Date: "16/05/2022 ~ Present",
        Description: "Responsible in developing solutions to client including web, app and data engineering task",
        Responsibilities: [
            "Cof'e Covid Prescreening website",
            "Ladang Pintar Web + Mobile Development",
            "Report Data Table Generation",
            "Daily Stnadup Scrum Practice",
            "Client Meeting",
        ]
    },
    {
        Title: "Trainer Assistant / Coding Instructor Internship",
        Company: "Kidocode",
        Date: "08/07/2021 ~ 12/09/2021",
        Description: "Education changes life. Concerning on the adaptability of the future generation in IT field, I was working as a coding instructor for kids from the age of seven to seventeen.",
        Responsibilities: [
            "Kids Trial Class",
            "Private Tutor",
            "Daily Classes Handling",
            "Trainer Cubie Documentation",
            "ERD Description",
        ]
    }
]

function addJob(Title, Company, Date, Description, Responsibilities) {
    $('.job-div').append(`
        <section class="job-item">
            <div class="job-details">
              <h3>${Title}</h3>
              <p>${Company}</p>
              <p>${Date}</p>
            </div>
            <div class="job-summary">
              <p>${Description}</p>
              <p>Responsibilities:</p>
              <ul>
                ${Responsibilities.map(responsibility => `<li>${responsibility}</li>`).join(" ")}
              </ul>
            </div>
          </section>
    `);
}
