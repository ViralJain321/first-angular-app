import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesComponent {   

  public observableSubscription: Subscription;
  public customSubscription : Observable<string[]>;
  private first_subscriber_behaviorSubject : number;
  private second_subscriber_behaviorSubject : number;
  public aArray = ["Banana" , "apple" , "orange"];

 
  constructor(private _cdr : ChangeDetectorRef) {
    
  }


  ngOnInit() {  
    this.customSubscription = new Observable<string[]>(observer => {
      let count = 0;
      setInterval(() => {
        // this.aArray.push(count + " fruit");
        if (count > 5) {
          observer.complete();
        }
        if (count > 4) {
          observer.error(new Error("Count greater than 4"))
        }
        // this.aArray = this.aArray.concat(count + " fruit");
        observer.next(this.aArray);
        // observer.next(count);
        count++;
      }, 1000)
    })
    
    

    this.observableSubscription = this.customSubscription.pipe(map((data) => {
      return 'Round ' + (data);
    })).subscribe({
      next: (data) => {
        // this.aArray = this.aArray.concat(" fruit");
        this.aArray.push("data");
        console.log(data);
      }, error: (error) => {
        console.log(error);
      }, complete: () => {
        console.log("Completed");
      }
    })
      // this._cdr.markForCheck();


    // this.observableSubscription = customSubscription.pipe(map((data) => {
    //   return 'Round ' + (data);
    // })).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   }, error: (error) => {
    //     console.log(error);
    //   }, complete: () => {
    //     console.log("Completed");
    //   }
    // })


    var behaviorSubject = new BehaviorSubject<number>(123)

    behaviorSubject.subscribe(ele => {
      this.first_subscriber_behaviorSubject = ele
      console.log(`first subscriber ${ele}`)
    })

    behaviorSubject.next(456);

    behaviorSubject.subscribe(ele => {
      this.second_subscriber_behaviorSubject = ele
      console.log(`second subscriber ${ele}`)
    })
  }

  ngOnDestroy() {
    this.observableSubscription.unsubscribe();
  }

}
