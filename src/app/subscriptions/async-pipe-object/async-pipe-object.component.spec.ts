import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeObjectComponent } from './async-pipe-object.component';

describe('AsyncPipeObjectComponent', () => {
  let component: AsyncPipeObjectComponent;
  let fixture: ComponentFixture<AsyncPipeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncPipeObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
