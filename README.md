# slightly_Techie_Blog
A Simple Blog Api With Nodejs and Mysql

## This is just me building on my ST entry task. Nothing wild

## Requirement
- Must have XAMPP or Workbench installed.
- Must have redis installed.
- Must have nodejs installed
- Postman for easier testing of `API` (Optional)
  
## How to use
- Clone or fork repo
- Change directory to slightly_Techie_Blog `cd slightly_Techie_Blog`
- Install packages `npm install'
- Create your env file using env.sample
- Start server `npm start` 

## General EndPoints
### `Create Blog` 
Method : `POST` <br>
url : `http://localhost:5000/blog/{api_version}/create/` <br>
Body (json) <br>
`{
    "image":"",
    "title":"Second Post",
    "content":"The second post content",
    "author":"Papa Kow Dadson" 
}` <br>

### `Get All Blog`
Method : `GET` <br>
url : `http://localhost:5000/blog/{api_version}/` <br>

### `Get Single Blog`
Method : `GET` <br>
url : `http://localhost:5000/blog/{api_version}/:id` <br>

### `Update Blog` 
Method : `PUT` <br>
url : `http://localhost:5000/blog/{api_version}/update/:id` <br>
Body (json) <br>
`{
    "title":"First post updated",
    "content":"The content was just updated"
}` <br>


### `Delete Blog` 
Method : `DELETE` <br>
url : `http://localhost:5000/blog/{api_version}/delete/:id` <br>


## EndPoints With Prisma
### `Create Blog` 
Method : `POST` <br>
url : `http://localhost:5000/blog/{api_version}/prisma/create/` <br>
Body (json) <br>
`{
    "image":"",
    "title":"Second Post",
    "content":"The second post content",
    "author":"Papa Kow Dadson" 
}` <br>

### `Get All Blog`
Method : `GET` <br>
url : `http://localhost:5000/blog/{api_version}/prisma/` <br>

### `Get Single Blog`
Method : `GET` <br>
url : `http://localhost:5000/blog/{api_version}/prisma/:id` <br>

### `Update Blog` 
Method : `PUT` <br>
url : `http://localhost:5000/blog/{api_version}/prisma/update/:id` <br>
Body (json) <br>
`{
    "title":"First post updated",
    "content":"The content was just updated"
}` <br>


### `Delete Blog` 
Method : `DELETE` <br>
url : `http://localhost:5000/blog/{api_version}/prisma/delete/:id` <br>

#### New Scope if necessary
`Image upload` <br>

## Technology
- Nodejs(express)
- Mysql

### Packages
- `nodemon` : Automatic server restart
- `body-parser` : Passing of JSON values
- `redis` : Caching
- `Prisma` : serialization and modelling
- `Prisma - Client`

### Testing
Install nyc globally: `npm install -g nyc`
Install mocha globally: `npm install -g mocha`
- `Run Test Code`: npm test
- `Check coverage`: nyc mocha __test__/**/*.test.js
  
  #### New Scope if necessary
- `Multer` : Image Storage
- `Docker`  : Dockerize application: done
- Dockerize redis server
- Dockerize sql server
- `v1` : append v1 after /blog/{v1}/.... to test new endpoints
- `kafka` : Include logs.
