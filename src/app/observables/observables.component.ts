import { Component } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  private observableSubscription: Subscription

  ngOnInit() {
    const customSubscription = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        if (count > 5) {
          observer.complete();
        }
        if (count > 4) {
          observer.error(new Error("Count greater than 4"))
        }
        observer.next(count);
        count++;
      }, 1000)
    })



    this.observableSubscription = customSubscription.pipe(map((data) => {
      return 'Round ' + (data);
    })).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (error) => {
        console.log(error);
      }, complete: () => {
        console.log("Completed");
      }
    })
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
  }

}
