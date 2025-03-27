import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizandoAngularCliComponent } from './utilizando-angular-cli.component';

describe('UtilizandoAngularCliComponent', () => {
  let component: UtilizandoAngularCliComponent;
  let fixture: ComponentFixture<UtilizandoAngularCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilizandoAngularCliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilizandoAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
