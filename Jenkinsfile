pipeline{
	// this is environment varaible
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
		// this is my build and push stage after build it will push my image into docker hub
	    stage("build/push"){ 
	        steps{

			/*
			NOTE:- I logged into my docker with the help of cmd by type "docker login" in cmd 
			and provide all the credentails there 
			*/

	            sh "docker build -t $image ." //this will build my image as songui-image
	            sh "docker tag $image $registry" //this will create tag with my docker hub id
	            sh "docker push $registry" //this will push my image into docker hub
		    sh "docker rmi -f $registry" //this will delete my tag image 
		    sh "docker rmi -f $image" // this will delete my image after build
	        }
	    }
		// this is my deploying stage where i pulled the image from docker then run it
	    stage("deploy"){
	        steps{
	            sh "docker pull $registry" //it will pull the image from my docker account
	            sh "docker run -d -p 3000:3000 $registry" //it will run my image in background just go to localhost:3000 to check 
	        }
	    }
	}
}
