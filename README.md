# Full Stack Developer Challenge

## Steps to run
Prerequisites: make sure Node.js is installed and nothing is running on ports 8080 and 3000

###Start API Server
1. Open new terminal, navigate to /apiServer folder
2. Run 'npm install'
3. Run 'npm start'
4. API should now be running at localhost:8080

###Start UI
1. Open new terminal, navigate to root project folder
2. Run 'npm install'
3. Run 'npm start'
4. App should now be running at localhost:3000
	* Admin Credentials: 1/secret
	* Employee Credentials: 2/secret

##Assumptions
1. Each employee can't see another employee's review or feedback.
2. Only the admin can see every employee's complete review

##Limitations
1. The API serves static files, changes are not persisted by a DB server.

##Design:

###Architectural flow
The front end rendering uses React.js, while business logic/API interaction is handled by Redux. 

The REST API server is written in Express; it serves static files

The front-end architectural flow is as follows:

Top Level Containers -> Action Creators -> Reducer -> Top Level Containers -> Lower Level Presentations Components

* Top Level Containers: Connect Redux state to React UI.  Delegate rendering to individual components, delegate API handling to action creators
* Components: Responsible for rendering individual pages
* Action Creators: Communicate with API and/or dispatch actions
* Reducers: Handle dispatched actions by modifying application state

###Technology Used

* UI Rendering: React/Redux, React Router, React Logger, Webpack, Redux-Thunk, Express.js
* Dependency Management: npm

###UI Hierarchy

LoginContainer
* localhost:3000/login
* localhost:3000

AdminContainer
* localhost:3000/admin
* UsersComponent
* ReviewsComponent

EmployeeContainer 
* localhost:3000/employee/{id}
* Add Feedbacks

###Domain Objects
User
* id: PropTypes.number,
* name: PropTypes.string,
* email: PropTypes.string,
* role: Admin or Employee,
* password: PropTypes.string

Review
* id: PropTypes.number,
* author: id of author,
* target: id of payee this review is based on
* content: list of feedbacks
* text: PropTypes.string,
* createdDate: PropTypes.date,
* assignees: ids of assigned employees

Feedback
* id: PropTypes.number,
* author: id of author
* content: PropTypes.string,
* date: PropTypes.date

###API Design
api/v1/users
GET list of users

api/v1/reviews
GET list of all reviews

api/v1/users/:id/pendingFeedbacks
GET list of users that current user needs to provide feedback for
