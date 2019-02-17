const SideBar = function(elm) {
    this.elm = elm || document.getElementById("sidebar"),
    this.defaultStyle = {
        marginLeft:this.elm.dataset.marginLeft || "-90vw",
        width:this.elm.dataset.width || "90vw"
    };
    this.children = [];
    this.getChildren = () =>{
        this.children = [];
        this.elm.querySelectorAll("ul>li>a").forEach((item) => {
            this.children.push(item);
        })
        this.handleLinks();
    }

    this.handleLinks = () =>{
        this.children.forEach((link) => {
            link.onclick = function(e){
                e.preventDefault();
                const parent = this.parentNode;

                if (parent.classList.contains("has-children")){
                    const sublist = parent.querySelector("ul");
                    const arrow = parent.querySelector("i.arrow");
                    if (sublist.offsetHeight > 0){
                        sublist.style.height = 0;
                        arrow.style.animation = "fa-spin 1s 2 linear reverse"
                        setTimeout(() => {
                            arrow.classList.add("fa-chevron-down");
                            arrow.classList.remove("fa-chevron-left");
                            arrow.style.animation = "";
                        },299)
                    } else {
                        sublist.style.height = sublist.childrenHeight() + "px";
                        arrow.style.animation = "fa-spin 1s 2 linear"
                        setTimeout(() => {
                            arrow.classList.add("fa-chevron-left");
                            arrow.classList.remove("fa-chevron-down");
                            arrow.style.animation = "";
                        },299)
                    }
                } else {
                    fetch(link.href)
                    .then((res) => { return res.text() })
                    .then((res) => {
                        const content = res;
                        const div = document.createElement("div")
                        div.innerHTML = content.trim(); 
                        mainContent.html(div);                             
                        
                        const curActive = link.closest("ul.menu").querySelector("li.active");
                        if (curActive != undefined && curActive != elm){
                            curActive.classList.remove("active")              
                        }
                        
                        if (isMobile) s.hide();

                        link.parentNode.classList.add("active");  
                    });

                }                
            }        
        }) 
    }
    
    this.hide = () =>{
        content.classList.remove("sidebar-open");
    }
    this.show = () => {
        content.classList.add("sidebar-open");
    }

    {
        this.getChildren();        
    }
}

const MenuItem = function(elm) {
    this.elm = elm;
    this.parent = this.elm.closest("ul");
}



const toggleSidebar = (options) => {
    let _options;
    if (options != undefined){
        _options = options;
    }

    if (_options.hide){
        document.getElementById("sidebar").style.marginLeft = 0
    }

    document.getElementById("sidebar").style.marginLeft = 0
}