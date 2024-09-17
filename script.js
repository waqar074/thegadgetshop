// Toggle password visibility
function togglePassword() {
    const passwordFields = document.querySelectorAll('.password-wrapper input');
    passwordFields.forEach(field => {
        const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
        field.setAttribute('type', type);
    });
}

// function func() {
//     var email = document.getElementById("login-email").value;
//     var pass = document.getElementById("login-password").value;
//     if (email == 'waqar@gmail.com' && pass == '123') {
//         // alert("Login SuccessFull !!")
//         window.location.assign('home.html')
        
//     } else {
//         alert("Invalid Credential")
//     }
// }



function func() {
    // Get email and password values from input fields
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
  
    // Simulate authentication (replace with actual authentication logic)
    if (email === "waqar@gmail.com" && password === "123") {
      // Login successful
      alert("Login Successful!");
  
      // Redirect to home.html using window.location.href
      window.location.href = "pro.html";
    } else {
      // Login failed
      alert("Invalid credentials. Please try again.");
    }
  }
function trg() {
    window.location.href = "rea.html"
}
