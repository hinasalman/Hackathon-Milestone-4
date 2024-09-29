document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('Resume-Display');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission
        // Collect form data
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('Experience').value;
        var skills = document.getElementById('skills').value;
        // Generate resume content dynamically
        var resumeHTML = "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Persnoal Information</h3>\n            <p><b>Name:</b><span conteneditable=\"true\"> ".concat(fullName, "</span></p>\n            <p><b>Email:</b><span conteneditable=\"true\">  ").concat(email, "</span></p>\n            <p><b>Phone:</b><span conteneditable=\"true\">  ").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <p><span conteneditable=\"true\">").concat(education, "</span></p>\n\n            <h3>Experience</h3>\n            <p><span conteneditable=\"true\">").concat(experience, "</span></p>\n\n            <h3>Skills</h3>\n            <p><span conteneditable=\"true\">").concat(skills, "</span></p>\n\n            \n        ");
        // Display resume
        resumeDisplay.innerHTML = resumeHTML;
    });
});
