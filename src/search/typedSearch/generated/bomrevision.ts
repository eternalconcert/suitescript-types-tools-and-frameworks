// This file is automatically generated - don't edit it. 
// Search Types for record Bill of Materials Revision (bomrevision)

// Search Columns

/** Bill of Materials Revision (bomrevision) Search Columns definition */
export interface bomrevisionSearchColumn {
  /** Bill of Materials (billofmaterial: select) */
      billofmaterial?: string;
  /** Created Date (createddate: date) */
      createddate?: string;
  /** Effective Start Date (effectivedate: date) */
      effectivedate?: string;
  /** External ID (externalid: text) */
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
  /** Internal ID (internalid: integer) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Memo (memo: text) */
      memo?: string;
  /** Name (name: text) */
      name?: string;
  /** Effective End Date (obsoletedate: date) */
      obsoletedate?: string;
}


// Search Filters

/** Bill of Materials Revision (bomrevision) Search Filters definition */
export interface bomrevisionSearchFilter {
/** Bill of Materials (billofmaterial: select) */
  billofmaterial?: string;
  /** Created Date (createddate: date) */
  createddate?: string;
  /** Effective Start Date (effectivedate: date) */
  effectivedate?: string;
  /** External ID (externalid: text) */
  externalid?: string;
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
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Memo (memo: text) */
  memo?: string;
  /** Name (name: text) */
  name?: string;
  /** Effective End Date (obsoletedate: date) */
  obsoletedate?: string;
}


// Search Joins

/** Bill of Materials Revision (bomrevision) Search Joins definitions. */
export interface bomrevisionSearchJoinTypes {
/** bomrevision's billofmaterial search filter. Bill of Material. Actual name: Bill of Materials. */
  billofmaterial: 'billofmaterial';
  /** bomrevision's component search filter. Component. Actual name: Bill of Materials Revision Component. */
  component: 'component';
}


// Search Filter Types

/** Bill of Materials Revision (bomrevision) Search Filter Type definitions. */
export interface bomrevisionSearchFilterTypes {
billofmaterial: 'select';
  createddate: 'date';
  effectivedate: 'date';
  externalid: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  memo: 'text';
  name: 'text';
  obsoletedate: 'date';
}


// Search Column Types

/** Bill of Materials Revision (bomrevision) Search Column Type definitions. */
export interface bomrevisionSearchColumnTypes {
billofmaterial: 'select';
  createddate: 'date';
  effectivedate: 'date';
  externalid: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'integer';
  isinactive: 'checkbox';
  memo: 'text';
  name: 'text';
  obsoletedate: 'date';
}