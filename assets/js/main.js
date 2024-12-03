//     // Replace this with your actual GitHub repository URL
// const repositoryUrl = "https://api.github.com/repos/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes/contents/";

// document.addEventListener("DOMContentLoaded", () => {
//     fetchContent(repositoryUrl, document.getElementById("notes-container"));
// });

// // Function to fetch repository content recursively
// async function fetchContent(url, container) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Failed to fetch repository content.");

//         const items = await response.json();

//         for (const item of items) {
//             if (item.type === "dir") {
//                 // Create a section for the folder
//                 const folderSection = document.createElement("div");
//                 folderSection.className = "col-md-12 my-3";
//                 folderSection.innerHTML = `<h3>${item.name}</h3>`;
//                 container.appendChild(folderSection);

//                 // Recursively fetch content of the folder
//                 const folderContainer = document.createElement("div");
//                 folderContainer.className = "row";
//                 folderSection.appendChild(folderContainer);

//                 await fetchContent(item.url, folderContainer);
//             } else if (item.type === "file") {
//                 // Add file as a card
//                 const fileCard = document.createElement("div");
//                 fileCard.className = "col-md-4 my-2";
//                 fileCard.innerHTML = `
//                     <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">${item.name}</h5>
//                             <a href="${item.download_url}" target="_blank" class="btn btn-primary">View Note</a>
//                         </div>
//                     </div>
//                 `;
//                 container.appendChild(fileCard);
//             }
//         }
//     } catch (error) {
//         container.innerHTML = `<p class="text-danger">Error fetching content: ${error.message}</p>`;
//     }
// }
