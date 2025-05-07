import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCardsContainerComponent } from './kpi-cards-container.component';

describe('KpiCardsContainerComponent', () => {
  let component: KpiCardsContainerComponent;
  let fixture: ComponentFixture<KpiCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiCardsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
