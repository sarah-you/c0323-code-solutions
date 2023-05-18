# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?

  - its a web application bundler that can modify files by condensing the file size, optimizing file types for better performance of your web app

- What is the advantage of using Webpack (or a similar bundler)?

  - you can manage your files and assets more efficiently

- What is Babel?

  - code converter that transpiles newer version of JS to older ones
  - transpile: taking source code written in one language and transforming into another language that has a similar level of abstraction

- What is the advantage of using Babel (or a similar transpiler)?
  - it converts ES6 code to ES5 or older
  - you can still use the advanced code while running in older systems

## Notes

### Babel

JavaScript has evolved greatly since its introduction. However, browsers and other systems that execute JavaScript often require older versions of the language. New language features improve developer productivity, but if the code must be run on an older version of the JavaScript engine, developers cannot take advantage of the improvements.

To address this, the industry has developed compilers or "transpilers" that transform JavaScript written with new language features into older versions of JavaScript that can be run on devices that require it. A "transpiler" converts code written in one high-level language into another high-level language. For example, TypeScript transpiles TypeScript code into JavaScript so that it can be run in browsers or in NodeJS.

Babel is the most widely-used JavaScript transpiler. It is designed to transpile newer versions of JavaScript into older versions. This allows developers to write code using modern productivity enhancements and still run their code on older devices or systems.

1. Read about Babel in the official documentation. https://babeljs.io/docs/

- Here are the main things Babel can do for you:
  - Transform syntax (ex. JSX & React)
  - Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
    - Babel's polyfills are JavaScript code that emulate or "fill in" the functionality of newer language features, allowing them to be used in older browsers or environments
  - Source code transformations (codemods)

2. Visit the Babel REPL and paste the following ES6 code in. Notice how Babel transforms the newer JavaScript syntax into older ES5 syntax.
   https://babeljs.io/repl#?browsers=&build=&builtIns=usage&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=&prettier=true&targets=&version=7.15.3&externalPlugins=%40babel%2Fplugin-transform-block-scoping%407.16.0%2C%40babel%2Fplugin-transform-arrow-functions%407.16.0&assumptions=%7B%7D

```
const foo = 'bar';
let i = 0;
i += 1;
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
const baz = () => {
  console.log('qux');
};
baz();
```

3. Take a screenshot of the REPL window. This will be the screenshot you include in your Pull Request.

### Webpack

https://webpack.js.org/

Browsers are just beginning to add support for loading JavaScript from multiple modules. However, the support is not universal. Further, with broad use of npm packages in frontend code, the number of files that need to be downloaded can be quite large. In addition, npm packages and modules frequently contain a lot of code that may not be used in the application, which results in wasted downloads of unused code.

For these reasons, "bundlers" have been developed that bundle all the code from JavaScript files and npm packages into a single (or a few) files that can be easily downloaded. In the process, many bundlers will remove unused code and may also "minify" and/or "obfuscate" the code by renaming variables and functions to just a few letters. This makes the bundled code even smaller, and also obscures code so it more difficult for prying eyes to decipher. Because of these advantages, most websites use a bundler on their production code.

The most popular bundler for Web applications is Webpack, though others are available that offer faster bundle times or other features that Webpack is missing. Webpack works by examining your code, starting at its entry point, and recursively scanning the import statements to find all the modules your code uses. It builds a dependency graph and analyzes it to find and remove code that is not in use (using a process known as tree shaking). It renames functions, variables, classes, etc., to ensure there are no name conflicts and to minimize and obfuscate the resulting JavaScript code. It performs similar optimizations on HTML, CSS, and image files. The result is a small number of files that can be easily sent to a browser by a Web server.

tree shaking: https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking

Below is an info-graphic of how Webpack bundles multiple modules into a single JavaScript file.

![webpack](/webpack-and-babel/webpack%20image.svg)

Look through the Webpack Concepts page to get an idea of the features Webpack offers.
https://webpack.js.org/concepts/

Webpack follows precise rules when locating the modules it will bundle. The process of locating modules is known as Module Resolution. It is important to understand this process so you can correctly formulate import statements to find the modules you are using. The rules are documented, but since they are very customizable they can be challenging to interpret. The rules have therefore been summarized here.

The process proceeds in two steps. First, the import statement is examined and a potential match is found. Then, the actual file is located. The process is:

Absolute Paths
If an import statement contains an absolute path (one that begins with /), that path is followed to a potential match.

Note: Importing from an absolute path is usually a bad idea since it is unlikely that every computer the code will run on has the correct file at that precise path.

Relative Paths
If an import statement contains a relative path, the path is followed relative to the file containing the import statement to a potential match.

Module Paths
If an import statement contains a path that is not absolute and does not begin with ./ then Webpack follows the "Node Modules" lookup strategy. This strategy looks in the current directory for another directory named node_modules. If it finds one, it looks in there for a directory whose name matches the import statement. If a match is not found, the parent directory is searched for node_modules and if found, that directory is searched. If no match is found, then the next directory up the hierarchy is searched, and so on, all the way up to the root of the file system. The first potential match is then examined.

Locating the File
Once Webpack finds a potential match, that potential match is compared to the import statement in the order below, until a matching file is found:

If the import statement has a file extension, that is used to locate the file
If there is no file extension, .js and .jsx are used
If the potential match is a directory:
If the directory contains package.json and it has a "main" property, that property is used to locate the file
If the directory contains index.js that file is used
Once the above process locates an actual file, that file is imported. If none is found, the import fails.

Note: Although the above defaults are technically optional, in React code it is customary to never specify .js or .jsx extensions or to specify index.js. In fact, many projects use lint rules that complain if you specify the default values. Therefore, for this exercise, your code should make use of the defaults.
Note: Although the above defaults are honored in code bundled with Webpack (and its competitors) and are customary in React, those defaults are not honored by Node. Therefore, in Node code, the .js and .jsx extensions and index.js are required. This difference will certainly trip you up a time or two before you get used to it!

#### Real-life example of using webpack:

Imagine you're developing a modern web application that consists of multiple JavaScript modules, CSS files, and various static assets like images and fonts. Each module has its own set of dependencies and imports.

Webpack can help in managing and optimizing these different parts of your application. It can:

1. Bundle all the JavaScript modules and their dependencies into a single JavaScript file, reducing the number of network requests required to load the application.
2. Apply transformations and optimizations to the code, such as minification to reduce its size and improve performance.
3. Process CSS files, handle imports, and generate a bundled CSS file or even inline styles.
4. Optimize and compress static assets like images, fonts, and other resources.
5. Provide a development server with hot module replacement, allowing you to see live updates in the browser as you make changes to your code.

By using webpack, you can automate these tasks and create an optimized and efficient build of your web application, ready for deployment to a production environment.
