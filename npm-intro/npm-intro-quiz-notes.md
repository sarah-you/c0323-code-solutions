# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  node package manager that finds, downloads, installs, configures, upgrades, and uninstalls computer's programs; its the main one used for JS runtime environment;
  through npm, you can share/borrow packages and manage private development;

consists of 3 components: website(discover packages), CLI(terminal to interact with npm), registry (public database of JS software and its meta-info);

- What is a package?
  contains all the files needed for a module(library);

- What are some other popular package managers?
  yarn(developed by FB which also develops React and Jest) and PNPM

- How can you create a `package.json` with `npm`?
  cp .npm-init.js file in terminal (in the directory for it)
  'npm init --yes' command line
  confirm default values extracted inside the package.json that is now added in the directory

- What is a dependency and how do you add one to a package?
  dependency is another package that your package needs to work;
  it allows the project to install the version of the module it needs;
  you can add all the dependencies listed in the package by running 'npm install' command inside the project directory;

- What happens when you add a dependency to a package with `npm`?
  adds it to package.json file;
  makes package.json and node modules consistent -- if you delete a module, it'll go through the node module folder and delete the dependency to keep it consistent;
  use 'npm install' (no parameters) to make sure all dependencies are there;

- What is a devDependency and how do you add one to a package?
  devDependency is package only needed for local development and testing (whereas dependencies are packages you need for your application)
  'npm install (name) --save-dev';

- How do you define and run `npm` scripts? Why are these useful?
  add the scripts inside the package.json file (dont forget the comma if adding) and in command line, 'npm run (command name -- which is the key for the script object);

## Notes

npm is a way to reuse code from other developers and share your code with others and makes it easy to manage different vesrions of code

package is a directory with one or more files in it (including file called package.json with some metadata about this package)

a typical application/website will depend on dozens/hundreds of (small) packages
the general idea is to create a small building block which solves one problem and solves it well
this makes it possible for you to compose larger, custom solutions out of the small shared building blocks
it makes it possible for us to draw on expertise from outside of organization by bringing in packages from people who have focused on particular problem areas
using module based approach helps team work together better and allow to reuse code across projects

find different kind of packages by browsing the npm website
theres lots of Node modulesfor server side (since npm started as Node package manager)
theres lots of packages that add commands for you to use on command line
theres lots of packages which can be used in the browser on the front end

npm registry: big database of info about packages that people are sharing

jQuery: fast, small, and feature-rich JS library;
collections of functions to use for JS (ex. dom manipulation);
