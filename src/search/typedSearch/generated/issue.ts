// This file is automatically generated - don't edit it. 
// Search Types for record Issue (issue)

// Search Columns

/** Issue (issue) Search Columns definition */
export interface issueSearchColumn {
  /** Age in Months (ageinmonths: integer) */
      ageinmonths?: string;
  /** Assigned To (assigned: select) */
      assigned?: string;
  /** Broken In Build (buildbroken: select) */
      buildbroken?: string;
  /** Fixed In Build (buildfixed: select) */
      buildfixed?: string;
  /** Target Build (buildtarget: select) */
      buildtarget?: string;
  /** Case Count (casecount: integer) */
      casecount?: string;
  /** Case Number (casenumber: text) */
      casenumber?: string;
  /** Date Closed (closeddate: datetime) */
      closeddate?: string;
  /** Date Created (createddate: datetime) */
      createddate?: string;
  /** Date Released (datereleased: date) */
      datereleased?: string;
  /** Duplicate Of (duplicateof: select) */
      duplicateof?: string;
  /** Employee/Team (employeeorteam: select) */
      employeeorteam?: string;
  /** Base Status (eventstatus: select) */
      eventstatus?: string;
  /** External Abstract (externalabstract: text) */
      externalabstract?: string;
  /** External Details (externaldetails: text) */
      externaldetails?: string;
  /** Fixed In Version (External) (externalfixedin: text) */
      externalfixedin?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** External Status (externalstatus: select) */
      externalstatus?: string;
  /** Date Fixed (fixed: datetime) */
      fixed?: string;
  /** Fixed By (fixedby: select) */
      fixedby?: string;
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
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** I Own This Issue (isowner: checkbox) */
      isowner?: boolean;
  /** Reviewed (isreviewed: checkbox) */
      isreviewed?: boolean;
  /** Showstopper (isshowstopper: select) */
      isshowstopper?: string;
  /** Abstract (issueabstract: text) */
      issueabstract?: string;
  /** Status (issuestatus: select) */
      issuestatus?: string;
  /** Item (item: select) */
      item?: string;
  /** Last Modified (lastmodifieddate: datetime) */
      lastmodifieddate?: string;
  /** Last Viewed (lastviewed: datetime) */
      lastviewed?: string;
  /** Module (module: text) */
      module?: string;
  /** Number (number: text) */
      number?: string;
  /** Last Version Fixed (pre-11) (originalfixedin: text) */
      originalfixedin?: string;
  /** Priority (priority: select) */
      priority?: string;
  /** Product (product: select) */
      product?: string;
  /** Product Team (productteam: select) */
      productteam?: string;
  /** Reported By (reportedby: select) */
      reportedby?: string;
  /** Reproduced (reproduce: select) */
      reproduce?: string;
  /** Date Resolved (resolved: datetime) */
      resolved?: string;
  /** Resolved By (resolvedby: select) */
      resolvedby?: string;
  /** Reviewed By (reviewer: select) */
      reviewer?: string;
  /** Severity (severity: select) */
      severity?: string;
  /** Source (source: select) */
      source?: string;
  /** Tags (tags: multiselect) */
      tags?: string;
  /** Type (type: text) */
      type?: string;
  /** User Type (usertype: select) */
      usertype?: string;
  /** Broken In Version (versionbroken: select) */
      versionbroken?: string;
  /** Fixed In Version (versionfixed: select) */
      versionfixed?: string;
  /** Target Version (versiontarget: select) */
      versiontarget?: string;
}


// Search Filters

/** Issue (issue) Search Filters definition */
export interface issueSearchFilter {
/** Age in Months (ageinmonths: integer) */
  ageinmonths?: string;
  /** Assigned To (assigned: select) */
  assigned?: string;
  /** Broken In Build (buildbroken: select) */
  buildbroken?: string;
  /** Broken In Build (Name) (buildbrokenname: text) */
  buildbrokenname?: string;
  /** Fixed In Build (buildfixed: select) */
  buildfixed?: string;
  /** Fixed In Build (Name) (buildfixedname: text) */
  buildfixedname?: string;
  /** Target Build (buildtarget: select) */
  buildtarget?: string;
  /** Target Build (Name) (buildtargetname: text) */
  buildtargetname?: string;
  /** Case Count (casecount: integer) */
  casecount?: string;
  /** Case Number (casenumber: text) */
  casenumber?: string;
  /** Date Closed (closeddate: datetime) */
  closeddate?: string;
  /** Date Created (createddate: datetime) */
  createddate?: string;
  /** Date Released (datereleased: date) */
  datereleased?: string;
  /** Details (details: text) */
  details?: string;
  /** Duplicate Of (duplicateof: select) */
  duplicateof?: string;
  /** E-Fix (efix: checkbox) */
  efix?: boolean;
  /** Employee/Team (employeeorteam: select) */
  employeeorteam?: string;
  /** Base Status (eventstatus: select) */
  eventstatus?: string;
  /** External Abstract (externalabstract: text) */
  externalabstract?: string;
  /** External Details (externaldetails: text) */
  externaldetails?: string;
  /** Fixed In Version (External) (externalfixedin: select) */
  externalfixedin?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** External Status (externalstatus: select) */
  externalstatus?: string;
  /** Date Fixed (fixed: datetime) */
  fixed?: string;
  /** Fixed By (fixedby: select) */
  fixedby?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** I Own This Issue (isowner: checkbox) */
  isowner?: boolean;
  /** Reviewed (isreviewed: checkbox) */
  isreviewed?: boolean;
  /** Showstopper (isshowstopper: checkbox) */
  isshowstopper?: boolean;
  /** Abstract (issueabstract: text) */
  issueabstract?: string;
  /** Number/ID (issuenumber: text) */
  issuenumber?: string;
  /** Item (item: select) */
  item?: string;
  /** Date Last Modified (lastmodifieddate: datetime) */
  lastmodifieddate?: string;
  /** Module (module: select) */
  module?: string;
  /** Number (number: integer) */
  number?: string;
  /** Last Version Fixed (pre-11) (originalfixedin: text) */
  originalfixedin?: string;
  /** Priority (priority: select) */
  priority?: string;
  /** Product (product: select) */
  product?: string;
  /** Product Team (productteam: select) */
  productteam?: string;
  /** Reported By (reportedby: select) */
  reportedby?: string;
  /** Reproduced (reproduce: select) */
  reproduce?: string;
  /** Date Resolved (resolved: datetime) */
  resolved?: string;
  /** Resolved By (resolvedby: select) */
  resolvedby?: string;
  /** Reviewer (reviewer: select) */
  reviewer?: string;
  /** Severity (severity: select) */
  severity?: string;
  /** Source (source: select) */
  source?: string;
  /** Status (status: select) */
  status?: string;
  /** Tags (tags: multiselect) */
  tags?: string;
  /** Tracking (tracking: checkbox) */
  tracking?: boolean;
  /** Type (type: select) */
  type?: string;
  /** User Type (usertype: select) */
  usertype?: string;
  /** Broken In Version (versionbroken: select) */
  versionbroken?: string;
  /** Fixed In Version (versionfixed: select) */
  versionfixed?: string;
  /** Target Version (versiontarget: select) */
  versiontarget?: string;
}


// Search Joins

/** Issue (issue) Search Joins definitions. */
export interface issueSearchJoinTypes {
/** issue's employee search filter. Employee. Actual name: Employee. */
  employee: 'employee';
}


// Search Filter Types

/** Issue (issue) Search Filter Type definitions. */
export interface issueSearchFilterTypes {
ageinmonths: 'integer';
  assigned: 'select';
  buildbroken: 'select';
  buildbrokenname: 'text';
  buildfixed: 'select';
  buildfixedname: 'text';
  buildtarget: 'select';
  buildtargetname: 'text';
  casecount: 'integer';
  casenumber: 'text';
  closeddate: 'datetime';
  createddate: 'datetime';
  datereleased: 'date';
  details: 'text';
  duplicateof: 'select';
  efix: 'checkbox';
  employeeorteam: 'select';
  eventstatus: 'select';
  externalabstract: 'text';
  externaldetails: 'text';
  externalfixedin: 'select';
  externalid: 'select';
  externalidstring: 'text';
  externalstatus: 'select';
  fixed: 'datetime';
  fixedby: 'select';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isowner: 'checkbox';
  isreviewed: 'checkbox';
  isshowstopper: 'checkbox';
  issueabstract: 'text';
  issuenumber: 'text';
  item: 'select';
  lastmodifieddate: 'datetime';
  module: 'select';
  number: 'integer';
  originalfixedin: 'text';
  priority: 'select';
  product: 'select';
  productteam: 'select';
  reportedby: 'select';
  reproduce: 'select';
  resolved: 'datetime';
  resolvedby: 'select';
  reviewer: 'select';
  severity: 'select';
  source: 'select';
  status: 'select';
  tags: 'multiselect';
  tracking: 'checkbox';
  type: 'select';
  usertype: 'select';
  versionbroken: 'select';
  versionfixed: 'select';
  versiontarget: 'select';
}


// Search Column Types

/** Issue (issue) Search Column Type definitions. */
export interface issueSearchColumnTypes {
ageinmonths: 'integer';
  assigned: 'select';
  buildbroken: 'select';
  buildfixed: 'select';
  buildtarget: 'select';
  casecount: 'integer';
  casenumber: 'text';
  closeddate: 'datetime';
  createddate: 'datetime';
  datereleased: 'date';
  duplicateof: 'select';
  employeeorteam: 'select';
  eventstatus: 'select';
  externalabstract: 'text';
  externaldetails: 'text';
  externalfixedin: 'text';
  externalid: 'select';
  externalstatus: 'select';
  fixed: 'datetime';
  fixedby: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isowner: 'checkbox';
  isreviewed: 'checkbox';
  isshowstopper: 'select';
  issueabstract: 'text';
  issuestatus: 'select';
  item: 'select';
  lastmodifieddate: 'datetime';
  lastviewed: 'datetime';
  module: 'text';
  number: 'text';
  originalfixedin: 'text';
  priority: 'select';
  product: 'select';
  productteam: 'select';
  reportedby: 'select';
  reproduce: 'select';
  resolved: 'datetime';
  resolvedby: 'select';
  reviewer: 'select';
  severity: 'select';
  source: 'select';
  tags: 'multiselect';
  type: 'text';
  usertype: 'select';
  versionbroken: 'select';
  versionfixed: 'select';
  versiontarget: 'select';
}