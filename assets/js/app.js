import { showAllUsers, showUser } from "./modules/view/userViews.js";
// globals ----------------------------------------------------------------
window._myEventListeners = { userClicked, returnToTable };

let globalUserData;
// fetch users  model code ------------------------------------------------
fetchUsers();

function fetchUsers() {
    fetch('https://dummyjson.com/users?limit=0')

        .then((response) => {
            // error check på netværk response
            if (!response.ok) {
                throw new Error("not ok!" + response.status);
            }

            // konverter response til json data objekt
            let data = response.json();
            return data;

        })

        .then((data) => {
            // do stuff
            recivedUsers(data.users);
        })

        .catch((error) => {
            console.log(error.message);
        });
}


// viev codes ------------------------------------------------
function recivedUsers(myUsers) {
    globalUserData = myUsers;
    showAllUsers(myUsers, 'app', true, 'vis');

}

function userClicked(myId) {
    console.warn(myId);

    globalUserData.forEach((userObject) => {
        
        if (userObject.id == myId) {
            showUser(userObject, 'app', true);
        }
    });
}

function returnToTable() {
    showAllUsers(globalUserData, 'app', true, 'vis');
    
}