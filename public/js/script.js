// Repository structure data (will be populated dynamically from GitHub API)
let repositoryStructure = {
    years: [],
    resources: {
        name: "Important Resources",
        path: "Important_Resources",
        items: []
    }
};

const BASE_URL = "https://upes-courses-through-notes-and-codes.onrender.com";
// Function to fetch contents from a GitHub directory
async function fetchDirectoryContents(dirPath = '') {
    try {
        const response = await fetch(`${BASE_URL}/getNotes?dirPath=${dirPath}`);
        if (!response.ok) {
            // Handle cases like directory not found or API limits
            console.error(`Error fetching contents from ${url}: ${response.status}`);
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching contents from ${dirPath}: ${error}`);
        return [];
    }
}

// Function to build the repository structure dynamically
async function buildRepositoryStructure() {
    const topLevelContents = await fetchDirectoryContents();
    const years = [];
    let resources = [];

    for (const item of topLevelContents) {
        if (item.type === 'dir') {
            if (item.name.toLowerCase().endsWith('-year')) {
                // This is a year directory (e.g., 1st-year, 2nd-year)
                const yearName = item.name;
                const yearPath = item.path;
                const yearContents = await fetchDirectoryContents(yearPath);
                const semesters = [];

                for (const yearItem of yearContents) {
                    if (yearItem.type === 'dir' && yearItem.name.toLowerCase().startsWith('semester-')) {
                        // This is a semester directory
                        const semesterName = yearItem.name;
                        const semesterPath = yearItem.path;
                        const semesterContents = await fetchDirectoryContents(semesterPath);
                        const courses = [];

                        for (const semesterItem of semesterContents) {
                             if (semesterItem.type === 'dir') { // Assuming courses are directories
                                courses.push({ name: semesterItem.name, path: semesterItem.html_url });
                             }
                             // We can handle individual files in semesters too if they represent course materials
                             // else if (semesterItem.type === 'file') {
                             //     courses.push({ name: semesterItem.name, path: semesterItem.html_url });
                             // }
                        }
                        semesters.push({ name: semesterName, path: semesterPath, courses: courses });
                    }
                }
                years.push({ name: yearName, path: yearPath, semesters: semesters });

            } else if (item.name === 'Important_Resources') {
                // This is the Important Resources directory
                const resourceContents = await fetchDirectoryContents(item.path);
                resources = resourceContents
                                .filter(resItem => resItem.type === 'file' || resItem.type === 'dir') // Include files or directories
                                .map(resItem => ({ name: resItem.name, path: resItem.html_url })); // Link to GitHub HTML URL
            }
            // Add handling for other top-level directories if needed
        }
        // Add handling for top-level files if needed
    }

    // Sort years and semesters alphabetically or numerically if needed
    years.sort((a, b) => a.name.localeCompare(b.name));
    years.forEach(year => {
        year.semesters.sort((a, b) => a.name.localeCompare(b.name));
    });

    repositoryStructure.years = years;
    repositoryStructure.resources.items = resources;

    console.log("Repository structure built:", repositoryStructure);
}

// Function to create course cards
function createCourseCard(course) {
    // Use the GitHub HTML URL directly for the link
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
function createSemesterAccordion(year, semester) {
    const semesterId = `${year.path}-${semester.path}`.replace(/\/|\s/g, '_').replace(/-/g, '_'); // Create a valid ID
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
function createYearAccordion(year) {
    const yearId = year.path.replace(/\/|\s/g, '_').replace(/-/g, '_'); // Create a valid ID
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

// Function to populate the years accordion
function populateYearsAccordion() {
    const yearsAccordion = document.getElementById('yearsAccordion');
    if (yearsAccordion) {
        yearsAccordion.innerHTML = repositoryStructure.years.map(year => createYearAccordion(year)).join('');
        
        // Initialize all accordions independently
        const allAccordions = yearsAccordion.querySelectorAll('.accordion');
        allAccordions.forEach(accordion => {
            new bootstrap.Collapse(accordion, {
                toggle: false
            });
        });
    }
}

// Function to create resource cards
function createResourceCard(resource) {
     // Use the GitHub HTML URL directly for the link
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

// Function to populate resources section
function populateResources() {
    const resourcesContainer = document.getElementById('resourcesContainer');
     if (resourcesContainer) {
        resourcesContainer.innerHTML = repositoryStructure.resources.items
            .map(resource => createResourceCard(resource))
            .join('');
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (!searchInput || !searchButton) return; // Exit if search elements not found

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        // Search through the dynamically loaded data
        const filteredYears = repositoryStructure.years.map(year => ({
            ...year,
            semesters: year.semesters.map(semester => ({
                ...semester,
                courses: semester.courses.filter(course => 
                    course.name.toLowerCase().includes(searchTerm)
                )
            })).filter(semester => semester.courses.length > 0) // Keep semesters with matching courses
        })).filter(year => year.semesters.length > 0); // Keep years with matching semesters

        const filteredResources = repositoryStructure.resources.items.filter(resource => 
            resource.name.toLowerCase().includes(searchTerm)
        );

        // Re-render the sections with filtered data
        renderFilteredResults(filteredYears, filteredResources);
    }

     function renderFilteredResults(years, resources) {
        const yearsAccordion = document.getElementById('yearsAccordion');
        const resourcesContainer = document.getElementById('resourcesContainer');

        if (yearsAccordion) {
            yearsAccordion.innerHTML = years.map(year => createYearAccordion(year)).join('');
        }
        if (resourcesContainer) {
             resourcesContainer.innerHTML = resources.map(resource => createResourceCard(resource)).join('');
        }
         // Ensure accordions are initialized after re-rendering
         const accordions = yearsAccordion ? yearsAccordion.querySelectorAll('.accordion') : [];
         accordions.forEach(acc => new bootstrap.Collapse(acc, { toggle: false }));

         // Show/hide parent elements based on filter results
         document.querySelectorAll('.accordion-item').forEach(item => {
             const coursesRow = item.querySelector('.accordion-body .row');
             if (coursesRow) {
                  const courseCards = coursesRow.querySelectorAll('.col-md-6');
                  let hasVisibleCourse = false;
                  courseCards.forEach(card => {
                       if (card.style.display !== 'none') {
                            hasVisibleCourse = true;
                       }
                  });
                  // Show/hide the semester accordion item based on if it has visible courses
                 item.style.display = hasVisibleCourse ? 'block' : 'none';
             }
         });

         document.querySelectorAll('#yearsAccordion > .accordion').forEach(yearAccordion => {
              const semesterItems = yearAccordion.querySelectorAll('.accordion-item');
              let hasVisibleSemester = false;
              semesterItems.forEach(item => {
                  if (item.style.display !== 'none') {
                      hasVisibleSemester = true;
                  }
              });
              // Show/hide the year accordion based on if it has visible semesters
             yearAccordion.style.display = hasVisibleSemester ? 'block' : 'none';
         });




         // Show/hide resource cards based on filter results
          document.querySelectorAll('#resourcesContainer > .col-md-6').forEach(resourceCardCol => {
              const resourceCard = resourceCardCol.querySelector('.resource-card');
               if (resourceCard) {
                   const cardText = resourceCard.textContent.toLowerCase();
                   const shouldShow = cardText.includes(searchTerm);
                   resourceCardCol.style.display = shouldShow ? 'block' : 'none';
               }
          });






     }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
     // Initial rendering of all content on page load (before any search)
    renderFilteredResults(repositoryStructure.years, repositoryStructure.resources.items);


}

// Dark mode toggle functionality
function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeLabel = document.getElementById('darkModeLabel');

    console.log('Dark mode elements:', { darkModeToggle, body, darkModeLabel });

    if (!darkModeToggle || !body || !darkModeLabel) {
        console.error('Dark mode elements not found:', { 
            darkModeToggle: !!darkModeToggle, 
            body: !!body, 
            darkModeLabel: !!darkModeLabel 
        });
        return;
    }

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    console.log('Current theme from localStorage:', currentTheme);
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
        darkModeLabel.textContent = 'Dark Mode';
    } else {
        darkModeLabel.textContent = 'Light Mode';
    }

    darkModeToggle.addEventListener('change', () => {
        console.log('Dark mode toggle changed:', darkModeToggle.checked);
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkModeLabel.textContent = 'Dark Mode';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkModeLabel.textContent = 'Light Mode';
        }
    });
}

// Apply animations on scroll (basic example)
function applyScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally, stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', async () => {
    // Fetch and build the repository structure first
    await buildRepositoryStructure();

    // Then populate the UI and setup functionality
    populateYearsAccordion();
    populateResources();
    setupSearch();
    setupDarkModeToggle();
    applyScrollAnimations();
}); 