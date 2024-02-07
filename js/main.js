window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})




// show/hide faq answer


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //merubah ikon
        const icon= faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }else{
            icon.className = "fa-solid fa-plus";
        }
    })
})

// show/hide programpilihan


const programs = document.querySelectorAll('.coursee_info');

programs.forEach(coursee_info=>{
    coursee_info.addEventListener('click', () => {
        coursee_info.classList.toggle('open')

    })
})



//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

//MEMBUAT POP UP

var modal_ipa = document.getElementById("modal_ipa");

var btn_ipa = document.getElementById("ipa_modal_btn");

var span_ipa = document.getElementsByClassName("close_ipa")[0];

btn_ipa.onclick = function() {
    modal_ipa.style.display = "block";
}
span_ipa.onclick = function() {
    modal_ipa.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_ipa) {
        modal_ipa.style.display = "none";
    }
}


var modal_ips = document.getElementById("modal_ips");

var btn_ips = document.getElementById("ips_modal_btn");

var span_ips = document.getElementsByClassName("close_ips")[0];

btn_ips.onclick = function() {
    modal_ips.style.display = "block";
}
span_ips.onclick = function() {
    modal_ips.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_ips) {
        modal_ips.style.display = "none";
    }
}

var modal_pk = document.getElementById("modal_pk");

var btn_pk = document.getElementById("pk_modal_btn");

var span_pk = document.getElementsByClassName("close_pk")[0];

btn_pk.onclick = function() {
    modal_pk.style.display = "block";
}
span_pk.onclick = function() {
    modal_pk.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_pk) {
        modal_pk.style.display = "none";
    }
}






var modal_pro = document.getElementById("modal_pro");

var btn_pro = document.getElementById("pro_modal_btn");

var span_pro = document.getElementsByClassName("close_pro")[0];

btn_pro.onclick = function() {
    modal_pro.style.display = "block";
}
span_pro.onclick = function() {
    modal_pro.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_pro) {
        modal_pro.style.display = "none";
    }
}


var modal_tah = document.getElementById("modal_tah");

var btn_tah = document.getElementById("tah_modal_btn");

var span_tah = document.getElementsByClassName("close_tah")[0];

btn_tah.onclick = function() {
    modal_tah.style.display = "block";
}
span_tah.onclick = function() {
    modal_tah.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_tah) {
        modal_tah.style.display = "none";
    }
}


var modal_qur = document.getElementById("modal_qur");

var btn_qur = document.getElementById("qur_modal_btn");

var span_qur = document.getElementsByClassName("close_qur")[0];

btn_qur.onclick = function() {
    modal_qur.style.display = "block";
}
span_qur.onclick = function() {
    modal_qur.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_qur) {
        modal_qur.style.display = "none";
    }
}




