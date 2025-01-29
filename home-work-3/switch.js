function switchCourses(){
    let login = true;
    let course1 = "JS";
    let course2 = "Python";
    let course = course2;
    let region1 = "Ukraine";
    let region2 = "USA";
    let region = region2;

    if(!login){
        console.log("Login is not correct");
        return;
    }

    switch (course) {
        case "JS":
            console.log("Welcome to JS!");
            switch (region) {
                case "USA":
                    console.log("Wake up early!");
                    break;
            }
            break;
        case "Python":
            console.log("Go to Python");
            break;
        default:
            console.log("Unknown course");
    }
}

switchCourses();
