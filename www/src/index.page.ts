export const title = "cyberNKYX";
export const id = "index";

async function readFileContent(filePath: string): Promise<string> {
    try {
        const content = await Deno.readTextFile(filePath);
        return content;
    } catch (error: any) {
        console.error(`读取文件时出错: ${error.message}`);
        throw error;
    }
}

export default async function(data: Lume.Data, helpers: Lume.Helpers) {
    const content = await readFileContent("../README.md");
    return helpers.md(content);
}