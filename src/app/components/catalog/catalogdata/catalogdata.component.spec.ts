import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogdataComponent } from './catalogdata.component';

describe('CatalogdataComponent', () => {
  let component: CatalogdataComponent;
  let fixture: ComponentFixture<CatalogdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
