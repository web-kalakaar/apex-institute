// const galleryData = [
//   {
//     image: "main1.jpg",
//     title: "Interactive Classroom",
//     category: "classroom",
//   },
//   {
//     image: "main1.jpg",
//     title: "Group Study Session",
//     category: "classroom",
//   },
//   {
//     image: "main1.jpg",
//     title: "Computer Lab",
//     category: "classroom",
//   },
//   {
//     image: "main1.jpg",
//     title: "Success Celebration",
//     category: "events",
//   },
//   {
//     image: "main1.jpg",
//     title: "Seminar Event",
//     category: "events",
//   },
//   {
//     image: "main1.jpg",
//     title: "Anniversary Celebration",
//     category: "events",
//   },
//   {
//     image: "main1.jpg",
//     title: "Result Declaration",
//     category: "results",
//   },
//   {
//     image: "main1.jpg",
//     title: "Certificate Distribution",
//     category: "results",
//   },
// ];

const galleryData = [
  // Classroom

  {
    image: "demogallery/demo3.jpg",
    title: "Smart Learning Environment",
    category: "classroom",
  },
  {
    image: "demogallery/demo4.jpg",
    title: "Computer Lab Training",
    category: "classroom",
  },
  {
    image: "demogallery/demo1.jpg",
    title: "Doubt Clearing Session",
    category: "classroom",
  },
  {
    image: "demogallery/demo2.jpg",
    title: "Practice Test Workshop",
    category: "classroom",
  },

  // Events
  {
    image: "demogallery/demo3.jpg",
    title: "Annual Seminar Event",
    category: "events",
  },
  {
    image: "demogallery/demo4.jpg",
    title: "Motivational Guest Lecture",
    category: "events",
  },
  {
    image: "demogallery/demo1.jpg",
    title: "Career Guidance Program",
    category: "events",
  },
  {
    image: "demogallery/demo2.jpg",
    title: "Success Celebration Ceremony",
    category: "events",
  },
  {
    image: "demogallery/demo3.jpg",
    title: "Student Interaction Event",
    category: "events",
  },
  {
    image: "demogallery/demo4.jpg",
    title: "Institute Anniversary Celebration",
    category: "events",
  },

  // Results
  {
    image: "demogallery/demo1.jpg",
    title: "SSC Selection Achievement",
    category: "results",
  },
  {
    image: "demogallery/demo2.jpg",
    title: "Banking Exam Success",
    category: "results",
  },
  {
    image: "demogallery/demo3.jpg",
    title: "Top Rank Holders",
    category: "results",
  },
  {
    image: "demogallery/demo4.jpg",
    title: "Certificate Distribution",
    category: "results",
  },
  {
    image: "demogallery/demo1.jpg",
    title: "Government Job Selections",
    category: "results",
  },
  {
    image: "demogallery/demo2.jpg",
    title: "Outstanding Student Achievements",
    category: "results",
  },
];

function createGalleryCard(item, index) {
  const card = document.createElement("div");

  card.className = "gallery-item gallery-enter";
  card.dataset.category = item.category;
  card.style.animationDelay = `${index * 0.08}s`;
  card.style.animationDuration = `${index * 1}s`;
  card.innerHTML = `
    <div class="gallery-placeholder">
      <img src="${item.image}" alt="${item.title}">
    </div>

    <div class="gallery-overlay">
      <span>${item.title}</span>
    </div>
  `;

  return card;
}

function renderGallery(category = "classroom") {
  const grid = document.querySelector(".gallery-grid");

  if (!grid) return;

  grid.innerHTML = "";

  const filteredData = galleryData.filter((item) => item.category === category);

  filteredData.forEach((item, index) => {
    grid.appendChild(createGalleryCard(item, index));
  });
}

function initializeGalleryTabs() {
  const tabs = document.querySelectorAll(".gallery-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const category = tab.dataset.category;

      renderGallery(category);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery(); // Default = classroom

  initializeGalleryTabs();
});





// ============================================
// GALLERY TABS
// ============================================

// const galleryTabs = document.querySelectorAll(".gallery-tab");
// const galleryItems = document.querySelectorAll(".gallery-item");

// galleryTabs.forEach((tab) => {
//   tab.addEventListener("click", function () {
//     const category = this.getAttribute("data-category");

//     galleryTabs.forEach((t) => t.classList.remove("active"));
//     this.classList.add("active");

//     galleryItems.forEach((item) => {
//       if (category === "all" || item.getAttribute("data-category") === category) {
//         item.style.display = "block";
//         setTimeout(() => {
//           item.style.opacity = "1";
//           item.style.transform = "scale(1)";
//         }, 10);
//       } else {
//         item.style.opacity = "0";
//         item.style.transform = "scale(0.8)";
//         setTimeout(() => {
//           item.style.display = "none";
//         }, 300);
//       }
//     });
//   });
// });

// ============================================
// LIGHTBOX
// ============================================
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");

document.querySelector(".gallery-grid").addEventListener("click", (e) => {

    const card = e.target.closest(".gallery-item");

    if (!card) return;

    const img = card.querySelector("img");

    lightboxContent.innerHTML = `
        <img src="${img.src}" alt="${img.alt}">
    `;

    lightbox.classList.add("active");

});

function closeLightbox() {
    lightbox.classList.remove("active");
}

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});
