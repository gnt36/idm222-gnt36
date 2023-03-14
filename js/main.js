function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }

const sidebar = document.getElementById("mySidebar");
const main = document.getElementById("main");

function toggleNav() {
    const w = sidebar.style.width;

    if (w !== "250px") {
        sidebar.style.width = "250px"
    }
    else {
        sidebar.style.width = "0";
    }
}