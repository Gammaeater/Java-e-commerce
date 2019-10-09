import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Menu} from "primeng/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        // icon: 'pi pi-fw pi-file',
        // items: [{
        //   label: 'New',
        //   icon: 'pi pi-fw pi-plus',
        //   items: [
        //     {label: 'Project'},
        //     {label: 'Other'},
        //   ]
        // },
        //   {label: 'Open'},
        //   {separator: true},
        //   {label: 'Quit'}
        // ]
      },
      {
        label: 'Sklep',
        items: [
          {label: 'Susz CBD'},
          {label: 'Oleje CBD'},
          {label: 'Kosmetyki'},
          {label: 'Akcesoria'},
          {label: 'Waporyzery'},
          // {label: 'Waporyzery', icon: 'pi pi-fw pi-refresh'},
        ]
      },
      {
        label: 'O nas',
        // icon: 'pi pi-fw pi-question',
        // items: [
        //   {
        //     label: 'Contents'
        //   },
        //   {
        //     label: 'Search',
        //     icon: 'pi pi-fw pi-search',
        //     items: [
        //       {
        //         label: 'Text',
        //         items: [
        //           {
        //             label: 'Workspace'
        //           }
        //         ]
        //       },
        //       {
        //         label: 'File'
        //       }
        //     ]
        //   }
        // ]
      },
      {
        label: 'Kontakt',
        // items: [
        //   {
        //     label: 'Edit',
        //     icon: 'pi pi-fw pi-pencil',
        //     items: [
        //       {label: 'Save', icon: 'pi pi-fw pi-save'},
        //       {label: 'Update', icon: 'pi pi-fw pi-save'},
        //     ]
        //   },
        //   {
        //     label: 'Other',
        //     icon: 'pi pi-fw pi-tags',
        //     items: [
        //       {label: 'Delete', icon: 'pi pi-fw pi-minus'}
        //     ]
        //   }
        // ]
      },
      {separator: true},
      {
        label: 'Zaloguj',
        // icon: 'pi pi-fw pi-times'
      }
    ];
  }
}
