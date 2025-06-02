import { BASE_URL } from './config.js';

// Function to fetch contents from a directory
export async function fetchDirectoryContents(dirPath = '') {
    try {
        const response = await fetch(`${BASE_URL}/getNotes?dirPath=${dirPath}`);
        if (!response.ok) {
            throw new Error(`Error fetching contents from ${dirPath}: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching contents from ${dirPath}:`, error);
        return [];
    }
}

// Function to create a valid ID from a path
export function createValidId(path) {
    const parts = path.split('/');
    const folderName = parts[parts.length - 1];
    return folderName.replace(/[^a-zA-Z0-9]/g, '_');
} 