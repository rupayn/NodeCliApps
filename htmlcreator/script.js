
const root=document.querySelector("#root")
const elemCreator=(elm,obj,txt)=>{
    const oElm = document.createElement(elm);
    
    if(obj){
        for (const e in obj) {
            oElm.style[e] = obj[e]
        }
    }
    if(txt){
        oElm.innerText = txt;
    }
    return oElm;
}
const h1styleObj={
    "text-align": "center",
    "margin-bottom": "90px",
    "background-color": "blueviolet"
}
const h1 = elemCreator("h1", h1styleObj, "Hi this folder is successfully created");

root.appendChild(h1)

const divStyle={
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center"
}
const div = elemCreator("div", divStyle)

const p1 = elemCreator("p", null,"Now time is: ")
const sp1 = elemCreator("span", null,null)
sp1.id ="time"
p1.appendChild(sp1)
div.appendChild(p1)

const p2 = elemCreator("p", null, "count: ")
const sp2 = elemCreator("span", null, "0")
sp2.id ="count"
p2.appendChild(sp2)
div.appendChild(p2)

const buttonStyle={
    "width": "90px"
}
const button1 = elemCreator("button", buttonStyle, "Click me")
div.appendChild(button1)
root.appendChild(div)



setInterval(() => {
    const timeElm = document.getElementById("time");
    const date = new Date();
    // const hr = 
    // const mn = 
    // const se = 
    const time = (`${date.getHours() }:${date.getMinutes() }:${date.getSeconds() }`)
    timeElm.innerText = time
}, 100)

const button=document.querySelector("button")
const count=document.getElementById("count")
button.addEventListener("click", () => {
    count.innerText = parseInt(count.innerText) + 1;
    
});