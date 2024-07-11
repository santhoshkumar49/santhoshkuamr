document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const correctUsername = "R santhosh kumar";
    const correctPassword = "Dellsk#123";
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "https://rjstore64.my.canva.site/sk";
    } else {
        alert("Incorrect username or password");
    }
});
