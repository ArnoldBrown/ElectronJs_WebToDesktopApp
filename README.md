# Running ReactJS Web Application as Windows Desktop Application using ElectronJS

To run a React web app as a Windows desktop application, you can use a framework like Electron. Electron allows you to build cross-platform desktop applications using web technologies, including React.

Here’s a step-by-step guide on how to do it:

**Step 1**: Set up your React project Make sure you have a working React project. If you don’t, you can create a new one using Create React App or any other React project boilerplate.

**Step 2**: Install Electron In your project directory, open a command prompt or terminal and run the following command to install Electron as a development dependency:

# npm install --save-dev electron

**Step 3**: Create the Electron main process file Create a new file called main.js in the root of your project. This file will serve as the entry point for your Electron application.

Make the changes in code of **main.js**:


**Step 4**: Update your React scripts Open your package.json file and update the "scripts" section as follows:

Make the required changes as in package.json file

**Step 5**: Start the Electron application Run the following command to start your Electron application:

# npm run electron

This will launch your React app in a new Electron window, and it will behave like a desktop application.
**Note**: Make sure your React app is running on http://localhost:3000 (or update the URL in main.js accordingly) before starting the Electron application.

That’s it! You have now successfully run your React web app as a Windows desktop application using Electron.

