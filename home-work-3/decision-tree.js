function con(){
    let a = 10;
    let b = 3;
    let result;

    if (a>b){
        console.log('a=' +a, 'b=' +b );
        result = "a is bigger";
        console.log(result);
    } else{
        console.log('a=' +a, 'b=', +b);
        result = "a is smaller";
        console.log(result);
    }
}

con();

function courses(){
    let login = true;
    let course1 = "JS";
    let course2 = "Python";
    let course = course2;
    let region1 = "Ukraine";
    let region2 = "USA";
    let region = region1;
    if (login == true){
        if (course == course1){
            console.log("Welcome to JS!");
            if (region == region2){
                console.log("Wake up early!");
            }
        }else console.log("Go to Python");
    }else{
        console.log("Login is not correct");
    }
}

courses();

