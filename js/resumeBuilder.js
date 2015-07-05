
/* =======================================================
 *  CHANGE THOSE VALUES IN ORDER TO CUSTOMIZE YOUR RESUME
 * =======================================================
 */

//Personal infos
var me = new Person('Thomas', 'TOLEDO', 'Grapefruit Warrior (also, Engineer in Computer Sciences)');

//Contacts infos
var contacts = new Contacts('nugetchar@gmail.com', 'Bytes Bakery', '@Nuget_char', 'nugetchar', 'Osny, FRANCE', '+33 667 598 230');

//Add, change or remove skills
var skills = ['Java/JavaEE', 'C/C++', 'HTML5', 'CSS3', 'Javascript', 'IT Performance']; 

//Path to bioPic
var bioPic = './images/bioPic.jpg';

//Welcome message
var welcome = 'Hi there ! Welcome on my online resume :)';


var bio = new Biography(me,	contacts, skills, bioPic, welcome);



//Push a new Job for each one you worked in
var jobs = [];
jobs.push(new Job('IT Performance Consultant',
						'leanovia Consulting', '2012-2015',
						'PARIS, France',
						'Performance qualification of complex applications and' +
						' technical environments, project management, load and testing, integration of monitoring solutions'));

jobs.push(new Job('VB .NET Developer',
						 'CRDH',
						 '3 months in 2012',
						 'ST-JEAN-SUR-RICHELIEU, Quebec',
						 'Internship of three months. I developed a .NET application which was used in' +
						 ' order to analyze biological data for research'));

var work = new Work(jobs);


//Push a new School for each one you studied in
var schools = [];
var majors = [];

//Set your majors
majors.push('Software Engineer');
//Then put your school
schools.push(new School('University of Technology of Compiegne', 'Engineer in Computer Sciences', '2012-2015', 'COMPIEGNE, France', majors));
//Then reset you array
majors = [];

//Do it again
majors.push('Computer Scientist');
schools.push(new School('Universitary Institue of Technology', 'Technician in Computer Sciences', '2010-2012', 'PARIS, France', majors));
majors = [];

//Same goes for online courses
var onlineCourses = [];
onlineCourses.push(new OnlineCourse('Front-End Web Developer Nanodegree', 'Udalocation', 'June 2015 - Ongoing', 'https://www.udalocation.com/course/front-end-web-developer-nanodegree--nd001'));

var education = new Education(schools, onlineCourses);


//Same goes for projects
var projects = new ListProjects();
projects.projects.push(new Project('Node Bakery', '08/2014 - Ongoing', 'A simple way to monitor you Node.js applications'));
projects.projects.push(new Project('Load & Testing Unix', '02/2015 - Ongoing', 'A tool to establish baselines and micro-benchmarking on Unix systems'));
projects.projects.push(new Project('Wake-E', '09/2014 - 01/2015', 'A smart alarm which wakes you up on time regarding the road traffic'));
projects.projects.push(new Project('Bytes Bakery', '07/2014 - Ongoing', 'My personal website'));


//Let's build this resume !
(new Resume(bio, work, education, projects)).renderHTML();
