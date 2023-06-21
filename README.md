#The Show Viewer

It can helps to find tvshows and movies easily.

----------------------------------------------------------------
This project is based on 2 users: Admin, User.
----------------------------------------------------------------

Project Framework: Nest JS
Project Database: MongoDB
API run by: Postman


----------------
|How to setup:|
----------------
check the setup.txt file for more information
----------------------------------------------------------------

----------------
|How to run:|
----------------
-> open cmd and run
npm run start:dev
-> Or, simply double press/hit enter on the START.bat file
----------------------------------------------------------------

----------------
|Project Features:|
----------------
-> Only Admin can add new shows.
-> shows have 2 different type/genre.
-> User can view tv shows/movies details.
-> authorization and authentication are added with cookies.
-> User's password will be hashed before saving in database.
-> username must be unique.
----------------------------------------------------------------

----------------
|Project routes:|
----------------
1. /user/signup -> use for creating new user account.
2. /user/createadmin -> use for creating new admin account (Only admin can access this route).
3. /user/getallusers -> use for get all user's informations(Only admin can access this route).
4. /user/login -> use for logged in user.
5. /user/logout -> use for logged out user.

6. /shows/createshow -> use for creating new show (Only admin can access this route).
7. /shows/getallshows -> use for get all show's details.
8. /shows/getallmovies -> use for get all Movie's details.
9. /shows/getalltvshows -> use for get all TV Show's details.
10. /shows/getoneshow/:id -> use for get only one Show's detail.

----------------------------------------------------------------
Already created accounts:
Admin:
{
    "uname":"Niloy1",
    "password":"1234"
}
User:
{
    "uname":"Niloy0",
    "password":"1234"
}

----------------------------------------------------------------
ALL RIGHTS RESERVED BY ©️ NILOY KANTI PAUL (DEV-NKP)




