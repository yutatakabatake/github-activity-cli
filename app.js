const username = process.argv[2];

async function getUserActivity(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
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
            const time = event.created_at.substring(11, 16);

            if (type === 'PushEvent') {
                console.log(`Commit: ${repo} on ${date} at ${time}`);
            } else if (type === 'CreateEvent' && event.payload.ref === 'main') {
                console.log(`Create new repository: ${repo} on ${date} at ${time}`);
            } else if (type === 'PullRequestEvent') {
                const action = event.payload.action;
                const number = event.payload.number;
                if (action === 'opened') {
                    console.log(`PR: create new PullRequest ${number} for ${repo} `);
                } else if (action === 'merged') {
                    console.log(`PR: merge PullRequest ${number} for ${repo} `);
                }
            } else if (type === 'DeleteEvent') {
                const refType = event.payload.ref_type;
                if (refType === 'branch') {
                    const branch = event.payload.ref;
                    console.log(`Delete ${branch} branch for ${repo} on ${date} at ${time}`);
                }
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