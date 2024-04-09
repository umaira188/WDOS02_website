
function display_text(value,id) {
    // Find the HTML element where you want to display the value
    const displayElement = document.getElementById(id);
    if (displayElement) {
        // Set the innerHTML of the element to the value of the variable
        displayElement.innerHTML = value;
    } else {
        console.error('Could not find display element.');
    }
};

fetch('yala.json')
    .then(response => response.json())
    .then(datas => {
        //store the fetched data in local storage
        localStorage.setItem('yala', JSON.stringify(datas));
        
        display_text(data.title, "h11");

       
        display_text(data.section[0].title, "h22");
        display_text(data.section[0].content, "para11");
       
        display_text(data.section[1].title, "h33");
        display_text(data.section[1].content, "para22");
       
        display_text(data.section[2].title, "h4");
       
        display_text(data.section[3].title, "h44");
        display_text(data.section[3].content, "para33");
       
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    const data = JSON.parse(localStorage.getItem("yala"));
  

    if (localStorage.getItem("userlog")) {
        const userData = JSON.parse(localStorage.getItem("userlog"));
        if (userData === "admin") {
            const adminPopup = `<a onclick="openEditPanel()">Edit</a>`;
            document.getElementById("edit-panel").insertAdjacentHTML("beforeend", adminPopup);
            function openEditPanel() {
                window.open("editor.html", "", "width=800px, height=600px");
            }
        }
    }
    
    // Check if user is logged in, then show logout button, otherwise show login button
    if (localStorage.getItem("userlog")) {
        const logoutButton = `<a onclick="logout()">Logout</a>`;
        document.getElementById("log").insertAdjacentHTML("beforeend", logoutButton);
    } else {
        const loginButton = `<a  href="login.html"">Login</a>`;
        document.getElementById("log").insertAdjacentHTML("beforeend", loginButton);
    }
    
    // Function to logout user
    function logout() {
        localStorage.removeItem('userlog');
        location.reload();
    }

