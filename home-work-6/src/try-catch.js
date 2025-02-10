async function dataJson(url, url1, url2) {
    try {
        let response = await fetch(url);
        if (response.status == 404) {
            response = await fetch(url1);

            if (response.status == 404) {
                response = await fetch(url2);
                if (response.status == 404) {
                    throw new Error ( "All url are 404");
                }
            }

        }

        const users = await response.json();
        console.log(("Data:", users));

    } catch (error) {
        console.log("Error:", error);
    }
}


dataJson('https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/users2', 'https://jsonplaceholder.typicode.com/users3');
