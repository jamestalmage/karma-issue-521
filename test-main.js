if(!(typeof require === "function" && typeof exports === "object" && typeof module === "object")){

    var tests = Object.keys(window.__karma__.files).filter(function (file) {
        return  /^\/base\/test\/.*test\.js$/.test(file);
    });


    requirejs.config({
        // Karma serves files fr om '/base'
        baseUrl: '/base/lib/',

        paths: {
            'chai': '../node_modules/chai/chai'
        },
        //asdfa
        shim: {

        },

        // ask Require.js to load these files (all our tests)
        deps: tests,

        // start test run, once Require.js is done
        callback: window.__karma__.start
    });
}