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

function getCourseAsHtmlString(course){
   
  return `<h3 id="name">${course.name}</h3>
  <ul>
    <li>Course Code: <strong>${course.code}</strong></li>
    <li>Instructor: <strong>${course.instructor}</strong></li>
    <li>Start: <strong>${course.start.term} ${course.start. year}</strong></li>
    <li>
      Weeks: <strong>${course.weeks}</strong>
      <ul>
        <li>Includes Break: <strong>${course.breaks}</strong></li>
      </ul>
    </li>
    <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
  </ul>
  `;
}

document.getElementById(`courses`).innerHTML += getCourseAsHtmlString(allCourses[0]);
document.getElementById(`courses`).innerHTML += getCourseAsHtmlString(allCourses[1]);

function getDurationFromMinutes(minutes) {
  var hours = Math.floor(minutes / 60); 
  var minutes = minutes % 60;
  return `${hours} hr, ${minutes} min`;
}

getDurationFromMinutes(160);  // 2 hr, 40 min