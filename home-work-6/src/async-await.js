(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return newDataJson(users);
    } catch (error) {
        console.log("Error:", error);
    }
}) ();

async function newDataJson(users) {
    const userNames = await users.map(user => user.name);
    console.log(userNames);
}
