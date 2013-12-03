module.exports = function(config){
  config.set({
    basePath:'./',
    frameworks:['mocha','requirejs'],
    files : [
      {pattern: 'node_modules/**/*.js',included:false,watched:false,served:true},
      {pattern: 'test/**/*test.js', included: false,watched:true,served:true},
      {pattern: 'lib/**/*.js', included: false,watched:true,served:true},
      {pattern: 'test-main.js', included:true, watched:true, served:true}
    ],
    reporter:['dots'],
    browsers:['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
