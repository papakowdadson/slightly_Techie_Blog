# slightly_Techie_Blog
A Simple Blog Api With Nodejs and Mysql

## Requirement
- Must have XAMPP or Workbench installed
- Must have nodejs installed
- Postman for easier testing of `API` (Optional)
  
## How to use
- Clone or fork repo
- Change directory to slightly_Techie_Blog `cd slightly_Techie_Blog`
- Install packages `npm install'
- Start server `npm start` 

### `Create Blog` 
Method : `POST` <br>
url : `http://localhost:5000/blog/create/` <br>
Body (json) <br>
`{
    "image":"",
    "title":"Second Post",
    "content":"The second post content",
    "author":"Papa Kow Dadson" 
}` <br>

### `Get All Blog`
Method : `GET` <br>
url : `http://localhost:5000/blog/` <br>

### `Get Single Blog`
Method : `GET` <br>
url : `http://localhost:5000/blog/:id` <br>

### `Update Blog` 
Method : `PUT` <br>
url : `http://localhost:5000/blog/update/:id` <br>
Body (json) <br>
`{
    "title":"First post updated",
    "content":"The content was just updated"
}` <br>


### `Delete Blog` 
Method : `DELETE` <br>
url : `http://localhost:5000/blog/delete/:id` <br>

#### New Scope if necessary
`Image upload` <br>

## Technology
- Nodejs(express)
- Mysql

### Packages
- `nodemon` : Automatic server restart
- `body-parser` : Passing of JSON values
  #### New Scope if necessary
- `Multer` : Image Storage
