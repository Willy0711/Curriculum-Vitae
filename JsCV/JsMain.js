const EmailKlik = document.getElementById("EmailKlik");
EmailKlik.addEventListener("click", function() {
    const email = "willyschool743@gmail.com";
     const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + encodeURIComponent(email) 
    window.open(gmailUrl, "_blank");

    document.getElementById("EmailKlik").addEventListener("click", function () {
    const email = "willyschool743@gmail.com";
    window.location.href = `mailto:${email}`;
})});
    // const EmailKlik = document.getElementById("EmailKlik");
    // const email = "willyschool743@gmail.com";

    // const gmailUrl =
    //         "https://mail.google.com/mail/?view=cm&fs=1" +
    //         "&to=" + encodeURIComponent(email);
    // window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    
const WaKlik = document.getElementById("WaKlik");
WaKlik.addEventListener("click", function(){
    const phone = "6289509613656";
    const url = `https://wa.me/${phone}`;
    
    window.open(url, "_blank");
    
    //  const WaKlik = document.getElementById("WaKlik");
    //  WaKlik.addEventListener("click", function(){
    //  const phone = "6289509613656";
    //  const message = "Hi there!";
    //  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    //  });
})

const Linkedin = document.getElementById("linkedKlik");
linkedKlik.addEventListener("click", function(){    
    const url = `https://www.linkedin.com/in/willywijaya1607`;
    window.open(url, "_blank");
})

// Untuk button kategori skills
const semuaBtn = document.getElementById("All");
const officeBtn = document.getElementById("Mo");
const designBtn = document.getElementById("Dg");
const webBtn = document.getElementById("Wd");

const semuaSkill = document.querySelectorAll(".Skills li");

function tampilSemua() {

    semuaSkill.forEach(skill => {
        skill.style.display = "list-item";
    });

}

function tampilKategori(...kategori) {

    semuaSkill.forEach(skill => {

        let cocok = kategori.some(k => 
            skill.classList.contains(k)
        );

        if (cocok) {
            skill.style.display = "list-item";
        } 
        
        else {
            skill.style.display = "none";
        }

    });

}

semuaBtn.addEventListener("click", () => {
    tampilSemua();
});

officeBtn.addEventListener("click", () => {
    tampilKategori("office", "soft");
});

designBtn.addEventListener("click", () => {
    tampilKategori("design", "soft");
});

webBtn.addEventListener("click", () => {
    tampilKategori("programming", "soft");
});