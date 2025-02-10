function dataJson() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            newDataJson(users);
        })
        .catch(error => console.error("Error", error));
}

function newDataJson(users) {
    const userNames = users.map(user => user.name);
    console.log("Name:", userNames);
}
dataJson();
