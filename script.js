// =======================
// DOWNLOAD RESUME BUTTON
// =======================
const downloadBtn = document.getElementById('downloadBtn');

if(downloadBtn){
    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'Durga_R_Resume.pdf'; // path to your resume
        link.download = 'Durga_R_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert("Resume download started!");
    });
}

// =======================
// SMOOTH SCROLL FOR NAVIGATION
// =======================
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        if(this.hash !== ''){
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =======================
// HEADER SCROLL EFFECT
// =======================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// =======================
// BUTTON HOVER EFFECTS
// =======================
const buttons = document.querySelectorAll('.btn-1, .btn-2');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("status");

    emailjs.send(
        "service_236zo03",   // e.g. service_xxxxx
        "template_idqh1t7",  // e.g. template_xxxxx
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }
    ).then(
        function () {
            status.style.color = "lightgreen";
            status.innerText = "✅ Message sent successfully!";
            document.getElementById("contactForm").reset();
        },
        function (error) {
            status.style.color = "red";
            status.innerText = "❌ Failed to send message. Try again!";
            console.error("EmailJS Error:", error);
        }
    );
});
