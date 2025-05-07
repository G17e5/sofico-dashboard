import { Component, inject, OnInit } from '@angular/core';
import { GraphChartComponent } from "../../shared/components/graph-chart/graph-chart.component";
import { InfoPanelComponent } from "../../shared/components/info-panel/info-panel.component";
import { KpiCardComponent } from "../../shared/components/kpi-card/kpi-card.component";
import { TopItemsVendorsTabsComponent } from "../../shared/components/top-items-vendors-tabs/top-items-vendors-tabs.component";
import { APIsService } from '../../core/services/ApIs/apis.service';
import { IApis } from '../../shared/interfaces/iapis';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Correct the property name from `styleUrl` to `styleUrls`
  ,
  imports: [GraphChartComponent, InfoPanelComponent, KpiCardComponent, TopItemsVendorsTabsComponent]
})
export class DashboardComponent implements OnInit   {
[x: string]: any;
  private readonly apiServices = inject(APIsService)

Apis: IApis[] = [];

getapisData() {
  this.apiServices.getapis().subscribe({
    next: (res) => {
      this.Apis = [res.d]; // Wrap as array
    },
    error:(err)=>{
            console.log(err)
    }
  });
}


  ngOnInit(): void {
    this.getapisData()
  }

}
