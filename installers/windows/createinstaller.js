var electronInstaller = require('electron-winstaller');
// In this case, we can use relative paths
var settings = {
// Specify the folder where the built app is located
appDirectory: "./release-builds/accrual-calculator-win32-x64",
// Specify the existing folder where
outputDirectory: "./installers",
// The name of the Author of the app (the name of your company)
authors: 'Ravi',
// The name of the executable of your built
exe: "./accrual-calculator.exe",
description: 'Accrual Calculator',
noMsi: true,
setupExe: 'AccrualCalculator.exe'
};
resultPromise = electronInstaller.createWindowsInstaller(settings);
resultPromise.then(() => {
console.log("The installers of your application were succesfully created !");
}, (e) => {
console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});
