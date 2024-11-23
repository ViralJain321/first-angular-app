import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  numsArray = signal([1, 2]);
  nums = signal(5);
  numsArrayOpr = computed(() => this.nums() * this.numsArray()[0])

  changeOnClick() {
    console.log('clicked');
    this.nums.set(2 * Math.random());
    const random = Math.floor(2 * Math.random());
    console.log(random);
    this.numsArray.update((val) => {
      val[random] = 2 * Math.random(); 
      return [...val];
    });
    // computed(() => this.numsArray[random].set(8));
  }
}
