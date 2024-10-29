// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;

    // Collect the uploaded image file
    var profileImageFile = document.getElementById('profile-image').files[0];

    // Check if an image is uploaded
    if (profileImageFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var imageUrl = event.target.result;

            // Generate the resume content dynamically, including the image
            var resumeHTML = `
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <div style="flex-shrink: 0;">
                        <img src="${imageUrl}" alt="Profile Picture" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%;">
                    </div>
                    <div style="margin-left: 20px;">
                        <h2><b>Resume</b></h2>
                        <h3>Personal Information</h3>
                        <p><b>Name:</b> ${name}</p>
                        <p><b>Email:</b> ${email}</p>
                        <p><b>Phone:</b> ${phone}</p>
                        <p><b>Address:</b> ${address}</p>
                    </div>
                </div>
                <h3>Education</h3>
                <p><b>Education:</b> ${education}</p>
                <h3>Skills</h3>
                <p><b>Skills:</b> ${skills}</p>
                <h3>Experience</h3>
                <p><b>Experience:</b> ${experience}</p>
            `;

            // Display the generated resume at the bottom of the form
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.marginTop = '20px'; // Add some space between the form and the resume display area
        };

        // Read the image file as a data URL
        reader.readAsDataURL(profileImageFile);
    } else {
        console.error("No image uploaded.");
        alert("Please upload a profile image to build the resume.");
    }
});
