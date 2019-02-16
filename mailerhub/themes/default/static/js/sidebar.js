const SideBar = function(elm) {
    this.elm = elm || document.getElementById("sidebar"),
    this.defaultStyle = {
        marginLeft:this.elm.dataset.marginLeft || "-90vw",
        width:this.elm.dataset.width || "90vw"
    };
    this.children = [];
    this.getChildren = () =>{
        this.children = [];
        this.elm.querySelectorAll("li>a").forEach((item) => {
            this.children.push(item);
        })
    }
    this.hide = () =>{
        this.elm.style.marginLeft = this.defaultStyle.marginLeft;
        content.classList.remove("sidebar-open");
    }
    this.show = () => {
        this.elm.style.marginLeft = 0
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