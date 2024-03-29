/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const allCourses = [
  {
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{
    name: `Production Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{
    name: `Planning and Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  }
];


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data

function getDurationFromMinutes(minutes) {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

// Function:
// Parameters: course:Object
// Return: String of HTML (<article>)
function getCourseAsHtmlString(course) {
  return `
    <article class="course">
      <h3 id="name">${course.name}</h3>
      <ul>
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${course.breaks}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
      </ul>
    </article>`;
}

/************* EXECUTABLE *************/
// Execute functions that will access data


// 3. Wrap the entire execution in an Event handler
// so that the code only runs when the window
// has finished loading

window.addEventListener(`load`, function() {

  // LAB:
// 1. Add a button the document that when clicked, 
// will load ONLY the first three courses
// Test by having at least 4 courses

function showFirstThree() {
  let firstThreeCourses = allCourses.slice(0,3);

  document.getElementById('courses').innerHTML = 
  firstThreeCourses.map(getCourseAsHtmlString).join('\n');
}

document.getElementById(`filter`).addEventListener(`click`, showFirstThree);


// 2. Wrap the below functionality in a function
// that takes the Array to print as a parameter
// Test by passing "allCourses".

function printCourses(courses) {
  document.getElementById('courses').innerHTML = courses
  .map(getCourseAsHtmlString)
  .join('\n');
}

printCourses(allCourses);

})

