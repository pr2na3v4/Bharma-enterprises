
// admin.js
function loginAdmin() {
  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // or your main admin panel
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}
