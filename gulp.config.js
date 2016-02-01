module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var index = root + 'index.html';
    var build = {
        app: 'build/app/'
        
    };
    var liveServer = {
        dev: {
            port: 3000,
            host: "localhost",
            open: '/',
            file: "index.html",
            wait: 1000
        },
        prod: {
            port: 3001,
            host: "127.0.0.1",
            root: 'build/',
            file: "index.html",
            wait: 1000
        }
    };

    var systemjsBuild = {
        map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs'
        },
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
    };

    var config = {
        root: root,
        app: app,
        index: index,
        build: build,
        liveServer: liveServer,
        systemjsBuild: systemjsBuild
    };

    return config;
};
