/*
*
*
*
Copyright 2019 Lucas Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*
*
*
*/

HTMLCollection.prototype.toArray = function(){
	return Array.prototype.slice.call(this);
}

HTMLElement.prototype.childrenHeight = function(){
   try{
        return this.children.toArray().reduce((prev, cur) => {
            return prev += isNaN(parseInt(cur.offsetHeight)) 
                ? 0
                : parseInt(cur.offsetHeight);
        }, 0);
   }
   catch(e){
       console.error(e);
       return 0;
   }
}

HTMLElement.prototype.html = function(elm){
	if (elm == undefined) {
		return this.innerHTML; 	
	}
	this.innerHTML = "" 
    this.appendChild(elm);

    const scripts = elm.getElementsByTagName("script");

    if (scripts.length){
        scripts.toArray().forEach((script) => {
            eval(script.innerHTML);
        })
    }

}