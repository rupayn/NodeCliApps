# NodeCliApps

Hello everyone!

This repository is for the automation of boilerplate code using Node.js. It includes CLI applications to streamline the creation of backend and frontend projects.

## HTML Creator

This project is used to create the boilerplate code for a simple HTML file and folder structure. 

## Prerequisites

To use these CLI applications, you need to have Node.js installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).
And clone this repository by running 
``` bash
git clone https://github.com/rupayn/NodeCliApps.git
```
```bash
cd ./NodeCliApps
cd ./htmlcreator
```
## Usage

1. First, link the package:
   - For Windows: 
   ``` bash
   npm link
   ```
   - For Linux: 
   ``` bash
    sudo npm link
    ```

2. By default, the command to use this tool is `hmm`. If you want to change the default command, you can modify the `bin` section in the `package.json` file to your preferred command.

3. To create a new project, run the command:
- You can create any file with any extension using `hmm command` with extension , if you only type `hmm` command then it will generate `index.html` file in present working directory
- For example i am using `hmm` command to create a `html` file :
``` bash 
hmm index.html
```
- For creating a full project you should run the command like
` hmm {filename.html} foldername `
```
hmm index.html myProject
```
4. The output will look like:
``` bash
Project created successfully!!
cd myProject/
start index.html
```