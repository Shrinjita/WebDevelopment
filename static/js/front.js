
document.addEventListener("DOMContentLoaded", function() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const userImagesContainer = document.getElementById('userImages');
            const doctors = data.doctors;

            doctors.forEach(doctor => {
                const doctorBox = document.createElement('div');
                doctorBox.classList.add('doctor-box');
                doctorBox.onclick = function() {
                    location.href = '#';
                };

                const img = document.createElement('img');
                img.src = `/static/img/${doctor.image}`;
                img.alt = doctor.name;
                img.classList.add('doctor-image');

                const doctorName = document.createElement('div');
                doctorName.classList.add('doctor-name');
                doctorName.textContent = doctor.name;

                const doctorSpecialty = document.createElement('div');
                doctorSpecialty.classList.add('doctor-specialty');
                doctorSpecialty.textContent = doctor.specialty;

                doctorBox.appendChild(img);
                doctorBox.appendChild(doctorName);
                doctorBox.appendChild(doctorSpecialty);

                userImagesContainer.appendChild(doctorBox);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});