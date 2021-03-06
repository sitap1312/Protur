# Protur

** https://github.com/sitap1312/Protur **
** **

## Project Name

Protur

## Project Overview
 
Protur is social media web application, where user can customise their Posts about their Travel(Tours and Trips around the world) with the images of the places. User can perform CRUD operations only after signing-Up/signing-In. The main purpose of this app is users can explore different places and get more info about them before they visit, kind of a Travel guide.


### MVP/PostMVP
  
## MVP 

- Have a working, interactive React app
- Have a full CRUD backend using Ruby-Rails
- Have working genereic controller actions for backend
- Have at least 6 rendered components 
- Use only React DOM Manipulation
- Authentication on front-end
- Authentication on back-end
- CRUD on User Posts
- User comments
- Styled with CSS
- Use flexbox or CSS Grid
- implement responsive deign on 2 screen sizes
- Users can create accounts
- Users can see other users posts
- Deploy the back-end via Heroku
- Delopy app via Netlify


### Goals

- User able to Sign-Up.
- Returning User able to Sign-In.
- Without sign-in all uses able to see posts but not complete details.
- After sign-in to create user friendly Home page with all posts (Titles).
- OnClick each post should display the details -> Description, images and reviews along with EDIT and DELETE options.



### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Frontend React App |
|   React Router   | Dependencies for React App |
| React Router Dom | Dependencies for React App |
|    Axios         | Dependencies for React App from Axios |
|     Rails        | Gem dependencies for Ruby |
|     Pry          | Gem dependencies for Ruby |


### Client (Front End)

## Wireframes

![Screen Shot 2021-08-25 at 8 07 44 AM](https://user-images.githubusercontent.com/85080279/130816235-af08cc45-d75e-4af6-bdc7-a456b7df1c8b.png)

#### Component Tree

![Screen Shot 2021-08-25 at 8 13 42 AM](https://user-images.githubusercontent.com/85080279/130817218-bbe498df-b248-442e-a718-243e686f329c.png)


#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ containers/
      |__ MainContainer.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ users.js
      |__ posts.js
|__ screens/
      |__ signup.jsx
      |__ signin.jsx
      |__ posts.js
      |__ postDetails.js
      |__ postEdit.js
      |__ postsCreate.js
      |__ reviews.js
      |__ reviewDetails.js
      |__ reviewsCreate.js
      |__ reviewsEdit.js
|__ Layout/
      |__ Layout.jsx


```

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Aug 25| Priority Matrix, Wireframes, Project Approval | Complete
|Aug 26| Core Application Structure | Complete
|Aug 27| Actual code | Complete
|Aug 28| MVP  | Complete
|Aug 29| CSS Styling | Complete
|Aug 30| PMVP and advance styling  | Complete
|Aug 31| Advance Styling, PMVP| Partial
|Sep 01| Presentations | Complete


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with Backend Ruby-Rails | H | 3hrs| 3hrs | 3hrs |
| Working with frontend React | H | 5hrs | 6hrs | 6hrs |
| CRUD Backend | H | 3hrs | 2hrs | 2hrs |
| CRUD Frontend | H | 5hrs | 4hrs | 4hrs |
| Creating basic structure| H | 3hrs| 2hrs | 2hrs |
| Components | H | 3hrs | 4hrs | 4hrs |
| Navigations | H | 3hrs | 2hrs | 2hrs |
| CSS Styling | H | 6hrs | 7hrs | 7hrs |
| Responsive web desiging | H | 5hrs | 5hrs | 5hrs |
| Advance CSS Styling | H | 6hrs | 3hrs | 3hrs |
| PMVP Styling | H | 3hr | 1hrs | 1hrs |
| Review of Functionality | H | 3hrs | 2hrs | 2hrs |
| Total | H | 48hrs| 41hrs | 41hrs |



### Server (Back End)

## ERD

![Screen Shot 2021-08-25 at 11 20 22 AM](https://user-images.githubusercontent.com/85080279/130844487-9a2b6641-bca6-4886-a366-86c3d3f1c7bc.png)


## PostMVP  

- Allow user to like on posts.
- Allow user to scroll back to the top of the page by single click.
- Search function
- Advance CSS



## Code Snippet

```
<header>
      <Link to='/'>
        <h1>Protur</h1>
      </Link>

      <Link to='/register'>Register</Link>
      
      {currentUser ? (
        <div>
          <Link to='/'>
            <p>{currentUser.username}</p>
          </Link>
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <Link to='/login'>Login</Link>
        )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/posts'>Posts</Link>
          {/* <Link to='/comments'>Comments</Link> */}
        </div>
      )}
      {props.children}
</header>
    
```

## Change Log
 ```
Rails.application.routes.draw do
  # resources :comments, only: :index 
  resources :posts do
    resources :comments, only: :create
  end
  resources :users, only: :create

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

 ```
