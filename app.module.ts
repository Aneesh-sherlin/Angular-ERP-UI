import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { UiDatepickerDirective } from './shared/forms/input/ui-datepicker.directive';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { DutyLogModule } from "@app/Forms/OE-OSP/duty-log/duty-log.module";
import { BendingAllowanceModule } from './Forms/Production/bending-allowance/bending-allowance.module';
import { MinimumQuantityModule } from './Forms/Procurement/minimum-quantity/minimum-quantity.module';
import { DrawingRegisterModule } from './Forms/Engineering/drawing-register/drawing-register.module';
import { LmeRegisterModule } from './Forms/Procurement/lme-register/lme-register.module';
import { BomViewerModule } from './Forms/Engineering/bom-viewer/bom-viewer.module';
import { SupplierBankGarRegisterModule } from './Forms/OE-OSP/supplier-bank-gar-register/supplier-bank-gar-register.module';
import { SupplierCpaModule } from './Forms/Procurement/supplier-cpa/supplier-cpa.module';
import { PoPriceCompareModule } from './Forms/Procurement/po-price-compare/po-price-compare.module';
import { WoOrderingLimitModule } from './Forms/Procurement/wo-ordering-limit/wo-ordering-limit.module';
import { BankGuaranteeRegisterModule } from './Forms/OE-OSP/bank-guarantee-register/bank-guarantee-register.module';
import { TempDashboardModule } from './Forms/temp-dashboard/temp-dashboard.module';
import { ExpiredItemBinModule } from './Forms/Stores/expired-item-bin/expired-item-bin.module';
import { ItemMasterModule } from './Forms/Engineering/item-master/item-master.module';
import { ActivityBarchartModule } from './Forms/Engineering/activity-barchart/activity-barchart.module';
import { ItemCodeDesignChangesModule } from './Forms/Engineering/item-code-design-changes/item-code-design-changes.module';
import { LetterOfCreditModule } from './Forms/Procurement/letter-of-credit/letter-of-credit.module';
import { ItemCodeSearchComponent } from './Forms/item-code-search/item-code-search.component';
import { InterOfficeMemoModule } from './Forms/General/inter-office-memo/inter-office-memo.module';
import { NCRModule } from './Forms/Production/non-conformance-report/non-conformance-report.module';
import { ItemsToReworkModule } from './Forms/Quality/items-to-rework/items-to-rework.module';
import { SetupSheetModule } from './Forms/Production/setup-sheet/setup-sheet.module'
import { ItemCodeSearchModule } from './Forms/item-code-search/item-code-search.module';
import { BoShortageModule } from './Forms/Production/bo-shortage/bo-shotage.module';
import { CncLoadingChartModule } from './Forms/Production/cnc-loading-chart/cnc-loading-chart.module';
import { DecisionOnDamagedItemModule } from './Forms/Procurement/decision-on-damaged-item/decision-on-damaged-item.module';
import { ABSModule } from './Forms/Production/assembly-barcode-scan/assembly-barcode-scan.module';
import { AssetsMasterModule } from './Forms/Stores/asset-master/asset-master.module';
import { NCRViewerModule } from './Forms/Quality/ncr-viewer/ncr-viewer.module';
import { WOBOMReservationModule } from './Forms/Procurement/wo-bom-reservation/wo-bom-reservation.module';
import { IDPModule } from './Forms/Procurement/item-delivery-and-payment-status/item-delivery-and-payment-status.module';
import { SRVComponent } from './Forms/Stores/srv/srv.component';
import { SRVModule } from './Forms/Stores/srv/srv.module';
import { StoreIssueVoucherModule } from './Forms/Stores/store-issue-voucher/store-issue-voucher.module';
import { MonthlyProductionPlanModule } from './Forms/Production/monthly-production-plan/monthly-production-plan.module';
import { BoItemPlanningModule } from './Forms/Procurement/bo-item-planning/bo-item-planning.module';
import { BomModule } from './Forms/Engineering/bom/bom.module';
import { PurchaseRequestModule } from './Forms/Procurement/purchase-request/purchase-request.module';
import { SrdModule } from './Forms/Stores/srd/srd.module';
import { ProductionVoucherModule } from './Forms/Stores/production-voucher/production-voucher.module';
import { PVShortageModule } from './Forms/Stores/production-voucher/shortage-item/shortage-Item.moudle';
import { DeliveryNoteModule } from './Forms/Stores/delivery-note/delivery-note.module';
import { BomCostingModule } from './Forms/Procurement/bom-costing/bom-costing.module';
import { ShipmentClearenceMemoModule } from './Forms/Procurement/shipment-clearence-memo/shipment-clearence-memo.module';
import { BomCompilationComponent } from './Forms/Procurement/bom-compilation/bom-compilation.component';
import { BomCompilationModule } from './Forms/Procurement/bom-compilation/bom-compilation.module';
import { GroupingCompilationModule } from './Forms/Procurement/bom-compilation/grouping-compilation/grouping-compilation.moudle';
import { SupplierDetailsModule } from './Forms/Procurement/supplier-details/supplier-details.module';
import { MasterBomWoModule } from './Forms/Engineering/master-bom-wo/master-bom-wo.module';
import { PurchaseOrderPaymentRequestModule } from './Forms/Procurement/purchase-order-payment-request/purchase-order-payment-request.module';
import { UserAdministrationModule } from './Forms/IT-Administration/user-administration/user-administration.module';
import { ScreenAccessControlComponent } from './Forms/IT-Administration/screen-access-control/screen-access-control.component';
import { ScreenAccessControlModule } from './Forms/IT-Administration/screen-access-control/screen-access-control.module';
import { CalibrationTestReportRegModule } from './Forms/Quality/calibration-test-report-reg/calibration-test-report-reg.module';






@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    NgxDatatableModule,
    NgxPaginationModule,
    DutyLogModule,
    BendingAllowanceModule,
    MinimumQuantityModule,
    DrawingRegisterModule,
    LmeRegisterModule,
    BomViewerModule,
    SupplierBankGarRegisterModule,
    SupplierCpaModule,
    PoPriceCompareModule,
    BankGuaranteeRegisterModule,
    WoOrderingLimitModule,
    TempDashboardModule,
    ExpiredItemBinModule,
    ItemMasterModule,
    ActivityBarchartModule,
    ItemCodeDesignChangesModule,
    LetterOfCreditModule,
    InterOfficeMemoModule,
    ScreenAccessControlModule,
    // NCRModule,
    // ItemsToReworkModule,
    // SetupSheetModule,
    ItemCodeSearchModule,
    // BoShortageModule,
    // CncLoadingChartModule,
    // DecisionOnDamagedItemModule,
    // ABSModule,
    // PurchaseRequestModule,
    // AssetsMasterModule,
    // NCRViewerModule,
    // WOBOMReservationModule,
    // IDPModule,
    // SRVModule,
    StoreIssueVoucherModule,
    MonthlyProductionPlanModule,
    BoItemPlanningModule,
    BomModule,
    SrdModule,
    PVShortageModule,
 
    ShipmentClearenceMemoModule,
    DeliveryNoteModule,
    BomCostingModule,
    ShipmentClearenceMemoModule,
    BomCompilationModule,
    GroupingCompilationModule,
    SupplierDetailsModule,
    MasterBomWoModule,
    PurchaseOrderPaymentRequestModule,
    UserAdministrationModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
