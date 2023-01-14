import * as fs from 'fs';

export async function createDirectoryStructure(path: string) {
    const directories = path.split('/');
    let currentPath = '';
    for (const dir of directories) {
        currentPath += `${dir}/`;
        try {
            await fs.promises.access(currentPath);
        } catch (err) {
            await fs.promises.mkdir(currentPath);
        }
    }
}

