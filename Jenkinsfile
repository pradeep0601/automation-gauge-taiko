pipeline {
    agent any 
    tools {nodejs "node-js"}
    stages {
        stage('Cloning git') {
            steps {
                echo 'Cloning the application from git repo...'
                git 'https://github.com/pradeep0601/automation-gauge-taiko'
            }
        }
        stage('Install dependencies') {
            steps {
                echo 'Installing the dependencies...'
                bat 'npm install'
            }
        }
        stage('Test') { 
            steps {
                echo 'Executing the integration test...'
                bat './node_modules/.bin/grunt test'
            }
        }
        stage('Deploy') { 
            steps {
                echo 'Deploy running...'
            }
        }
    }
}
