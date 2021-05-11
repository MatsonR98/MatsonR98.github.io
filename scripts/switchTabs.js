function currentTab(element){
    var currentTab = document.getElementById(element);

    var about_me = document.getElementById("aboutMe");
    var projects = document.getElementById("projects");
    var otherThings = document.getElementById("otherThings");
    var contact = document.getElementById("contact");

    if(element === "aboutMeButton"){
        about_me.style.display = "flex";
        projects.style.display = "none";
        otherThings.style.display = "none";
        contact.style.display = "none";
    }
    else if(element === "projectsButton"){
        about_me.style.display = "none";
        projects.style.display = "flex";
        otherThings.style.display = "none";
        contact.style.display = "none";
    }
    else if(element === "otherThingsButton"){
        about_me.style.display = "none";
        projects.style.display = "none";
        otherThings.style.display = "flex";
        contact.style.display = "none";
    }
    else if(element === "contactButton"){
        about_me.style.display = "none";
        projects.style.display = "none";
        otherThings.style.display = "none";
        contact.style.display = "flex";
    }
}
