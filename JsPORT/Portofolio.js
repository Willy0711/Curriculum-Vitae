const skillCards = document.querySelectorAll(".skill-card");

const projects = document.querySelectorAll(".project-card");

const certificates = document.querySelectorAll(".cert-card");

skillCards.forEach(card => {

    card.addEventListener("click", () => {

        const skill = card.dataset.skill;

        /* REMOVE ACTIVE */
        skillCards.forEach(item => {
            item.classList.remove("active");
        });

        /* ADD ACTIVE */
        card.classList.add("active");

        /* FILTER PROJECT */
        projects.forEach(project => {

            const category = project.dataset.category;

            if(skill === "all" || category === skill){

                project.style.display = "block";

            }else{

                project.style.display = "none";

            }

        });

        /* FILTER CERTIFICATE */
        certificates.forEach(cert => {

            const category = cert.dataset.category;

            if(skill === "all" || category === skill){

                cert.style.display = "block";

            }else{

                cert.style.display = "none";

            }

        });

    });

});

const certCards = document.querySelectorAll(".cert-card img");

const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

certCards.forEach((img) => {
    img.addEventListener("click", function () {

        popup.style.display = "flex";

        popupImage.src = this.src;
    });
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});

/* Klik area hitam untuk menutup */
popup.addEventListener("click", function (e) {

    if (e.target !== popupImage) {
        popup.style.display = "none";
    }
});
// const STORAGE_KEY = "projects";
// const container = document.getElementById("portfolioContainer");

// function displayPortfolio(){
//     container.innerHTML = "";
//     const projects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//     const categories = ["Microsoft Office","Design","Programming"];

//     categories.forEach(cat=>{
//         const filtered = projects.filter(p=>p.category === cat);
//         if(filtered.length === 0) return;

//         container.innerHTML += `
//             <h2 class="section-title">${cat}</h2>
//             <div class="grid" id="${cat.replace(/\s/g,'')}"></div>
//         `;

//         const grid = document.getElementById(cat.replace(/\s/g,''));

//         filtered.forEach(p=>{
//             grid.innerHTML += `
//                 <div class="card show">
//                     ${p.image ? `<img src="${p.image}" onclick="openModal('${p.image}')">` : ""}
//                     <h3>${p.title}</h3>
//                     <p>${p.desc}</p>
//                     ${p.file ? `<a class="btn" href="${p.file}" target="_blank">Lihat File</a>` : ""}
//                 </div>
//             `;
//         });
//     });
// }

// function openModal(src){
//     imageModal.style.display = "flex";
//     modalImg.src = src;
// }
// function closeModal(){
//     imageModal.style.display = "none";
// }

// displayPortfolio();

// // Cek password
// function passwordCheck(event) {
//     event.preventDefault();
//     const password = prompt("Masukkan pin untuk mengakses halaman admin:")
//     if (password === "PortoWil") {
//         window.location.href = "admin.html"
//     } else {
//         alert("Anda tidak memiliki wewenang untuk masuk ke halaman admin")
//     }
// }
