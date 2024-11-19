import { writeFile } from "https://deno.land/std/fs/mod.ts";

async function getGitHubFileContent(username: string, repo: string, path: string): Promise<void> {
        const url = `https://raw.githubusercontent.com/${username}/${repo}/main/${path}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
        }

        // Convert the image to a Uint8Array
        const imageData = new Uint8Array(await response.arrayBuffer());
        console.log(imageData);
        // Save the image to the specified file path
        await Deno.writeFile("profile1.png", imageData);
    }

(async () => {
    try {
    const username = 'cyberNKYX';
    const repo = 'cyberNKYX';
    const path = 'profile.png';

    await getGitHubFileContent(username, repo, path);
    } catch (error) {
    console.error(error);
    }
})();