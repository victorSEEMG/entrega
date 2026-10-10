/* Lógica de Programação 
    [x] Saber quando o usuário clicou no botão
    [x] Mudar o posicionamento do modal
    [x] Fazer a máscara ficar visível
    [x] Quando clicar na máscara, fechar o modal
*/
const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visibility ='visible'
}

function esconderModal(){
    modal.style.left = '-300%'
    mascara.style.visibility ='hidden'
}

class Mobile{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        
    }
    
}
