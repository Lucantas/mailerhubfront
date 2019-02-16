
const s = new SideBar();
console.log(s)

sidebarToggle.onclick = function(){
    s.show();
}

let isMobile = screen.width >= 1024 ? false : true;


window.onresize = function(){
    isMobile = screen.width >= 1024 ? false : true;
}