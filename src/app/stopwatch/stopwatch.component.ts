import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {
  counter: number = 0;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.running = !this.running;

    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - this.counter;
      
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });

    } else {
      this.running = false;
      this.startText = 'Start';
      this.counter = undefined;
      clearInterval(this.timerRef);
    }
  }

  resetTimer() {
    this.running = false;
    this.counter = 0;
    clearInterval(this.timerRef);
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

}
