pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
               echo "Build running...";
               npm install;
            }
        }
        stage('Test') { 
            steps {
                echo "Test running...";
                grunt test;
            }
        }
        stage('Deploy') { 
            steps {
                echo "Deploy running...";
            }
        }
    }
}
