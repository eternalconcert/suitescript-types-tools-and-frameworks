// This file is automatically generated - don't edit it. 
// Search Types for record Contact (contact)

// Search Columns

/** Contact (contact) Search Columns definition */
export interface contactSearchColumn {
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
  /** Alt. Email (altemail: email) */
      altemail?: string;
  /** Name (altname: text) */
      altname?: string;
  /** Office Phone (altphone: phone) */
      altphone?: string;
  /** Assistant (assistant: select) */
      assistant?: string;
  /** Assist. Phone (assistantphone: phone) */
      assistantphone?: string;
  /** Attention (attention: text) */
      attention?: string;
  /** Always Available Offline (availableoffline: checkbox) */
      availableoffline?: boolean;
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
  /** Company (company: select) */
      company?: string;
  /** Role (contactrole: select) */
      contactrole?: string;
  /** Country (country: select) */
      country?: string;
  /** Country Code (countrycode: text) */
      countrycode?: string;
  /** Date Created (datecreated: datetime) */
      datecreated?: string;
  /** Email (email: email) */
      email?: string;
  /** Name (entityid: text) */
      entityid?: string;
  /** Number (entitynumber: integer) */
      entitynumber?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Fax (fax: text) */
      fax?: string;
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
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Default Billing Address (isdefaultbilling: checkbox) */
      isdefaultbilling?: boolean;
  /** Default Shipping Address (isdefaultshipping: checkbox) */
      isdefaultshipping?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
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
  /** Online Form History - Date (onlineformdate: text) */
      onlineformdate?: string;
  /** Online Form History - Lead Source (onlineformleadsource: text) */
      onlineformleadsource?: string;
  /** Online Form History - Form Name (onlineformname: text) */
      onlineformname?: string;
  /** Owner (owner: select) */
      owner?: string;
  /** Permission (permission: select) */
      permission?: string;
  /** Phone (phone: phone) */
      phone?: string;
  /** Phonetic Name (phoneticname: text) */
      phoneticname?: string;
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
  /** Supervisor (supervisor: select) */
      supervisor?: string;
  /** Sup. Phone (supervisorphone: phone) */
      supervisorphone?: string;
  /** Job Title (title: text) */
      title?: string;
  /** Type (type: select) */
      type?: string;
  /** Zip Code (zipcode: text) */
      zipcode?: string;
}


// Search Filters

/** Contact (contact) Search Filters definition */
export interface contactSearchFilter {
/** Address (address: textarea) */
  address?: string;
  /** Addressee (addressee: text) */
  addressee?: string;
  /** Address Label (addresslabel: text) */
  addresslabel?: string;
  /** Address Phone (addressphone: phone) */
  addressphone?: string;
  /** Assistant (assistant: select) */
  assistant?: string;
  /** Assist. Phone (assistantphone: phone) */
  assistantphone?: string;
  /** Attention (attention: text) */
  attention?: string;
  /** Always Available Offline (availableoffline: checkbox) */
  availableoffline?: boolean;
  /** Category (category: select) */
  category?: string;
  /** City (city: text) */
  city?: string;
  /** Comments (comments: textarea) */
  comments?: string;
  /** Company (company: select) */
  company?: string;
  /** Role (contactrole: select) */
  contactrole?: string;
  /** Country (country: select) */
  country?: string;
  /** County/State (county: text) */
  county?: string;
  /** Date Created (datecreated: datetime) */
  datecreated?: string;
  /** Email (email: text) */
  email?: string;
  /** Employer (employer: text) */
  employer?: string;
  /** Name/ID (entityid: text) */
  entityid?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Fax (fax: phone) */
  fax?: string;
  /** First Name (firstname: text) */
  firstname?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
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
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Default Billing Address (isdefaultbilling: checkbox) */
  isdefaultbilling?: boolean;
  /** Default Shipping Address (isdefaultshipping: checkbox) */
  isdefaultshipping?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Is Private (isprivate: checkbox) */
  isprivate?: boolean;
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
  /** Online Form History - Form Date (onlineformdate: date) */
  onlineformdate?: string;
  /** Online Form History - Lead Source (onlineformleadsource: select) */
  onlineformleadsource?: string;
  /** Online Form History - Form Name (onlineformname: select) */
  onlineformname?: string;
  /** Owner (owner: select) */
  owner?: string;
  /** Permission (permission: select) */
  permission?: string;
  /** Phone (phone: phone) */
  phone?: string;
  /** Phonetic Name (phoneticname: text) */
  phoneticname?: string;
  /** Represents Subsidiary (representingsubsidiary: select) */
  representingsubsidiary?: string;
  /** Mr./Mrs... (salutation: text) */
  salutation?: string;
  /** State/Province (state: select) */
  state?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Supervisor (supervisor: select) */
  supervisor?: string;
  /** Sup. Phone (supervisorphone: phone) */
  supervisorphone?: string;
  /** Job Title (title: text) */
  title?: string;
  /** Entity Type (type: select) */
  type?: string;
  /** Zip (zipcode: text) */
  zipcode?: string;
}


// Search Joins

/** Contact (contact) Search Joins definitions. */
export interface contactSearchJoinTypes {
/** contact's campaignresponse search filter. Campaign Response. Actual name: Campaign. */
  campaignresponse: 'campaignresponse';
  /** contact's customer search filter. Customer. Actual name: Customer. */
  customer: 'customer';
  /** contact's customerprimary search filter. Customer (Primary). Actual name: Customer. */
  customerprimary: 'customerprimary';
  /** contact's job search filter. Job. Actual name: Job. */
  job: 'job';
  /** contact's jobprimary search filter. Job (Primary). Actual name: Job. */
  jobprimary: 'jobprimary';
  /** contact's messages search filter. Messages. Actual name: Message. */
  messages: 'messages';
  /** contact's messagesfrom search filter. Messages From. Actual name: Message. */
  messagesfrom: 'messagesfrom';
  /** contact's messagesto search filter. Messages To. Actual name: Message. */
  messagesto: 'messagesto';
  /** contact's parentcustomer search filter. Parent Customer. Actual name: Customer. */
  parentcustomer: 'parentcustomer';
  /** contact's parentjob search filter. Parent Job. Actual name: Job. */
  parentjob: 'parentjob';
  /** contact's parentpartner search filter. Parent Partner. Actual name: Partner. */
  parentpartner: 'parentpartner';
  /** contact's parentvendor search filter. Parent Vendor. Actual name: Vendor. */
  parentvendor: 'parentvendor';
  /** contact's partner search filter. Partner. Actual name: Partner. */
  partner: 'partner';
  /** contact's partnerprimary search filter. Partner (Primary). Actual name: Partner. */
  partnerprimary: 'partnerprimary';
  /** contact's task search filter. Task. Actual name: Task. */
  task: 'task';
  /** contact's vendor search filter. Vendor. Actual name: Vendor. */
  vendor: 'vendor';
  /** contact's vendorprimary search filter. Vendor (Primary). Actual name: Vendor. */
  vendorprimary: 'vendorprimary';
}


// Search Filter Types

/** Contact (contact) Search Filter Type definitions. */
export interface contactSearchFilterTypes {
address: 'textarea';
  addressee: 'text';
  addresslabel: 'text';
  addressphone: 'phone';
  assistant: 'select';
  assistantphone: 'phone';
  attention: 'text';
  availableoffline: 'checkbox';
  category: 'select';
  city: 'text';
  comments: 'textarea';
  company: 'select';
  contactrole: 'select';
  country: 'select';
  county: 'text';
  datecreated: 'datetime';
  email: 'text';
  employer: 'text';
  entityid: 'text';
  externalid: 'select';
  externalidstring: 'text';
  fax: 'phone';
  firstname: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  giveaccess: 'checkbox';
  globalsubscriptionstatus: 'select';
  group: 'multiselect';
  hasduplicates: 'checkbox';
  image: 'image';
  internalid: 'select';
  internalidnumber: 'integer';
  isdefaultbilling: 'checkbox';
  isdefaultshipping: 'checkbox';
  isinactive: 'checkbox';
  isprivate: 'checkbox';
  language: 'select';
  lastmodifieddate: 'datetime';
  lastname: 'text';
  level: 'select';
  middlename: 'text';
  onlineformdate: 'date';
  onlineformleadsource: 'select';
  onlineformname: 'select';
  owner: 'select';
  permission: 'select';
  phone: 'phone';
  phoneticname: 'text';
  representingsubsidiary: 'select';
  salutation: 'text';
  state: 'select';
  subsidiary: 'select';
  supervisor: 'select';
  supervisorphone: 'phone';
  title: 'text';
  type: 'select';
  zipcode: 'text';
}


// Search Column Types

/** Contact (contact) Search Column Type definitions. */
export interface contactSearchColumnTypes {
address: 'text';
  addressee: 'text';
  addressinternalid: 'text';
  addresslabel: 'text';
  addressphone: 'text';
  altemail: 'email';
  altname: 'text';
  altphone: 'phone';
  assistant: 'select';
  assistantphone: 'phone';
  attention: 'text';
  availableoffline: 'checkbox';
  billcountrycode: 'text';
  billzipcode: 'text';
  category: 'select';
  city: 'text';
  comments: 'text';
  company: 'select';
  contactrole: 'select';
  country: 'select';
  countrycode: 'text';
  datecreated: 'datetime';
  email: 'email';
  entityid: 'text';
  entitynumber: 'integer';
  externalid: 'select';
  fax: 'text';
  firstname: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  giveaccess: 'checkbox';
  globalsubscriptionstatus: 'select';
  hasduplicates: 'checkbox';
  homephone: 'phone';
  image: 'select';
  internalid: 'select';
  isdefaultbilling: 'checkbox';
  isdefaultshipping: 'checkbox';
  isinactive: 'checkbox';
  language: 'select';
  lastmodifieddate: 'datetime';
  lastname: 'text';
  lastviewed: 'datetime';
  level: 'select';
  middlename: 'text';
  mobilephone: 'phone';
  onlineformdate: 'text';
  onlineformleadsource: 'text';
  onlineformname: 'text';
  owner: 'select';
  permission: 'select';
  phone: 'phone';
  phoneticname: 'text';
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
  supervisor: 'select';
  supervisorphone: 'phone';
  title: 'text';
  type: 'select';
  zipcode: 'text';
}