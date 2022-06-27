import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionService } from '../services/connection.service';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [ConnectionService],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the title of the page', () => {
    const title =
      fixture.debugElement.nativeElement.querySelector('#contact-title');
    expect(title.textContent).toBe('Make an appointment here :');
  });

  it('should display the error', () => {
    component.addAppointment();
    fixture.detectChanges();
    const error = fixture.debugElement.nativeElement.querySelector('#error');
    expect(error.textContent).toBe('Completati toate campurile');
  });
});
