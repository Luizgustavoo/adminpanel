// Função dropdown do navbar
let notification = document.querySelector(".notification");
let avatar = document.querySelector(".avatar");

dropMenu(avatar);
dropMenu(notification);

function dropMenu(selector) {
    selector.addEventListener("click", () => {
        let dropDownMenu = selector.querySelector(".dropdown-menu");
        console.log(dropDownMenu);
        dropDownMenu.classList.contains("active") ? dropDownMenu.classList.remove("active") : dropDownMenu.classList.add("active");
    });
}

// Sidebar toggle/ bars
let sidebar = document.querySelector(".sidebar");
let bars = document.querySelector(".bars");

bars.addEventListener("click", ()=>{
    sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");
});

// Fim toggle/ bars

function actionDropdown(id){
    closeDropdownAction();
    document.getElementById("actionDropdown" + id).classList.toggle("show-dropdown-action");
}

window.onclick = function(event){
    if(!event.target.matches(".dropdown-btn-action")){
        // document.getElementById("actionDropdown").classList.remove("show-dropdown-action");
        closeDropdownAction();
    }
}

function closeDropdownAction(){
    var dropdown = document.getElementsByClassName("dropdown-action-item");
    var i;
    for(i = 0; i< dropdown.length; i++){
        var openDropdown = dropdown[i];
        if(openDropdown.classList.contains("show-dropdown-action")){
            openDropdown.classList.remove("show-dropdown-action");
        }
    }
}