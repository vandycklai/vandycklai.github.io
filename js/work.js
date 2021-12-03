let job = [
    {
        Title: "CTI Research & Development Part-time Student Developer",
        Company: "Asia Pacific University of Technology and Innovation (APU / APIIT)",
        Date: "24/03/2021 ~ Present",
        Description: "For student by student. In CTI, I am working as a student developer in providing the best user experience to the university members.",
        Responsibilities: [
            "HTML email template",
            "Jira Administration",
            "Confluence Documentation",
            "Icon/Banner Digital Art Design",
            "Chatbot",
            "AWS SDK Integration",
            "Restful API",
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
    },
    {
        Title: "Blog Writer Part-time",
        Company: "MOpress.io @ Tan Tan News",
        Date: "20/01/2021 ~ 31/08/2021",
        Description: "Expose the world on latest information with my words. I wrote chinese articles, blogs and advertisements to be published in Tan Tan News online.",
        Responsibilities: [
            "Viral news blog writing",
            "Entertainment articles writing",
            "Foodie tips writing",
            "Restaurants advertisements writing",
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
