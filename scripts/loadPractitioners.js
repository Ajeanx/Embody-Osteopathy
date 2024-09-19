document.addEventListener("DOMContentLoaded", () => {
    const practitionerContainer = document.querySelector(".practitioner-list");

    fetch("../practitioners.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(practitioner => {
                const practitionerElement = document.createElement("div");
                practitionerElement.classList.add("practitioner");

                practitionerElement.innerHTML = `
                    <div className="profile">
                        <img src="${practitioner.headshot}" alt="${practitioner.name}'s headshot" class="headshot">
                        <p class="locations">${practitioner.locations}</p>
                        <h4 class="deskName">${practitioner.name}</h4>
                    </div>
                    <div class="info">
                        <div class="name-toggle">
                            <h4 class="name">${practitioner.name}</h4>
                            <span class="toggle-icon">+</span>
                        </div>
                        <p class="description">${practitioner.description}</p>
                    </div>
                `;

                practitionerContainer.appendChild(practitionerElement);
            });

            // Now attach the event listeners after the elements are in the DOM
            const nameToggles = document.querySelectorAll('.name-toggle');
    
            nameToggles.forEach(nameToggle => {
                nameToggle.addEventListener('click', () => {
                    const descriptionElement = nameToggle.closest('.practitioner').querySelector('.description');
                    const toggleIcon = nameToggle.querySelector('.toggle-icon'); // Grab the +/− icon

                    // Toggle the "toggled" class on both name-toggle div and description
                    nameToggle.classList.toggle('toggled');
                    descriptionElement.classList.toggle('toggled');
                    
                    // Change the + to − when toggled
                    if (toggleIcon.innerHTML === '+') {
                        toggleIcon.innerHTML = '−'; // Change to minus
                    } else {
                        toggleIcon.innerHTML = '+'; // Change back to plus
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching practitioners:', error));
});
