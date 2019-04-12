module.exports = (grunt) => { 
    grunt.loadNpmTasks('grunt-run');
    grunt.initConfig({
        gauge: {
            gaugeTest: 'gauge run specs'
        },
        run: {
            options: {
                // ...
            },
            google: {
                exec: 'gauge run specs/google-search.spec'
            },
            github: {
                exec: 'gauge run specs/github-search.spec'
            }
        }
    });

    grunt.registerTask('google', () => {
        grunt.task.run('run:google');
    });

    grunt.registerTask('github', [ 'run:github' ]);
    
   grunt.registerTask('taiko', (target) => {
       console.log(`taks->taiko: target: ${target}`);
       const tasks = [];
       switch (target) {
           case 'google':
               tasks.push('google');
               break;
            case 'github':
                tasks.push('github');
                break;
            default:
                tasks.push('google');
                tasks.push('github');
                break;
       }
       grunt.task.run(tasks);
   });
}
