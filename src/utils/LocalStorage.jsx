localStorage.clear

const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Update Report", "taskDescription": "Prepare the monthly financial report.", "taskDate": "2024-10-20", "category": "Finance" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Client Meeting", "taskDescription": "Discuss project requirements.", "taskDate": "2024-10-15", "category": "Meetings" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Fix Bug #404", "taskDescription": "Resolve the login issue.", "taskDate": "2024-10-22", "category": "Development" }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "sneha@example.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Design Assets", "taskDescription": "Create social media graphics.", "taskDate": "2024-10-21", "category": "Design" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Inventory Check", "taskDescription": "Office supplies count.", "taskDate": "2024-10-10", "category": "Admin" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Database Backup", "taskDescription": "Automated backup failure.", "taskDate": "2024-10-12", "category": "IT" }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "ravi@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Write Blog Post", "taskDescription": "Draft tech trends article.", "taskDate": "2024-10-25", "category": "Content" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Social Media Update", "taskDescription": "LinkedIn updates.", "taskDate": "2024-10-20", "category": "Marketing" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Code Review", "taskDescription": "Review PR for dashboard.", "taskDate": "2024-10-18", "category": "Development" }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "priya@example.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Competitor Analysis", "taskDescription": "Analyze strengths/weaknesses.", "taskDate": "2024-10-28", "category": "Strategy" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Policy Update", "taskDescription": "Update handbook.", "taskDate": "2024-10-15", "category": "Compliance" }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "karan@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Security Audit", "taskDescription": "Vulnerability scan.", "taskDate": "2024-10-26", "category": "Cybersecurity" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Customer Support", "taskDescription": "High-priority tickets.", "taskDate": "2024-10-22", "category": "Support" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "API Documentation", "taskDescription": "Finalize public API docs.", "taskDate": "2024-10-19", "category": "Technical Writing" }
        ]
    },
    {
        "id": 6,
        "firstName": "Ananya",
        "email": "ananya@example.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "UI Prototype", "taskDescription": "Create Figma mockups for new profile page.", "taskDate": "2024-10-27", "category": "Design" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Feedback Session", "taskDescription": "Collect user feedback on v1.0.", "taskDate": "2024-10-14", "category": "Research" }
        ]
    },
    {
        "id": 7,
        "firstName": "Ishaan",
        "email": "ishaan@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 0, "failed": 1 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Database Cleanup", "taskDescription": "Remove obsolete logs from staging.", "taskDate": "2024-10-29", "category": "IT" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Optimize Queries", "taskDescription": "Improve load time for analytics.", "taskDate": "2024-10-24", "category": "Development" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Legacy Patch", "taskDescription": "Patch old v2.1 server.", "taskDate": "2024-10-11", "category": "Maintenance" }
        ]
    },
    {
        "id": 8,
        "firstName": "Meera",
        "email": "meera@example.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 2, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Onboarding Call", "taskDescription": "Welcome new hires.", "taskDate": "2024-10-23", "category": "HR" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Payroll Processing", "taskDescription": "Confirm October salaries.", "taskDate": "2024-10-18", "category": "Finance" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Benefit Enrollment", "taskDescription": "Update insurance records.", "taskDate": "2024-10-15", "category": "HR" }
        ]
    },
    {
        "id": 9,
        "firstName": "Vikram",
        "email": "vikram@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Sales Pitch", "taskDescription": "Present to potential investors.", "taskDate": "2024-11-02", "category": "Sales" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Market Research", "taskDescription": "Study APAC region trends.", "taskDate": "2024-10-31", "category": "Strategy" }
        ]
    },
    {
        "id": 10,
        "firstName": "Aditi",
        "email": "aditi@example.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Testing Phase", "taskDescription": "Execute QA for mobile app.", "taskDate": "2024-10-25", "category": "Quality Assurance" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Bug Report", "taskDescription": "Document iOS crashes.", "taskDate": "2024-10-12", "category": "QA" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Automation Script", "taskDescription": "Script failed to run on Jenkins.", "taskDate": "2024-10-10", "category": "IT" }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Aaryan",
        "email": "admin@me.com",
        "password": "123"
    }
];

export const setlocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getlocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return { employees, admin }
}
