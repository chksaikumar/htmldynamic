// const works = {
//   task1: {
//     title: "Project 1",
//     url: "works/task1/index.html",
//     bgColor: "#FFD700",
//   }, // Yellow
//   task2: {
//     title: "Project 2",
//     url: "works/task2/index.html",
//     bgColor: "#87CEEB",
//   }, // Sky Blue
//   task3: {
//     title: "Project 3",
//     url: "works/task3/index.html",
//     bgColor: "#FFA07A",
//   }, // Light Salmon
//   task4: {
//     title: "Project 4",
//     url: "works/task4/index.html",
//     bgColor: "#DDA0DD",
//   },
//   task5: {
//     title: "Project 5",
//     url: "works/task5/index.html",
//     bgColor: "green",
//   }, // New Project - Purple
// };

// const header = document.querySelector(".header");
// const iframe = document.getElementById("contentFrame");

// // Dynamically create buttons for each work item
// Object.entries(works).forEach(([key, project], index) => {
//   const button = document.createElement("button");
//   button.textContent = project.title;
//   button.id = `btn${index + 1}`;

//   button.addEventListener("click", () => {
//     iframe.src = project.url;
//     document.body.style.backgroundColor = project.bgColor;

//     // Remove 'active' class from all buttons
//     document
//       .querySelectorAll(".header button")
//       .forEach((btn) => btn.classList.remove("active"));

//     // Add 'active' class to the clicked button
//     button.classList.add("active");
//   });

//   header.appendChild(button);
// });

// // Load the last project (Task 4) by default
// const lastProject = Object.values(works)[Object.keys(works).length - 1];
// // iframe.src = lastProject.url;
// document.body.style.backgroundColor = lastProject.bgColor;
// header.lastChild.classList.add("active");
/*
const works = {
  task1: {
    title: "Project 1",
    url: "works/task1/index.html",
    bgColor: "#FFD700",
  }, // Yellow
  task2: {
    title: "Project 2",
    url: "works/task2/index.html",
    bgColor: "#87CEEB",
  }, // Sky Blue
  task3: {
    title: "Project 3",
    url: "works/task3/index.html",
    bgColor: "#FFA07A",
  }, // Light Salmon
  task4: {
    title: "Project 4",
    url: "works/task4/index.html",
    bgColor: "#DDA0DD",
  }, // Plum
};

const header = document.querySelector(".header");
const iframe = document.getElementById("contentFrame");

// Dynamically create buttons for each work item
Object.entries(works).forEach(([key, project], index) => {
  const button = document.createElement("button");
  button.textContent = project.title;
  button.id = `btn${index + 1}`;

  button.addEventListener("click", () => {
    iframe.src = project.url;
    document.body.style.backgroundColor = project.bgColor;

    // Remove 'active' class from all buttons
    document
      .querySelectorAll(".header button")
      .forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");
  });

  header.appendChild(button);
});

// Load the first project (Task 1) by default
const firstProject = Object.values(works)[0];
iframe.src = firstProject.url;
document.body.style.backgroundColor = firstProject.bgColor;
header.firstChild.classList.add("active");
*/
const works = {
  task1: {
    title: "Project 1",
    url: "works/task1/index.html",
    bgColor: "#FFD700",
  }, // Yellow
  task2: {
    title: "Project 2",
    url: "works/task2/index.html",
    bgColor: "#87CEEB",
  }, // Sky Blue
  task3: {
    title: "Project 3",
    url: "works/task3/index.html",
    bgColor: "#FFA07A",
  }, // Light Salmon
  task4: {
    title: "Project 4",
    url: "works/task4/index.html",
    bgColor: "#DDA0DD",
  }, // Plum
  task5: {
    title: "Project 5",
    url: "works/task5/index.html",
    bgColor: "green",
  }, // Green
};

const header = document.querySelector(".header");
const iframe = document.getElementById("contentFrame");

// Dynamically create buttons for each work item
Object.entries(works).forEach(([key, project], index) => {
  const button = document.createElement("button");
  button.textContent = project.title;
  button.id = `btn${index + 1}`;

  button.addEventListener("click", () => {
    iframe.src = project.url;
    document.body.style.backgroundColor = project.bgColor;

    // Remove 'active' class from all buttons
    document
      .querySelectorAll(".header button")
      .forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Update the iframe content after it loads
    iframe.onload = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const h2 = iframeDoc.querySelector("h2");
      if (h2) {
        h2.textContent = `Task ${index + 1}`;
      }
    };
  });

  header.appendChild(button);
});

// Load the first project (Task 1) by default
const firstProject = Object.values(works)[0];
iframe.src = firstProject.url;
document.body.style.backgroundColor = firstProject.bgColor;
header.firstChild.classList.add("active");

// Update the iframe content after it loads
iframe.onload = () => {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const h2 = iframeDoc.querySelector("h2");
  if (h2) {
    h2.textContent = "Task 1";
  }
};
