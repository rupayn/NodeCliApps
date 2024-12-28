import fs from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))

const create =()=>{
    const fName = process.argv[2] ?? "index.html"
    const extension = fName.split('.').slice(-1).toString()
    
    const folder = process.argv[3]
    const html = (fs.readFileSync(`${__dirname}/index.html`)).toString()
    if (folder) {
        fs.mkdirSync(`${process.cwd()}/${folder}`, { recursive: true }, (err) => {
            if (err) {
                console.error(`Error creating folder: ${folder}`, err)

            }
            else {
                console.log(`${folder} is successfully created`);
                
            }
        })
        
        const css = (fs.readFileSync(`${__dirname}/style.css`)).toString()
        const js = (fs.readFileSync(`${__dirname}/script.js`)).toString()

        fs.writeFileSync(`${process.cwd()}/${folder}/${extension=="html" ?fName:"index.html"}`, html)
        fs.writeFileSync(`${process.cwd()}/${folder}/style.css`, css)
        fs.writeFileSync(`${process.cwd()}/${folder}/script.js`, js)
        console.log(`Project created successfully!! \ncd ${folder}/\nstart ${extension == "html" ? fName : "index.html"}`)
    }
    else{
        if (extension==="html" || extension==="htm"){
            fs.writeFileSync(`${process.cwd()}/${fName}`,html)
        }
        else fs.writeFileSync(`${process.cwd()}/${fName}`,"")
    }
}



export default create