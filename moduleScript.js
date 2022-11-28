const fs = require('fs-extra');
const path = require('path');
var finalElemenBundle = 'elements.bundle.js';
var modules = process.argv.slice(3);
var env = process.argv[2];
const baseRoute = path.join(__dirname, `/dist/${env}`);
let isFilePresent = false;

let initialFiles = [
  'main.js',
  'runtime.js',
  'polyfills.js',
  'styles.css',
  'common.js',
];

const mainJsAddress = `${baseRoute}/main.js`;
const polyfillsJsAddress = `${baseRoute}/polyfills.js`;
const runtimeJsAddress = `${baseRoute}/runtime.js`;

const mainJs = fs.pathExists(mainJsAddress);
const polyfillsJs = fs.pathExists(polyfillsJsAddress);
const runtimeJs = fs.pathExists(runtimeJsAddress);

Promise.all([mainJs, polyfillsJs, runtimeJs]).then(data => {
  refreshFinalModuleFile();
  if (data[0] && data[1] && data[2]) {
    checkIfBundleExists(modules).then(d => {
      writeAllmodulesInOne(d).then(i =>
        console.log(
          `\u001b[1;36m Your cdn bundle is ready with name => ${finalElemenBundle}`,
          '🤩'
        )
      );
    });
  }
});

async function writeAllmodulesInOne(moduleList) {
  for (module of moduleList) {
    await writeToFinalBundle(module);
  }
}

function checkIfBundleExists(bundleNames) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${baseRoute}`, (err, files) => {
      if (err) {
        throwError(err);
      } else {
        files.forEach(file => {
          bundleNames.forEach(bundleName => {
            if (file.includes(bundleName)) {
              this.isFilePresent = true;
              initialFiles.push(file);
            }
          });
        });
        resolve(initialFiles);
      }
    });
  });
}

function writeToFinalBundle(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${baseRoute}/${file}`, (err, content) => {
      if (err) {
        throwError(err);
      }
      fs.promises
        .appendFile(finalElemenBundle, content, err => {
          console.log(err);
        })
        .then(() => {
          console.log(`\u001b[1;32m ${file} is appended successfully.`, '✅');
          resolve();
        });
    });
  });
}

function refreshFinalModuleFile() {
  console.log('\u001b[1;34mCleared earlier bundle', '👀');
  fs.remove(`${__dirname}/${finalElemenBundle}`);
}

function throwError(err) {
  throw new Error(err);
}
