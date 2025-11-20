import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cardmenu',
  imports: [CommonModule, RouterModule],
  templateUrl: './cardmenu.html',
  styleUrl: './cardmenu.scss',

})
export class Cardmenu {

  // categories: any[] = [];
  // otherModules: any[] = [];

  // constructor(
  //   private router: Router,
  // ) {

  //   if(environment.app_platform=="pharmacy"||environment.app_platform=="prod-pharmacy")
  //     this.router.navigate(["pharmacy"],{relativeTo:null});
  //     if(environment.app_platform=="app-twp")
  //       this.router.navigate(["work-team"],{relativeTo:null});
  //     if (environment.app_platform != 'school') {
  //       this.categories = mainCategoriesWithModules;
  //     }else{
  //       this.categories = mainCategoriesWithModules;
  //     }
  //     this.otherModules=[
  //     { label: 'CRM', path: '', icon: 'assets/images/icons/crm.svg' },
  //     { label: 'HR', path: '', icon: 'assets/images/icons/hr.svg' },
  //     { label: 'Finance', path: '', icon: 'assets/images/icons/finance.svg' },
  //     {
  //       label: 'Inventory',
  //       path: '',
  //       icon: 'assets/images/icons/inventory.svg',
  //     },
  //   ];
  // }
  // openModule(path: string) {
  //   this.router.navigate([path], { relativeTo: null });
  // }
  // chekIsVisible(item: any){
  //   return !item?.allowedOrigins || ((item?.allowedOrigins?.length > 0) && item?.allowedOrigins?.findIndex((o: string)=>o == getBaseUrl()) >= 0 )
  // }
}
