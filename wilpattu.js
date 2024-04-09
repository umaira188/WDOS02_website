
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

fetch('wilpattu.json')
    .then(response => response.json())
    .then(datas => {
        //store the fetched data in local storage
        localStorage.setItem('wilpattu', JSON.stringify(datas));
        
        display_text(data.title, "header-text");

        display_text(data.sections[0].title, "explore-heading");
        display_text(data.sections[0].content, "para1");
       
        display_text(data.sections[1].title, "encounter-heading");
        display_text(data.sections[1].content, "para2");
       
        display_text(data.sections[2].title, "conservation-heading");
        display_text(data.sections[2].content, "para3");
       
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    const data = JSON.parse(localStorage.getItem("wilpattu"));
  
  
    
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
