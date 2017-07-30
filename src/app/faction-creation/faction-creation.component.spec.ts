import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionCreationComponent } from './faction-creation.component';

describe('FactionCreationComponent', () => {
  let component: FactionCreationComponent;
  let fixture: ComponentFixture<FactionCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
