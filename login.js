document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            let user = data.Users.find(user => user.username === username && user.password === password);
            if(user.role === "admin" ) {
            //storing user role in the local storage
                localStorage.setItem('userlog',JSON.stringify( 'admin'));
                // Login successful, redirect to admin dashboard
                window.location.href = 'admin Dashboard.html';
                alert("Login Successful!")
            }
            else if (user.role === 'user') {
                 // Login successful, redirect to user dashboard and store in local storage
                 localStorage.setItem('userlog',JSON.stringify( 'user'));
                window.location.href = ' index.html';
                alert("Login Successful!")
               
            }
            else {1
                alert("Login Failed!")
            }

        })
        .catch(error => console.error('Error:', error));
});