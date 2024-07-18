import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskExportComponent } from './task-export.component';

describe('TaskExportComponent', () => {
  let component: TaskExportComponent;
  let fixture: ComponentFixture<TaskExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
