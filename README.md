# Full Stack Developer Challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

###Design Architecture:

Top Level Containers (eg. AdminContainer) -> Action Creators -> Reducer -> Top Level Containers -> Lower Level Presentations Components

* Containers: Connect Redux state to UI.  Delegate rendering to individual components, delegate API handling to action creators
* Components: Responsible specifically for rendering
* Action Creators: Communicate with API and/or dispatch actions
* Reducers: Handle dispatched actions by modifying application state

###Technology Used

* UI Rendering: React/Redux, React Router, React Logger
* Dependency Management: NPM

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
