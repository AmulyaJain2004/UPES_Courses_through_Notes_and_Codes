import { buildRepositoryStructure } from './repository.js';
import { populateYearsAccordion, populateResources, populateMLDLTraining } from './ui.js';
import { setupSearch } from './search.js';
import { setupDarkModeToggle } from './theme.js';
import { applyScrollAnimations } from './animations.js';

// Initialize the page
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch and build the repository structure first
        await buildRepositoryStructure();

        // Then populate the UI and setup functionality
        populateYearsAccordion();
        populateResources();
        populateMLDLTraining();
        setupSearch();
        setupDarkModeToggle();
        applyScrollAnimations();
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}); 