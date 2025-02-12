const urls = [
    'https://jsonplaceholder.typicode.com/oop',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/oops'
];

async function fetchNames() {
    for (const url of urls) {
        try {
            const  response = await fetch(url);

            if (response.ok) {
                const users = await response.json();
                const names = users.map(user => user.name);
                return names;
            } else {
                console.log(`Request to ${url} failed with status: ${response.status}`);
            }

        } catch (error) {
            console.log(`Fetch error for ${url}:`, error);
        }
    }

    throw new Error("All fetch attempts failed");
}

fetchNames()
    .then(names => console.log("User names:", names))
    .catch(error => console.log("error:", error.message));
