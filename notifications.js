const notifications = [
    { title: "Google", update: "Looking For a Specialized Web Developer or App Developer.", job_description: "We are looking for a passionate Software Engineer to design, develop, and maintain software solutions. Responsibilities include problem-solving, coding, and collaboration with cross-functional teams. Required skills: Proficiency in Java, Python, and software development best practices. Excellent communication and teamwork skills are essential." },
    { title: "Microsoft", update: "Looking For a Well Experienced Data Analyst.", job_description: "We are looking for a passionate Software Engineer to design, develop, and maintain software solutions. Responsibilities include problem-solving, coding, and collaboration with cross-functional teams. Required skills: Proficiency in Java, Python, and software development best practices. Excellent communication and teamwork skills are essential." },
    { title: "GetFly Technologies", update: "Looking For a Qualified Front End Developer.", job_description: "We are looking for a passionate Software Engineer to design, develop, and maintain software solutions. Responsibilities include problem-solving, coding, and collaboration with cross-functional teams. Required skills: Proficiency in Java, Python, and software development best practices. Excellent communication and teamwork skills are essential." },
    { title: "Accenture", update: "Looking For a Back End Developer.", job_description: "We are looking for a passionate Software Engineer to design, develop, and maintain software solutions. Responsibilities include problem-solving, coding, and collaboration with cross-functional teams. Required skills: Proficiency in Java, Python, and software development best practices. Excellent communication and teamwork skills are essential." },
    { title: "Capgemini", update: "Looking For a UI/UX Designer.", job_description: "We are looking for a passionate Software Engineer to design, develop, and maintain software solutions. Responsibilities include problem-solving, coding, and collaboration with cross-functional teams. Required skills: Proficiency in Java, Python, and software development best practices. Excellent communication and teamwork skills are essential." }
];

document.addEventListener('DOMContentLoaded', () => {
    const notificationList = document.getElementById('notification-list');
    if (notificationList) {
        notifications.forEach(notification => {
            const notificationCard = document.createElement('div');
            notificationCard.className = 'notification-card';
            notificationCard.innerHTML = `
                <h4>${notification.title}</h4>
                <p>Update: ${notification.update}</p>
                <p>Job description: ${notification.job_description}</p>
                <button class="apply-button">Apply</button>
            `;
            notificationList.appendChild(notificationCard);

            // Add event listener for the Apply button
            const applyButton = notificationCard.querySelector('.apply-button');
            applyButton.addEventListener('click', () => {
                // Replace with your logic for handling the apply button click
                alert(Applied$Notificationtitle);
            });
        });
    }
});