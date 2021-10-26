pipeline{
	environment{
		image="songui-image"
		registry="rupeshsh001/songui-image"
	}
    agent any
	stages{
		// this is my push stage where i run npm test 
		stage("test"){
    		steps{
    			sh "npm test" 
    		}
	    }
	    stage("build/push"){
	        steps{
	            sh "docker build -t $image ." //this will build my image 
	            sh "docker tag $image $registry"
	            sh "docker push $registry"
				sh "docker rmi $registry"
	        }
	    }
	    stage("deploy"){
	        steps{
	            sh "docker pull $registry"
	            sh "docker run -d -p 3000:3000 $registry"
	        }
	    }
	}
}
