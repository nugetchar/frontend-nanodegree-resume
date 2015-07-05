
//Relocationment function
var doRelocationment = function(old_, new_, item){
	return item.replace(old_, new_);
}
//To-relocation strings
var str_data = '%data%';
var str_contact = '%contact%';

/* ========================================================
 *           BIOGRAPHY DEFINITIONS : NOTHING TO CHANGE HERE
 * ========================================================
 */

//Person Prototype Definition
function Person(firstname, lastname, role){
	this.firstname = firstname;
	this.lastname = lastname;
	this.role = role;
}


//Contacts Prototype Definition
function Contacts(email, blog, twitter, github, location, phone){
	this.email = email;
	this.blog = blog;
	this.twitter = twitter;
	this.github = github;
	this.location = location;
	this.phone = phone;
}

//Biography Prototype Definition
function Biography(person, contacts, skills, picture, welcomeMsg){


	if (typeof person === 'undefined'){
		console.log('person undefined');
		person = new Person(); 
	}

	if (typeof contacts === 'undefined'){
		console.log('contacts undefined');
		contacts = new Contacts(); 
	}

	if (typeof skills === 'undefined'){
		console.log('skills undefined');
		skills = []; 
	}

	if (typeof picture === 'undefined'){
		console.log('picture undefined');
		picture = ''; 
	}

	if(typeof welcomeMsg === 'undefined'){
		console.log('welcomeMsg undefined');
		welcomeMsg = 'Hello world !';
	}

	this.person = person;
	this.contacts = contacts;
	this.skills = skills;
	this.picture = picture;
	this.welcomeMsg = welcomeMsg;
	this.processSkills = function(element, index, array){
		var skill;
		skill = HTMLskills;
		skill = doRelocationment(str_data, element, skill);
		$('#skills').append(skill);
	}

	this.renderHTML = function(){

		//First, we relocation what we need to relocation regarding the Javascript template (helper.js)

		//Firstname and lastname
		HTMLheaderName = doRelocationment(str_data, this.person.firstname + ' ' + this.person.lastname, HTMLheaderName);
		//Role
		HTMLheaderRole = doRelocationment(str_data, this.person.role, HTMLheaderRole);
		//Email
		HTMLemail = doRelocationment(str_data, this.contacts.email, HTMLemail);
		//Website
		HTMLblog = doRelocationment(str_data, this.contacts.blog, HTMLblog);
		//Twitter
		HTMLtwitter = doRelocationment(str_data, this.contacts.twitter, HTMLtwitter);
		//Github
		HTMLgithub = doRelocationment(str_data, this.contacts.github, HTMLgithub);
		//Phone
		HTMLmobile = doRelocationment(str_data, this.contacts.phone, HTMLmobile);
		//Place
		HTMLlocation = doRelocationment(str_data, this.contacts.location, HTMLlocation);

		//Picture
		HTMLbioPic = doRelocationment(str_data, this.picture, HTMLbioPic);
		//Welcome
		HTMLwelcomeMsg = doRelocationment(str_data, this.welcomeMsg, HTMLwelcomeMsg);

		//Then, we relocation the HTML template
		//Header
		$('#header').prepend(HTMLheaderRole);
		$('#header').prepend(HTMLheaderName);
		$('#header').append(HTMLbioPic);
		$('#header').append(HTMLwelcomeMsg);
		if(this.skills.length > 0){
			$('#header').append(HTMLskillsStart);
			this.skills.forEach(this.processSkills);
		}

		//Contact
		$('#topContacts').append(HTMLemail);
		$('#topContacts').append(HTMLmobile);
		$('#topContacts').append(HTMLblog);
		$('#topContacts').append(HTMLtwitter);
		$('#topContacts').append(HTMLgithub);
		$('#topContacts').append(HTMLlocation);

		$('#footerContacts').append(HTMLemail);
		$('#footerContacts').append(HTMLmobile);
		$('#footerContacts').append(HTMLblog);
		$('#footerContacts').append(HTMLtwitter);
		$('#footerContacts').append(HTMLgithub);
		$('#footerContacts').append(HTMLlocation);
	};
}

/* =========================================================
 *           EXPERIENCE DEFINITIONS : NOTHING TO CHANGE HERE
 * =========================================================
 */

//Job Prototype Definition
function Job(position, employer, dates, location, desc){
	this.position = position;
	this.employer = employer;
	this.dates = dates;
	this.location = location;
	this.desc = desc;
} 

//Work Prototype Definition
function Work(jobs){
	//If there is no arguments, we set to default
	if (typeof jobs === 'undefined'){
		console.log('jobs undefined');
		jobs = []; 
	}

	this.jobs = jobs;

	//Rendering into HTML Template
	this.renderHTML = function(){
		$('#workExperience').append(HTMLworkStart);

		//WARNING : MIGHT NOT WORK ON OLD BROWSERS AND IE
		//PLUS : FOR IN IS DEPRECATED
		for(job of this.jobs){
			$('.work-entry').append(doRelocationment(str_data, job.employer, HTMLworkEmployer) +
				doRelocationment(str_data, job.position, HTMLworkTitle));
			$('.work-entry').append(doRelocationment(str_data, job.dates, HTMLworkDates));
			$('.work-entry').append(doRelocationment(str_data, job.location, HTMLworkLocation));
			$('.work-entry').append(doRelocationment(str_data, job.desc, HTMLworkDescription));
		}
	};
}

/* ========================================================
 *           EDUCATION DEFINITIONS : NOTHING TO CHANGE HERE
 * ========================================================
 */

//School Prototype Definition
function School(school, degree, dates, location, majors){
	this.school = school;
	this.degree = degree;
	this.dates = dates;
	this.location = location;

	if(typeof majors === 'undefined'){
		console.log('majors undefined');
		majors = [];
	}

	this.majors = majors;
}

//OnlineCourse Prototype Definition
function OnlineCourse(onlineTitle, onlineSchool, onlineDates, onlineURL){
	this.onlineTitle = onlineTitle;
	this.onlineSchool = onlineSchool;
	this.onlineDates = onlineDates;
	this.onlineURL = onlineURL;
}


//Education Prototype Definition
function Education(schools, onlineCourses){
	//QUESTION FOR REVIEWER : Should we set some test in order
	//to check if we do have a array of schools and an array of onlineCourse ?

	//If there is no arguments, we set to default
	if (typeof onlineCourses === 'undefined'){
		console.log('onlineCourses undefined');
		onlineCourses = []; 
	}

	if (typeof schools === 'undefined'){
		console.log('schools undefined');

		schools = []; 
	}

	this.schools = schools;
	this.onlineCourses = onlineCourses;


	//Rendering into HTML Template
	this.renderHTML = function(){
		$('#education').append(HTMLschoolStart);
		for(sc of this.schools){
			$('.education-entry').append(doRelocationment(str_data, sc.school, HTMLschoolName) + 
				doRelocationment(str_data, sc.degree, HTMLschoolDegree));
			$('.education-entry').append(doRelocationment(str_data, sc.dates, HTMLschoolDates));
			$('.education-entry').append(doRelocationment(str_data, sc.location, HTMLschoolLocation));
			$('.education-entry').append(HTMLschoolMajorsStart);
			for(major of sc.majors){
				$('.majors').append(doRelocationment(str_data, major, HTMLschoolMajor));
			}
			
		}


		$('#education').append(HTMLonlineClasses);
		for(onlineCourse of this.onlineCourses){
			$('.online-entry').append(doRelocationment(str_data, onlineCourse.onlineTitle, HTMLonlineTitle) + 
				doRelocationment(str_data, onlineCourse.onlineSchool, HTMLonlineSchool));
			$('.online-entry').append(doRelocationment(str_data, onlineCourse.onlineDates, HTMLonlineDates));
			$('.online-entry').append(doRelocationment(str_data, onlineCourse.onlineURL, HTMLonlineURL));
		}
	};
}

/* =======================================================
 *           PROJECTS DEFINITIONS : NOTHING TO CHANGE HERE
 * =======================================================
 */

 //Project Prototype Definition
function Project(title_, dates, desc, img){
	this.title_ = title_;
	this.dates = dates;
	this.desc = desc;

	if(typeof img === 'undefined'){
		console.log('img undefined');
		img = '';
	}

	this.img = img;

 }

//ListProjects Prototype
function ListProjects(projects){
 	if(typeof projects === 'undefined'){
 		console.log('projects undefined');
 		projects = [];
 	}

 	this.projects = projects;
 	this.renderHTML = function(){

 		$('#projects').append(HTMLprojectStart);
		var i=0;
		for(i=0; i< this.projects.length; i++){
			$('.project-entry').append(doRelocationment(str_data, this.projects[i].title_, HTMLprojectTitle));
			$('.project-entry').append(doRelocationment(str_data, this.projects[i].dates, HTMLprojectDates));
			$('.project-entry').append(doRelocationment(str_data, this.projects[i].desc, HTMLprojectDescription));
			$('.project-entry').append(doRelocationment(str_data, this.projects[i].img, HTMLprojectImage));
		}
 	};
 }

//Resume Prototype Definition
//NOTHING TO CHANGE HERE
function Resume(bio, work, education, projects){
	if(typeof bio === 'undefined'){
		console.log('bio undefined');
		bio = new Biography();
	}

	if(typeof work === 'undefined'){
		console.log('work undefined');
		work = new Work();
	}

	if(typeof education === 'undefined'){
		console.log('education undefined');
		education = new Education();
	}

	if(typeof projects === 'undefined'){
		console.log('projects undefined');
		projects = new ListProjects();
	}

	this.bio = bio;
	this.work = work;
	this.education = education;
	this.projects = projects;

	this.renderHTML = function(){
		this.bio.renderHTML();
		this.work.renderHTML();
		this.education.renderHTML();
		this.projects.renderHTML();

		$('#mapDiv').append(googleMap);
	}
}