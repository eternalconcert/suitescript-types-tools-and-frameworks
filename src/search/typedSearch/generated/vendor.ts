// This file is automatically generated - don't edit it. 
// Search Types for record Vendor (vendor)

// Search Columns

/** Vendor (vendor) Search Columns definition */
export interface vendorSearchColumn {
  /** Account (accountnumber: text) */
      accountnumber?: string;
  /** Address (address: text) */
      address?: string;
  /** Addressee (addressee: text) */
      addressee?: string;
  /** Address Internal ID (addressinternalid: text) */
      addressinternalid?: string;
  /** Address Label (addresslabel: text) */
      addresslabel?: string;
  /** Address Phone (addressphone: text) */
      addressphone?: string;
  /** Alt. Contact (altcontact: text) */
      altcontact?: string;
  /** Alt. Email (altemail: email) */
      altemail?: string;
  /** Name (altname: text) */
      altname?: string;
  /** Office Phone (altphone: phone) */
      altphone?: string;
  /** Attention (attention: text) */
      attention?: string;
  /** Balance (balance: currency) */
      balance?: string;
  /** Billing Country Code (billcountrycode: text) */
      billcountrycode?: string;
  /** Billing Zip (billzipcode: text) */
      billzipcode?: string;
  /** Category (category: select) */
      category?: string;
  /** City (city: text) */
      city?: string;
  /** Comments (comments: text) */
      comments?: string;
  /** Company Name (companyname: text) */
      companyname?: string;
  /** Primary Contact (contact: select) */
      contact?: string;
  /** Country (country: select) */
      country?: string;
  /** Country Code (countrycode: text) */
      countrycode?: string;
  /** Credit Limit (creditlimit: currency) */
      creditlimit?: string;
  /** Currency (currency: select) */
      currency?: string;
  /** Current Currency Exchange Rate (currentexchangerate: float) */
      currentexchangerate?: string;
  /** Date Created (datecreated: datetime) */
      datecreated?: string;
  /** Eligible for Commission (eligibleforcommission: checkbox) */
      eligibleforcommission?: boolean;
  /** Email (email: email) */
      email?: string;
  /** Email Preference (emailpreference: select) */
      emailpreference?: string;
  /** Email Transactions (emailtransactions: checkbox) */
      emailtransactions?: boolean;
  /** Name (entityid: text) */
      entityid?: string;
  /** Number (entitynumber: integer) */
      entitynumber?: string;
  /** Default Expense Account (expenseaccount: select) */
      expenseaccount?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Fax (fax: text) */
      fax?: string;
  /** Fax Transactions (faxtransactions: checkbox) */
      faxtransactions?: boolean;
  /** First Name (firstname: text) */
      firstname?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: string;
  /** Formula (Date) (formuladate: date) */
      formuladate?: string;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: string;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: string;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: string;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** Balance (Foreign Currency) (fxbalance: currency) */
      fxbalance?: string;
  /** Unbilled Orders (Foreign Currency) (fxunbilledorders: currency) */
      fxunbilledorders?: string;
  /** Login Access (giveaccess: checkbox) */
      giveaccess?: boolean;
  /** Global Subscription Status (globalsubscriptionstatus: select) */
      globalsubscriptionstatus?: string;
  /** Duplicate (hasduplicates: checkbox) */
      hasduplicates?: boolean;
  /** Home Phone (homephone: phone) */
      homephone?: string;
  /** Image (image: select) */
      image?: string;
  /** Incoterm (incoterm: select) */
      incoterm?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** 1099 Eligible (is1099eligible: checkbox) */
      is1099eligible?: boolean;
  /** Default Billing Address (isdefaultbilling: checkbox) */
      isdefaultbilling?: boolean;
  /** Default Shipping Address (isdefaultshipping: checkbox) */
      isdefaultshipping?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Job Resource (isjobresourcevend: checkbox) */
      isjobresourcevend?: boolean;
  /** Is Individual (isperson: checkbox) */
      isperson?: boolean;
  /** Labor Cost (laborcost: currency) */
      laborcost?: string;
  /** Language (language: select) */
      language?: string;
  /** Last Modified (lastmodifieddate: datetime) */
      lastmodifieddate?: string;
  /** Last Name (lastname: text) */
      lastname?: string;
  /** Last Viewed (lastviewed: datetime) */
      lastviewed?: string;
  /** Level (level: select) */
      level?: string;
  /** Middle Name (middlename: text) */
      middlename?: string;
  /** Mobile Phone (mobilephone: phone) */
      mobilephone?: string;
  /** Default Payables Account (payablesaccount: select) */
      payablesaccount?: string;
  /** PEC (pec: text) */
      pec?: string;
  /** Permission (permission: select) */
      permission?: string;
  /** Phone (phone: phone) */
      phone?: string;
  /** Phonetic Name (phoneticname: text) */
      phoneticname?: string;
  /** Print As (printoncheckas: text) */
      printoncheckas?: string;
  /** Print Transactions (printtransactions: checkbox) */
      printtransactions?: boolean;
  /** Vendor Bill - Purchase Order Amount Tolerance (purchaseorderamount: float) */
      purchaseorderamount?: string;
  /** Vendor Bill - Purchase Order Quantity Tolerance (purchaseorderquantity: float) */
      purchaseorderquantity?: string;
  /** Vendor Bill - Purchase Order Quantity Difference (purchaseorderquantitydiff: float) */
      purchaseorderquantitydiff?: string;
  /** Vendor Bill - Item Receipt Amount Tolerance (receiptamount: float) */
      receiptamount?: string;
  /** Vendor Bill - Item Receipt Quantity Tolerance (receiptquantity: float) */
      receiptquantity?: string;
  /** Vendor Bill - Item Receipt Quantity Difference (receiptquantitydiff: float) */
      receiptquantitydiff?: string;
  /** Represents Subsidiary (representingsubsidiary: select) */
      representingsubsidiary?: string;
  /** Mr./Mrs... (salutation: text) */
      salutation?: string;
  /** Shipping Country Code (shipcountrycode: text) */
      shipcountrycode?: string;
  /** State/Province (state: select) */
      state?: string;
  /** State/Province Display Name (statedisplayname: select) */
      statedisplayname?: string;
  /** Subscription (subscription: select) */
      subscription?: string;
  /** Subscription Date (subscriptiondate: datetime) */
      subscriptiondate?: string;
  /** Subscription Status (subscriptionstatus: checkbox) */
      subscriptionstatus?: boolean;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Subsidiary (no hierarchy) (subsidiarynohierarchy: select) */
      subsidiarynohierarchy?: string;
  /** Tax ID (taxidnum: text) */
      taxidnum?: string;
  /** Terms (terms: select) */
      terms?: string;
  /** Job Title (title: text) */
      title?: string;
  /** Type (type: select) */
      type?: string;
  /** Unbilled Orders (unbilledorders: currency) */
      unbilledorders?: string;
  /** Web Address (url: text) */
      url?: string;
  /** Tax Number (vatregnumber: text) */
      vatregnumber?: string;
  /** Work Calendar (workcalendar: select) */
      workcalendar?: string;
  /** Zip Code (zipcode: text) */
      zipcode?: string;
}


// Search Filters

/** Vendor (vendor) Search Filters definition */
export interface vendorSearchFilter {
/** Account (accountnumber: text) */
  accountnumber?: string;
  /** Address (address: textarea) */
  address?: string;
  /** Addressee (addressee: text) */
  addressee?: string;
  /** Address Label (addresslabel: text) */
  addresslabel?: string;
  /** Address Phone (addressphone: phone) */
  addressphone?: string;
  /** Attention (attention: text) */
  attention?: string;
  /** Balance (balance: currency) */
  balance?: string;
  /** Category (category: select) */
  category?: string;
  /** City (city: text) */
  city?: string;
  /** Comments (comments: textarea) */
  comments?: string;
  /** Contact (contact: text) */
  contact?: string;
  /** Country (country: select) */
  country?: string;
  /** County/State (county: text) */
  county?: string;
  /** Credit Limit (creditlimit: currency) */
  creditlimit?: string;
  /** Currency (currency: select) */
  currency?: string;
  /** Current Currency Exchange Rate (currentexchangerate: currency) */
  currentexchangerate?: string;
  /** Date Created (datecreated: datetime) */
  datecreated?: string;
  /** Eligible For Commission (eligibleforcommission: checkbox) */
  eligibleforcommission?: boolean;
  /** Email (email: text) */
  email?: string;
  /** Email Preference (emailpreference: select) */
  emailpreference?: string;
  /** Email Transactions (emailtransactions: checkbox) */
  emailtransactions?: boolean;
  /** Name/ID (entityid: text) */
  entityid?: string;
  /** Default Expense Account (expenseaccount: select) */
  expenseaccount?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Fax (fax: phone) */
  fax?: string;
  /** Fax Transactions (faxtransactions: checkbox) */
  faxtransactions?: boolean;
  /** First Name (firstname: text) */
  firstname?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Balance (Foreign Currency) (fxbalance: currency) */
  fxbalance?: string;
  /** Unbilled Orders (Foreign Currency) (fxunbilledorders: currency) */
  fxunbilledorders?: string;
  /** Login Access (giveaccess: checkbox) */
  giveaccess?: boolean;
  /** Global Subscription Status (globalsubscriptionstatus: select) */
  globalsubscriptionstatus?: string;
  /** Group (group: multiselect) */
  group?: string;
  /** Duplicate (hasduplicates: checkbox) */
  hasduplicates?: boolean;
  /** Image (image: image) */
  image?: string;
  /** Incoterm (incoterm: select) */
  incoterm?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** 1099 Eligible (is1099eligible: checkbox) */
  is1099eligible?: boolean;
  /** Default Billing Address (isdefaultbilling: checkbox) */
  isdefaultbilling?: boolean;
  /** Default Shipping Address (isdefaultshipping: checkbox) */
  isdefaultshipping?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Is Job Resource (isjobresourcevend: checkbox) */
  isjobresourcevend?: boolean;
  /** Is Individual (isperson: checkbox) */
  isperson?: boolean;
  /** Labor Cost (laborcost: currency) */
  laborcost?: string;
  /** Language (language: select) */
  language?: string;
  /** Last Modified (lastmodifieddate: datetime) */
  lastmodifieddate?: string;
  /** Last Name (lastname: text) */
  lastname?: string;
  /** Level (level: select) */
  level?: string;
  /** Middle Name (middlename: text) */
  middlename?: string;
  /** Other Relationships (otherrelationships: multiselect) */
  otherrelationships?: string;
  /** Default Payables Account (payablesaccount: select) */
  payablesaccount?: string;
  /** PEC (pec: text) */
  pec?: string;
  /** Permission (permission: select) */
  permission?: string;
  /** Phone (phone: phone) */
  phone?: string;
  /** Phonetic Name (phoneticname: text) */
  phoneticname?: string;
  /** Print Transactions (printtransactions: checkbox) */
  printtransactions?: boolean;
  /** Vendor Bill - Purchase Order Amount Tolerance (purchaseorderamount: float) */
  purchaseorderamount?: string;
  /** Vendor Bill - Purchase Order Quantity Tolerance (purchaseorderquantity: float) */
  purchaseorderquantity?: string;
  /** Vendor Bill - Purchase Order Quantity Difference (purchaseorderquantitydiff: float) */
  purchaseorderquantitydiff?: string;
  /** Vendor Bill - Item Receipt Amount Tolerance (receiptamount: float) */
  receiptamount?: string;
  /** Vendor Bill - Item Receipt Quantity Tolerance (receiptquantity: float) */
  receiptquantity?: string;
  /** Vendor Bill - Item Receipt Quantity Difference (receiptquantitydiff: float) */
  receiptquantitydiff?: string;
  /** Represents Subsidiary (representingsubsidiary: select) */
  representingsubsidiary?: string;
  /** Mr./Mrs... (salutation: text) */
  salutation?: string;
  /** State/Province (state: select) */
  state?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Tax ID (taxidnum: text) */
  taxidnum?: string;
  /** Job Title (title: text) */
  title?: string;
  /** Entity Type (type: select) */
  type?: string;
  /** Unbilled Orders (unbilledorders: currency) */
  unbilledorders?: string;
  /** Web Address (url: url) */
  url?: string;
  /** Tax Number (vatregnumber: text) */
  vatregnumber?: string;
  /** Work Calendar (workcalendar: select) */
  workcalendar?: string;
  /** Zip (zipcode: text) */
  zipcode?: string;
}


// Search Joins

/** Vendor (vendor) Search Joins definitions. */
export interface vendorSearchJoinTypes {
/** vendor's account search filter. Payable Account. Actual name: Account. */
  account: 'account';
  /** vendor's campaignresponse search filter. Campaign Response. Actual name: Campaign. */
  campaignresponse: 'campaignresponse';
  /** vendor's contact search filter. Contact. Actual name: Contact. */
  contact: 'contact';
  /** vendor's contactprimary search filter. Contact (Primary). Actual name: Contact. */
  contactprimary: 'contactprimary';
  /** vendor's expaccount search filter. Expense Account. Actual name: Account. */
  expaccount: 'expaccount';
  /** vendor's messages search filter. Messages. Actual name: Message. */
  messages: 'messages';
  /** vendor's messagesfrom search filter. Messages From. Actual name: Message. */
  messagesfrom: 'messagesfrom';
  /** vendor's messagesto search filter. Messages To. Actual name: Message. */
  messagesto: 'messagesto';
  /** vendor's msesubsidiary search filter. Subsidiary. Actual name: Subsidiary. */
  msesubsidiary: 'msesubsidiary';
}


// Search Filter Types

/** Vendor (vendor) Search Filter Type definitions. */
export interface vendorSearchFilterTypes {
accountnumber: 'text';
  address: 'textarea';
  addressee: 'text';
  addresslabel: 'text';
  addressphone: 'phone';
  attention: 'text';
  balance: 'currency';
  category: 'select';
  city: 'text';
  comments: 'textarea';
  contact: 'text';
  country: 'select';
  county: 'text';
  creditlimit: 'currency';
  currency: 'select';
  currentexchangerate: 'currency';
  datecreated: 'datetime';
  eligibleforcommission: 'checkbox';
  email: 'text';
  emailpreference: 'select';
  emailtransactions: 'checkbox';
  entityid: 'text';
  expenseaccount: 'select';
  externalid: 'select';
  externalidstring: 'text';
  fax: 'phone';
  faxtransactions: 'checkbox';
  firstname: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  fxbalance: 'currency';
  fxunbilledorders: 'currency';
  giveaccess: 'checkbox';
  globalsubscriptionstatus: 'select';
  group: 'multiselect';
  hasduplicates: 'checkbox';
  image: 'image';
  incoterm: 'select';
  internalid: 'select';
  internalidnumber: 'integer';
  is1099eligible: 'checkbox';
  isdefaultbilling: 'checkbox';
  isdefaultshipping: 'checkbox';
  isinactive: 'checkbox';
  isjobresourcevend: 'checkbox';
  isperson: 'checkbox';
  laborcost: 'currency';
  language: 'select';
  lastmodifieddate: 'datetime';
  lastname: 'text';
  level: 'select';
  middlename: 'text';
  otherrelationships: 'multiselect';
  payablesaccount: 'select';
  pec: 'text';
  permission: 'select';
  phone: 'phone';
  phoneticname: 'text';
  printtransactions: 'checkbox';
  purchaseorderamount: 'float';
  purchaseorderquantity: 'float';
  purchaseorderquantitydiff: 'float';
  receiptamount: 'float';
  receiptquantity: 'float';
  receiptquantitydiff: 'float';
  representingsubsidiary: 'select';
  salutation: 'text';
  state: 'select';
  subsidiary: 'select';
  taxidnum: 'text';
  title: 'text';
  type: 'select';
  unbilledorders: 'currency';
  url: 'url';
  vatregnumber: 'text';
  workcalendar: 'select';
  zipcode: 'text';
}


// Search Column Types

/** Vendor (vendor) Search Column Type definitions. */
export interface vendorSearchColumnTypes {
accountnumber: 'text';
  address: 'text';
  addressee: 'text';
  addressinternalid: 'text';
  addresslabel: 'text';
  addressphone: 'text';
  altcontact: 'text';
  altemail: 'email';
  altname: 'text';
  altphone: 'phone';
  attention: 'text';
  balance: 'currency';
  billcountrycode: 'text';
  billzipcode: 'text';
  category: 'select';
  city: 'text';
  comments: 'text';
  companyname: 'text';
  contact: 'select';
  country: 'select';
  countrycode: 'text';
  creditlimit: 'currency';
  currency: 'select';
  currentexchangerate: 'float';
  datecreated: 'datetime';
  eligibleforcommission: 'checkbox';
  email: 'email';
  emailpreference: 'select';
  emailtransactions: 'checkbox';
  entityid: 'text';
  entitynumber: 'integer';
  expenseaccount: 'select';
  externalid: 'select';
  fax: 'text';
  faxtransactions: 'checkbox';
  firstname: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  fxbalance: 'currency';
  fxunbilledorders: 'currency';
  giveaccess: 'checkbox';
  globalsubscriptionstatus: 'select';
  hasduplicates: 'checkbox';
  homephone: 'phone';
  image: 'select';
  incoterm: 'select';
  internalid: 'select';
  is1099eligible: 'checkbox';
  isdefaultbilling: 'checkbox';
  isdefaultshipping: 'checkbox';
  isinactive: 'checkbox';
  isjobresourcevend: 'checkbox';
  isperson: 'checkbox';
  laborcost: 'currency';
  language: 'select';
  lastmodifieddate: 'datetime';
  lastname: 'text';
  lastviewed: 'datetime';
  level: 'select';
  middlename: 'text';
  mobilephone: 'phone';
  payablesaccount: 'select';
  pec: 'text';
  permission: 'select';
  phone: 'phone';
  phoneticname: 'text';
  printoncheckas: 'text';
  printtransactions: 'checkbox';
  purchaseorderamount: 'float';
  purchaseorderquantity: 'float';
  purchaseorderquantitydiff: 'float';
  receiptamount: 'float';
  receiptquantity: 'float';
  receiptquantitydiff: 'float';
  representingsubsidiary: 'select';
  salutation: 'text';
  shipcountrycode: 'text';
  state: 'select';
  statedisplayname: 'select';
  subscription: 'select';
  subscriptiondate: 'datetime';
  subscriptionstatus: 'checkbox';
  subsidiary: 'select';
  subsidiarynohierarchy: 'select';
  taxidnum: 'text';
  terms: 'select';
  title: 'text';
  type: 'select';
  unbilledorders: 'currency';
  url: 'text';
  vatregnumber: 'text';
  workcalendar: 'select';
  zipcode: 'text';
}