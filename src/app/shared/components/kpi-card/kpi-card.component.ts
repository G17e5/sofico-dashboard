import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  PLATFORM_ID,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss',
})
export class KpiCardComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  private chart: any = null;

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      import('chart.js/auto').then((module) => {
        const Chart = module.default;
        const canvas = document.getElementById('oursChart') as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        // Destroy existing chart if it exists
        if (this.chart) {
          this.chart.destroy();
        }

        // Create Doughnut chart for "Ours"
        this.chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['NowFoods', 'Sofiguard', 'CosmaLine'],
            datasets: [{
              data: [70, 20, 40],
              backgroundColor: ['#E66A1F', '#001F3F', '#1F3F99'],
              borderWidth: 0,
            }],
          },
          options: {
            cutout: '75%',
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    return `${context.label}: ${context.parsed.toFixed(2)}%`;
                  }
                }
              }
            }
          }
        });
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
