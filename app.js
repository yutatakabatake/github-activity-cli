const username = process.argv[2];

async function getUserActivity(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const status = response.status;
        const ok = response.ok;

        if (!ok) {
            throw new Error(`GitHub API error ${status}`);
        }

        const events = await response.json();

    } catch (error) {
        console.error("Error getUserActivity : ", error);
    }
}

if (!username) {
    console.log("Enter username : node app.js <username>");
} else {
    getUserActivity(username);
}