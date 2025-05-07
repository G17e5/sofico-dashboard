import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TopbarComponent } from '../topbar/topbar.component';
import { GraphChartComponent } from "../../shared/components/graph-chart/graph-chart.component";

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
