document.addEventListener('DOMContentLoaded', () => {
    const heroSection = `
        <h2>Placement</h2>
        <p>Number of placements provided: <strong id="total-placements">50</strong></p>
        <p>Number of placements attended: <strong id="placements-attended">25</strong></p>
    `;

    const heroContainer = document.createElement('div');
    heroContainer.className = 'hero';
    heroContainer.innerHTML = heroSection;

    const nav = document.querySelector('.navbar');
    document.body.insertBefore(heroContainer, nav.nextSibling);
});