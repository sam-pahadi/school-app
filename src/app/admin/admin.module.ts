import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import {AdminFooterComponent} from './layout/admin-footer/admin-footer.component';
import {AdminHeaderComponent} from './layout/admin-header/admin-header.component';
import {AdminSidebarComponent} from './layout/admin-sidebar/admin-sidebar.component';
import {AdminDashboardComponent} from './routes/admin-dashboard/admin-dashboard.component';
import {SharedCardComponent} from './routes/shared-card/shared-card.component';
import {ManageAcademicYearComponent} from './routes/manage-academic-year/manage-academic-year.component';
import { ModuleCompletionStatusComponent } from './routes/module-completion-status/module-completion-status.component';
import {InquiryManagerComponent} from './routes/inquiry/inquiry-manager/inquiry-manager.component';
import {ViewInquiryRegistrationComponent} from './routes/inquiry/view-inquiry-registration/view-inquiry-registration.component';
import {NewAdmissionComponent} from './routes/newAdmission/new-admission/new-admission.component';
import { SiblingInfoComponent } from './routes/newAdmission/dialog/sibling-info/sibling-info.component';
import {LoaderWrapperComponent} from './routes/loader-wrapper/loader-wrapper.component';
import { ClassDivisionComponent } from './routes/newAdmission/dialog/class-division/class-division.component';
import { ViewHouseComponent } from './routes/house/view-house/view-house.component';
import { CreateHouseComponent } from './routes/house/dialog/create-house/create-house.component';
import { AllocateHouseComponent } from './routes/house/allocate-house/allocate-house.component';
import { AllocateHouseDialogComponent } from './routes/house/dialog/allocate-house-dialog/allocate-house-dialog.component';
import { SelectClassComponent } from './routes/inquiry/dialog/select-class/select-class.component';
import { HouseReportComponent } from './routes/house/house-report/house-report.component';
import { ManageDivisionComponent } from './routes/class-management/manage-division/manage-division.component';
import {ManageClassDivisionComponent} from "./routes/class-management/dialog/manage-class-division/manage-class-division.component";
import { DivisionComponent } from './routes/class-management/dialog/division/division.component';
import { GenerateRollNumComponent } from './routes/class-management/generate-roll-num/generate-roll-num.component';
import { StudentAttendanceComponent } from './routes/class-management/student-attendance/student-attendance.component';
import { AttendanceReportComponent } from './routes/class-management/attendance-report/attendance-report.component';
import { AttendanceClassComponent } from './routes/class-management/dialog/attendance-class/attendance-class.component';
import { DailyDiaryComponent } from './routes/communication/daily-diary/daily-diary.component';
import { CommunicationEventComponent } from './routes/communication/communication-event/communication-event.component';
import { CommunicationFormComponent } from './routes/communication/communication-form/communication-form.component';
import { CommunicationNoticeComponent } from './routes/communication/communication-notice/communication-notice.component';
import { CommunicationDatatableComponent } from './routes/communication/communication-datatable/communication-datatable.component';
import { CommunicationHomeworkComponent } from './routes/communication/communication-homework/communication-homework.component';
import { CommunicationCalendarComponent } from './routes/communication/communication-calendar/communication-calendar.component';
import { CommunicationConsentComponent } from './routes/communication/communication-consent/communication-consent.component';
import {UploadShareComponent} from "./routes/communication/upload-share/upload-share.component";
import { UploadComponent } from './routes/communication/dialog/upload/upload.component';
import { DescriptionComponent } from './routes/communication/dialog/description/description.component';
import { PublishComponent } from './routes/communication/dialog/publish/publish.component';
import {SubjectPlanComponent} from "./routes/subj-plan/subject-plan/subject-plan.component";
import {AddTopicComponent} from "./routes/subj-plan/dialog/add-topic/add-topic.component";
import { UploadMarksComponent } from './routes/upload-marks/upload-marks.component';
import { UdiseNumberComponent } from './routes/udise-number/udise-number.component';
import { SchoolReportComponent } from './routes/GTrac/school-report/school-report.component';
import {ResetPasswordComponent} from "./routes/reset-password/reset-password.component";
import { ManageDriverComponent } from './routes/transportation/manage-driver/manage-driver.component';
import { ViewDetailComponent } from './routes/transportation/dialog/view-detail/view-detail.component';
import { AddDetailComponent } from './routes/transportation/dialog/add-detail/add-detail.component';
import { ManageBusPointComponent } from './routes/transportation/manage-bus-point/manage-bus-point.component';
import { AddBusPointComponent } from './routes/transportation/dialog/add-bus-point/add-bus-point.component';
import { ManageBusRouteComponent } from './routes/transportation/manage-bus-route/manage-bus-route.component';
import { ViewBusRouteComponent } from './routes/transportation/dialog/view-bus-route/view-bus-route.component';
import { AddBusRouteComponent } from './routes/transportation/dialog/add-bus-route/add-bus-route.component';
import { TeachersRegistrationComponent } from './routes/teachers-registration/teachers-registration.component';
import { ViewRegisteredTeachersComponent } from './routes/view-registered-teachers/view-registered-teachers.component';
import { NewRoleComponent} from './routes/role-management/new-role/new-role.component';
import { UpdateRoleComponent } from './routes/role-management/dialog/update-role/update-role.component';
import { AssignRoleComponent } from './routes/role-management/assign-role/assign-role.component';
import { ParentAppFeatureComponent } from './routes/role-management/parent-app-feature/parent-app-feature.component';
import { TeacherAppFeatureComponent } from './routes/role-management/teacher-app-feature/teacher-app-feature.component';
import { UserSettingComponent } from './routes/role-management/user-setting/user-setting.component';
import { EditUserSettingComponent } from './routes/role-management/dialog/edit-user-setting/edit-user-setting.component';
import { TermComponent } from './routes/report-card/term/term.component';
import { SubjectOrderComponent } from './routes/report-card/subject-order/subject-order.component';
import { AddExamTypeComponent } from './routes/report-card/add-exam-type/add-exam-type.component';
import { AssignSubjectsComponent } from './routes/report-card/dialog/assign-subjects/assign-subjects.component';
import { DownloadReportComponent } from './routes/report-card/download-report/download-report.component';
import {ReportCardClassDivisionComponent} from "./routes/report-card/dialog/reportCard-class-division/class-division.component";
import { UploadExamMarksComponent } from './routes/report-card/upload-exam-marks/upload-exam-marks.component';
import { EditStudentInfoComponent } from './routes/administration/edit-student-info/edit-student-info.component';
import { TeacherAttendanceComponent } from './routes/administration/teacher-attendance/teacher-attendance.component';
import { DeviceRegComponent } from './routes/administration/device-reg/device-reg.component';
import { ProfileTypeComponent } from './routes/administration/profile-type/profile-type.component';
import { ApproveProfileUpdateComponent } from './routes/administration/approve-profile-update/approve-profile-update.component';
import { BillingInformationComponent } from './routes/fee-management/billing-information/billing-information.component';
import { FeeHeadComponent } from './routes/fee-management/fee-head/fee-head.component';
import { ClassFeeHeadComponent } from './routes/fee-management/class-fee-head/class-fee-head.component';
import { FeePaymentComponent } from './routes/fee-management/fee-payment/fee-payment.component';
import { LateFeeSettingComponent } from './routes/fee-management/late-fee-setting/late-fee-setting.component';
import { BankReconciliationComponent } from './routes/fee-management/bank-reconciliation/bank-reconciliation.component';
import { FeeStructureComponent } from './routes/fee-management/fee-structure/fee-structure.component';
import { ClassFeeHeadsNatureComponent } from './routes/fee-management/class-fee-heads-nature/class-fee-heads-nature.component';
import { SelectVendorsComponent } from './routes/fee-management/dialog/select-vendors/select-vendors.component';
import { PreviousYearFeesComponent } from './routes/fee-management/previous-year-fees/previous-year-fees.component';
import { FeeSchemeComponent } from './routes/fee-management/fee-scheme/fee-scheme.component';
import { AssignFeeStructureComponent } from './routes/fee-management/assign-fee-structure/assign-fee-structure.component';
import { CreateFeeStructureComponent } from './routes/fee-management/dialog/create-fee-structure/create-fee-structure.component';
import { FeeCollectionReportComponent } from './routes/fee-management/fee-collection-report/fee-collection-report.component';
import { HeadWiseFeeReportComponent } from './routes/fee-management/head-wise-fee-report/head-wise-fee-report.component';
import { ReceiptCancellationReportComponent } from './routes/fee-management/receipt-cancellation-report/receipt-cancellation-report.component';
import { DueReportComponent } from './routes/fee-management/due-report/due-report.component';
import { AssignFeeSchemeComponent } from './routes/fee-management/assign-fee-scheme/assign-fee-scheme.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    SharedCardComponent,
    ManageAcademicYearComponent,
    ModuleCompletionStatusComponent,
    InquiryManagerComponent,
    ViewInquiryRegistrationComponent,
    NewAdmissionComponent,
    SiblingInfoComponent,
    LoaderWrapperComponent,
    ClassDivisionComponent,
    ViewHouseComponent,
    CreateHouseComponent,
    AllocateHouseComponent,
    AllocateHouseDialogComponent,
    SelectClassComponent,
    HouseReportComponent,
    ManageDivisionComponent,
    ManageClassDivisionComponent,
    DivisionComponent,
    GenerateRollNumComponent,
    StudentAttendanceComponent,
    AttendanceReportComponent,
    AttendanceClassComponent,
    DailyDiaryComponent,
    CommunicationEventComponent,
    CommunicationFormComponent,
    CommunicationNoticeComponent,
    CommunicationDatatableComponent,
    CommunicationHomeworkComponent,
    CommunicationCalendarComponent,
    CommunicationConsentComponent,
    UploadShareComponent,
    UploadComponent,
    DescriptionComponent,
    PublishComponent,
    SubjectPlanComponent,
    AddTopicComponent,
    UploadMarksComponent,
    UdiseNumberComponent,
    SchoolReportComponent,
    ResetPasswordComponent,
    ManageDriverComponent,
    ViewDetailComponent,
    AddDetailComponent,
    ManageBusPointComponent,
    AddBusPointComponent,
    ManageBusRouteComponent,
    ViewBusRouteComponent,
    AddBusRouteComponent,
    TeachersRegistrationComponent,
    ViewRegisteredTeachersComponent,
    NewRoleComponent,
    UpdateRoleComponent,
    AssignRoleComponent,
    ParentAppFeatureComponent,
    TeacherAppFeatureComponent,
    UserSettingComponent,
    EditUserSettingComponent,
    TermComponent,
    SubjectOrderComponent,
    AddExamTypeComponent,
    AssignSubjectsComponent,
    DownloadReportComponent,
    ReportCardClassDivisionComponent,
    UploadExamMarksComponent,
    EditStudentInfoComponent,
    TeacherAttendanceComponent,
    DeviceRegComponent,
    ProfileTypeComponent,
    ApproveProfileUpdateComponent,
    BillingInformationComponent,
    FeeHeadComponent,
    ClassFeeHeadComponent,
    FeePaymentComponent,
    LateFeeSettingComponent,
    BankReconciliationComponent,
    FeeStructureComponent,
    ClassFeeHeadsNatureComponent,
    SelectVendorsComponent,
    PreviousYearFeesComponent,
    FeeSchemeComponent,
    AssignFeeStructureComponent,
    CreateFeeStructureComponent,
    FeeCollectionReportComponent,
    HeadWiseFeeReportComponent,
    ReceiptCancellationReportComponent,
    DueReportComponent,
    AssignFeeSchemeComponent
  ],
  entryComponents: [
    SiblingInfoComponent,
    ClassDivisionComponent,
    CreateHouseComponent,
    AllocateHouseDialogComponent,
    SelectClassComponent,
    ManageClassDivisionComponent,
    DivisionComponent,
    AttendanceClassComponent,
    UploadComponent,
    DescriptionComponent,
    PublishComponent,
    AddTopicComponent,
    SchoolReportComponent,
    ViewDetailComponent,
    AddDetailComponent,
    AddBusPointComponent,
    ViewBusRouteComponent,
    AddBusRouteComponent,
    UpdateRoleComponent,
    EditUserSettingComponent,
    AssignSubjectsComponent,
    ReportCardClassDivisionComponent,
    SelectVendorsComponent,
    CreateFeeStructureComponent
    ]
})
export class AdminModule { }
