const allCourses = [
  {
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: `Yes`,
    duration: 160
  }
  ,
  {
    name: `Planning and Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: `Yes`,
    duration: 160
  }
];


// function setCourseHtml(course) {
//   document.getElementById(`name`).innerHTML = course.name;
//   document.getElementById(`code`).innerHTML = course.code;
//   document.getElementById(`instructor`).innerHTML = course.instructor;
//   document.getElementById(`start`).innerHTML = `${course.start.term} ${course.start. year}`;
//   document.getElementById(`weeks`).innerHTML = course.weeks;
//   document.getElementById(`breaks`).innerHTML = course.breaks;
//   document.getElementById(`duration`).innerHTML = getDurationFromMinutes(course.duration);
// }

// setCourseHtml(allCourses[0]);


function getCourseAsHtmlString(course){
  document.getElementById(`courses`).innerHTML = 
  `<h3 id="name">${course.name}</h3>
  <ul>
    <li>Course Code: <strong id="code">${course.code}</strong></li>
    <li>Instructor: <strong id="instructor">${course.instructor}</strong></li>
    <li>Start: <strong id="start">${course.start.term} ${course.start. year}</strong></li>
    <li>
      Weeks: <strong id="weeks">${course.weeks}</strong>
      <ul>
        <li>Includes Break: <strong id="breaks">${course.breaks}</strong></li>
      </ul>
    </li>
    <li>Duration: <strong id="duration">${getDurationFromMinutes(course.duration)}</strong></li>
  </ul>`;
}

getCourseAsHtmlString(allCourses[0]);

function getDurationFromMinutes(minutes) {
  var hours = Math.floor(minutes / 60); 
  var minutes = minutes % 60;
  return `${hours} hr, ${minutes} min`;
}

getDurationFromMinutes(160);  // 2 hr, 40 min