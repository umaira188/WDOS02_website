
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

fetch('animal.json')
    .then(response => response.json())
    .then(datas => {
        //store the fetched data in local storage
        localStorage.setItem('animal', JSON.stringify(datas));
        
        display_text(data.title, "tag1");
        display_text(data.subtitle, "tag2");
        display_text(data.introduction, "tag3");

       
        display_text(data.animals[0].name, "tag4");
        display_text(data.animals[0].description, "tag4");
       
        display_text(data.animals[1].name, "tag6");
        display_text(data.animals[1].description, "tag7");
        
        display_text(data.animals[2].name, "tag8");
        display_text(data.animals[2].description, "tag9");

        display_text(data.animals[3].name, "tag10");
        display_text(data.animals[3].description, "tag11");

        display_text(data.animals[4].name, "tag12");
        display_text(data.animals[4].description, "tag13");

        display_text(data.animals[5].name, "tag14");
        display_text(data.animals[5].description, "tag15");

        display_text(data.animals[6].name, "tag16");
        display_text(data.animals[6].description, "tag17");

        display_text(data.animals[7].name, "tag18");
        display_text(data.animals[7].description, "tag19");

        display_text(data.animals[8].name, "tag20");
        display_text(data.animals[8].description, "tag21");
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    
    const data = JSON.parse(localStorage.getItem("animal"));
  
  
  
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