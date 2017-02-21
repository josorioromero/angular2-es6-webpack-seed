import { async, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component.js';

import { expect } from 'chai';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should include a header with "from Angular2" title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).to.equal('Hello from Angular2');
  });
});
