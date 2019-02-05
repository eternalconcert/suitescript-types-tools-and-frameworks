// This file is automatically generated - don't edit it. 
// Search Types for record Entity Group (entitygroup)

// Search Columns

/** Entity Group (entitygroup) Search Columns definition */
export interface entitygroupSearchColumn {
  /** Email (email: email) */
      email?: string;
  /** External ID (externalid: select) */
      externalid?: string;
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
  /** Name (groupname: text) */
      groupname?: string;
  /** Type (grouptype: text) */
      grouptype?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Dynamic (isdynamic: checkbox) */
      isdynamic?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Manufacturing Work Center (ismanufacturingworkcenter: checkbox) */
      ismanufacturingworkcenter?: boolean;
  /** Private (isprivate: checkbox) */
      isprivate?: boolean;
  /** Labor Resources (laborresources: integer) */
      laborresources?: string;
  /** Last Modified (lastmodifieddate: datetime) */
      lastmodifieddate?: string;
  /** Machine Resources (machineresources: integer) */
      machineresources?: string;
  /** Owner (owner: select) */
      owner?: string;
  /** Saved Search (savedsearch: text) */
      savedsearch?: string;
  /** Size (size: integer) */
      size?: string;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Work Calendar (workcalendar: select) */
      workcalendar?: string;
}


// Search Filters

/** Entity Group (entitygroup) Search Filters definition */
export interface entitygroupSearchFilter {
/** Email (email: text) */
  email?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Name (groupname: text) */
  groupname?: string;
  /** Owner (groupowner: select) */
  groupowner?: string;
  /** Type (grouptype: select) */
  grouptype?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Dynamic (isdynamic: checkbox) */
  isdynamic?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Manufacturing Work Center (ismanufacturingworkcenter: checkbox) */
  ismanufacturingworkcenter?: boolean;
  /** Private (isprivate: checkbox) */
  isprivate?: boolean;
  /** Labor Resources (laborresources: integer) */
  laborresources?: string;
  /** Last Modified (lastmodifieddate: datetime) */
  lastmodifieddate?: string;
  /** Machine Resources (machineresources: integer) */
  machineresources?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Work Calendar (workcalendar: select) */
  workcalendar?: string;
}


// Search Joins

/** Entity Group (entitygroup) Search Joins definitions. */
export interface entitygroupSearchJoinTypes {

}


// Search Filter Types

/** Entity Group (entitygroup) Search Filter Type definitions. */
export interface entitygroupSearchFilterTypes {
email: 'text';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  groupname: 'text';
  groupowner: 'select';
  grouptype: 'select';
  internalid: 'select';
  internalidnumber: 'integer';
  isdynamic: 'checkbox';
  isinactive: 'checkbox';
  ismanufacturingworkcenter: 'checkbox';
  isprivate: 'checkbox';
  laborresources: 'integer';
  lastmodifieddate: 'datetime';
  machineresources: 'integer';
  subsidiary: 'select';
  workcalendar: 'select';
}


// Search Column Types

/** Entity Group (entitygroup) Search Column Type definitions. */
export interface entitygroupSearchColumnTypes {
email: 'email';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  groupname: 'text';
  grouptype: 'text';
  internalid: 'select';
  isdynamic: 'checkbox';
  isinactive: 'checkbox';
  ismanufacturingworkcenter: 'checkbox';
  isprivate: 'checkbox';
  laborresources: 'integer';
  lastmodifieddate: 'datetime';
  machineresources: 'integer';
  owner: 'select';
  savedsearch: 'text';
  size: 'integer';
  subsidiary: 'select';
  workcalendar: 'select';
}