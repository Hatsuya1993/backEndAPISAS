Version NodeJs : V14.1.0 

Instructions : 
    
    1) Once in the right directory, type in "npm run dev" on the command line.
    2) It will work when it shows "Running on Port 3000" & "MySql Connected".
    3) At the moment i am using Postman to input the required data.
    4) From postman under POST request (link : http://localhost:3000/api/register), under Body
    select raw from drop down menu below Body and select JSON beside it.
    5) Next input the required JSON data for teacher, students, subject, class (format shown below)
    6) TAKE NOTE DATA CAN ONLY BE POSTED ONE AT A TIME (Either teacher, students, class, subject at a        time)
    7) For teacher = ( <= NOT INCLUDED) 
    {
    "teacher" {
      "idTeacher" : (INT value),
      "name": "(VARCHAR(45) value)",
      "email": "(VARCHAR(45) value)"
    }
    }
    For students = ( <= NOT INCLUDED) 
    {
    "students" {
      "idTeacher : (INT value),
      "name" : (VARCHAR(45) value)",
      "email" : (VARCHAR(45) value)"
    }
    }
    For subject = ( <= NOT INCLUDED) 
    {
    "subject" {
      "idTeacher" : (INT value),
      "subjectCode" : "(VARCHAR(45) value)",
      "email": "(VARCHAR(45) value)"
    }
    }  
    For class = ( <= NOT INCLUDED) 
    {
    "class" {
      "idTeacher" : (INT value),
      "classCode" : "(VARCHAR(45) value)",
      "className": "(VARCHAR(45) value)"
    }
    }
    8) From postman under GET request (link : http://localhost:3000/api/reports/workload)
    9) Report received 
    10) Take note every teacher must have a subject and class
    11) END
    
