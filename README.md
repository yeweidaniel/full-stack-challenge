# Full Stack Developer Challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

###Design Architecture:

Top Level Components (eg. AdminContainer) -> Action Creator (Makes API Call) -> Reducer -> Top Level Components -> Lower Level Components

###UI Hierarchy

LoginComponent - localhost:3000/login

AdminComponent - localhost:3000/admin
-EmployeeInfoComponent
-PerformanceReviewComponent

EmployeeComponent - localhost:3000/employee/{id}
-PerformanceReviewComponent

###Technology Used
UI Rendering: React, React Router, Webpack
Dependency Management: NPM

###Domain Objects
User
    id: PropTypes.number,
    name: PropTypes.string,
    role: Admin or Employee
    password: PropTypes.string
    reviews: ids of this user's reviews
Review
    id: PropTypes.number,
    author: id of author
    feedbacks: list of feedbacks
    text: PropTypes.string,
    createdDate: PropTypes.date,
    assignees: ids of assigned employees
Feedback
    id: PropTypes.number,
    author: id of author
    text: PropTypes.string,
    createdDate: PropTypes.date

###API Design
POST /api/v1/login
Accepts Body: { id, password }

POST/PUT/GET/DELETE
/api/v1/users
Accepts Body: { User object }

POST/PUT/GET/DELETE
/api/v1/users/{id}/reviews
