let education = [
    {
        Title: "Asia Pacific University of Technology and Innovation (APU / APIIT) X De Monfort University (DMU)",
        Program: "Bachelor Science in Software Engineering",
        Description: "-",
    },
    {
        Title: "Asia Pacific University of Technology and Innovation (APU / APIIT)",
        Program: "Diploma in ICT Specialism in Data Informatics",
        Description: "CGPA : 3.94",
    },
    {
        Title: "SMK Chung Hwa Wei Sin",
        Program: "Form 5 Secondary School / High School",
        Description: "SPM: 9A 1B+",
    },
    {
        Title: "Ecole De Patisserie School of Culinary Arts and Pastry",
        Program: "AFS Intensive Program to Japan (IPlsNH17)",
        Description: "Culinary Learning",
    },
    {
        Title: "AFS Intercultural Programs",
        Program: "Form 5 Secondary School / High School",
        Description: "Exchange student experience",
    },
    {
        Title: "I.C. Nagoya Japanese Language School",
        Program: "Certificate in AFS Winter Intensive Course Japanese Language Program ",
        Description: "Japanese Speaking, Writing, Reading",
    }
]

function addEducation(Title, Program, Description){
    $('.edu-div').append(`
        <section>
            <h3 class="education-firm">${Title}</h3>
            <p>${Program}</p>
            <p>${Description}</p>
        </section>
    `)
}