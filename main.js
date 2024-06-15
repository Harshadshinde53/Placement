const placements = [
    { title: "Google", description:"Google are looking for a passionate Software Engineer to design, develop, and maintain software solutions. Responsibilities include problem-solving, coding, and collaboration with cross-functional teams and Required skills:- Proficiency required in Java, Python, and software development best practices. Excellent communication and teamwork skills are essential."},
    { title: "Microsoft", description:"Join Microsoft as a Software Development Engineer to build innovative software solutions. Responsibilities include writing clean, scalable code, troubleshooting software issues, and collaborating with various teams to enhance product performance. Required skills: C#, .NET, Azure, strong analytical and problem-solving abilities. Must be a strong team player with good communication skills."},
    { title: "GetFly Technologies", description:"GetFly Technologies is seeking a dynamic and results-driven Software Engineer to join our team. Responsibilities include developing and implementing software applications, debugging and resolving software issues, and working closely with clients to understand their requirements. Required skills: Java, SQL, Cloud Technologies (AWS, Azure), and excellent problem-solving abilities. Strong communication and teamwork skills are a must." },
    { title: "Accenture", description:"Accenture is hiring a Software Developer to create and manage software applications. Responsibilities include coding, testing, and deploying software, as well as troubleshooting and enhancing existing applications. Required skills: Proficiency in JavaScript, React, Node.js, and knowledge of databases such as MySQL and MongoDB. Strong problem-solving and communication skills are essential." },
    { title: "Capgemini", description:"Capgemini is seeking talented Software Engineers to join our team. Responsibilities include designing, coding, and testing software applications, collaborating with cross-functional teams, and participating in code reviews. Required skills: Proficiency in Java, Python, or C#, experience with Agile methodologies, and strong analytical skills. Excellent communication and teamwork abilities are crucial." },
]

document.addEventListener('DOMContentLoaded', () => {
    const mainSection = `
        <h3>Latest placements</h3>
        <div id="placement-list"></div>
    `;

    const mainContainer = document.createElement('div');
    mainContainer.className = 'main';
    mainContainer.innerHTML = mainSection;

    const hero = document.querySelector('.hero');
    document.body.insertBefore(mainContainer, hero.nextSibling);

    const placementList = document.getElementById('placement-list');
    placements.forEach(placement => {
        const placementCard = document.createElement('div');
        placementCard.className = 'placement-card';
        placementCard.innerHTML = `
            <h4>${placement.title}</h4>
            <p>Description: ${placement.description}</p>
        `;
        placementList.appendChild(placementCard);
    });
});
