
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

fetch('leopard.json')
    .then(response => response.json())
    .then(datas => {
        //store the fetched data in local storage
        localStorage.setItem('leopard', JSON.stringify(datas));
        
        display_text(data.title, "heading1");
        display_text(data.subtitle, "heading2");
       
        display_text(data.sightings[0].title, "heading4");
        display_text(data.sightings[0].description, "parah1");
       
        display_text(data.sightings[1].title, "heading5");
        display_text(data.sightings[1].description, "parah2");

        display_text(data.sightings[2].title, "heading6");
        display_text(data.sightings[2].description, "parah3");

        display_text(data.threats[0].title, "heading8");
        display_text(data.threats[0].description, "heading9");
        display_text(data.threats[0].description_2, "para1");


        display_text(data.threats[1].title, "heading10");
        display_text(data.threats[1].description, "heading11");
        display_text(data.threats[1].description_2, "para2");

      
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    const data = JSON.parse(localStorage.getItem("leopard"));
  
  
   
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