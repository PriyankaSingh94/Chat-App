import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoadDetailsComponent } from './list-load-details.component';

describe('ListLoadDetailsComponent', () => {
  let component: ListLoadDetailsComponent;
  let fixture: ComponentFixture<ListLoadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
