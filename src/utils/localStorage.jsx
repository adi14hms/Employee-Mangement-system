const employees = [
  {
      "id": 1,
      "firstName": "Amit",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
          { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Prepare Monthly Report", "taskDescription": "Generate and submit the financial report for this month.", "taskDate": "2025-01-20", "category": "Finance" },
          { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Update Client Database", "taskDescription": "Ensure all client records are updated with recent transactions.", "taskDate": "2025-01-15", "category": "Data Entry" },
          { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Fix Server Downtime Issue", "taskDescription": "Investigate and resolve the recent server outage.", "taskDate": "2025-01-10", "category": "IT Support" }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
      "id": 2,
      "firstName": "Rajesh",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Design Website Mockups", "taskDescription": "Create new design concepts for the upcoming product launch.", "taskDate": "2025-01-22", "category": "Design" },
          { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Review UI Feedback", "taskDescription": "Analyze and incorporate client feedback into the UI improvements.", "taskDate": "2025-01-12", "category": "Design" }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
      "id": 3,
      "firstName": "Vikram",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Develop API Endpoints", "taskDescription": "Implement and test new API endpoints for mobile integration.", "taskDate": "2025-01-25", "category": "Development" },
          { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Refactor Authentication Module", "taskDescription": "Improve security and performance of user authentication.", "taskDate": "2025-01-14", "category": "Security" },
          { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Resolve Database Migration Issues", "taskDescription": "Fix migration errors encountered during the last database update.", "taskDate": "2025-01-10", "category": "Database" }
      ],
      "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 1 }
  },
  {
      "id": 4,
      "firstName": "Suresh",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Plan Social Media Strategy", "taskDescription": "Develop content calendar for the next quarter.", "taskDate": "2025-01-18", "category": "Marketing" },
          { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Create Ad Campaign", "taskDescription": "Launch a targeted ad campaign for the new product line.", "taskDate": "2025-01-11", "category": "Advertising" }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
      "id": 5,
      "firstName": "Neha",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Prepare Quarterly Sales Report", "taskDescription": "Analyze and summarize sales performance for the last quarter.", "taskDate": "2025-01-23", "category": "Sales" },
          { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Meet with Potential Clients", "taskDescription": "Schedule and conduct meetings with prospective clients.", "taskDate": "2025-01-14", "category": "Business Development" }
      ],
      "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
   const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))
  
   return {employees,admin}

}
