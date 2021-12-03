$(document).ready(function () {
    project.forEach((item) => {
        addProject(item.alt_title, item.image_link, item.code_link, item.description, item.end_result_link);
    });
    education.forEach((edu) => {
        addEducation(edu.Title, edu.Program, edu.Description);
    });
    job.forEach((occupation) => {
        addJob(occupation.Title, occupation.Company, occupation.Date, occupation.Description, occupation.Responsibilities);
    });
});