import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEditPublisherComponent } from './dialog-add-edit-publisher.component';

describe('DialogAddEditPublisherComponent', () => {
  let component: DialogAddEditPublisherComponent;
  let fixture: ComponentFixture<DialogAddEditPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEditPublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEditPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
