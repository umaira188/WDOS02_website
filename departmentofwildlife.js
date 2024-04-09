
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

fetch('departmentofwildlife.json')
    .then(response => response.json())
    .then(datas => {
        //store the fetched data in local storage
        localStorage.setItem('departmentofwildlife', JSON.stringify(datas));
        
        display_text(data.departmentIntro.title, "introHeading");
       
        display_text(data.departmentContent.sections[0].heading, "briefIntroductionHeading");
        display_text(data.departmentContent.sections[0].text, "briefIntroductionText");
       
        display_text(data.departmentContent.sections[1].heading, "ourTeamHeading");
        display_text(data.departmentContent.sections[1].text, "ourTeamText");

        display_text(data.departmentContent.sections[2].heading, "ongoingProjectHeading");
        display_text(data.departmentContent.sections[2].text, "ongoingProjectText");

        display_text(data.departmentContent.sections[3].subheading, "protectedAreasSubheading");
        display_text(data.departmentContent.sections[3].text, "protectedAreasText");

      
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    const data = JSON.parse(localStorage.getItem("departmentofwildlife"));
  
  
  
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

