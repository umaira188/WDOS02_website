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

fetch('index.json')
    .then(response => response.json())
    .then(data => {
        //store the fetched data in local storage
        localStorage.setItem('index', JSON.stringify(data));
        
        display_text(index.sections[0].biodiversityTitle, "biodiversityTitle");
        display_text(index.sections[0].biodiversityDescription, "biodiversityDescription");
       

        display_text(index.sections[1].bioDiversitySectionTitle, "bioDiversitySectionTitle");
        display_text(index.sections[1].richFaunaTitle, "richFaunaTitle"); // Added for rich fauna title
        display_text(index.sections[1].richFaunaDescription, "richFaunaDescription");
        display_text(index.sections[1].uniqueFloraTitle, "uniqueFloraTitle");
        display_text(index.sections[1].uniqueFloraDescription, "uniqueFloraDescription");
        display_text(index.sections[1].conservationEffortTitle, "conservationEffortTitle");
        display_text(index.sections[1].conservationEffortDescription, "conservationEffortDescription");

        display_text(index.sections[2].title, "updateTitle");
        display_text(index.sections[2].description, "updateDescription");

        display_text(index.sections[3].title, "floraTitle");
        display_text(index.sections[3].description, "floraDescription");

        display_text(index.sections[4].title, "faunaTitle");
        display_text(index.sections[4].description, "faunaDescription");

        display_text(index.sections[5].title, "conservationTitle");
        display_text(index.sections[5].description, "conservationDescription");
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    
    const index = JSON.parse(localStorage.getItem("index"));
  
  
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


