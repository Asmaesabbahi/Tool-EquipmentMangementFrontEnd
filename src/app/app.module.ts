import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminService } from './services/admin.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestpageComponent } from './components/testpage/testpage.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AdminTableComponent } from './components/admin/admin-table/admin-table.component';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { DetailsAdminComponent } from './components/admin/details-admin/details-admin.component';
import { UsertableComponent } from './components/user/usertable/usertable.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { UserdetailComponent } from './components/user/userdetail/userdetail.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { PctableComponent } from './components/pc/pctable/pctable.component';
import { AddpcComponent } from './components/pc/addpc/addpc.component';
import { PcdetailComponent } from './components/pc/pcdetail/pcdetail.component';
import { UpdatepcComponent } from './components/pc/updatepc/updatepc.component';
import { EcrantableComponent } from './components/ecran/ecrantable/ecrantable.component';
import { MissiontableComponent } from './components/mission/missiontable/missiontable.component';
import { AddecranComponent } from './components/ecran/addecran/addecran.component';
import { AddmissionComponent } from './components/mission/addmission/addmission.component';
import { AddmaterialuserComponent } from './components/user/addmaterialuser/addmaterialuser.component';
import { DetailsecranComponent } from './components/ecran/detailsecran/detailsecran.component';
import { UpdateecranComponent } from './components/ecran/updateecran/updateecran.component';
import { DetailsmissionComponent } from './components/mission/detailsmission/detailsmission.component';
import { PrintertableComponent } from './components/printer/printertable/printertable.component';
import { DetailsprinterComponent } from './components/printer/detailsprinter/detailsprinter.component';
import { AddprinterComponent } from './components/printer/addprinter/addprinter.component';
import { UpdateprinterComponent } from './components/printer/updateprinter/updateprinter.component';
import { TonertableComponent } from './components/toner/tonertable/tonertable.component';
import { DetailstonerComponent } from './components/toner/detailstoner/detailstoner.component';
import { AddtonerComponent } from './components/toner/addtoner/addtoner.component';
import { UpdatetonerComponent } from './components/toner/updatetoner/updatetoner.component';
import { MaterieltableComponent } from './components/materiel/materieltable/materieltable.component';

const appRoutes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'departments', component : DepartmentsComponent},
  {path: 'table/:did/:id', component : TableComponent},
  {path: 'admintable', component :  AdminTableComponent},
  {path: 'addAdmin', component :  AddAdminComponent},
  {path: 'updateAdmin/:id', component :  UpdateAdminComponent},
  {path: 'admindetails/:id', component :  DetailsAdminComponent},
  {path: 'testpage', component :  TestpageComponent},
  {path: 'usertable/:id', component :  UsertableComponent},
  {path: 'userdetails/:did/:id', component :  UserdetailComponent},
  {path: 'addUser/:id', component :  AdduserComponent},
  {path: 'updateUser/:did/:id', component :  UpdateuserComponent},
  {path: 'pctable', component :  PctableComponent},
  {path: 'pcdetails/:id', component :  PcdetailComponent},
  {path: 'updatepc/:id', component :  UpdatepcComponent},
  {path: 'addpc', component :  AddpcComponent},
  {path: 'missiontable', component :  MissiontableComponent},
  {path: 'addmission', component :  AddmissionComponent},
  {path: 'addmaterieluser/:did/:id', component :  AddmaterialuserComponent},
  {path: 'ecrantable', component :  EcrantableComponent},
  {path: 'addecran', component :  AddecranComponent},
  {path: 'updateecran/:id', component :  UpdateecranComponent},
  {path: 'detailsecran/:id', component :  DetailsecranComponent},
  {path: 'printertable', component :  PrintertableComponent},
  {path: 'addprinter', component :  AddprinterComponent},
  {path: 'updateprinter/:id', component :  UpdateprinterComponent},
  {path: 'detailsprinter/:id', component :  DetailsprinterComponent},
  {path: 'tonertable', component :  TonertableComponent},
  {path: 'addtoner', component :  AddtonerComponent},
  {path: 'updatetoner/:id', component :  UpdatetonerComponent},
  {path: 'detailstoner/:id', component :  DetailstonerComponent},
  {path: 'detailsmission/:id', component :  DetailsmissionComponent},
  {path: 'materieltable', component :  MaterieltableComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    TableComponent,
    FooterComponent,
    TestpageComponent,
    DepartmentsComponent,
    AdminTableComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    DetailsAdminComponent,
    UsertableComponent,
    AdduserComponent,
    UserdetailComponent,
    UpdateuserComponent,
    PctableComponent,
    AddpcComponent,
    PcdetailComponent,
    UpdatepcComponent,
    EcrantableComponent,
    MissiontableComponent,
    AddecranComponent,
    AddmissionComponent,
    AddmaterialuserComponent,
    DetailsecranComponent,
    UpdateecranComponent,
    DetailsmissionComponent,
    PrintertableComponent,
    DetailsprinterComponent,
    AddprinterComponent,
    UpdateprinterComponent,
    TonertableComponent,
    DetailstonerComponent,
    AddtonerComponent,
    UpdatetonerComponent,
    MaterieltableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
