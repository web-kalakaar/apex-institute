const facultyData = [
  {
    name: "Rajesh Sharma",
    role: "Director & Founder",
    experience: "15+ Years of Excellence",
    image: "logo.png",
    isDirector: true,
    bio: "A visionary leader with over 15 years of experience in guiding students for SSC and Banking exams. Known for innovative teaching methods and exceptional success rates. His passion for education has transformed thousands of aspirants into successful government employees.",
    subjects: ["Leadership", "Strategy", "Mentorship"],
    successRate: "98%"
  },
  {
    name: "Priya Agarwal",
    role: "Mathematics Expert",
    experience: "10+ Years Experience",
    image: "logo.png",
    isDirector: false,
    bio: "Specializes in quantitative aptitude with a unique approach to simplifying complex problems. Her structured methods have helped thousands crack tough exams with ease.",
    subjects: ["Quant Aptitude", "Arithmetic", "Algebra"],
    successRate: "94%"
  },
  {
    name: "Amit Kumar",
    role: "Reasoning Expert",
    experience: "8+ Years Experience",
    image: "logo.png",
    isDirector: false,
    bio: "Expert in logical reasoning with proven shortcuts and techniques for quick problem solving. His students consistently score among the top percentiles.",
    subjects: ["Logical Reasoning", "Puzzles", "Data Interpretation"],
    successRate: "92%"
  },
  {
    name: "Sneha Verma",
    role: "English Expert",
    experience: "12+ Years Experience",
    image: "logo.png",
    isDirector: false,
    bio: "Masters in English with focus on grammar, vocabulary, and comprehension excellence. Renowned for making English accessible and scoring for all aspirants.",
    subjects: ["Grammar", "Vocabulary", "Comprehension"],
    successRate: "96%"
  },
  {
    name: "Vikram Singh",
    role: "General Studies Expert",
    experience: "9+ Years Experience",
    image: "logo.png",
    isDirector: false,
    bio: "Comprehensive knowledge of GK, current affairs, and competitive exam patterns. His concise and updated study material is a favourite among students.",
    subjects: ["GK", "Current Affairs", "Static GK"],
    successRate: "91%"
  }
];

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

function createFacultyCard(faculty, index) {
  const card = document.createElement("div");
  card.className = `faculty-card${faculty.isDirector ? " director" : ""}`;
  card.style.animationDelay = `${index * 0.15}s`;

  const subjectTags = faculty.subjects.map(s =>
    `<span class="subject-tag">${s}</span>`
  ).join("");

  card.innerHTML = `
    <div class="card-glow"></div>
    <div class="faculty-image">
      <div class="avatar-ring">
        <img src="${faculty.image}" alt="${faculty.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="avatar-fallback">${getInitials(faculty.name)}</div>
      </div>
      ${faculty.isDirector ? '<div class="director-crown">&#9670;</div>' : ""}
    </div>
    <div class="faculty-info">
      <h3>${faculty.name}</h3>
      <div class="faculty-role">${faculty.role}</div>
      <div class="faculty-exp">
        <span class="exp-icon">&#9679;</span> ${faculty.experience}
      </div>
      <p class="faculty-bio">${faculty.bio}</p>
      <div class="subject-tags">${subjectTags}</div>

    </div>
  `;

  return card;
}

function renderFacultyGrid() {
  const grid = document.querySelector(".faculty-grid");
  if (!grid) return;

  grid.innerHTML = "";

  facultyData.forEach((faculty, index) => {
    const card = createFacultyCard(faculty, index);
    grid.appendChild(card);
  });

  observeCards();
}

function observeCards() {
  const cards = document.querySelectorAll(".faculty-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        const bar = entry.target.querySelector(".bar-fill");
        if (bar) {
          setTimeout(() => bar.classList.add("animate"), 400);
        }
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", renderFacultyGrid);
