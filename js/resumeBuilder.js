"use strict";
// Bio Section
var bio = {
    "name": "Samuel Kody Doherty",
    "role": "Web Developer",
    "welcome": "Welcome to my homepage!",
    "contacts": {
        "mobile": "(925) 819-2663",
        "email": "kodydoherty@gmail.com",
        "github": "kodydoherty",
        "location": "Columbia, MD",
    },
    "skills": ["Javascript", "Golang", "Jquery", "html/css",
        "Linux", "Python", "Bash", "Swift", "Red Hat", "Cent OS", "Ubuntu", "Mac OSX", "Cisco Routing and Switching", "Git", "MongoDB", "SQL", "Linux Server Admin"
    ],
    "bioPic": "images/fry.jpg",
    "display": function() {

        var formatedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formatedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
        var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formatedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

        $("#header").prepend(formatedWelcome);
        $("#header").prepend(formatedBioPic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formatedName);
        $("#topContacts").append(formatedMobile);
        $("#topContacts").append(formatedEmail);
        $("#topContacts").append(formatedGithub);
        $("#topContacts").append(formatedLocation);



        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                var formatedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formatedSkills);
            }
        }

    }
};

// Work Section
var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Code Reviewer",
        "location": "Mountain View, CA",
        "dates": "Febuary 2015 - Present",
        "description": "I am one of the very first Udacity Code Reviewers, where I review student project submissions. For each submission, I do both a thorough code review and project evaluation. I strive to give actionable and helpful feedback to students while also improving my code reviewing skills at the same time."
    }, {
        "employer": "Readytomaster.com",
        "title": "Owner / Web Devloper",
        "location": "Columbia, MD",
        "dates": "April 2014 - Present",
        "description": "Built an educational web application with Googles Go programming language and the Martini web framework. Worked on key features of the web application including a custom user management with roles, email alerts and flashcard system with spaced repetition.Wrote SQL Select, Update and Drop statements to handle the CRUD component of web app. Created the front end with Twitter Bootstrap 3.0, html/CSS, and JQuery. Setup an Ubuntu 14.04 blade server with OpenSSH as base system. Created two Linux containers (LXC) as Ubuntu servers. One of the servers runs Nginx with reverse proxy and the other runs the web app with Go’s built in webserver.Utilized unprivileged Linux containers to stop attackers from gaining root access to the containers. Set up IPtables to block all unnecessary open ports on each server. Utilized GIT/Github.com version control for the entire project."
    }, {
        "employer": "AIT",
        "title": "Linux System Admin / System Engineer",
        "location": "Hanover, MD",
        "dates": "October 2014 - Present",
    }, {
        "employer": "Axom",
        "title": "Linux System Admin",
        "location": "Columbia, MD",
        "dates": "March 2014 - October 2014",
        "description": "Supported 24/7 operations of highly successful program that provides critical intelligence to the war fighter and other security missions. Monitored more than 11 systems in order to ensure uninterrupted operations. Conducted daily software maintenance activities for these remotely deployed systems to include application testing, system backups, user troubleshooting and support. Provided daily interface to the Officer In Charge (OIC) for the individual sites and fielded any requests for additional support and alterations in scheduled maintenance periods. Provided initial system troubleshooting for any unplanned system outages that included troubleshooting network communications, application performance, database operations, storage configurations, server and blade center operations. Provided input required to keep up to date SOPs for maintaining the systems. Evaluated requirements for Tier 3 support and exercised calling trees to page support and provide notification to customer and contractor program management. Utilized VMWares VCenter for restarting VMs."
    }, {
        "employer": "Telecommunication Systems",
        "title": "Network Engineer",
        "location": "Kandahar, Afganistan",
        "dates": "January 2013 - January 2014",
        "description": "Troubleshot and maintained Cisco 2811 routers with integrated switch modules to maintain communications with remote military units. Utilize SNMPc Management Console monitor remote satellite SIPR NIPR Access point (SNAP) terminals. Managed and designed custom Access-lists to control user access to remote satellite SNAP terminals for multiple enclaves.Troubleshooting DMVPN tunnel issues by verifying static routing between the taclanes and SNAP networking equipment. This was done by utilizing GemX and walking on site users over the phone on how to troubleshoot the issue. Create custom configurations for Cisco 2811s and its switch module running catalyst 3550 IOS. Debugged and resolved 8 known configurations issues within configuration generator script used by the team. The configuration generator was written with Power shell. I utilized my programming experience isolate and resolve issues within the code. These issues were causing many of the enclaves to not function properly and prevent support staff from accessing some of the routers.Managed IP address pools for each SNAP terminal and insured each terminal had DHCP properly configured.Configured Cisco 7960 & 7940 series IP Phones to work with the terminals on each of its enclaves.Troubleshot configuration issues on both Cisco Unified Call Manager and Gatekeeper routers to resolve Cisco IP Phone issues.Troubleshooting terminal Linkway modem performance issues.Implemented new security requirements by auditing remote SNAP terminals. This included disabling unused ports, applying port security, and sticky MAC configuration changes. This was to insure the terminals met DISSA standards.OSPF route troubleshooting.Created troubleshooting workflow documentation and checklists for Field Service Representatives (FSRs) to assist in building a uniformed set of standards for troubleshooting and setup of the SNAP.Trained FSRs on proper router / switch setup and how to troubleshoot common issues. I also trained them how to perform password recovery on the Cisco equipment in case they were locked out.Trained a few FSRs to fill in as backups for my position while I went on leave. I created full documentation on logical troubleshooting steps for the most common issues."
    }, {
        "employer": "Telecommunication Systems",
        "title": "System Integration/ Linux System Admin",
        "location": "Columbia, MD",
        "dates": "September 2012 - January 2013",
        "description": "Integrating and daily maintenance of an agile, near-real time software system. Perform software installation and configuration activities of both COTS and project-developed software packages. Daily maintenance included monitoring systems during normal business hours and performing as the first line of defense for debugging and resolution of system issues in order to return the system to full functionality operations. System debugging and problem resolution was as varied as searching log files for errors related to users being unable to log into the system, determining the cause of a drive filling up, or hand-feeding data files into the system after a backup due to other issues. This also included team pager duty involving 24/7 support. Experiences on this project included use of Eclipse and SVN (Subversion) for Configuration Management of software configuration changes, ClearQuest for tracking system change requests, SharePoint as a repository for wiki-like information and document storage, and general system debugging in a Linux environment. Created multiple SOPs to assist support staff in diagnosing system issues."
    }, {
        "employer": "Telecommunication Systems",
        "title": "Linux System Admin",
        "location": "Columbia, MD",
        "dates": "August 2011 - September 2012",
        "description": "Supported 24/7 operations of highly successful program that provides critical intelligence to the war fighter and other security missions. Monitored more than 18 systems in order to ensure uninterrupted operations. Conducted daily software maintenance activities for these remotely deployed systems to include application testing, system backups, user troubleshooting and support.Provided daily interface to the Officer In Charge (OIC) for the individual sites and fielded any requests for additional support and alterations in scheduled maintenance periods. Provided initial system troubleshooting for any unplanned system outages that included troubleshooting network communications, application performance, database operations, storage configurations, server and blade center operations. Provided input required to keep up to date SOPs for maintaining the systems. Evaluated requirements for Tier 3 support and exercised calling trees to page support and provide notification to customer and contractor program management."
    }, {
        "employer": "DOD",
        "title": "Network Engineer",
        "location": "Hanover, MD",
        "dates": "May 2011 - August 2011",
        "description": "Worked with systems administrators to assist with server virtualization and providing proper network connections to virtualized servers. Managed and maintained multiple networks on different classification levels globally, Cisco ASA firewall access, TACACS+ and datacenter associated networking and cabling equipment. Provided backend support for deployment missions; those included modifying router configurations, setting up tunnels between networks, installing RSA keys and modifying ASA firewall settings. Assigned to projects on ways to optimize network flow for various networks in the datacenter and support theories with documentation and diagrams. Applied and installed Cisco switches/routers/ASA IOS upgrades according to IAVA compliance."
    }, {
        "employer": "Division of Welfare and Supportive Services",
        "title": "IT Technician 4",
        "location": "Carson City, NV",
        "dates": "August 2010 - May 2011",
        "description": "Installed Ethernet cables through conduit and installed RJ45 wall jacks. Used a punch down tool to repair RJ45 wall jacks. Maintained user workstations by using Novell / Linux imaging servers with pxe boot from remote locations. Installed and supported Novell / Linux clients for Windows XP. Administrated Windows Server 2003 group policies. Enforced corporate security polices by maintaining user account credentials through Novell / Linux Network Directory Services. Handled backups for Novell / Linux systems. Repaired network attached printers via replacing parts and resetting onboard software. Monitored and maintained server backups. Maintained State of Nevada Welfare and Health Division's internal and external website via Joomla and HTML. Supported the Welfare offices proprietary applications"
    }, {
        "employer": "D and K Technologies",
        "title": "Owner / Technician",
        "location": "Livermore, CA ; Sacramento, CA; Reno, NV",
        "dates": "2004 - 2011",
        "description": "Installed and configured Windows Server 2008 and Active Directory for clients. Installed and maintained Linux based operating systems (Ubuntu Server). Constructed custom workstations to meet the needs of clients. Troubleshot and repaired both Macintosh and PC workstations. Set up and troubleshot customers wired / wireless network connections. Installed and configured Windows XP / Vista / 7, Mac OSX 10.4/5/6 and Ubuntu Server. Provided recommendations backups solutions through Ubuntu Server Rsync onto a NAS drive. Consulted for a small business to provide network and host based security recommendations"
    }, {
        "employer": "Apple.inc",
        "title": "Genius 'Computer Technician'",
        "location": "Sacramento, CA; Pleasanton, CA ;  Reno, NV",
        "dates": "July 2007 - August 2010",
        "description": "Troubleshoot and repaired internal and client side network equipment. Provided technical support and recommendations for network security to customers and businesses, small and large. Increased sales at the Apple Genius Bar by over 50%. Supported over thirty customers per day with computer hardware and / or software needs. Performed physical repairs on Apple products by using component isolation techniques and replacing defective parts. Trained multiple new technicians on proper customer interactions and technical support logic"
    }, ],
    "display": function() {

        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formatedEmployerTitle = formatedEmployer + " " + formatedTitle;
            var formatedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formatedEmployerDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formatedEmployerDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formatedEmployerTitle);
            $(".work-entry:last").append(formatedEmployerLocation);
            $(".work-entry:last").append(formatedEmployerDates);
            $(".work-entry:last").append(formatedEmployerDesc);


        }
    }
};
var education = {
    "schools": [{
        "name": "UAT",
        "location": "Tempe, AZ",
        "degree": "BA",
        "major": ["Network Security"],
        "dates": 2012,
        "url": "http://www.uat.edu/"
    }, {
        "name": "Las Positas College",
        "location": "Livermore, CA",
        "degree": "AA",
        "major": ["Liberal Arts and Sciences"],
        "dates": 2006,
        "url": "http://www.laspositascollege.edu/"
    }],
    "onelineCourses": [{
        "title": "Intro to Computer Science Build a Search Engine & a Social Network",
        "school": "Udacity",
        "dates": 2014,
        "url": "https://www.udacity.com/course/cs101"
    }],
    "display": function() {
        for (var edu in education.schools) {
            $("#education").append(HTMLschoolStart);
            var date = education.schools[edu].dates.toString();
            var formatedEduName = HTMLschoolName.replace("%data%", education.schools[edu].name);
            var formatedNamePlusURL = formatedEduName.replace("#", education.schools[edu].url);
            var formatedEduDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
            var formatedEduDates = HTMLschoolDates.replace("%data%", date);
            var formatedEduLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
            var formatedEduMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major[0]);
            $(".education-entry:last").append(formatedNamePlusURL);
            $(".education-entry:last").append(formatedEduLocation);
            $(".education-entry:last").append(formatedEduDegree);
            $(".education-entry:last").append(formatedEduMajor);
            $(".education-entry:last").append(formatedEduDates);

        }



        $("#education").append(HTMLonlineClasses);

        for (var online in education.onelineCourses) {
            $("#education").append(HTMLschoolStart);
            var date = education.onelineCourses[online].dates.toString();
            var formatedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onelineCourses[online].title);
            var formatedTitlePlusURL = formatedOnlineTitle.replace("#", education.onelineCourses[online].url);
            var formatedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onelineCourses[online].school);
            var formatedOnlineDates = HTMLonlineDates.replace("%data%", date);
            var formatedOnlineURL = HTMLonlineURL.replace("%data%", education.onelineCourses[online].url);

            $(".education-entry:last").append(formatedTitlePlusURL);
            $(".education-entry:last").append(formatedOnlineSchool);
            $(".education-entry:last").append(formatedOnlineDates);
            $(".education-entry:last").append(formatedOnlineURL);
        }
    }
};


// Projects Section
var projects = {
    "projects": [{
        "title": "Resume Builder",
        "dates": 2015,
        "description": "Blah",
        "images": ["images/fry.jpg"]
    }],
    "display": function() {
        for (var proj in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formatedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var formatedProjDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var formatedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            var formatedProjImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[0]);

            $(".project-entry:last").append(formatedProjTitle);
            $(".project-entry:last").append(formatedProjDates);
            $(".project-entry:last").append(formatedProjDescription);
            $(".project-entry:last").append(formatedProjImage);
        }
    }
};

// Bottom contacts
var displayBottomContacts = function() {
    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formatedMobile);
    $("#footerContacts").append(formatedEmail);
    $("#footerContacts").append(formatedGithub);
};

// Display Objects

bio.display();
work.display();
projects.display();
education.display();
displayBottomContacts();


// Customer click fucnction
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// International Button
var inName = function(name) {
    var names = name.trim().split(" ");
    var first = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    name = first + " " + names[1].toUpperCase();
    return name;
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);