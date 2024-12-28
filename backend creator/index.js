import { exec } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))
const execution = (command, ProjectName) =>
    new Promise((resolve, reject) => {
        exec(command, { cwd: `${process.cwd()}/${ProjectName}/` }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return reject(error);
            }

            if (stderr) {
                // Check if stderr contains critical errors or just warnings
                if (/npm warn/i.test(stderr)) {
                    console.warn(`Warnings:\n${stderr}`); // Log warnings but do not reject
                } else {
                    console.error(`StdError: ${stderr}`);
                    return reject(new Error(stderr));
                }
            }

            console.log(stdout);
            resolve(stdout);
        });
    });


const createDirs = async (ProjectName) => {
    const projectPath = `${process.cwd()}/${ProjectName}`;
    const innerDirs = ["Constants", "Controllers", "Models", "Routes", "Middleware", "Utils"];

    fs.mkdirSync(`${projectPath}/src`, { recursive: true });

    for (const dir of innerDirs) {
        fs.mkdirSync(`${projectPath}/src/${dir}`, { recursive: true });
    }
};

const mainMenu = async (ProjectName) => {
    console.log("\x1b[34m%s\x1b[0m", "Hello, Welcome !!");
    console.log("Do you want to use other db except " + "\x1b[32m%s\x1b[0m", "MongoDB?");
    const choices = ["yes", "no"];
    const defStack = "bcrypt cors dotenv express jsonwebtoken cookie-parser";
    const defDevStack = "typescript @types/express @types/bcrypt @types/cookie-parser ts-node @types/node";

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "menuChoice",
            message: "Select an option:",
            choices,
        },
    ]);

    console.log("You selected:", answer.menuChoice);

    if (answer.menuChoice === "yes") {
        console.log(
            "\x1b[32m%s\x1b[0m",
            "Ok" + " going ahead with Prisma",
            "\nInstalling Prisma and other stuffs...\n"
        );
        await execution(`npm install ${defStack}`, ProjectName);
        await execution(`npm install prisma ${defDevStack} --save-dev`, ProjectName);
        await execution("npx prisma", ProjectName);
        await execution("npx prisma init", ProjectName);
    } else {
        console.log(
            "\x1b[32m%s\x1b[0m",
            "Ok" + " going ahead with Mongoose",
            "\nInstalling Mongoose and other stuffs...\n"
        );
        await execution(`npm i mongoose ${defStack}`, ProjectName);
        await execution(`npm install ${defDevStack} --save-dev`, ProjectName);
    }
    try {
        const indxFile = fs.readFileSync(`${__dirname}/sample.index.txt`)
        fs.writeFileSync(`${process.cwd()}/${ProjectName}/index.ts`, indxFile)
    } catch (error) {

    }
    console.log("\x1b[32m%s\x1b[0m", "Setup complete!");
    console.log(`\n\ncd ./${ProjectName} \nnpx ts-node ./index.ts`);
    console.log(`Happy Coding 😉`)
    process.exit();
};

const main = async () => {
    const ProjectName = process.argv[2];
    if (!ProjectName) {
        console.log("Please provide a project name");
        process.exit(1);
    }

    try {
        console.log("\x1b[34m%s\x1b[0m", `Creating project: ${ProjectName}`);
        await createDirs(ProjectName);
        await execution("npm init -y", ProjectName);
        await execution("npx tsc --init", ProjectName);
        await mainMenu(ProjectName);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

export default main;
