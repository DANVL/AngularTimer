import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {
  counter: number = 0;
  running: boolean = false;

  startText: string = 'Start';

  waitClickCount: number = 0;

  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.running = !this.running;

    if (this.running) {
      this.startText = 'Stop';

      this.subscription = timer(0,1000).subscribe( 
        _ => this.counter ++);

    } else {
      this.running = false;
      this.counter = 0;
      this.startText = 'Start';
      
      this.subscription.unsubscribe();
    }
  }

  reset() {
    if(this.running){
      this.counter = 0;
    }
  }

  wait() {
      this.waitClickCount++;
      setTimeout(() => {
          if (this.waitClickCount === 2 && this.running) {
            this.subscription.unsubscribe();
            this.running = false;
            this.startText = 'Start';
          }
          this.waitClickCount = 0;
      }, 300)
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
