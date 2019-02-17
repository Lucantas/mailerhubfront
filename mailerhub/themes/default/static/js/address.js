function createAddress(e) {
    e.preventDefault();    
    const nameContainer = listName.parentNode;
    if (this.checked) nameContainer.style.display = "block";
    else nameContainer.style.display = "none";    
}

console.log("AAAAAAAAAAAAAA")

newAddress.onsubmit = function(){
    if (createList.checked){
        // ask for the name
    }
}
