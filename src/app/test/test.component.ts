
import { Component } from "@angular/core";
import { Course } from "../models/course";

@Component({
    selector: "app-test",
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.scss"]
})

export class TestComponent {

    courses: Course[] = [
        { courseId: 1001, courseName: "Angular", price: 0, rating: 5, description: "Angular Course" },
        { courseId: 1002, courseName: "Vue", price: 5000, rating: 5, description: "Angular Course" },
        { courseId: 1003, courseName: "React", price: 6000, rating: 5, description: "Angular Course" },
    ]

    constructor(){
        this.updatePrice(this.courses, 5);
        console.log(this.courses);
    }

    ngOnInit() {
        this.courses = this.courses.filter((f) => {
            let maxp =  Math.max(f.price);
        })

        // this.updatePrice(this.courses, 5);
        // console.log(this.courses);

    }

    updatePrice(arr: any[], inc: number) {
        arr.forEach((p) => {
            p.price += inc
        })
    }

    // trackByItems(index: number, item: Course): number { return item.courseId; }

}

