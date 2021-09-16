import { TestBed, async } from '@angular/core/testing';
import { Pokemon } from './app.pokemon';
describe('TodoListing', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Pokemon
      ],
    }).compileComponents();
  }));

  /*it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));*/

  it(`should have as title 'Pokemon'`, async(() => {
    const fixture = TestBed.createComponent(Pokemon);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    //const compiled = fixture.debugElement.nativeElement;
    expect(app.querySelector('h3').textContent).toMatch(/app/i);
  }));

  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toMatch(/app/i);
  }));*/
});
