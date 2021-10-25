pipeline{
    agent any
	stages{
		stage("test"){
    		steps{
    			sh "npm test"
    		}
	    }
	    stage("build/push"){
	        steps{
	            sh "docker build -t songui-image ."
	            sh "docker tag songui-image rupeshsh001/songui-image"
	            sh "docker push rupeshsh001/songui-image"
	        }
	    }
	    stage("deploy"){
	        steps{
	            sh "docker pull rupeshsh001/songui-image"
	            sh "docker run -d -p 3000:3000 rupeshsh001/songui-image"
	        }
	    }
	}
}
