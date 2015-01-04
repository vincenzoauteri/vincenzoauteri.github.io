//Work object - linked to workExperience div in the html
var work = {
    'jobs':[ {
        'employer':'ARCES Research Center',
        'title':'Researcher',
        'location':'Bologna, Italy',
        'dates':'2006-2007',
        'description':'Design and development of a portable EKG wireless board',
        'url':'https://www.arces.unibo.it'
    } , {
        'employer':'Intel Corporation', 'title':'Research Intern',
        'location':'Santa Clara, CA, USA',
        'dates':'2007',
        'description':'Study of electric skin resistence applied to emotional stress',
        'url':'http://www.intel.com'
    } , {
        'employer':'Chevalier Technologies',
        'title':'Embedded Software Engineer',
        'location':'London, UK',
        'dates':'2008-2009',
        'description':'Design and development of electric motor driven automotive components',
        'url':'http://www.chevaliertechnologies.com'
    } , {
        'employer':'SEPSA Information Systems',
        'title':'Embedded Software Engineer',
        'location':'Madrid, ES',
        'dates':'2009-2012',
        'description':'Design and development of information systems for the railway industry',
        'url':'http://www.albatros-sl.es/v2010'
    } , {
        'employer':'SEPSA Information Systems',
        'title':'Technical Project Manager',
        'location':'Madrid, ES',
        'dates':'2012-Present',
        'description':'Management of international projects for the railway industry',
        'url':'http://www.albatros-sl.es/v2010'
    }],

    display : function() {
        //Simple check in case of no "jobs" object in "work"
        for (var jobIndex = 0; jobIndex < this.jobs.length; jobIndex++){
            $('#workExperience').append(HTMLworkStart);
            //Employer and Title
            var formattedEmployer=
                HTMLworkEmployer.replace('%data%', work.jobs[jobIndex].employer);
            var formattedTitle=
                HTMLworkTitle.replace('%data%', work.jobs[jobIndex].title);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').find('a').first().attr('href',work.jobs[jobIndex].url);

            //Dates
            var formattedDates=
                HTMLworkDates.replace('%data%', work.jobs[jobIndex].dates);
            $('.work-entry:last').append(formattedDates);

            //Location
            var formattedLocation=
                HTMLworkLocation.replace('%data%', work.jobs[jobIndex].location);
            $('.work-entry:last').append(formattedLocation);

            //Description
            var formattedDescription=
                HTMLworkDescription.replace('%data%', work.jobs[jobIndex].description);
            $('.work-entry:last').append(formattedDescription);
        }

    }
};


//Projects object - linked to "projects" div in the html
//Added URL property, to link to relevant address
var projects = { 
    "projects":[
    {'title':'Wireless ECG Board',
        'dates':'2006-2007',
        'description':'Design and development of a wireless ECG board',
        'images':['images/ecg.png','images/ecg2.png'],
        'url':'https://www.google.es/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCMQFjAA&url=http%3A%2F%2Fwww.researchgate.net%2Fpublication%2F224369355_ZigBee-nased_wireless_ECG_monitor%2Flinks%2F09e4150b5c33425be4000000.pdf&ei=riipVNf1BomGzAO51oDoCw&usg=AFQjCNENZzLeNOo9oJ2RI81n8KLhNOzXlQ&bvm=bv.82001339,d.bGQ'
    } , {'title':'Scopy',
        'dates':'2012',
        'description':'Sample project for online startup founding class',
        'images':['images/scopy.png'],
        'url':'https://novoed.com/venture/pitch_decks/32'
    } , {'title':'PiPlay',
        'dates':'2014',
        'description':'Web Application to Strem Videos from Raspberry Pi',
        'images':['images/piplay.png'],
        'url':'https://github.com/vincenzoauteri/piPlay'
    }],

    display : function() {
        var projectArray = projects['projects'];
        for (var projectIndex = 0; projectIndex < projectArray.length; projectIndex++){
            //Title
            $('#projects').append(HTMLprojectStart);
            var formattedTitle=
                HTMLprojectTitle.replace('%data%', projectArray[projectIndex].title);
            $('.project-entry:last').append(formattedTitle);

            //Adding url
            $('.project-entry:last').children('a').attr('href',projectArray[projectIndex].url);

            //Dates
            var formattedDates=
                HTMLprojectDates.replace('%data%', projectArray[projectIndex].dates);
            $('.project-entry:last').append(formattedDates);

            //Description
            var formattedDescription=
                HTMLprojectDescription.replace('%data%', projectArray[projectIndex].description);
            $('.project-entry:last').append(formattedDescription);

            //Images
            if (projectArray[projectIndex].images.length > 0) {
                for (var imageIndex = 0; imageIndex < projectArray[projectIndex].images.length; imageIndex++) {
                    var formattedImage =
                        HTMLprojectImage.replace ('%data%', projectArray[projectIndex].images[imageIndex]);
                    $('.project-entry:last').append(formattedImage);
                    var imageObject = $('.project-entry:last').children('img').last();
                    imageObject.attr('class','project-image');
                }
            }
        }
    }
};


//Bio object - linked to header information in the html 
var bio = {
    'name':'Vincenzo Auteri',
    'role':'Software Engineer',
    'contacts':  
    { 'mobile':'' ,
        'email':'vincenzo.auteri@hotmail.com',
        'github':'github.com/vincenzoauteri',
        'twitter':'',
        'location':'Madrid, Spain'
    }, 
    'welcomeMessage':' Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
    'skills':[ 'C/C++ programming', 
    'Embedded applications development',
    'Web applications development'],
    'biopic':'images/homer.jpg',

    display : function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedName + formattedRole);

        var formattedWelcome = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);
        $('#header').append(formattedWelcome);

        var formattedBioPic= HTMLbioPic.replace('%data%',bio.biopic);
        $('#header').prepend(formattedBioPic);

        if (bio['skills']) {
            $('.content').prepend(HTMLskillsStart);
            for (var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++){
                var formattedText = HTMLskills.replace('%data%', bio.skills[skillIndex]);
                $('#skills').append(formattedText);
            }
        } else {
            console.log ('Object bio has no skills object');
        }
        //Redefine some variables. I chose to leave the ones in helper.js to 
        //concentrate the changes here

        var HTMLlocation = '<li class="flex-item"><span class="white-text">%data%</span></li>';
        var HTMLemail = '<li class="flex-item"><span class="white-text">%data%</span></li>';
        var HTMLgithub = '<li class="flex-item"><span class="white-text">%data%</span></li>';

        var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
        $('#footerContacts').append(formattedEmail);


        var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
        $('#footerContacts').append(formattedGithub);

        var formattedLocation= HTMLlocation.replace('%data%',bio.contacts.location);
        $('#footerContacts').append(formattedLocation);
    }
};


//Education object - lined to "education" div in the html
var education =
{
    'schools':[ {
        'name':'University of Bologna',
        'location':'Bologna, Italy',
        'degree':'Bacherlor\'s degree in Electronics Engineering',
        'majors': [
            'Electronics'
            ],
        'dates':'2004',
        'url':'http://www.unibo.it/en/homepage'
    } , {
        'name':'University of Bologna',
        'location':'Bologna, Italy',
        'degree':'Master\'s degree in Electronics Engineering',
        'majors':
            [
            'Electronics',
        'Biomedical Engineering'
            ],
        'dates':'2007',
        'url':'http://www.unibo.it/en/homepage'
    } ],
    'onlineCourses': [ {
        'title':'Introduction to Artificial Intelligence',
        'school':'Udacity',
        'date':'12/21/11',
        'url':'https://www.udacity.com/course/cs271'
    } , {
        'title':'Web Development',
        'school':'Udacity',
        'date':'12/21/2011',
        'url':'https://www.udacity.com/course/cs253'
    } , { 
        'title':'Intro to Statistics',
        'school':'Udacity',
        'date':'8/8/2012',
        'url':'https://www.udacity.com/course/st101'
    } , {
        'title':'Intro to Computer Science',
        'school':'Udacity',
        'date':'8/18/2012',
        'url':'https://www.udacity.com/course/cs101'
    } , {
        'title':'Artificial Intelligence for Robotics',
        'school':'Udacity',
        'date':'8/19/2012',
        'url':'https://www.udacity.com/course/cs373'
    } , {
        'title':'Applied Cryptography',
        'school':'Udacity',
        'date':'9/4/2012',
        'url':'https://www.udacity.com/course/cs383'
    } , {
        'title':'Intro To Theoretical Computer Science',
        'school':'Udacity',
        'date':'2/3/2013',
        'url':'https://www.udacity.com/course/cs313'
    } , {
        'title':'Software Debugging',
        'school':'Udacity',
        'date':'2/12/2013',
        'url':'https://www.udacity.com/course/cs259'
    }
    ],
        display : function () {
            //
            //Schools
            var schoolArray = education['schools'];
            for (var schoolIndex = 0; schoolIndex < schoolArray.length; schoolIndex++){
                $('#education').append(HTMLschoolStart);
                //Name
                var formattedName=
                    HTMLschoolName.replace('%data%', schoolArray[schoolIndex].name);
                //Degree
                var formattedDegree=
                    HTMLschoolDegree.replace('%data%', schoolArray[schoolIndex].degree);
                $('.education-entry:last').append(formattedName + formattedDegree);
                $('.education-entry:last').children('a').attr('href',schoolArray[schoolIndex].url);

                //Dates
                var formattedDates=
                    HTMLschoolDates.replace('%data%', schoolArray[schoolIndex].dates);
                $('.education-entry:last').append(formattedDates);

                //Location
                var formattedLocation=
                    HTMLschoolLocation.replace('%data%', schoolArray[schoolIndex].location);
                $('.education-entry:last').append(formattedLocation);

                //Majors
                var formattedMajors = HTMLschoolMajor.replace('%data%', schoolArray[schoolIndex].majors.toString());
                $('.education-entry:last').append(formattedMajors);
            }

            //
            //Online Courses
            var courseArray= education['onlineCourses'];
            $('#education').append(HTMLonlineClasses);
            var HTMLonlineClassStart = '<div class="education-entry"></div>';
            for (var courseIndex = 0; courseIndex < courseArray.length; courseIndex++){
                $('#education').append(HTMLonlineClassStart);
                //Name
                var formattedTitle=
                    HTMLonlineTitle.replace('%data%', courseArray[courseIndex].title);
                //form
                //Degree
                var formattedSchool=
                    HTMLonlineSchool.replace('%data%', courseArray[courseIndex].school);
                $('.education-entry:last').append(formattedTitle + formattedSchool);

                $('.education-entry:last').children('a').attr('href',courseArray[courseIndex].url);

                //Dates
                var formattedDates=
                    HTMLonlineDates.replace('%data%', courseArray[courseIndex].date);
                $('.education-entry:last').append(formattedDates + '<br>');

            }
        }

}
//
// Function to log mouse click coordinates
$(document).click (function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


//Helper function to call display method on each defined json object to
//display resume content
var displayResumeContent = function() {
    var resumeObjects = [bio, work, projects, education];
    for (var objectIndex = 0; objectIndex < resumeObjects.length; objectIndex++) {
        resumeObjects[objectIndex].display();
    }
}

//Main function call for displaying all objects
displayResumeContent();

//
//Google Maps related code
//
$('#mapDiv').append(googleMap);

var locationizer = function(work_object) {
    var result = [];

    if (work_object['jobs'].length >0) {
        for (var jobIndex = 0; jobIndex< work_object.jobs.length; jobIndex++) {
            result.push(work_object.jobs[jobIndex].location);
        }
        return result;
    }
}

//
//Additional code - used in the class but not needed for the project
//
//Creates button to change name style
//$('#main').append(internationalizeButton);
//var inName = function(name) {
//    var temp = name.split(' ');
//    var firstName = temp[0];
//    var lastName = temp[1];
//    var result = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()+ ' ' + lastName.toUpperCase();
//    return result;
//}
