import { Component, OnInit } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '{{ (data | async)?.test }}'
})
export class AppComponent implements OnInit {
  title = 'scully-transfer-state-bug';
  data: Observable<any>;

  constructor(private transferState: TransferStateService) {}

  ngOnInit() {
    this.data = this.transferState.useScullyTransferState(
      'quote-bug',
      of({
        test: "This sentence has a \" double quote in it",
      })
    );
  }
}
