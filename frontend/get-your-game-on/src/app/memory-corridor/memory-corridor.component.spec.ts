import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCorridorComponent } from './memory-corridor.component';

describe('MemoryCorridorComponent', () => {
  let component: MemoryCorridorComponent;
  let fixture: ComponentFixture<MemoryCorridorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryCorridorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryCorridorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
