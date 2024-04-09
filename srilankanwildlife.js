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

fetch('srilankanwildlife.json')
    .then(response => response.json())
    .then(data => {
        //store the fetched data in local storage
        localStorage.setItem('srilankanwildlife', JSON.stringify(data));

        display_text(srilankanwildlife.sections[0].title, "wildlifeTitle");
       
        display_text(srilankanwildlife.sections[0].subSections[0].title, "introTitle");
        display_text(srilankanwildlife.sections[0].subSections[0].description, "introDescription");
       
        display_text(srilankanwildlife.sections[0].subSections[1].locations[0].name, "hortonTitle");
        display_text(srilankanwildlife.sections[0].subSections[1].locations[0].description, "hortonDescription");

        display_text(srilankanwildlife.sections[0].subSections[1].locations[1].name, "kumanaTitle");
        display_text(srilankanwildlife.sections[0].subSections[1].locations[1].description, "kumanaDescription");

        display_text(srilankanwildlife.sections[0].subSections[1].locations[2].name, "sinharajaTitle");
        display_text(srilankanwildlife.sections[0].subSections[1].locations[2].description, "sinharajaDescription");
      
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    const srilankanwildlife = JSON.parse(localStorage.getItem("srilankanwildlife"));
  
  
   
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

