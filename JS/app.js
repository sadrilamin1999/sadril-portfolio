// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");

// Projects
const projects = [
  {
    title: "Reel Vers - Movie ticket booking website",
    description:
      "Reel Vers is online movie ticket booking system.There are many funconalaties in here. Tranding movei and ticket booking system is so awssem. There are lot of usefull fetures in Reel Vers!",
    image: "./images/Reel-vers.PNG",
    tools: "html, css, js",
    liveLink: "https://sadrilamin1999.github.io/Reel_Vers/",
    githubLink: "https://github.com/sadrilamin1999/Reel_Vers",
  },
  {
    title: "Bondhu Bank - An online bank application",
    description:
      "Bondhu Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using Spectra Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to Spectra Bank!",
    image: "./images/Bondhu_bank.PNG",
    tools: "html, css, js",
    liveLink: "https://sadrilamin1999.github.io/Bondhu_Bank/",
    githubLink: "https://github.com/sadrilamin1999/Bondhu_Bank",
  },
  {
    title: "Tera Guard - An anti-virus website",
    description:
      "A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
    image: "./images/Teraguard.PNG",
    tools: "html, css, js",
    liveLink: "https://sadrilamin1999.github.io/Tera_guard/",
    githubLink: "https://github.com/sadrilamin1999/Tera_guard",
  },
];

// Application architechure
class App {
  constructor() {
    this._stickyNavbar();
    this._activeLinks();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._renderProjects();
  }
  // Sticky navbar
  _stickyNavbar() {
    const navHeight = nav.getBoundingClientRect().height;
    const nvaObs = new IntersectionObserver(this._sitckOperations, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });
    nvaObs.observe(header);
  }
  _sitckOperations(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }
  // Links Active
  _activeLinks() {
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");
        console.log(siblings);

        siblings.forEach((sibling) => {
          if (sibling === link) sibling.style.color = "rgb(20, 184, 166)";
          else sibling.style.color = "rgb(209, 213, 219)";
        });
      })
    );
  }
  // Toggle mobile navbar
  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.contains("toggle-close")
        ? this._disappearMobileNav()
        : this._appearMobileNav();
    });
  }

  _disappearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.55s 1";
    setTimeout(() => {
      linksContainer.classList.remove("links-open");
    }, 500);
    document.querySelector("html").style.overflow = "visible";
  }

  _appearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector("html").style.overflow = "hidden";
  }

  // Tag cloud
  _tagCloud() {
    const tags = [
      " HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Javascript",
      "jQuery",
      "Git",
      "GitHub",
      "Netlify",
      "OOP",
      "Fetch API",
      "AJAX",
      "Node",
      "Percel",
    ];
    TagCloud(".content", tags, {
      radius: 380,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }
  // Type writer
  _typeWriter() {
    const typeWriter = new Typewriter(app, {
      loop: true,
    });

    typeWriter
      .typeString("Web developer")
      .pauseFor(2000)
      .deleteChars(7)
      .typeString("signer")
      .pauseFor(2000)
      .start();
  }
  // Projects rendering
  _renderProjects() {
    projects.forEach((project) => {
      const html = `
          <div class="project">
            <div class="project-img">
              <img
                src="${project.image}"
                alt="Photo of ${project.title}"
              />
            </div>
            <h3 class="project-title">
            ${project.title}
            </h3>
            <p class="project-details">
              ${project.description}
            </p>
            <p class="project-tools">
              Tools: <span>${project.tools}</span>
            </p>
            <div class="project-btns">
              <a href="${project.liveLink}" target="_blank"
                >Live Site &rarr;</a
              >
              <a
                href="${project.githubLink}"
                target="_blank"
                >GitHub &rarr;</a
              >
            </div>
          </div>
      `;

      projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}
const myApp = new App();
