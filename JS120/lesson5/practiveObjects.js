// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     let newPrice = this.price - discount;
    
//     return newPrice;
//   },
// };

// console.log(item.discount(20))  // should return 40
// console.log(item.discount(50))  // should return 25
// console.log(item.discount(25))   // should return 37.5


// function objectsEqual(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (JSON.stringify(keys1) != JSON.stringify(keys2)) {
//     return false;
//   } else {
//     for (let i = 0; i < keys1.length; ++i) {
//       let currentKey = keys1[i]
//       if (obj1[currentKey] != obj2[currentKey]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    notes: {},
    info: function() {
      console.log(`${this.name} is a ${this.year} student`)
    },

    listCourses: function() {
      console.log(this.courses)
    },

    addCourse: function(course) {
      this.courses.push(course)
      this.notes[course["name"]] = ""
    },

    addNote: function(courseSection, note) {
      let name;

      for (let i = 0; i < this.courses.length; ++i) {
        if (this.courses[i]["code"] === courseSection) {
          name = this.courses[i]["name"];
        }
      }

      if (this.notes[name] == "") {
        this.notes[name] += note;
      } else {
        note = "; " + note
        this.notes[name] += note;
      }
    },

    viewNotes: function() {
      let noteKeys = Object.keys(this.notes);

      for (let i = 0; i < noteKeys.length; ++i) {
        let currentKey = noteKeys[i];;
        let currentNotes = this.notes[currentKey];
        console.log(currentKey + ": " + currentNotes);
      }
    },

    updateNote: function(courseSection, note) {
      let name;

      for (let i = 0; i < this.courses.length; ++i) {
        if (this.courses[i]["code"] === courseSection) {
          name = this.courses[i]["name"];
        }
      }

      this.notes[name] = note;
    }
  }
}

function createSchool() {
  return {

    students: {},

    addStudent: function(name, year) {
      let newStudent = createStudent(name, year);
      if (["1st", "2nd", "3rd", "4th", "5th"].includes(year)) {
        this.students[name] = newStudent;
        return newStudent;
      } else {
        return "Invalid year.";
      }
    },

    enrollStudent: function(studentName, course) {
      this.students[studentName].addCourse(course)
    },

    addGrade: function(studentName, courseCode, grade) {
      let courses = this.students[studentName]["courses"];

      for(let i = 0; i < courses.length; ++i) {
        if (courses[i]["code"] == courseCode) {
          courses[i]["grade"] = grade
        }
      }
    },

    getReportCard: function(studentName) {
      let courses = this.students[studentName]["courses"];

      for(let i = 0; i < courses.length; ++i) {
        if (courses[i].hasOwnProperty("grade")) {
          console.log(`${courses[i]['name']}: ${courses[i]['grade']}`)
        } else {
          console.log(`${courses[i]['name']}: In progress`)
        }
      }
    },

    courseReport: function(courseName) {
      console.log(`=${courseName}=`);

      let studentNames = Object.keys(this.students)
      let coursesTotal = 0;
      let coursesScores = 0;

      for (let x = 0; x < studentNames.length; ++x) {
        let courses = this.students[studentNames[x]]["courses"];
        for (let i = 0; i < courses.length; ++i) {
          if (courses[i]["name"] == courseName && courses[i].hasOwnProperty("grade")) {
            console.log(`${studentNames[x]}: ${courses[i]['grade']}`)
            coursesTotal += 1;
            coursesScores += courses[i]['grade']
          }
        }
      }

      console.log("---")
      console.log(`Course Average: ${coursesScores / coursesTotal}`)

    },
  }
}

let school = createSchool();
school.addStudent('foo', '1st')
school.addStudent('bar', '3rd')
school.addStudent('qux', '2nd')

school.enrollStudent('foo', {name: 'Math', code: 101})
school.enrollStudent('foo', {name: 'Advanced Math', code: 102})
school.enrollStudent('foo', {name: 'Physics', code: 202})
school.enrollStudent('qux', {name: 'Math', code: 101})
school.enrollStudent('qux', {name: 'Advanced Math', code: 102})
school.enrollStudent('bar', {name: 'Math', code: 101})

school.addGrade('foo', 101, 95)
school.addGrade('foo', 102, 91)

school.addGrade('qux', 101, 93)
school.addGrade('qux', 102, 90)

school.addGrade('foo', 102, 90)

school.getReportCard('foo')
school.courseReport("Math")

// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

