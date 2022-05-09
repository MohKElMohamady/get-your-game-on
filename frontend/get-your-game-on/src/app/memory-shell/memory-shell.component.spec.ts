import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryShellComponent } from './memory-shell.component';

describe('MemoryShellComponent', () => {
  let component: MemoryShellComponent;
  let fixture: ComponentFixture<MemoryShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
