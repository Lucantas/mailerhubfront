
const s = new SideBar();
console.log(s)

sidebarToggle.onclick = function(){
    s.show();
}

hideSidebar.onclick = function(){
    s.hide();
}

let isMobile = screen.width >= 1024 ? false : true;


window.onresize = function(){
    isMobile = screen.width >= 1024 ? false : true;
    if (!isMobile) s.show();
}
