
import { Component } from "@angular/core";
import { Course } from "../models/course";
import { Subject, debounceTime } from "rxjs";

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

    // ngOnInit() {
    //     this.courses = this.courses.filter((f) => {
    //         let maxp =  Math.max(f.price);
    //         return this.courses;
    //     })

    //     // this.updatePrice(this.courses, 5);
    //     // console.log(this.courses);

    // }

    ngOnInit(): void {
        this.debounceTimeSubject.pipe(
          debounceTime(2000) // Debounce time of 2 seconds
        ).subscribe(() => {
          this.debounceTimeValue = 'debounceTime triggered';
          console.log("asdasd");
        });

        this.setTimeoutExample();
        this.setTimeoutExample();
        this.setTimeoutExample();
        this.debounceTimeExample();
        this.debounceTimeExample();
        this.debounceTimeExample();
    
      }

    updatePrice(arr: any[], inc: number) {
        arr.forEach((p) => {
            p.price += inc
        })
    }

    // trackByItems(index: number, item: Course): number { return item.courseId; }



    public timeoutValue: string = '';
  public debounceTimeValue: string = '';


  // setTimeout Example
  setTimeoutExample(): void {
    this.timeoutValue = '';
    setTimeout(() => {
      this.timeoutValue = 'setTimeout triggered';
      console.log("dfddfsdf");
    }, 2000); // Set a timeout of 2 seconds
  }

  // debounceTime Example
  private debounceTimeSubject: Subject<string> = new Subject<string>();
  
  debounceTimeExample(): void {
    this.debounceTimeValue = '';
    this.debounceTimeSubject.next('debounceTime triggered');
  }

//   ngOnInit(): void {
//     this.debounceTimeSubject.pipe(
//       debounceTime(2000) // Debounce time of 2 seconds
//     ).subscribe(() => {
//       this.debounceTimeValue = 'debounceTime triggered';
//     });
//   }
}

