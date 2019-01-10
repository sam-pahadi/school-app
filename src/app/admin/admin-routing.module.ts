import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminDashboardComponent} from "./routes/admin-dashboard/admin-dashboard.component";
import {ManageAcademicYearComponent} from "./routes/manage-academic-year/manage-academic-year.component";
import {ModuleCompletionStatusComponent} from "./routes/module-completion-status/module-completion-status.component";
import {InquiryManagerComponent} from "./routes/inquiry/inquiry-manager/inquiry-manager.component";
import {ViewInquiryRegistrationComponent} from "./routes/inquiry/view-inquiry-registration/view-inquiry-registration.component";
import {NewAdmissionComponent} from "./routes/newAdmission/new-admission/new-admission.component";
import {ViewHouseComponent} from "./routes/house/view-house/view-house.component";
import {AllocateHouseComponent} from "./routes/house/allocate-house/allocate-house.component";
import {HouseReportComponent} from "./routes/house/house-report/house-report.component";
import {ManageDivisionComponent} from "./routes/class-management/manage-division/manage-division.component";
import {GenerateRollNumComponent} from "./routes/class-management/generate-roll-num/generate-roll-num.component";
import {StudentAttendanceComponent} from "./routes/class-management/student-attendance/student-attendance.component";
import {AttendanceReportComponent} from "./routes/class-management/attendance-report/attendance-report.component";
import {DailyDiaryComponent} from "./routes/communication/daily-diary/daily-diary.component";
import {UploadShareComponent} from "./routes/communication/upload-share/upload-share.component";
import {SubjectPlanComponent} from "./routes/subj-plan/subject-plan/subject-plan.component";
import {UploadMarksComponent} from "./routes/upload-marks/upload-marks.component";
import {UdiseNumberComponent} from "./routes/udise-number/udise-number.component";
import {SchoolReportComponent} from "./routes/GTrac/school-report/school-report.component";
import {ResetPasswordComponent} from "./routes/reset-password/reset-password.component";
import {ManageDriverComponent} from "./routes/transportation/manage-driver/manage-driver.component";
import {ManageBusPointComponent} from "./routes/transportation/manage-bus-point/manage-bus-point.component";
import {ManageBusRouteComponent} from "./routes/transportation/manage-bus-route/manage-bus-route.component";
import {TeachersRegistrationComponent} from "./routes/teachers-registration/teachers-registration.component";
import {ViewRegisteredTeachersComponent} from "./routes/view-registered-teachers/view-registered-teachers.component";
import {NewRoleComponent} from "./routes/role-management/new-role/new-role.component";
import {AssignRoleComponent} from "./routes/role-management/assign-role/assign-role.component";
import {ParentAppFeatureComponent} from "./routes/role-management/parent-app-feature/parent-app-feature.component";
import {TeacherAppFeatureComponent} from "./routes/role-management/teacher-app-feature/teacher-app-feature.component";
import {UserSettingComponent} from "./routes/role-management/user-setting/user-setting.component";
import {TermComponent} from "./routes/report-card/term/term.component";
import {AddExamTypeComponent} from "./routes/report-card/add-exam-type/add-exam-type.component";
import {SubjectOrderComponent} from "./routes/report-card/subject-order/subject-order.component";
import {DownloadReportComponent} from "./routes/report-card/download-report/download-report.component";
import {UploadExamMarksComponent} from "./routes/report-card/upload-exam-marks/upload-exam-marks.component";
import {EditStudentInfoComponent} from "./routes/administration/edit-student-info/edit-student-info.component";
import {TeacherAttendanceComponent} from "./routes/administration/teacher-attendance/teacher-attendance.component";
import {DeviceRegComponent} from "./routes/administration/device-reg/device-reg.component";
import {ProfileTypeComponent} from "./routes/administration/profile-type/profile-type.component";
import {ApproveProfileUpdateComponent} from "./routes/administration/approve-profile-update/approve-profile-update.component";
import {BillingInformationComponent} from "./routes/fee-management/billing-information/billing-information.component";
import {FeeHeadComponent} from "./routes/fee-management/fee-head/fee-head.component";
import {ClassFeeHeadComponent} from "./routes/fee-management/class-fee-head/class-fee-head.component";
import {FeePaymentComponent} from "./routes/fee-management/fee-payment/fee-payment.component";
import {LateFeeSettingComponent} from "./routes/fee-management/late-fee-setting/late-fee-setting.component";
import {BankReconciliationComponent} from "./routes/fee-management/bank-reconciliation/bank-reconciliation.component";
import {FeeStructureComponent} from "./routes/fee-management/fee-structure/fee-structure.component";
import {ClassFeeHeadsNatureComponent} from "./routes/fee-management/class-fee-heads-nature/class-fee-heads-nature.component";
import {PreviousYearFeesComponent} from "./routes/fee-management/previous-year-fees/previous-year-fees.component";
import {FeeSchemeComponent} from "./routes/fee-management/fee-scheme/fee-scheme.component";
import {AssignFeeStructureComponent} from "./routes/fee-management/assign-fee-structure/assign-fee-structure.component";

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: '', redirectTo: 'AdminDashboardComponent', pathMatch: 'full' },
    { path: 'dashboard' , component: AdminDashboardComponent},
    { path: 'home/manage-academic-year' , component: ManageAcademicYearComponent},
    { path: 'home/module-completion-status' , component: ModuleCompletionStatusComponent},
    { path: 'inquiry/inquiry-manager', component: InquiryManagerComponent},
    { path: 'inquiry/view-inquiry-manager', component: ViewInquiryRegistrationComponent},
    { path: 'new-admission', component: NewAdmissionComponent},
    { path: 'house/view-house', component: ViewHouseComponent},
    { path: 'house/allocate-house', component: AllocateHouseComponent},
    { path: 'house/house-report', component: HouseReportComponent},
    { path: 'manage-division', component: ManageDivisionComponent},
    { path: 'generate-roll-number', component: GenerateRollNumComponent},
    { path: 'student-attendance', component: StudentAttendanceComponent},
    { path: 'attendance-report', component: AttendanceReportComponent},
    { path: 'communication/daily-diary', component: DailyDiaryComponent},
    { path: 'communication/media/upload-share', component: UploadShareComponent},
    { path: 'subjectPlan', component: SubjectPlanComponent},
    { path: 'upload-marks', component: UploadMarksComponent},
    { path: 'view-udise-number', component: UdiseNumberComponent},
    { path: 'school-report', component: SchoolReportComponent},
    { path: 'dashboard/resetpassword', component: ResetPasswordComponent},
    { path: 'transportation/manage-driver', component: ManageDriverComponent},
    { path: 'transportation/manage-bus-point', component: ManageBusPointComponent},
    { path: 'transportation/manage-bus-route', component: ManageBusRouteComponent},
    { path: 'teachers-registration', component: TeachersRegistrationComponent},
    { path: 'view-teachers-registration', component: ViewRegisteredTeachersComponent},
    { path: 'role-management/new-role', component: NewRoleComponent},
    { path: 'role-management/assign-role', component: AssignRoleComponent},
    { path: 'role-management/parent-app-feature', component: ParentAppFeatureComponent},
    { path: 'role-management/teacher-app-feature', component: TeacherAppFeatureComponent},
    { path: 'role-management/user-setting', component: UserSettingComponent},
    { path: 'report-card/term', component: TermComponent},
    { path: 'report-card/subject-order', component: SubjectOrderComponent},
    { path: 'report-card/add-exam', component: AddExamTypeComponent},
    { path: 'report-card/upload-exam-marks', component: UploadExamMarksComponent},
    { path: 'report-card/download', component: DownloadReportComponent},
    { path: 'administration/edit-student-info', component: EditStudentInfoComponent},
    { path: 'administration/teacher-attendance', component: TeacherAttendanceComponent},
    { path: 'administration/device-registration', component: DeviceRegComponent},
    { path: 'administration/profile-edit', component: ProfileTypeComponent},
    { path: 'administration/approve-profile-update', component: ApproveProfileUpdateComponent},
    { path: 'fee-management/billing-information', component: BillingInformationComponent},
    { path: 'fee-management/fee-head', component: FeeHeadComponent},
    { path: 'fee-management/class-fee-head', component: ClassFeeHeadComponent},
    { path: 'fee-management/fee-payment', component: FeePaymentComponent},
    { path: 'fee-management/late-fee-setting', component: LateFeeSettingComponent},
    { path: 'fee-management/get_reconsiltaion_details', component: BankReconciliationComponent},
    { path: 'fee-management/fee-structure', component: FeeStructureComponent},
    { path: 'fee-management/class-fee-heads-nature', component: ClassFeeHeadsNatureComponent},
    { path: 'fee-management/previous-year-fees', component: PreviousYearFeesComponent},
    { path: 'fee-management/fee-scheme', component: FeeSchemeComponent},
    { path: 'fee-management/assign-fee-structure', component: AssignFeeStructureComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
