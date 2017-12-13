
import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing';

describe('greeting component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    TestBed.compileComponents();
  });

  it('should have title `app works!`', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.innerHTML).toContain('app works!');
  }));

});