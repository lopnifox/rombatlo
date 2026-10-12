import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rombatlo } from './rombatlo';

describe('Rombatlo', () => {
  let component: Rombatlo;
  let fixture: ComponentFixture<Rombatlo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rombatlo],
    }).compileComponents();

    fixture = TestBed.createComponent(Rombatlo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
