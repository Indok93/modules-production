

export function showAllUsers(userData, displayElement, buttonIf, buttonText) {

    // find DOM element
    let myApp = document.getElementById(displayElement);

    // clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';
    let myEditButton = '';

    userData.forEach((userObject) => {

        if (buttonIf) {
            myEditButton = `<button onclick="window._myEventListeners.userClicked(${userObject.id})">${buttonText}</button>`;
        }

        myUserHtml += `<tr><td>${userObject.firstName}</td><td>${userObject.lastName}</td><td>${myEditButton}</td></tr>`;
    });

    myApp.innerHTML = `<h2>Users</h2><table><tr><th>Fornavn</th><th>efternavn</th><th>edit</th></tr>${myUserHtml}</table>`;

}

 export function showUser(myUser, displayElement, returnButton) {
    // find DOM element
     let myApp = document.getElementById(displayElement);

     // clear DOM element
     myApp.innerHTML = '';

     let myUserHtml = '';
     let myEditButton = '';

     for (const key in myUser) {
        myUserHtml += `<tr><td>${key}</td><td>${myUser[key]}</td></tr>`;
     }

     if (returnButton) {
        myEditButton = `<button onclick="window._myEventListeners.returnToTable()">Return</button>`;
     }

    myApp.innerHTML = `<section><h2>User</h2><table>${myUserHtml}</table>${myEditButton}</section>`;
    
}

/*  show details
    et modul der kan vise alle detaljer om en bruger. i et defineret DOM element
    de skal være en knap der kan vise alle brugere igen hvis det er specificeret. */
/*

<table>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
</table>

*/
