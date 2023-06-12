"use strict";

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:

// You are given an object that contains name and age of some customers
// Write a function that returns an array of strings that follow the below structure
//
// the string format is "Customer Name :*** *** , Age :**"

// Input:
// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]

const customerAndAge = (obj) => {
  const formattedArray = [];

  for (const name in obj) {
    const age = obj[name];
    const formattedString = `Customer Name :${name} , Age :${age}`;
    formattedArray.push(formattedString);
  }

  return formattedArray;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02
// Required:
//
// Write a function that takes recipe info object and returns an array of recipe info as strings
// as in the example

// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

const getEntries = (obj) => {
  let formatted = []
  for (const [key, value] of Object.entries(obj)) {
    formatted.push(`${key}: ${Array.isArray(value) ? value.join(',') : value}`);
  }
  return formatted;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:

// Write a function that takes an array of objects (courses) and returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  let coursesName = [];
  let studentsName = [];
  // write your code here
  for (let i = 0; i < arr.length; i++) {
    for (const [key, value] of Object.entries(arr[i])) {
      if (key.toLocaleLowerCase() === 'course') {
        coursesName.push(value);
      } else if (key.toLocaleLowerCase() === 'students') {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            studentsName.push(value[i]);
          }
        } else continue;
      } else continue;
    }
  }
  return { coursesName, studentsName };
};
// -------------------------------------------------------------------------------------------------------

//  ------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:

// The Head manager wants to get more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below structure
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

const getStudents = (arr) => {
  let studentInfo = [];
  for (let i = 0; i < arr.length; i++) {
    for (const x of courses) {
      let newStudentInfo = {};
      for (const student of x.Students) {
        if (student == arr[i]) {
          newStudentInfo.Student = arr[i];
          newStudentInfo.course = x.course;
          studentInfo.push(newStudentInfo);
        }
      }
    }
  }
  return studentInfo;
};
//  ------------------------------------------------------------------------------------------------------

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};
