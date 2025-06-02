import { createValidId } from './api.js';
import { fetchDirectoryContents } from './api.js';
import { repositoryStructure } from './config.js';

// Function to create course cards
export function createCourseCard(course) {
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card course-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${course.name}</h5>
                    <p class="card-text">
                        <i class="fas fa-folder-open me-2"></i>
                        <a href="${course.path}" target="_blank" class="text-decoration-none">View on GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Function to create semester accordion
export function createSemesterAccordion(year, semester) {
    const semesterId = `${year.path}-${semester.path}`.replace(/\/|\s/g, '_').replace(/-/g, '_');
    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading_${semesterId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse_${semesterId}" aria-expanded="false" 
                        aria-controls="collapse_${semesterId}">
                    ${semester.name}
                </button>
            </h2>
            <div id="collapse_${semesterId}" class="accordion-collapse collapse" 
                 aria-labelledby="heading_${semesterId}">
                <div class="accordion-body">
                    <div class="row" id="courses_${semesterId}">
                        ${semester.courses.map(course => createCourseCard(course)).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to create year accordion
export function createYearAccordion(year) {
    const yearId = year.path.replace(/\/|\s/g, '_').replace(/-/g, '_');
    return `
        <div class="accordion mb-4" id="year_${yearId}">
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading_${yearId}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapse_${yearId}" aria-expanded="true" 
                            aria-controls="collapse_${yearId}">
                        ${year.name}
                    </button>
                </h2>
                <div id="collapse_${yearId}" class="accordion-collapse collapse show" 
                     aria-labelledby="heading_${yearId}">
                    <div class="accordion-body">
                        <div class="accordion" id="semesters_${yearId}">
                            ${year.semesters.map(semester => createSemesterAccordion(year, semester)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to create resource cards
export function createResourceCard(resource) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="resource-card">
                <h5 class="card-title">${resource.name}</h5>
                <p class="card-text">
                    <i class="fas fa-link me-2"></i>
                    <a href="${resource.path}" target="_blank" class="text-decoration-none">Access Resource</a>
                </p>
            </div>
        </div>
    `;
}

// Function to create ML-DL item card
export function createMLDLItemCard(item) {
    const icon = item.type === 'dir' ? 'fa-folder' : 'fa-file';
    const isFolder = item.type === 'dir';
    const linkText = isFolder ? 'View Contents' : 'View on GitHub';
    const linkClass = isFolder ? 'view-contents-link' : 'text-decoration-none';
    
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card course-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">
                        <i class="fas ${icon} me-2"></i>
                        ${isFolder ? 
                            `<button class="btn btn-link ${linkClass}" data-path="${item.path}">${linkText}</button>` :
                            `<a href="${item.html_url}" target="_blank" class="${linkClass}">${linkText}</a>`
                        }
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Function to create ML-DL topic/day accordion
export function createMLDLAccordion(section, items) {
    const sectionId = createValidId(section.path);
    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading_${sectionId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse_${sectionId}" aria-expanded="false" 
                        aria-controls="collapse_${sectionId}">
                    ${section.name}
                </button>
            </h2>
            <div id="collapse_${sectionId}" class="accordion-collapse collapse" 
                 aria-labelledby="heading_${sectionId}">
                <div class="accordion-body">
                    <div class="row" id="content_${sectionId}">
                        ${items.map(item => createMLDLItemCard(item)).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to create ML-DL Training section
export function createMLDLTrainingSection() {
    return `
        <div class="accordion" id="mlDlContentAccordion">
            <!-- Topics Section -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading_topics">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapse_topics" aria-expanded="true" 
                            aria-controls="collapse_topics">
                        <i class="fas fa-folder-tree me-2"></i>Topic-based Content
                    </button>
                </h2>
                <div id="collapse_topics" class="accordion-collapse collapse show" 
                     aria-labelledby="heading_topics">
                    <div class="accordion-body">
                        <div class="accordion" id="topicsAccordion">
                            ${repositoryStructure.mlDlTraining.topics.map(topic => 
                                createMLDLAccordion(topic, topic.items)).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <!-- Days Section -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading_days">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapse_days" aria-expanded="false" 
                            aria-controls="collapse_days">
                        <i class="fas fa-calendar-day me-2"></i>Day-wise Content
                    </button>
                </h2>
                <div id="collapse_days" class="accordion-collapse collapse" 
                     aria-labelledby="heading_days">
                    <div class="accordion-body">
                        <div class="accordion" id="daysAccordion">
                            ${repositoryStructure.mlDlTraining.days.map(day => 
                                createMLDLAccordion(day, day.items)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to handle folder content viewing
export async function handleFolderContent(path, containerId) {
    try {
        const contents = await fetchDirectoryContents(path);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = contents
                .filter(item => item.type === 'dir' || item.type === 'file')
                .map(item => createMLDLItemCard({
                    name: item.name,
                    path: item.path,
                    html_url: item.html_url,
                    type: item.type
                })).join('');
            
            // Add event listeners to new folder buttons
            container.querySelectorAll('.view-contents-link').forEach(button => {
                button.addEventListener('click', async (e) => {
                    const folderPath = e.target.dataset.path;
                    const folderId = createValidId(folderPath);
                    const newContainerId = `content_${folderId}`;
                    
                    if (!document.getElementById(newContainerId)) {
                        const newContainer = document.createElement('div');
                        newContainer.id = newContainerId;
                        newContainer.className = 'row mt-3';
                        e.target.closest('.card-body').appendChild(newContainer);
                    }
                    
                    await handleFolderContent(folderPath, newContainerId);
                });
            });
        }
    } catch (error) {
        console.error('Error fetching folder contents:', error);
    }
}

// Function to populate years accordion
export function populateYearsAccordion() {
    const yearsAccordion = document.getElementById('yearsAccordion');
    if (yearsAccordion) {
        yearsAccordion.innerHTML = repositoryStructure.years.map(year => createYearAccordion(year)).join('');
        
        // Initialize all accordions
        const allAccordions = yearsAccordion.querySelectorAll('.accordion');
        allAccordions.forEach(accordion => {
            new bootstrap.Collapse(accordion, {
                toggle: false
            });
        });
    }
}

// Function to populate ML-DL Training section
export function populateMLDLTraining() {
    const mlDlContainer = document.getElementById('mlDlContainer');
    if (mlDlContainer) {
        mlDlContainer.innerHTML = createMLDLTrainingSection();
        
        // Initialize all accordions
        const allAccordions = mlDlContainer.querySelectorAll('.accordion');
        allAccordions.forEach(accordion => {
            new bootstrap.Collapse(accordion, {
                toggle: false
            });
        });

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
    }
}

// Function to populate resources section
export function populateResources() {
    const resourcesContainer = document.getElementById('resourcesContainer');
    if (resourcesContainer) {
        resourcesContainer.innerHTML = repositoryStructure.resources.items
            .map(resource => createResourceCard(resource))
            .join('');
    }
} 