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

        events.forEach(event => {
            const repo = event.repo.name;
            const type = event.type;
            const date = event.created_at.substring(0, 10);

            if (type === 'pushEvent') {
                console.log(`Commit for ${repo} at ${date}`);
            }
        });

    } catch (error) {
        console.error("Error getUserActivity : ", error);
    }
}

if (!username) {
    console.log("Enter username : node app.js <username>");
} else {
    getUserActivity(username);
}