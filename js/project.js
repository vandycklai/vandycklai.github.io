let project = [
    {
        alt_title: "vancalculator Pypi Package",
        image_link: "images/vancalculator pypi.png",
        code_link: "https://github.com/Laikaiyong/vancalculator-Package",
        description: "&emsp;vancalculator is a Pypi Python library for Mode, Median, Gaussian and Binomial distribution.",
        end_result_link: "https://pypi.org/project/vancalculator/"
    },
    {
        alt_title: "Lex Banking Chatbot",
        image_link: "images/Banking Chatbot.png",
        code_link: "https://github.com/Laikaiyong/Banking-Chatbot",
        description: "&emsp;A banking chatbot created with integration on amazon services including AWS SDK Version 3, AWS Translate, AWS Polly and AWS Lex."
    },
    {
        alt_title: "Covid-Countries Economic Tableau Analysis",
        image_link: "images/Covid-countries economic analysis.png",
        code_link: "https://github.com/Laikaiyong/Covid-19-Economic-Impact-Analysis",
        description: "&emsp;A data-driven research on Covid-19 impact towards countries economic relying on Tableau softwares and elaboration through report documentation.",
        end_result_link: "https://public.tableau.com/views/IDADataMining/ClusteringCountryHDIGDPcap?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link"
    }
]

function addProject(alt_title, image_link, code_link, description, end_result_link=null){
    $('.project-div').append(`
        <section class="project-item">
            <img class="project-img" src="${image_link}" alt="${alt_title}"></img>
            <h3>${alt_title}</h3>
            <p>${description}</p>
            <a class="btn" href="${code_link}" target="_blank">Project Code</a>` +
            (end_result_link != null ? `<a class="btn" href="${end_result_link}" target="_blank">End Product</a>` : '')
            +
        `</section>
        `);
}