import { fetchDirectoryContents } from './api.js';
import { repositoryStructure } from './config.js';

// Function to build the repository structure dynamically
export async function buildRepositoryStructure() {
    const topLevelContents = await fetchDirectoryContents();
    const years = [];
    let resources = [];
    let mlDlTraining = { topics: [], days: [] };

    for (const item of topLevelContents) {
        if (item.type === 'dir') {
            if (item.name.toLowerCase().endsWith('-year')) {
                const yearData = await processYearDirectory(item);
                years.push(yearData);
            } else if (item.name === 'Important_Resources') {
                resources = await processResourcesDirectory(item);
            } else if (item.name === 'ML-DL-Intensive_Training') {
                mlDlTraining = await processMLDLDirectory(item);
            }
        }
    }

    // Sort and organize the data
    sortRepositoryData(years, mlDlTraining);

    // Update the repository structure
    repositoryStructure.years = years;
    repositoryStructure.resources.items = resources;
    repositoryStructure.mlDlTraining = mlDlTraining;

    return repositoryStructure;
}

async function processYearDirectory(yearItem) {
    const yearContents = await fetchDirectoryContents(yearItem.path);
    const semesters = [];

    for (const semesterItem of yearContents) {
        if (semesterItem.type === 'dir' && semesterItem.name.toLowerCase().startsWith('semester-')) {
            const semesterContents = await fetchDirectoryContents(semesterItem.path);
            const courses = semesterContents
                .filter(item => item.type === 'dir')
                .map(item => ({ name: item.name, path: item.html_url }));
            
            semesters.push({
                name: semesterItem.name,
                path: semesterItem.path,
                courses: courses
            });
        }
    }

    return {
        name: yearItem.name,
        path: yearItem.path,
        semesters: semesters
    };
}

async function processResourcesDirectory(resourceItem) {
    const resourceContents = await fetchDirectoryContents(resourceItem.path);
    return resourceContents
        .filter(item => item.type === 'file' || item.type === 'dir')
        .map(item => ({ name: item.name, path: item.html_url }));
}

async function processMLDLDirectory(mlDlItem) {
    const mlDlContents = await fetchDirectoryContents(mlDlItem.path);
    const mlDlTraining = { topics: [], days: [] };

    for (const item of mlDlContents) {
        if (item.type === 'dir') {
            if (/^\d+\./.test(item.name)) {
                const topicData = await processTopicDirectory(item);
                mlDlTraining.topics.push(topicData);
            } else if (item.name.toLowerCase().startsWith('day-') || 
                      item.name.toLowerCase().startsWith('notes_')) {
                const dayData = await processDayDirectory(item);
                mlDlTraining.days.push(dayData);
            }
        }
    }

    return mlDlTraining;
}

async function processTopicDirectory(topicItem) {
    const topicContents = await fetchDirectoryContents(topicItem.path);
    return {
        name: topicItem.name,
        path: topicItem.path,
        html_url: topicItem.html_url,
        items: topicContents
            .filter(item => item.type === 'dir' || item.type === 'file')
            .map(item => ({
                name: item.name,
                path: item.path,
                html_url: item.html_url,
                type: item.type
            }))
    };
}

async function processDayDirectory(dayItem) {
    const dayContents = await fetchDirectoryContents(dayItem.path);
    return {
        name: dayItem.name,
        path: dayItem.path,
        html_url: dayItem.html_url,
        items: dayContents
            .filter(item => item.type === 'dir' || item.type === 'file')
            .map(item => ({
                name: item.name,
                path: item.path,
                html_url: item.html_url,
                type: item.type
            }))
    };
}

function sortRepositoryData(years, mlDlTraining) {
    // Sort years and semesters
    years.sort((a, b) => a.name.localeCompare(b.name));
    years.forEach(year => {
        year.semesters.sort((a, b) => a.name.localeCompare(b.name));
    });

    // Sort ML-DL Training items
    mlDlTraining.topics.sort((a, b) => {
        const numA = parseInt(a.name.split('.')[0]);
        const numB = parseInt(b.name.split('.')[0]);
        return numA - numB;
    });

    mlDlTraining.days.sort((a, b) => {
        const dayA = a.name.match(/day-(\d+)/i);
        const dayB = b.name.match(/day-(\d+)/i);
        if (dayA && dayB) {
            return parseInt(dayA[1]) - parseInt(dayB[1]);
        }
        return a.name.localeCompare(b.name);
    });
} 