#Demonstrate Karma Issue 521

##Steps to Reproduce
###Setup Project
```
git clone https://github.com/jamestalmage/karma-issue-521
cd karma-issue-521
npm install
npm test
```
###Edit test-main.js
You should find that editing anything in the `lib/` or `test/` folders causes karma to rerun tests.
Editing `test-main.js` is ignored however (which is the issue being raised).
 
