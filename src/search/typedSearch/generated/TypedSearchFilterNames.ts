import { accountSearchFilter, accountingbookSearchFilter, accountingcontextSearchFilter, accountingperiodSearchFilter, accountingtransactionSearchFilter, activitySearchFilter, addressSearchFilter, advintercompanyjournalentrySearchFilter, allocationscheduleSearchFilter, amortizationscheduleSearchFilter, amortizationtemplateSearchFilter, assemblybuildSearchFilter, assemblyitemSearchFilter, assemblyitembomSearchFilter, assemblyunbuildSearchFilter, billingaccountSearchFilter, billingclassSearchFilter, billingratecardSearchFilter, billingrevenueeventSearchFilter, billingscheduleSearchFilter, binSearchFilter, bintransferSearchFilter, binworksheetSearchFilter, blanketpurchaseorderSearchFilter, bomSearchFilter, bulkownershiptransferSearchFilter, calendareventSearchFilter, campaignSearchFilter, campaignresponseSearchFilter, campaigntemplateSearchFilter, cashrefundSearchFilter, cashsaleSearchFilter, chargeSearchFilter, chargeruleSearchFilter, checkSearchFilter, classificationSearchFilter, clientscriptSearchFilter, cmscontentSearchFilter, cmscontenttypeSearchFilter, commercecategorySearchFilter, competitorSearchFilter, consolidatedexchangerateSearchFilter, contactSearchFilter, contactcategorySearchFilter, contactroleSearchFilter, costcategorySearchFilter, couponcodeSearchFilter, creditcardchargeSearchFilter, creditcardrefundSearchFilter, creditmemoSearchFilter, currencySearchFilter, customerSearchFilter, customercategorySearchFilter, customerdepositSearchFilter, customermessageSearchFilter, customerpaymentSearchFilter, customerpaymentauthorizationSearchFilter, customerrefundSearchFilter, customerstatusSearchFilter, customersubsidiaryrelationshipSearchFilter, customrecordSearchFilter, deletedrecordSearchFilter, departmentSearchFilter, depositSearchFilter, depositapplicationSearchFilter, descriptionitemSearchFilter, discountitemSearchFilter, emailtemplateSearchFilter, employeeSearchFilter, entitySearchFilter, entityaccountmappingSearchFilter, entitygroupSearchFilter, estimateSearchFilter, expensecategorySearchFilter, fairvaluepriceSearchFilter, fileSearchFilter, fixedamountprojectrevenueruleSearchFilter, folderSearchFilter, genericresourceSearchFilter, giftcertificateSearchFilter, giftcertificateitemSearchFilter, globalaccountmappingSearchFilter, inboundshipmentSearchFilter, intercompallocationscheduleSearchFilter, intercompanyjournalentrySearchFilter, intercompanytransferorderSearchFilter, inventoryadjustmentSearchFilter, inventorycostrevaluationSearchFilter, inventorycountSearchFilter, inventorydetailSearchFilter, inventoryitemSearchFilter, inventorynumberSearchFilter, inventorynumberbinSearchFilter, inventorystatusSearchFilter, inventorystatuschangeSearchFilter, inventorytransferSearchFilter, invoiceSearchFilter, issueSearchFilter, issueproductSearchFilter, itemSearchFilter, itemaccountmappingSearchFilter, itembinnumberSearchFilter, itemdemandplanSearchFilter, itemfulfillmentSearchFilter, itemgroupSearchFilter, itemlocationconfigurationSearchFilter, itemreceiptSearchFilter, itemrevisionSearchFilter, jobSearchFilter, jobstatusSearchFilter, jobtypeSearchFilter, kititemSearchFilter, laborbasedprojectrevenueruleSearchFilter, landedcostSearchFilter, leadSearchFilter, locationSearchFilter, lotnumberedassemblyitemSearchFilter, manufacturingcosttemplateSearchFilter, manufacturingoperationtaskSearchFilter, manufacturingroutingSearchFilter, mapreducescriptSearchFilter, markupitemSearchFilter, massupdatescriptSearchFilter, merchandisehierarchylevelSearchFilter, merchandisehierarchynodeSearchFilter, merchandisehierarchyversionSearchFilter, messageSearchFilter, mfgplannedtimeSearchFilter, nexusSearchFilter, noninventoryitemSearchFilter, noteSearchFilter, opportunitySearchFilter, orderscheduleSearchFilter, originatingleadSearchFilter, otherchargeitemSearchFilter, othernameSearchFilter, partnerSearchFilter, partnercategorySearchFilter, paycheckSearchFilter, paycheckjournalSearchFilter, paymentitemSearchFilter, paymentmethodSearchFilter, payrollbatchSearchFilter, payrollitemSearchFilter, pctcompleteprojectrevenueruleSearchFilter, periodendjournalSearchFilter, phonecallSearchFilter, portletSearchFilter, pricebookSearchFilter, pricelevelSearchFilter, priceplanSearchFilter, pricingSearchFilter, pricinggroupSearchFilter, projectexpensetypeSearchFilter, projecttaskSearchFilter, projecttaskassignmentSearchFilter, projecttemplateSearchFilter, promotioncodeSearchFilter, prospectSearchFilter, purchasecontractSearchFilter, purchaserequisitionSearchFilter, reallocateitemSearchFilter, receiveinboundshipmentSearchFilter, resourceallocationSearchFilter, restletSearchFilter, returnauthorizationSearchFilter, revenuearrangementSearchFilter, revenuecommitmentSearchFilter, revenuecommitmentreversalSearchFilter, revenueplanSearchFilter, revrecscheduleSearchFilter, revrectemplateSearchFilter, salesorderSearchFilter, salesroleSearchFilter, salestaxitemSearchFilter, scheduledscriptSearchFilter, scheduledscriptinstanceSearchFilter, scriptdeploymentSearchFilter, serializedassemblyitemSearchFilter, serializedinventoryitemSearchFilter, serviceitemSearchFilter, shipitemSearchFilter, shoppingcartSearchFilter, solutionSearchFilter, statisticaljournalentrySearchFilter, storepickupfulfillmentSearchFilter, subscriptionSearchFilter, subscriptionchangeorderSearchFilter, subscriptionlineSearchFilter, subscriptionplanSearchFilter, subsidiarySearchFilter, subtotalitemSearchFilter, suiteletSearchFilter, supportcaseSearchFilter, taskSearchFilter, taxacctSearchFilter, taxdetailSearchFilter, taxgroupSearchFilter, taxperiodSearchFilter, taxtypeSearchFilter, termSearchFilter, timebillSearchFilter, timeentrySearchFilter, timesheetSearchFilter, topicSearchFilter, transactionSearchFilter, unitstypeSearchFilter, vendorSearchFilter, vendorbillSearchFilter, vendorcategorySearchFilter, vendorcreditSearchFilter, vendorpaymentSearchFilter, vendorreturnauthorizationSearchFilter, vendorsubsidiaryrelationshipSearchFilter } from './index';
/** Record Type - Field Search Filter names definitions. */
export interface TypedSearchFilterNames {
account: Required<accountSearchFilter>;
  accountingbook: Required<accountingbookSearchFilter>;
  accountingcontext: Required<accountingcontextSearchFilter>;
  accountingperiod: Required<accountingperiodSearchFilter>;
  accountingtransaction: Required<accountingtransactionSearchFilter>;
  activity: Required<activitySearchFilter>;
  address: Required<addressSearchFilter>;
  advintercompanyjournalentry: Required<advintercompanyjournalentrySearchFilter>;
  allocationschedule: Required<allocationscheduleSearchFilter>;
  amortizationschedule: Required<amortizationscheduleSearchFilter>;
  amortizationtemplate: Required<amortizationtemplateSearchFilter>;
  assemblybuild: Required<assemblybuildSearchFilter>;
  assemblyitem: Required<assemblyitemSearchFilter>;
  assemblyitembom: Required<assemblyitembomSearchFilter>;
  assemblyunbuild: Required<assemblyunbuildSearchFilter>;
  billingaccount: Required<billingaccountSearchFilter>;
  billingclass: Required<billingclassSearchFilter>;
  billingratecard: Required<billingratecardSearchFilter>;
  billingrevenueevent: Required<billingrevenueeventSearchFilter>;
  billingschedule: Required<billingscheduleSearchFilter>;
  bin: Required<binSearchFilter>;
  bintransfer: Required<bintransferSearchFilter>;
  binworksheet: Required<binworksheetSearchFilter>;
  blanketpurchaseorder: Required<blanketpurchaseorderSearchFilter>;
  bom: Required<bomSearchFilter>;
  bulkownershiptransfer: Required<bulkownershiptransferSearchFilter>;
  calendarevent: Required<calendareventSearchFilter>;
  campaign: Required<campaignSearchFilter>;
  campaignresponse: Required<campaignresponseSearchFilter>;
  campaigntemplate: Required<campaigntemplateSearchFilter>;
  cashrefund: Required<cashrefundSearchFilter>;
  cashsale: Required<cashsaleSearchFilter>;
  charge: Required<chargeSearchFilter>;
  chargerule: Required<chargeruleSearchFilter>;
  check: Required<checkSearchFilter>;
  classification: Required<classificationSearchFilter>;
  clientscript: Required<clientscriptSearchFilter>;
  cmscontent: Required<cmscontentSearchFilter>;
  cmscontenttype: Required<cmscontenttypeSearchFilter>;
  commercecategory: Required<commercecategorySearchFilter>;
  competitor: Required<competitorSearchFilter>;
  consolidatedexchangerate: Required<consolidatedexchangerateSearchFilter>;
  contact: Required<contactSearchFilter>;
  contactcategory: Required<contactcategorySearchFilter>;
  contactrole: Required<contactroleSearchFilter>;
  costcategory: Required<costcategorySearchFilter>;
  couponcode: Required<couponcodeSearchFilter>;
  creditcardcharge: Required<creditcardchargeSearchFilter>;
  creditcardrefund: Required<creditcardrefundSearchFilter>;
  creditmemo: Required<creditmemoSearchFilter>;
  currency: Required<currencySearchFilter>;
  customer: Required<customerSearchFilter>;
  customercategory: Required<customercategorySearchFilter>;
  customerdeposit: Required<customerdepositSearchFilter>;
  customermessage: Required<customermessageSearchFilter>;
  customerpayment: Required<customerpaymentSearchFilter>;
  customerpaymentauthorization: Required<customerpaymentauthorizationSearchFilter>;
  customerrefund: Required<customerrefundSearchFilter>;
  customerstatus: Required<customerstatusSearchFilter>;
  customersubsidiaryrelationship: Required<customersubsidiaryrelationshipSearchFilter>;
  customrecord: Required<customrecordSearchFilter>;
  deletedrecord: Required<deletedrecordSearchFilter>;
  department: Required<departmentSearchFilter>;
  deposit: Required<depositSearchFilter>;
  depositapplication: Required<depositapplicationSearchFilter>;
  descriptionitem: Required<descriptionitemSearchFilter>;
  discountitem: Required<discountitemSearchFilter>;
  emailtemplate: Required<emailtemplateSearchFilter>;
  employee: Required<employeeSearchFilter>;
  entity: Required<entitySearchFilter>;
  entityaccountmapping: Required<entityaccountmappingSearchFilter>;
  entitygroup: Required<entitygroupSearchFilter>;
  estimate: Required<estimateSearchFilter>;
  expensecategory: Required<expensecategorySearchFilter>;
  fairvalueprice: Required<fairvaluepriceSearchFilter>;
  file: Required<fileSearchFilter>;
  fixedamountprojectrevenuerule: Required<fixedamountprojectrevenueruleSearchFilter>;
  folder: Required<folderSearchFilter>;
  genericresource: Required<genericresourceSearchFilter>;
  giftcertificate: Required<giftcertificateSearchFilter>;
  giftcertificateitem: Required<giftcertificateitemSearchFilter>;
  globalaccountmapping: Required<globalaccountmappingSearchFilter>;
  inboundshipment: Required<inboundshipmentSearchFilter>;
  intercompallocationschedule: Required<intercompallocationscheduleSearchFilter>;
  intercompanyjournalentry: Required<intercompanyjournalentrySearchFilter>;
  intercompanytransferorder: Required<intercompanytransferorderSearchFilter>;
  inventoryadjustment: Required<inventoryadjustmentSearchFilter>;
  inventorycostrevaluation: Required<inventorycostrevaluationSearchFilter>;
  inventorycount: Required<inventorycountSearchFilter>;
  inventorydetail: Required<inventorydetailSearchFilter>;
  inventoryitem: Required<inventoryitemSearchFilter>;
  inventorynumber: Required<inventorynumberSearchFilter>;
  inventorynumberbin: Required<inventorynumberbinSearchFilter>;
  inventorystatus: Required<inventorystatusSearchFilter>;
  inventorystatuschange: Required<inventorystatuschangeSearchFilter>;
  inventorytransfer: Required<inventorytransferSearchFilter>;
  invoice: Required<invoiceSearchFilter>;
  issue: Required<issueSearchFilter>;
  issueproduct: Required<issueproductSearchFilter>;
  item: Required<itemSearchFilter>;
  itemaccountmapping: Required<itemaccountmappingSearchFilter>;
  itembinnumber: Required<itembinnumberSearchFilter>;
  itemdemandplan: Required<itemdemandplanSearchFilter>;
  itemfulfillment: Required<itemfulfillmentSearchFilter>;
  itemgroup: Required<itemgroupSearchFilter>;
  itemlocationconfiguration: Required<itemlocationconfigurationSearchFilter>;
  itemreceipt: Required<itemreceiptSearchFilter>;
  itemrevision: Required<itemrevisionSearchFilter>;
  job: Required<jobSearchFilter>;
  jobstatus: Required<jobstatusSearchFilter>;
  jobtype: Required<jobtypeSearchFilter>;
  kititem: Required<kititemSearchFilter>;
  laborbasedprojectrevenuerule: Required<laborbasedprojectrevenueruleSearchFilter>;
  landedcost: Required<landedcostSearchFilter>;
  lead: Required<leadSearchFilter>;
  location: Required<locationSearchFilter>;
  lotnumberedassemblyitem: Required<lotnumberedassemblyitemSearchFilter>;
  manufacturingcosttemplate: Required<manufacturingcosttemplateSearchFilter>;
  manufacturingoperationtask: Required<manufacturingoperationtaskSearchFilter>;
  manufacturingrouting: Required<manufacturingroutingSearchFilter>;
  mapreducescript: Required<mapreducescriptSearchFilter>;
  markupitem: Required<markupitemSearchFilter>;
  massupdatescript: Required<massupdatescriptSearchFilter>;
  merchandisehierarchylevel: Required<merchandisehierarchylevelSearchFilter>;
  merchandisehierarchynode: Required<merchandisehierarchynodeSearchFilter>;
  merchandisehierarchyversion: Required<merchandisehierarchyversionSearchFilter>;
  message: Required<messageSearchFilter>;
  mfgplannedtime: Required<mfgplannedtimeSearchFilter>;
  nexus: Required<nexusSearchFilter>;
  noninventoryitem: Required<noninventoryitemSearchFilter>;
  note: Required<noteSearchFilter>;
  opportunity: Required<opportunitySearchFilter>;
  orderschedule: Required<orderscheduleSearchFilter>;
  originatinglead: Required<originatingleadSearchFilter>;
  otherchargeitem: Required<otherchargeitemSearchFilter>;
  othername: Required<othernameSearchFilter>;
  partner: Required<partnerSearchFilter>;
  partnercategory: Required<partnercategorySearchFilter>;
  paycheck: Required<paycheckSearchFilter>;
  paycheckjournal: Required<paycheckjournalSearchFilter>;
  paymentitem: Required<paymentitemSearchFilter>;
  paymentmethod: Required<paymentmethodSearchFilter>;
  payrollbatch: Required<payrollbatchSearchFilter>;
  payrollitem: Required<payrollitemSearchFilter>;
  pctcompleteprojectrevenuerule: Required<pctcompleteprojectrevenueruleSearchFilter>;
  periodendjournal: Required<periodendjournalSearchFilter>;
  phonecall: Required<phonecallSearchFilter>;
  portlet: Required<portletSearchFilter>;
  pricebook: Required<pricebookSearchFilter>;
  pricelevel: Required<pricelevelSearchFilter>;
  priceplan: Required<priceplanSearchFilter>;
  pricing: Required<pricingSearchFilter>;
  pricinggroup: Required<pricinggroupSearchFilter>;
  projectexpensetype: Required<projectexpensetypeSearchFilter>;
  projecttask: Required<projecttaskSearchFilter>;
  projecttaskassignment: Required<projecttaskassignmentSearchFilter>;
  projecttemplate: Required<projecttemplateSearchFilter>;
  promotioncode: Required<promotioncodeSearchFilter>;
  prospect: Required<prospectSearchFilter>;
  purchasecontract: Required<purchasecontractSearchFilter>;
  purchaserequisition: Required<purchaserequisitionSearchFilter>;
  reallocateitem: Required<reallocateitemSearchFilter>;
  receiveinboundshipment: Required<receiveinboundshipmentSearchFilter>;
  resourceallocation: Required<resourceallocationSearchFilter>;
  restlet: Required<restletSearchFilter>;
  returnauthorization: Required<returnauthorizationSearchFilter>;
  revenuearrangement: Required<revenuearrangementSearchFilter>;
  revenuecommitment: Required<revenuecommitmentSearchFilter>;
  revenuecommitmentreversal: Required<revenuecommitmentreversalSearchFilter>;
  revenueplan: Required<revenueplanSearchFilter>;
  revrecschedule: Required<revrecscheduleSearchFilter>;
  revrectemplate: Required<revrectemplateSearchFilter>;
  salesorder: Required<salesorderSearchFilter>;
  salesrole: Required<salesroleSearchFilter>;
  salestaxitem: Required<salestaxitemSearchFilter>;
  scheduledscript: Required<scheduledscriptSearchFilter>;
  scheduledscriptinstance: Required<scheduledscriptinstanceSearchFilter>;
  scriptdeployment: Required<scriptdeploymentSearchFilter>;
  serializedassemblyitem: Required<serializedassemblyitemSearchFilter>;
  serializedinventoryitem: Required<serializedinventoryitemSearchFilter>;
  serviceitem: Required<serviceitemSearchFilter>;
  shipitem: Required<shipitemSearchFilter>;
  shoppingcart: Required<shoppingcartSearchFilter>;
  solution: Required<solutionSearchFilter>;
  statisticaljournalentry: Required<statisticaljournalentrySearchFilter>;
  storepickupfulfillment: Required<storepickupfulfillmentSearchFilter>;
  subscription: Required<subscriptionSearchFilter>;
  subscriptionchangeorder: Required<subscriptionchangeorderSearchFilter>;
  subscriptionline: Required<subscriptionlineSearchFilter>;
  subscriptionplan: Required<subscriptionplanSearchFilter>;
  subsidiary: Required<subsidiarySearchFilter>;
  subtotalitem: Required<subtotalitemSearchFilter>;
  suitelet: Required<suiteletSearchFilter>;
  supportcase: Required<supportcaseSearchFilter>;
  task: Required<taskSearchFilter>;
  taxacct: Required<taxacctSearchFilter>;
  taxdetail: Required<taxdetailSearchFilter>;
  taxgroup: Required<taxgroupSearchFilter>;
  taxperiod: Required<taxperiodSearchFilter>;
  taxtype: Required<taxtypeSearchFilter>;
  term: Required<termSearchFilter>;
  timebill: Required<timebillSearchFilter>;
  timeentry: Required<timeentrySearchFilter>;
  timesheet: Required<timesheetSearchFilter>;
  topic: Required<topicSearchFilter>;
  transaction: Required<transactionSearchFilter>;
  unitstype: Required<unitstypeSearchFilter>;
  vendor: Required<vendorSearchFilter>;
  vendorbill: Required<vendorbillSearchFilter>;
  vendorcategory: Required<vendorcategorySearchFilter>;
  vendorcredit: Required<vendorcreditSearchFilter>;
  vendorpayment: Required<vendorpaymentSearchFilter>;
  vendorreturnauthorization: Required<vendorreturnauthorizationSearchFilter>;
  vendorsubsidiaryrelationship: Required<vendorsubsidiaryrelationshipSearchFilter>;
}