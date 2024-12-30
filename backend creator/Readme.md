# NodeCliApps

Hello everyone!

This project is used to create the boilerplate code for a simple backend in Node.js with a folder structure using TypeScript. The folder structure of the generated backend project will look like this:
```
.
├── index.js
├── node_modules
├── package-lock.json
├── package.json
├── sample.index.txt
└── script
```
## Prerequisites

To use these CLI applications, you need to have Node.js installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rupayn/NodeCliApps.git
```

2. Navigate to the backend creator directory:

```bash 
cd ./NodeCliApps/backend\ creator/
```

3. Install the dependencies:
```bash
npm i
```
This project uses a 3rd party package called "inquirer".

## Usage

1. Link the package:
- For Windows: 
``` bash
npm link
```
- For Linux: 
```bash 
sudo npm link
```

2. To create a new backend project, run the command: `backendc foldername`
You will be prompted to select either Mongoose or Prisma to start your work.
- the command like:= 
```bash
backendc myProject
```
### NOTE: `You should give the project's folder name or it will not work`

This cli application installs some basic dependencies for backend development
## License

This project is free to use, but currently, it does not have an open-source license. All developers are welcome to contribute and make it more efficient.