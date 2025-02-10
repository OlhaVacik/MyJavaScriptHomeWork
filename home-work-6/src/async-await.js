async function dataJson(url) {
    try {
        const response = await fetch(url);
        if (response.status == 200) {
            const users = await response.json();
            newDataJson(users);
        } else {
            throw new Error (response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

function newDataJson(users) {
    const userNames = users.map(user => user.name);
    console.log("Name:", userNames);
}
dataJson('https://jsonplaceholder.typicode.com/users');
