import { Component, AfterViewInit, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-graph-chart',
  standalone: true,
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.scss'],
})
export class GraphChartComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      import('chart.js/auto').then((module) => {
        const Chart = module.default;
        const canvas = document.getElementById('salesChart') as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
            datasets: [
              {
                label: 'Sales 2025',
                data: [
                  25000000, 40000000, 37000000, 45000000, 36000000, 50000000, 0,
                  42000000, 43000000, 47000000, 49000000, 1000000, 500000, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                borderColor: '#007bff',
                backgroundColor: 'transparent',
                borderWidth: 2,
              },
              {
                label: 'Target 2025',
                data: new Array(31).fill(0),
                borderColor: '#8B0000',
                backgroundColor: '#8B0000',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.parsed.y.toLocaleString();
                    return label;
                  },
                },
              },
            },
            interaction: {
              mode: 'index',
              intersect: true, // Tooltip will only appear on exact point hover
            },
          },
        });
      });
    }
  }
}
