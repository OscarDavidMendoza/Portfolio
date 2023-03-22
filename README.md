<h2 align='center'> Portfolio site - v1<br/>
 <a href="oscarcodes.dev" target="_blank">OscarCodes</a>
 </h2>

<div align='center'>
<img src="https://img.shields.io/badge/Made with-♥-RED?style=plastic&color=red"/>
<img src="https://img.shields.io/badge/Built with-React-Blue?style=plastic&style=for-the-badge&color=61DAFB">

</div>

### TL;DR
Feel free to fork this repo and make any modifications you'd like. I would appreciate just getting proper credit. 😊 

This is my personal portfolio. As time goes by I will continue to fix issues and add features. This portfolio will feature some of my github projects and my resume as well.

### Tech Used
This project was built using:
- ReactJS
- ReactRouter
- NodeJS
- Express
- Bootstrap
- CSS3
- VsCode
- Google :) 

### Features
📖 Multi-Page Layout using ReactRouter
🎨 Styled with React-Bootstrap and CSS
📧 Included an 'contact me' section that will email me using nodemailer

### Getting Started
In order to get started you will need NodeJS and some form of shell installed globally on your machine. You can either use git, wsl (ubuntu), cygWin. Clone this repository to your machine.

### Installation 
1. Install: `npm install`
2. In the project directory run: `npm run dev` This will run both the Client and the Email server.
This will run the app in development mode on port 3001 for the client and 5000 for the server.

### Usage
- Once in the project directory you can navigate to `/src/components/` to edit general information.
- To edit skill data and project data, you'll need to navigate to `/src/assets/data/`
- To edit any styling you'll need to navigate to `/src/GlobalStlyes/`

### Server Usage
The SMPT service **Gmail** as the host and **587** as the port. You can use your Gmail account by adding a **.env** file, and adding the following to it:
```
    EMAIL_USER='<Your Gmail emaill address>'
    EMAIL_PASS='<Your App created password>'
```
*You will need to have 2-step verification enabled in your Gmail account in order to create an app password.*

