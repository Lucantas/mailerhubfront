
const s = new SideBar();
console.log(s)

sidebarToggle.onclick = function(){
    s.show();
}

s.children.forEach((link) => {
    link.onclick = function(e){
        e.preventDefault();
        
        fetch(link.href)
        .then((res) => { return res.text() })
        .then((res) => {
            const content = res;
            mainContent.innerHTML = content;
            if (isMobile) s.hide();
        });
    }
})

let isMobile = screen.width >= 1024 ? false : true;


window.onresize = function(){
    isMobile = screen.width >= 1024 ? false : true;
}