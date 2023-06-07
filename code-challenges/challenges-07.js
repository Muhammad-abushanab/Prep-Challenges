"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 1:
//  Required:
//
//  Write a function that takes an object and returns the formatted text based on the provided object as the example:
// 
// Input:
//  let obj = {
//      firstName: 'Ellie',
//      lastName: 'jon',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//
//  Output: "my name is Ellie Jon I am 67 YO, and I love Gaming and Sleeping."

//  Note that:
//  1- The text template is "my name is ** ** I am ** YO, and I love **."
//  2- The first letters of the firstName and lastName should be capital letter

const objLat = (obj) => {
    return `my name is ${capitilazie(obj.firstName)} ${capitilazie(obj.lastName)} I am ${obj.age} YO, and I love ${obj.hobby}.`
};
function capitilazie(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 2:
//  Required:
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant has more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contains only
//  fullName and tech if the applicant has more than one year of Experience

// Input:
// let cvs = [
//     {
//         firstName: "Jason",
//         lastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         lastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         lastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         lastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null don`t add it to the full name

const cvFormatter = (arr) => {
    let formattedCvs = [];
    arr.forEach(function (ele) {
        if (ele.yearsOfExperience > 1) {
            formattedCvs.push(ele)
        }
    })
    for (let index = 0; index < formattedCvs.length; index++) {
        if (formattedCvs[index].firstName == null) {
            formattedCvs[index].fullName = formattedCvs[index].lastName;
        }
        else if (formattedCvs[index].lastName == null) {
            formattedCvs[index].fullName = formattedCvs[index].firstName;
        }
        else {
            formattedCvs[index].fullName = formattedCvs[index].firstName + ' ' + formattedCvs[index].lastName;
        }
        delete formattedCvs[index].yearsOfExperience;
        delete formattedCvs[index].firstName;
        delete formattedCvs[index].lastName;
    }
    console.log(formattedCvs);
    return formattedCvs;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 3:
//  Optional:
//
//  Rekey wants to get statistics about the applicants
//  using the array of objects you will be getting, return an object that has the following properties
//
// let result = {
//     python_devs: 0,
//     javaScript_devs: 0,
//     dotNet_devs: 0,
//     java_devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have one year or less of Experience



const applicationsStatics = (arr) => {
    let result = {
        python_devs: 0,
        javaScript_devs: 0,
        dotNet_devs: 0,
        java_devs: 0,
        totalApplicants: 0,
        rejectedApplicants: 0,
    }
    arr.forEach(function (ele) {
        if (ele.yearsOfExperience <= 1 || (ele.firstName == null && ele.lastName == null)) {
            result.rejectedApplicants++;
        }
        else {
            switch (ele.tech.toLowerCase()) {
                case '.net':
                    result.dotNet_devs++;
                    break;
                case 'java':
                    result.java_devs++;
                    break;
                case 'python':
                    result.python_devs++;
                    break;
                case 'js':
                    result.javaScript_devs++;
                    break;
            }
        }
        result.totalApplicants++;

    })
    return result;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 4:
//  Optional:
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  Input:
let data = {
    schoolName: "David Academy",
    capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOfClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOfClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOfClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOfClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    // write your code here

    // let grades = data.grades;
    // grades.forEach(grade => {
    //     let classes = grade.classes;
    //     classes.forEach(oneClass => {
    //         let scores = oneClass.classScores
    //         let sum = 0;
    //         // console.log(scores);
    //         for (let index = 0; index < scores.length; index++) {
    //             sum += scores[index];
    //         }
    //         oneClass.avg = Math.floor(sum / scores.length);
    //         console.log(oneClass);
    //     })

    // })
    // return grades;

    let grades = data.grades;

    for (let i = 0; i < grades.length; i++) {
        let classes = grades[i].classes;

        for (let j = 0; j < classes.length; j++) {
            let scores = classes[j].classScores;
            let sum = 0;

            for (let k = 0; k < scores.length; k++) {
                sum += scores[k];
            }

            classes[j].avg = Math.floor(sum / scores.length);
            console.log(classes[j]);
        }
    }

    return data;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };
