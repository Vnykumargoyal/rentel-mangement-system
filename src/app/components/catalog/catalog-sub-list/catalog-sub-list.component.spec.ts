import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSubListComponent } from './catalog-sub-list.component';

describe('CatalogSubListComponent', () => {
  let component: CatalogSubListComponent;
  let fixture: ComponentFixture<CatalogSubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
