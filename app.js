const username = process.argv[2];

async function getUserActivity(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetch: ", error);
    }
}

if (!username) {
    console.log("Enter username : node app.js <username>");
} else {
    getUserActivity(username);
}