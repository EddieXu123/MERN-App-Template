In the project directory, you can run:

### `npm i`
Install all the node_modules in the backend 

### `npm run client-install`
Install all the node_modules in the client

### USE YOUR OWN MongoURI
In order to connect to the database, replace the MongoURI in './config/keys.js' with your MongoDB URI. I would recommend getting MongoDB Compass
\
You can get a URI by creating an account through MongoDB atlas, creating a new cluster (pick the default options to create a cluster for free). Then, after the cluster loads, click "connect" under the Name/Version number, connect via MongoDB Compass (which is a very easy-to-learn UI). You will see your MongoURI afterwards. Copy this into MongoDB Compass when it launches (replacing <password> with your password). Again, replace the MongoURI in './config/keys.js' with this MongoDB URI.


### `npm run server`
If you want to solely run the backend server

### `npm run dev`
If you want to run both the backend and frontend concurrently



### Test your connection with Postman
You can use Postman to check if your backend is properly connected. Start the backend server, open up Postman (another application), select ('Get', 'Post', or 'Delete').
\
\
Option 1: Selection 'GET' -> Make the URL next to Get: http://localhost:5000/api/sampleItem/. If you click send, you should get a 200 OK message.
\
\
Option 2: Selection 'POST' -> Make the URL next to POST: http://localhost:5000/api/sampleItem/. Then, under Header (right under the url), enter Key = 'Content-Type' and Value = 'application/json'. After, select "Body" (to the right of 'Header') and enter in a "raw" json request:
\
\
example:
{
    &nbsp; "attribute1": "Random String"
} 
\
If you click send, you should see a status 200 OK and a JSON return with what you typed in. Also, in MongoDB, there should be a new table created if you refresh with your data.
\
\
Option 3: Selection 'DELETE' -> Make the URL next to DELETE: http://localhost:5000/api/sampleItem/<idHere>. Click send, and you will get a success/error message. If you go to MongoDB, refresh, you should see the entry with that particular _id gone.


\
\
This is just the barebones template, feel free to add stuff to the client side. I'm also thinking of doing a template using Redux and JWT auth!
