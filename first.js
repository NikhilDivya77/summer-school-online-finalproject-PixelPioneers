// document.addEventListener("DOMContentLoaded", function () {
//     /* ==========================
//        "Learn More" Button Logic
//     ========================== */
//     const learnMoreBtn = document.getElementById("learn-more-btn");
//     const extraDescription = document.getElementById("extra-description");

//     if (learnMoreBtn && extraDescription) {
//         learnMoreBtn.addEventListener("click", function () {
//             if (extraDescription.style.display === "none" || extraDescription.style.display === "") {
//                 extraDescription.style.display = "block";
//                 learnMoreBtn.textContent = "Show Less";
//                 extraDescription.scrollIntoView({ behavior: "smooth", block: "nearest" });
//             } else {
//                 extraDescription.style.display = "none";
//                 learnMoreBtn.textContent = "Learn More";
//             }
//         });
//     }

//     /* ==========================
//        Authentication Logic
//     ========================== */
//     const loginBtn = document.getElementById("login-btn");
//     const signupLink = document.getElementById("signup-link");
//     const signupBtn = document.getElementById("signup-btn");
//     const closeBtn = document.querySelector(".close-btn");
//     const signupPopup = document.getElementById("signup-popup");

//     // Open Signup Popup
//     if (signupLink) {
//         signupLink.addEventListener("click", function (e) {
//             e.preventDefault();
//             signupPopup.style.display = "flex";
//             document.body.style.overflow = "hidden";
//         });
//     }

//     // Close Signup Popup
//     if (closeBtn) {
//         closeBtn.addEventListener("click", function () {
//             signupPopup.style.display = "none";
//             document.body.style.overflow = "auto";
//         });
//     }

//     window.addEventListener("click", function (event) {
//         if (event.target === signupPopup) {
//             signupPopup.style.display = "none";
//             document.body.style.overflow = "auto";
//         }
//     });

//     // Signup with Backend
//     if (signupBtn) {
//         signupBtn.addEventListener("click", async function () {
//             const email = document.getElementById("signup-email").value;
//             const password = document.getElementById("signup-password").value;
//             const confirmPassword = document.getElementById("signup-confirm-password").value;

//             if (!email || !password || !confirmPassword) {
//                 alert("Please enter all the details.");
//                 return;
//             }

//             if (!email.includes("@") || !email.includes(".")) {
//                 alert("Please enter a valid email address.");
//                 return;
//             }

//             if (password.length < 6) {
//                 alert("Password must be at least 6 characters.");
//                 return;
//             }

//             if (password !== confirmPassword) {
//                 alert("Passwords do not match!");
//                 return;
//             }

//             try {
//                 const response = await fetch("http://localhost:5000/api/auth/signup", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ email, password }),
//                 });

//                 const result = await response.json();

//                 if (response.ok) {
//                     alert("Signup successful! You can now log in.");
//                     signupPopup.style.display = "none";
//                     document.body.style.overflow = "auto";
//                     document.getElementById("signup-form").reset();
//                 } else {
//                     alert(result.message || "Signup failed!");
//                 }
//             } catch (error) {
//                 console.error("Signup error:", error);
//                 alert("Server error during signup. Try again later.");
//             }
//         });
//     }

//     // Login with Backend
//     if (loginBtn) {
//         loginBtn.addEventListener("click", async function () {
//             const email = document.getElementById("email").value;
//             const password = document.getElementById("password").value;

//             try {
//                 const response = await fetch("http://localhost:5000/api/auth/login", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ email, password }),
//                 });

//                 const result = await response.json();

//                 if (response.ok) {
//                     alert("Login successful!");
//                     localStorage.setItem("userEmail", result.email);
//                     window.location.href = "../dashBoard/dashboard.html";
//                 } else {
//                     alert(result.message || "Invalid email or password!");
//                 }
//             } catch (error) {
//                 console.error("Login error:", error);
//                 alert("Something went wrong. Try again later.");
//             }
//         });
//     }

//     /* ==========================
//        Contact Form Handling
//     ========================== */
//     const contactForm = document.getElementById("contact-form");
//     if (contactForm) {
//         contactForm.addEventListener("submit", function (e) {
//             e.preventDefault();
//             const name = document.getElementById("name").value;
//             const email = document.getElementById("contact-email").value;
//             const message = document.getElementById("message").value;

//             if (!name || !email || !message) {
//                 alert("Please fill in all fields.");
//                 return;
//             }

//             alert("Thank you for your message! We will get back to you soon.");
//             this.reset();
//         });
//     }

//     /* ==========================
//        Smooth Scrolling
//     ========================== */
//     document.querySelectorAll('nav ul li a').forEach(anchor => {
//         if (anchor.getAttribute("href").startsWith("#")) {
//             anchor.addEventListener("click", function (e) {
//                 e.preventDefault();
//                 const targetId = this.getAttribute("href");
//                 const targetElement = document.querySelector(targetId);

//                 if (targetElement) {
//                     window.scrollTo({
//                         top: targetElement.offsetTop - 80,
//                         behavior: "smooth"
//                     });
//                 }
//             });
//         }
//     });

//     /* ==========================
//        Navigation Box Handlers
//     ========================== */
//     document.getElementById('section1').addEventListener('click', function () {
//         window.location.href = '../syllabus/syllabus.html';
//     });
//     document.getElementById('section2').addEventListener('click', function () {
//         window.location.href = '../chaptermock/chapter.html';
//     });
//     document.getElementById('section3').addEventListener('click', function () {
//         window.location.href = '../subjectmock/subject.html';
//     });
//     document.getElementById('section4').addEventListener('click', function () {
//         window.location.href = '../pyqmock/pyq.html';
//     });
//     document.getElementById('section5').addEventListener('click', function () {
//         window.location.href = '../fullmock/fullmock.html';
//     });

//     const profile = document.getElementById("profile");

//     if (profile) {
//         profile.addEventListener('click', () => {
//             const display = document.getElementById("emailDisplay");
//             const Email = localStorage.getItem("userEmail");

//             if (display.style.display === "none" || display.style.display === "") {
//                 display.style.display = "block";
//                 display.innerText = `Email : ${Email}`;
//             } else {
//                 display.style.display = "none";
//             }
//         });
//     }

//     // Dashboard email & logout
//     const display = document.getElementById('emailDisplay');
//     if (display) {
//         display.textContent = localStorage.getItem('userEmail') || 'student@edurev.co';
//     }

//     const logoutBtn = document.getElementById('logoutBtn');
//     if (logoutBtn) {
//         logoutBtn.addEventListener('click', function () {
//             if (confirm('Are you sure you want to logout?')) {
//                 localStorage.removeItem('userEmail');
//                 window.location.href = '../index.html';
//             }
//         });
//     }

//     const boxes = document.querySelectorAll('.BOX');
//     boxes.forEach(box => {
//         box.addEventListener('click', function () {
//             this.style.transform = 'scale(0.98)';
//             setTimeout(() => {
//                 this.style.transform = 'scale(1)';
//             }, 200);
//         });

//         box.addEventListener('mouseenter', function () {
//             this.style.borderLeft = `4px solid var(--primary-color)`;
//         });
//         box.addEventListener('mouseleave', function () {
//             this.style.borderLeft = '4px solid transparent';
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    /* ==========================
       "Learn More" Button Logic
    ========================== */
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const extraDescription = document.getElementById("extra-description");
  
    if (learnMoreBtn && extraDescription) {
      learnMoreBtn.addEventListener("click", function () {
        if (extraDescription.style.display === "none" || extraDescription.style.display === "") {
          extraDescription.style.display = "block";
          learnMoreBtn.textContent = "Show Less";
          extraDescription.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          extraDescription.style.display = "none";
          learnMoreBtn.textContent = "Learn More";
        }
      });
    }
  
    /* ==========================
       Authentication Logic
    ========================== */
    const loginBtn = document.getElementById("login-btn");
    const signupLink = document.getElementById("signup-link");
    const signupBtn = document.getElementById("signup-btn");
    const closeBtn = document.querySelector(".close-btn");
    const signupPopup = document.getElementById("signup-popup");
  
    // Open Signup Popup
    if (signupLink) {
      signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        signupPopup.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    }
  
    // Close Signup Popup
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        signupPopup.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementById("signup-form").reset();
      });
    }
  
    window.addEventListener("click", function (event) {
      if (event.target === signupPopup) {
        signupPopup.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementById("signup-form").reset();
      }
    });
  
    // Signup with Backend
    if (signupBtn) {
      signupBtn.addEventListener("click", async function () {
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("signup-confirm-password").value;
  
        // Validation
        if (!name || !email || !password || !confirmPassword) {
          alert("Please enter all the details.");
          return;
        }
  
        if (!email.includes("@") || !email.includes(".")) {
          alert("Please enter a valid email address.");
          return;
        }
  
        if (password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
        }
  
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
  
        try {
          const response = await fetch("https://newgatecse.onrender.com/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, confirmPassword }),
          });
  
          const result = await response.json();
  
          if (response.ok) {
            alert("Signup successful! You can now log in.");
            signupPopup.style.display = "none";
            document.body.style.overflow = "auto";
            document.getElementById("signup-form").reset();
            
            // Store user data and token
            localStorage.setItem("token", result.token);
            localStorage.setItem("userEmail", result.user.email);
            localStorage.setItem("userName", result.user.name);
          } else {
            alert(result.message || "Signup failed!");
          }
        } catch (error) {
          console.error("Signup error:", error);
          alert("Server error during signup. Try again later.");
        }
      });
    }
  
    // Login with Backend
    if (loginBtn) {
      loginBtn.addEventListener("click", async function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        try {
          const response = await fetch("https://newgatecse.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
  
          const result = await response.json();
  
          if (response.ok) {
            alert("Login successful!");
              // Reset login fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
            
            // Store user data and token
            localStorage.setItem("token", result.token);
            localStorage.setItem("userEmail", result.user.email);
            localStorage.setItem("userName", result.user.name);
            
            window.location.href = "../dashBoard/dashboard.html";
          } else {
            alert(result.message || "Invalid email or password!");
              // Reset login fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("Something went wrong. Try again later.");
            // Reset login fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
        }
      });
    }
  

    
    /* ==========================
       Contact Form Handling
    ========================== */
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("contact-email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            alert("Thank you for your message! We will get back to you soon.");
            this.reset();
        });
    }

    /* ==========================
       Smooth Scrolling
    ========================== */
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        if (anchor.getAttribute("href").startsWith("#")) {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            });
        }
    });

    /* ==========================
       Navigation Box Handlers
    ========================== */
    document.getElementById('section1').addEventListener('click', function () {
        window.location.href = '../syllabus/syllabus.html';
    });
    document.getElementById('section2').addEventListener('click', function () {
        window.location.href = '../chaptermock/chapter.html';
    });
    document.getElementById('section3').addEventListener('click', function () {
        window.location.href = '../subjectmock/subject.html';
    });
    document.getElementById('section4').addEventListener('click', function () {
        window.location.href = '../pyqmock/pyq.html';
    });
    document.getElementById('section5').addEventListener('click', function () {
        window.location.href = '../fullmock/fullmock.html';
    });

    const profile = document.getElementById("profile");

    if (profile) {
        profile.addEventListener('click', () => {
            const display = document.getElementById("emailDisplay");
            const Email = localStorage.getItem("userEmail");

            if (display.style.display === "none" || display.style.display === "") {
                display.style.display = "block";
                display.innerText = `Email : ${Email}`;
            } else {
                display.style.display = "none";
            }
        });
    }

    // Dashboard email & logout
    const display = document.getElementById('emailDisplay');
    if (display) {
        display.textContent = localStorage.getItem('userEmail') || 'student@edurev.co';
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('userEmail');
                window.location.href = '../index.html';
            }
        });
    }

    const boxes = document.querySelectorAll('.BOX');
    boxes.forEach(box => {
        box.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });

        box.addEventListener('mouseenter', function () {
            this.style.borderLeft = `4px solid var(--primary-color)`;
        });
        box.addEventListener('mouseleave', function () {
            this.style.borderLeft = '4px solid transparent';
        });
    });
  });
