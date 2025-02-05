const complexObject = {
    title: "My Complex Object",
    details: {
        description: "There is an example Complex Object",
        info: {
            course: "TypeScript",
            student: "Name",
            year: 2025
        }
    },
    massive: [10, 20, 30, 40,50],
    showValues: function() {
        console.log("Title:", this.title);
        console.log("Description:", this.details.description);
        console.log("Course:", this.details.info.course);
        console.log("Student:", this.details.info.student);
        console.log("Year:", this.details.info.year);
        console.log("Array:", this.massive[2]);
    }
};

complexObject.showValues();
