import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { TimelineSheetComponent } from "./Forms/Engineering/activity-barchart/timeline-sheet/timeline-sheet.component";
// import { PurchaseOrderModule } from "./Forms/Procurement/purchase-order/purchase-order.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
    data: { pageTitle: "Login" }
  },
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "MainHome" },
    children: [
      {
        path: "duty-log",
        loadChildren: "./Forms/OE-OSP/duty-log/duty-log.module#DutyLogModule",
        data: { pageTitle: "OE Duty Log", screenId: 69 }
      },
      {
        path: "bending-allowance",
        loadChildren: "./Forms/Production/bending-allowance/bending-allowance.module#BendingAllowanceModule",
        data: { pageTitle: "Bending Allowance", screenId: 72 }
      },
      {
        path: "minimum-quantity",
        loadChildren: "./Forms/Procurement/minimum-quantity/minimum-quantity.module#MinimumQuantityModule",
        data: { pageTitle: "Minimum Quantity", screenId: 29 }
      },
      {
        path: "POItemsDeliveryStatus",
        loadChildren: "./Forms/Procurement/po-item-delivery-status/po-item-delivery-status.module#POItemDeliveryStatus",
        data: { pageTitle: "POItemsDelivery and Clearance Status", screenId: 34 }
      },
      {
        path: "PurchaseBaseUnitConversion",
        loadChildren: "./Forms/Procurement/purchase-base-unit-conversion/purchase-base-unit-conversion.module#PurchaseBaseUnitConversionModule",
        data: { pageTitle: "Purchase & Base Unit Conversion", screenId: 35 }
      },
      {
        path: "PurchaseRequisition",
        loadChildren: "./Forms/Procurement/purchase-request/purchase-request.module#PurchaseRequestModule",
        data: { pageTitle: "Purchase Requisition", screenId: 18 }
      },
      {
        path: "drawing-register",
        loadChildren: "./Forms/Engineering/drawing-register/drawing-register.module#DrawingRegisterModule",
        data: { pageTitle: "Drawing Register", screenId: 1 }
      },
      {
        path: "ItemMaster",
        loadChildren: "./Forms/Engineering/item-master/item-master.module#ItemMasterModule",
        data: { pageTitle: "Item Master", screenId: 3 }
      },
      {
        path: "ActivityBarchart",
        loadChildren: "./Forms/Engineering/activity-barchart/activity-barchart.module#ActivityBarchartModule",
        data: { pageTitle: "Activity Barchart", screenId: 10 }
      },
      {
        path: "sheetmaster",
        loadChildren: "./Forms/Production/sheet-master/sheet-master.module#SheetMasterModule",
        data: { pageTitle: "", screenId: 73 }
      },
      {
        path: "BarCodeSystem",
        loadChildren: "./Forms/Production/barcode-system/barcode-system.module#BarcodeSystemModule",
        data: { pageTitle: "", screenId: 83 }
      },
      {
        path: "setupsheet",
        loadChildren: "./Forms/Production/setup-sheet/setup-sheet.module#SetupSheetModule",
        data: { pageTitle: "", screenId: 73 }
      },
      {
        path: "NonConformanceReport",
        loadChildren: "./Forms/Production/non-conformance-report/non-conformance-report.module#NCRModule",
        data: { pageTitle: "", screenId: 77 }
      },
      {
        path: "AssemblyBarcodeScan",
        loadChildren: "./Forms/Production/assembly-barcode-scan/assembly-barcode-scan.module#ABSModule",
        data: { pageTitle: "", screenId: 80 }
      },
      {
        path: "workorderalertpoint",
        loadChildren: "./Forms/Engineering/workorder-alert-point/workorder-alert-point.module#WorkorderAlertPointModule",
        data: { pageTitle: "", screenId: 13 }
      },
      {
        path: "customermaster",
        loadChildren: "./Forms/OE-OSP/Customer-Master/customer-master.module#CustomerMasterModule",
        data: { pageTitle: "" }
      },
      {
        path: "despatch-register",
        loadChildren: "./Forms/Production/despatch-register/despatch-register.module#DespatchRegisterModule",
        data: { pageTitle: "Despatch Register", screenId: 79 }
      },
      {
        path: "serialnumber",
        loadChildren: "./Forms/Production/serial-number/serial-number.module#SerialNumberModule",
        data: { pageTitle: "" }
      },
      {
        path: "SupplierDevelopment",
        loadChildren: "./Forms/Procurement/supplier-development/supplier-development.module#SupplierDevelopmentModule",
        //data:{ pageTitle:""}
      },
      {
        path: "ItemDesignChangeAdvice",
        loadChildren: "./Forms/Engineering/item-code-design-changes/item-code-design-changes.module#ItemCodeDesignChangesModule",
        data: { pageTitle: "", screenId: 7 }
      },
      {
        path: "EngineeringSpecification",
        loadChildren: "./Forms/Engineering/engineering-specification/engineering-specification.module#EngineeringSpecificationModule",
        data: { pageTitle: "", screenId: 8 }
      },
      {
        path: "DrawingReleaseNote",
        loadChildren: "./Forms/Engineering/drawing-release-note/drawing-release-note.module#DrawingReleaseNoteModule",
        data: { pageTitle: "" }
      },
      {
        path: "ItemCodeSearch",
        loadChildren: "./Forms/item-code-search/item-code-search.module#ItemCodeSearchModule",
        data: { pageTitle: "" }
      },


      {
        path: "lme-register",
        loadChildren: "./Forms/Procurement/lme-register/lme-register.module#LmeRegisterModule",
        data: { pageTitle: "LME Register", screenId: 87 }
      },
      {
        path: "bom-viewer",
        loadChildren: "./Forms/Engineering/bom-viewer/bom-viewer.module#BomViewerModule",
        data: { pageTitle: "BOM Viewer", screenId: 5 }
      },
      {
        path: "offercomparison",
        loadChildren: "./Forms/Procurement/offer-comparison/offer-comparison.module#OfferComparisonModule",
        data: { pageTitle: "" }
      },
      {
        path: "bom-release",
        loadChildren: "./Forms/Engineering/bom-viewer/bom-viewer.module#BomViewerModule",
        data: { pageTitle: "BOM Release", screenId: 6 }
      },
      {
        path: "CreditNoteRegister",
        loadChildren: "./Forms/Procurement/credit-note-register/credit-note-register.module#CreditNoteRegisterModule",
        data: { pageTitle: "Credit Note Register", screenId: 22 }
      },
      {
        path: "supplier-cpa",
        loadChildren: "./Forms/Procurement/supplier-cpa/supplier-cpa.module#SupplierCpaModule",
        data: { pageTitle: "Supplier CPA", screenId: 31 }
      },
      {
        path: "po-price-compare",
        loadChildren: "./Forms/Procurement/po-price-compare/po-price-compare.module#PoPriceCompareModule",
        data: { pageTitle: "PO Price Compare", screenId: 37 }
      },
      {
        path: "BOM",
        loadChildren: "./Forms/Engineering/bom/bom.module#BomModule",
        data: { pageTitle: "BOM", screenId: 4 }
      },
      {
        path: "customerdrawings",
        loadChildren: "./Forms/Engineering/customer-drawing/customer-drawing.module#CustomerDrawingModule",
        data: { pageTitle: "", screenId: 15 }
      },
      {
        path: "masterlistofdrawings",
        loadChildren: "./Forms/Engineering/master-list-of-drawings/master-list-of-drawings.module#MasterListOfDrawingModule",
        data: { pageTitle: "", screenId: 2 }
      },
      {
        path: "BoShortage",
        loadChildren: "./Forms/Production/bo-shortage/bo-shotage.module#BoShortageModule",
        data: { pageTitle: "", screenId: 76 }
      },
      {
        path: "ScreenAccessMaster",
        loadChildren: "./Forms/IT-Administration/screen-access-control/screen-access-control.module#ScreenAccessControlModule",
        data: { pageTitle: "", screenId: 0 }
      },
      {
        path: "BomCompilation",
        loadChildren: "./Forms/Procurement/bom-compilation/bom-compilation.module#BomCompilationModule",
        data: { pageTitle: "", screenId: 38 }
      },
      {
        path: "GroupingOfCompilation",
        loadChildren: "./Forms/Procurement/bom-compilation/grouping-compilation/grouping-compilation.moudle#GroupingCompilationModule",
        data: { pageTitle: "", screenId: 38 }
      },
      {
        path: "ProductionVoucher",
        loadChildren: "./Forms/Stores/production-voucher/production-voucher.module#ProductionVoucherModule",
        data: { pageTitle: "", screenId: 49 }
      },
      {
        path: "NCRViewer",
        loadChildren: "./Forms/Quality/ncr-viewer/ncr-viewer.module#NCRViewerModule",
        data: { pageTitle: "", screenId: 59 }
      },
      {
        path: "DecisionOnDamagedItem",
        loadChildren: "./Forms/Procurement/decision-on-damaged-item/decision-on-damaged-item.module#DecisionOnDamagedItemModule",
        data: { pageTitle: "", screenId: 23 }
      },
      {
        path: "PDVShortage",
        loadChildren: "./Forms/Stores/production-voucher/shortage-item/shortage-Item.moudle#PVShortageModule",
        data: { pageTitle: "", }
      },
      {
        path: "StoreReceiptVoucher",
        loadChildren: "./Forms/Stores/srv/srv.module#SRVModule",
        data: { pageTitle: "", screenId: 44 }
      },
      {
        path: "GasCylinderRegister",
        loadChildren: "./Forms/Production/gas-cylinder-register/gas-cylinder-register.module#GasCylinderRegisterModule",
        data: { pageTitle: "" }
      },
      {
        path: "SupplierBankGarRegister",
        loadChildren: "./Forms/OE-OSP/supplier-bank-gar-register/supplier-bank-gar-register.module#SupplierBankGarRegisterModule",
        data: { pageTitle: "Supplier Bank Guarantee Register", screenId: 67 }
      },
      {
        path: "BankGuaranteeRegister",
        loadChildren: "./Forms/OE-OSP/bank-guarantee-register/bank-guarantee-register.module#BankGuaranteeRegisterModule",
        data: { pageTitle: "Bank Guarantee Register", screenId: 68 }
      },
      {
        path: "WoOrderingLimit",
        loadChildren: "./Forms/Procurement/wo-ordering-limit/wo-ordering-limit.module#WoOrderingLimitModule",
        data: { pageTitle: "Work Order Ordering Limit", screenId: 28 }
      },
      {
        path: "PurchaseOrder",
        loadChildren: "./Forms/Procurement/purchase-order/purchase-order.module#PurchaseOrderModule",
        data: { pageTitle: "Purchase Order", screenId: 20 }
      },
      {
        path: "POTrafex",
        loadChildren: "./Forms/Procurement/po-trafex/po-trafex.module#PoTrafexModule",
        data: { pageTitle: "PO Trafex" }
      },
      {
        path: "ItemDeliveryandPaymentStatus",
        loadChildren: "./Forms/Procurement/item-delivery-and-payment-status/item-delivery-and-payment-status.module#IDPModule",
        data: { pageTitle: "", screenId: 27 }
      },
      {
        path: "ExpiredItemBin",
        loadChildren: "./Forms/Stores/expired-item-bin/expired-item-bin.module#ExpiredItemBinModule",
        data: { pageTitle: "Expired Items Bin", screenId: 53 }
      },
      {
        path: "MasterListofAssets",
        loadChildren: "./Forms/Stores/asset-master/asset-master.module#AssetsMasterModule",
        data: { pageTitle: "", screenId: 51 }
      },
      {
        path: "Dashboard",
        loadChildren: "./Forms/temp-dashboard/temp-dashboard.module#TempDashboardModule",
        data: { pageTitle: "Home" }
      },

      {
        path: "TransformerSpecification",

        loadChildren: "./Forms/Engineering/transformer-specification/transformer-specification.module#TransformerSpecificationModule",

        data: { pageTitle: "Transformer Specification", screenId: 9 }

      },
      {
        path: "ExchangeRates",
        loadChildren: "./Forms/OE-OSP/ExchRate/ExchRate.module#ExchRateModule",
        data: { pageTitle: "", ScreenId: 65 }
      },
      {
        path: "ShipmentClearenceMemo",
        loadChildren: "./Forms/Procurement/shipment-clearence-memo/shipment-clearence-memo.module#ShipmentClearenceMemoModule",
        data: { pageTitle: "", ScreenId: 1 }
      },
      {
        path: "ExpiredItemsDetails",
        loadChildren: "./Forms/Stores/expired-items/expired-items.module#ExpiredItemsModule",
        data: { pageTitle: "", screenId: 52 }
      },
      {
        path: "Workorder",
        loadChildren: "./Forms/OE-OSP/workorder/workorder.module#WorkorderModule",
        data: { pageTitle: "" }
      },
      {
        path: "EngineeringReleaseNote",
        loadChildren: "./Forms/Engineering/engineering-release-note/engineering-release-note.module#EngineeringReleaseNoteModule",
        data: { pageTitle: "" }
      },
      {
        path: "PurchaseOrderViewer",
        loadChildren: "./Forms/Procurement/purchase-order-viewer/purchase-order-viewer.module#PurchaseOrderViewerModule",
        data: { pageTitle: "", screenId: 21 }
      },
      {
        path: "damagedcaseform",
        loadChildren: "./Forms/Stores/damaged-case-form/damaged-case-form.module#DamagedCaseFormModule",
        data: { pageTitle: "", ScreenId: 56 }
      },
      {
        path: "StockReturnDocument",
        loadChildren: "./Forms/Stores/srd/srd.module#SrdModule",
        data: { pageTitle: "", ScreenId: 46 }
      },
      {
        path: "StockAdjustmentVoucher",
        loadChildren: "./Forms/Stores/sav/sav.module#SavModule",
        data: { pageTitle: "Stock Adjustment Voucher", ScreenId: 50 }
      },
      {
        path: "LetterOfCredit",
        loadChildren: "./Forms/Procurement/letter-of-credit/letter-of-credit.module#LetterOfCreditModule",
        data: { pageTitle: "Letter Of Credit", ScreenId: 56 }
      },
      {
        path: "ExchangeRates",
        loadChildren: "./Forms/OE-OSP/ExchRate/ExchRate.module#ExchRateModule",
        data: { pageTitle: "", ScreenId: 65 }
      },
      {
        path: "InterOfficeMemo",
        loadChildren: "./Forms/General/inter-office-memo/inter-office-memo.module#InterOfficeMemoModule",
        data: { pageTitle: "Inter Office Memo" }
      },
      {
        path: "LetterOfCredit",
        loadChildren: "./Forms/Procurement/letter-of-credit/letter-of-credit.module#LetterOfCreditModule",
        data: { pageTitle: "Letter Of Credit", ScreenId: 56 }
      },
      {
        path: "ItemsToRework",
        loadChildren: "./Forms/Quality/items-to-rework/items-to-rework.module#ItemsToReworkModule",
        data: { pageTitle: "Items To Rework" }
      },
      {
        path: "SheetInventory",
        loadChildren: "./Forms/Production/sheet-inventory/sheet-inventory.module#SheetInventoryModule",
        data: { pageTitle: "Sheet Inventory" }
      },
      {
        path: "CncLoadingChart",
        loadChildren: "./Forms/Production/cnc-loading-chart/cnc-loading-chart.module#CncLoadingChartModule",
        data: { pageTitle: "CNC Loading Chart", screenId: 71 }
      },
      {
        path: "COI",
        loadChildren: "./Forms/OE-OSP/COI/coi-tabs.module#CoiTabsModule",
        data: { pageTitle: "Customer Order Information" }
      },
      {
        path: "WoBomReservation",
        loadChildren: "./Forms/Procurement/wo-bom-reservation/wo-bom-reservation.module#WOBOMReservationModule",
        data: { pageTitle: "WO BOM Reservation" }
      },
      {
        path: "QANonConformanceReport",
        loadChildren: "./Forms/Quality/QA-NonConformanceReport/QANonConformanceReport.module#QANonConformanceReportModule",
        data: { pageTitle: "" }
      },

      {
        path: "CalibrationtestRegister",
        loadChildren: "./Forms/Quality/calibration-test-report-reg/calibration-test-report-reg.module#CalibrationTestReportRegModule",
        data: { pageTitle: "" }
      },
      {
        path: "StoreIssueVoucher",
        loadChildren: "./Forms/Stores/store-issue-voucher/store-issue-voucher.module#StoreIssueVoucherModule",
        data: { pageTitle: "", screenId: 45 }
      },
      {
        path: "MonthlyProductionPlan",
        loadChildren: "./Forms/Production/monthly-production-plan/monthly-production-plan.module#MonthlyProductionPlanModule",
        data: { pageTitle: "", screenId: 81 }
      },
      {
        path: "BoItemPlanning",
        loadChildren: "./Forms/Procurement/bo-item-planning/bo-item-planning.module#BoItemPlanningModule",
        data: { pageTitle: "" }
      },

      {
        path: "DeliveryNote",
        loadChildren: "./Forms/Stores/delivery-note/delivery-note.module#DeliveryNoteModule",
        data: { pageTitle: "", }
      },
      {
        path: "BomCosting",
        loadChildren: "./Forms/Procurement/bom-costing/bom-costing.module#BomCostingModule",
        data: { pageTitle: "Bom Costing" }
      },
      {
        path: "approved-supplier",
        loadChildren: "./Forms/Procurement/supplier-details/supplier-details.module#SupplierDetailsModule",
        data: { pageTitle: "Approved Supplier", screenParam: 1 }
      },
      {
        path: "supplier-register",
        loadChildren: "./Forms/Procurement/supplier-details/supplier-details.module#SupplierDetailsModule",
        data: { pageTitle: "Supplier Register", screenId: 84, screenParam: 0 }
      }, 
      {
        path: "STVItemAtoB",
        loadChildren: "./Forms/Stores/stv-item-a-b/stv-item-a-b.module#StvItemABModule",
        data: { pageTitle: "", screenId: 47 }
      },
      {
        path: "master-bom-wo",
        loadChildren: "./Forms/Engineering/master-bom-wo/master-bom-wo.module#MasterBomWoModule",
        data: { pageTitle: "" }
      },
      {
        path: "purchase-order-payment-request",
        loadChildren: "./Forms/Procurement/purchase-order-payment-request/purchase-order-payment-request.module#PurchaseOrderPaymentRequestModule",
        data: { pageTitle: "" }
      },
      {
        path: "purchase-order-payment-planning",
        loadChildren: "./Forms/Procurement/po-payment-planning/po-payment-planning.module#POPaymentPlanningModule",
        data: { pageTitle: "Purchase Order Payment Planning" }
      },
      {
        path: "home",
        loadChildren: "./Forms/dashboard/dashboard.module#DashboardModule",
        data: { pageTitle: "dashboard" }
      },
      {
        path: "user-administration",
        loadChildren: "./Forms/IT-Administration/user-administration/user-administration.module#UserAdministrationModule",
        data: { pageTitle: "User Administration" }
      },
    ]
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./Forms/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" },
  { path: "timelineSheet", component: TimelineSheetComponent } // By Moorthi
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }