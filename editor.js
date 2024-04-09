// Map page names to local storage keys
const pageLocalStorageKeys = {
    Home: "index",
    intro: "srilankanwildlife",
    department: "departmentofwildlife",
    leopard: "leopard",
    animal: "animal",
    wilpattu: "wilpattu",
    yala: "yala"
};

// Function to handle the "SELECT PAGE" button click event
function handleSelectPage() {
    const selectPage = document.querySelector(".selection").value;
    const textarea = document.querySelector(".textarea");

    // Check if the selected page exists in the mapping
    if (selectPage in pageLocalStorageKeys) {
        textarea.value = localStorage.getItem(pageLocalStorageKeys[selectPage]);
    } else {
        console.log("Page not found in mapping");
    }
}

// Function to handle the "SAVE CHANGES" button click event
function handleSaveChanges(e) {
    e.preventDefault();

    const selectPage = document.querySelector(".selection").value;
    const textareaValue = document.querySelector(".textarea").value;

    // Check if both page and textarea have values
    if (selectPage && textareaValue) {
        const localStorageKey = pageLocalStorageKeys[selectPage];
        localStorage.setItem(localStorageKey, textareaValue);
        alert("Data saved to local storage!");
    } else {
        console.log("Error: Something went wrong. Make sure both page and textarea have values.");
    }
}

// Event listeners
const get_data_button = document.getElementById("select");
if (get_data_button) {
    get_data_button.addEventListener("click", handleSelectPage);
}

const editPageButton = document.getElementById("save");
if (editPageButton) {
    editPageButton.addEventListener("click", handleSaveChanges);
}
