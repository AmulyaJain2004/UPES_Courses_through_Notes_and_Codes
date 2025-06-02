import { repositoryStructure } from './config.js';
import { createYearAccordion, createResourceCard, createMLDLTrainingSection, handleFolderContent } from './ui.js';
import { createValidId } from './api.js';

// Function to perform search
export function performSearch(searchTerm) {
    // Search through the dynamically loaded data
    const filteredYears = repositoryStructure.years.map(year => ({
        ...year,
        semesters: year.semesters.map(semester => ({
            ...semester,
            courses: semester.courses.filter(course => 
                course.name.toLowerCase().includes(searchTerm)
            )
        })).filter(semester => semester.courses.length > 0)
    })).filter(year => year.semesters.length > 0);

    const filteredResources = repositoryStructure.resources.items.filter(resource => 
        resource.name.toLowerCase().includes(searchTerm)
    );

    // Filter ML-DL Training content
    const filteredMLDL = {
        topics: repositoryStructure.mlDlTraining.topics.map(topic => ({
            ...topic,
            items: topic.items.filter(item => 
                item.name.toLowerCase().includes(searchTerm)
            )
        })).filter(topic => topic.items.length > 0),
        days: repositoryStructure.mlDlTraining.days.map(day => ({
            ...day,
            items: day.items.filter(item => 
                item.name.toLowerCase().includes(searchTerm)
            )
        })).filter(day => day.items.length > 0)
    };

    // Re-render the sections with filtered data
    renderFilteredResults(filteredYears, filteredResources, filteredMLDL, searchTerm);
}

// Function to render filtered results
function renderFilteredResults(years, resources, mlDlTraining, searchTerm) {
    const yearsAccordion = document.getElementById('yearsAccordion');
    const resourcesContainer = document.getElementById('resourcesContainer');
    const mlDlContainer = document.getElementById('mlDlContainer');

    // Update years section
    if (yearsAccordion) {
        yearsAccordion.innerHTML = years.map(year => createYearAccordion(year)).join('');
        // Initialize accordions
        const accordions = yearsAccordion.querySelectorAll('.accordion');
        accordions.forEach(acc => new bootstrap.Collapse(acc, { toggle: false }));
    }

    // Update resources section
    if (resourcesContainer) {
        resourcesContainer.innerHTML = resources.map(resource => createResourceCard(resource)).join('');
    }

    // Update ML-DL Training section
    if (mlDlContainer) {
        const hasTopics = mlDlTraining.topics.length > 0;
        const hasDays = mlDlTraining.days.length > 0;

        if (hasTopics || hasDays) {
            mlDlContainer.innerHTML = createMLDLTrainingSection();
            
            // Initialize accordions
            const accordions = mlDlContainer.querySelectorAll('.accordion');
            accordions.forEach(acc => new bootstrap.Collapse(acc, { toggle: false }));

            // Add event listeners to folder buttons
            mlDlContainer.querySelectorAll('.view-contents-link').forEach(button => {
                button.addEventListener('click', async (e) => {
                    const folderPath = e.target.dataset.path;
                    const folderId = createValidId(folderPath);
                    const containerId = `content_${folderId}`;
                    
                    if (!document.getElementById(containerId)) {
                        const container = document.createElement('div');
                        container.id = containerId;
                        container.className = 'row mt-3';
                        e.target.closest('.card-body').appendChild(container);
                    }
                    
                    await handleFolderContent(folderPath, containerId);
                });
            });
        } else {
            mlDlContainer.innerHTML = '<div class="alert alert-info">No matching content found in ML-DL Training section.</div>';
        }
    }

    // Show/hide sections based on search results
    const sections = {
        years: document.querySelector('#yearsAccordion'),
        resources: document.querySelector('#resourcesContainer'),
        mlDl: document.querySelector('#mlDlAccordion')
    };

    // Show/hide each section based on whether it has results
    if (sections.years) {
        sections.years.closest('.main-content-section').style.display = 
            years.length > 0 ? 'block' : 'none';
    }
    if (sections.resources) {
        sections.resources.closest('.main-content-section').style.display = 
            resources.length > 0 ? 'block' : 'none';
    }
    if (sections.mlDl) {
        sections.mlDl.style.display = 
            (mlDlTraining.topics.length > 0 || mlDlTraining.days.length > 0) ? 'block' : 'none';
    }
}

// Function to setup search functionality
export function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (!searchInput || !searchButton) return;

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        performSearch(searchTerm);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase();
            performSearch(searchTerm);
        }
    });

    // Initial rendering of all content on page load (before any search)
    renderFilteredResults(
        repositoryStructure.years,
        repositoryStructure.resources.items,
        repositoryStructure.mlDlTraining,
        ''
    );
} 