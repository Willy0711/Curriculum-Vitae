const EmailKlik = document.getElementById("EmailKlik");
EmailKlik.addEventListener("click", function() {
    const email = "willyschool743@gmail.com";
     const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + encodeURIComponent(email) 
    window.open(gmailUrl, "_blank");

    // const email = "willyschool743@gmail.com";
    // const subject = "Hello";
    // const body = "Hi there! Heheh"

    // const gmailUrl =
    //         "https://mail.google.com/mail/?view=cm&fs=1" +
    //         "&to=" + encodeURIComponent(email) +
    //         "&su=" + encodeURIComponent(subject) +
    //         "&body=" + encodeURIComponent(body);
    // window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
    
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