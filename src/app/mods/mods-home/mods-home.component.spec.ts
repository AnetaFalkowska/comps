import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsHomeComponent } from './mods-home.component';

describe('ModsHomeComponent', () => {
  let component: ModsHomeComponent;
  let fixture: ComponentFixture<ModsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
