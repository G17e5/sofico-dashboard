import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopItemsVendorsTabsComponent } from './top-items-vendors-tabs.component';

describe('TopItemsVendorsTabsComponent', () => {
  let component: TopItemsVendorsTabsComponent;
  let fixture: ComponentFixture<TopItemsVendorsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopItemsVendorsTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopItemsVendorsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
