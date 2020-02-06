# Node Programmer Test

## Setup instruction

## #_NB_
    This project requires you to have mongo DB installed on your computer. If you dont have mongo installed please see link below:

        * https://docs.mongodb.com/manual/installation/
    
    You also need postman to be able to excute the api's. Alternativetly you can use cURL to execute the api's

## **Step 1:**
* git clone 
* npm install (in the project directory).
* npm install body-parser
* npm install express
* npm install joi
* npm install mongoose

## **Step 2:**
* Open your terminal and run the following, 'mongod'. Mongo should start up. Otherwise consult the mongo DB guide.

## **Step 3:**
* In the project cd to the director of the index file.
* Run the following command in your terminal -> 'node index.ts'
* You should see the server start up on port 8080.

## **Step 4:**
 **Register Tshirt:**
 
    * postman :  
        - URL - http://localhost:8080/rest/1.0/tshirt/{random id}
        - METHOD - PUT
        - Content-Type - application/x-www-form-urlencoded
        - color=bluesize=Slabel=Levi'sundefined=undefined     
    
    * cURL : 
        curl -X PUT \
          http://localhost:8080/rest/1.0/tshirt/9q4b2ac227743b46009104be \
          -H 'Content-Type: application/x-www-form-urlencoded' \
          -H 'Postman-Token: d0812e6a-f96f-4f2f-8e72-fe9ff71677ce' \
          -H 'cache-control: no-cache' \
          -d 'color=blue&size=S&label=Levi'\''s&undefined=' 

 **Get Tshirt:**
 
    * postman : 
        - URL - http://localhost:8080/rest/1.0/tshirt/{random id}
        - METHOD - GET
    
    * cURL : 
        curl -X GET \
          http://localhost:8080/rest/1.0/tshirt/9q4b2ac227743b46009104be \

 **Get Tshirt Location History:**
 
    * postman : 
        - URL - http://localhost:8080/rest/1.0/tshirt/{random id}/history
        - METHOD - GET
    
    * cURL : 
        curl -X GET \
          http://localhost:8080/rest/1.0/tshirt/9q4b2ac227743b46009104be/history \

 **Register Box:**
 
    * postman : 
        - URL - http://localhost:8080/rest/1.0/box/{random id}
        - METHOD - PUT
        - Content-Type - application/x-www-form-urlencoded
        - tshirtRfids=9q4b2ac227743b46009104betshirtRfids=8q4b2ac227743b46009104beundefined=undefined     
    
    * cURL : 
        curl -X PUT \
        http://localhost:8080/rest/1.0/box/9q4b2ac227743b46009104be \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -H 'Postman-Token: fbf595bd-4181-4362-8b3c-1e58e826db02' \
        -H 'cache-control: no-cache' \
        -d 'tshirtRfids=9q4b2ac227743b46009104be&tshirtRfids=8q4b2ac227743b46009104be&undefined='    

 **Get Box:**
 
    * postman : 
        - URL - http://localhost:8080/rest/1.0/box/{random id}
        - METHOD - GET
    
    * cURL : 
        curl -X PUT \
        http://localhost:8080/rest/1.0/box/9q4b2ac227743b46009104be \

## Additional Questions
1. Describe your solution in a few words (expect an experienced programmer reading it) and describe
   your choice of libraries and/or patterns.
2. How do you handle transactions?
3. What would be your preferred method of hosting the server?
4. How do you approach logging in Node?
5. What is an event loop in Node and how does it interact with asynchronous tasks?
6. How do you handle errors?
7. How do you prefer to receive configuration?

## Answers
1. I Structured the application specific to the various domains. 
   This allows for separation of concerns, lose coupling, reduce complexity and makes it easy to debug.  
   I chose express for the routing it is simple elegant when specifying routes.
   I chose joi for the validation easy and clean implementation for doing validation.
2. I chose mongoose to do the transaction. It have a clean implementation for CRUD operation. 
   Which makes it easy to read and debug.
3. Depends if you want the application accessible globally then I would host it in
   (Amazon, Digital Ocean etc. ). Easy to scale.  
4. I used console.log i'm aware it's not most ideal. 
    However I would write a custom logging function which would print whatever the the debug level is set to.
5. Works on a Single threaded, It waits for events, uses an EventEmitter class to bind events to listeners,
   it triggers a callback when an event is detected which all happens async and its non blocking.
6. Errors I log out and send back to inform that something went wrong. 
7. I prefer config to isolated from the implementation and must be served from a resource file. 