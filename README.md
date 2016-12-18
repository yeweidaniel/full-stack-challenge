# Full Stack Developer Challenge

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

###Design Architecture:

The front end rendering uses React.js, while business logic/API interaction is handled by Redux. The architectural flow is as follows:

Top Level Containers -> Action Creators -> Reducer -> Top Level Containers -> Lower Level Presentations Components

* Top Level Containers: Connect Redux state to React UI.  Delegate rendering to individual components, delegate API handling to action creators
* Components: Responsible for rendering individual pages
* Action Creators: Communicate with API and/or dispatch actions
* Reducers: Handle dispatched actions by modifying application state

###Technology Used

* UI Rendering: React/Redux, React Router, React Logger, Webpack
* Dependency Management: npm

###UI Hierarchy

LoginComponent
* localhost:3000/login

AdminComponent
* localhost:3000/admin
* EmployeeInfoComponent
* PerformanceReviewComponent

EmployeeComponent 
* localhost:3000/employee/{id}
* PerformanceReviewComponent

###Domain Objects
User
* id: PropTypes.number,
* name: PropTypes.string,
* role: Admin or Employee
* password: PropTypes.string

Review
* id: PropTypes.number,
* author: id of author,
* payee: id of payee this review is based on
* feedbacks: list of feedback ids
* text: PropTypes.string,
* createdDate: PropTypes.date,
* assignees: ids of assigned employees

Feedback
* id: PropTypes.number,
* author: id of author
* text: PropTypes.string,
* createdDate: PropTypes.date

###API Design
POST /api/v1/login
Accepts Body: { id, password }

POST/PUT/GET/DELETE
/api/v1/users
Accepts Body: { User object }

POST/PUT/GET/DELETE
/api/v1/users/{id}/reviews
