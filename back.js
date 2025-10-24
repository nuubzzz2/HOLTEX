const mainProjects = [
  {
    title: "Industrijski dizajn stolova",
    description: "",
    images: [
      { image: "workExamples/IMG_0990.jpeg", title: "1" },
      { image: "workExamples/IMG_0987.jpeg", title: "2" },
      { image: "workExamples/IMG_0986.jpeg", title: "3" },
    ],
  }
]

const otherProjects = [
    {
      title: "1",
      description: "",
      image: "workExamples/headline.jpeg",
    },
    {
      title: "2",
      description: "",
      image: "workExamples/IMG_3226.jpeg",
    },
    {
      title: "3",
      description: "",
      image: "workExamples/IMG_3225.jpeg",
    },
    {
      title: " 4",
      description: "",
      image: "workExamples/IMG_3221.jpeg",
    },
    {
      title: " 5",
      description: "",
      image: "workExamples/IMG_3219.jpeg",
    },
    {
      title: " 6",
      description: "",
      image: "workExamples/IMG_3189.jpeg",
    },
    {
      title: " 7",
      description: "",
      image: "workExamples/IMG_3186.jpeg",
    },
    {
      title: " 8",
      description: "",
      image: "workExamples/IMG_3183.jpeg",
    },
    {
      title: " 9",
      description: "",
      image: "workExamples/IMG_3181.jpeg",
    },
  ];
document.addEventListener("DOMContentLoaded", () => {
  setupScrollButtons();
  loadMainProjects();
  loadOtherProjects();
});

/* -------------------------------
   SMOOTH SCROLL SETUP
--------------------------------*/
function setupScrollButtons() {
  // Table with button IDs and their target sections
  const buttonMap = [
    { id: "work-btn", target: "#projects" },
    { id: "contact-btn", target: "#contact" },
  ];

  buttonMap.forEach(({ id, target }) => {
    const button = document.getElementById(id);
    if (!button) return;

    button.addEventListener("click", () => {
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* -------------------------------
   AUTO LOAD PROJECTS
--------------------------------*/

function loadMainProjects() {
  // Target container in HTML
  const projectGrid = document.getElementById("projects")

  const projectContainer = document.createElement("div");
  projectContainer.role = "list";
  projectContainer.className = "main-grid";

  projectContainer.innerHTML = "";

  // Dynamically create project cards
  mainProjects.forEach((project) => {
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = project.title;

    project.images.forEach((img) => {
      const article = document.createElement("article");
      article.className = "work-card";
      article.setAttribute("role", "listitem");
      article.setAttribute("tabindex", "0");

      article.innerHTML = `
        <div class="thumb" data-label="${project.title}">
          <div class="thumb-img" style="background-image: url('${img.image}')"></div>
        </div>
        <div class="card-info">
          <h3 class="card-title">${img.title}</h3>
          <p class="card-sub">${project.description}</p>
        </div>
      `;

      projectGrid.appendChild(sectionTitle);
      projectContainer.appendChild(article);
      projectGrid.appendChild(projectContainer);
      
    });
  });
}

function loadOtherProjects() {
  // Target container in HTML
  const projectGrid = document.getElementById("projects")
  const projectContainer = document.createElement("div");
  projectContainer.role = "list";
  projectContainer.className = "showcase-grid";


  // Clear any existing elements
  projectContainer.innerHTML = "";

  const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = "Ostali projekti";


  // Dynamically create project cards
  otherProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "work-card";
    article.setAttribute("role", "listitem");
    article.setAttribute("tabindex", "0");

    article.innerHTML = `
      <div class="thumb" data-label="${project.title}">
        <div class="thumb-img" style="background-image: url('${project.image}')"></div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-sub">${project.description}</p>
      </div>
    `;

    projectGrid.appendChild(sectionTitle);
    projectGrid.appendChild(projectContainer);
    projectContainer.appendChild(article);
  });
}
