import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoDxComponent } from './corpo-dx.component';

describe('CorpoDxComponent', () => {
  let component: CorpoDxComponent;
  let fixture: ComponentFixture<CorpoDxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoDxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoDxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
