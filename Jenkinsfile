pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage('Cloning git') {
            steps {
                echo "Cloning the application from git repo...";
                git 'https://github.com/pradeep0601/automation-gauge-taiko'
            }
        }
        stage('Install dependencies') {
            steps {
                echo 'Installing the dependencies...'
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                echo "Executing the integration test...";
                sh 'grunt test'
            }
        }
        stage('Deploy') { 
            steps {
                echo "Deploy running...";
            }
        }
    }
}
