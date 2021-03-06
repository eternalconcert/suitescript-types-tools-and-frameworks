// This file is automatically generated - don't edit it. 
// Search Types for record Revenue Recognition Template (revrectemplate)

// Search Columns

/** Revenue Recognition Template (revrectemplate) Search Columns definition */
export interface revrectemplateSearchColumn {
  /** Inactive (amorinactive: text) */
      amorinactive?: string;
  /** Method (amormethod: text) */
      amormethod?: string;
  /** Amortization Period (amorperiod: text) */
      amorperiod?: string;
  /** Start Offset (amorstartoffset: text) */
      amorstartoffset?: string;
  /** Term Source (amortermsrc: text) */
      amortermsrc?: string;
  /** Type (amortype: text) */
      amortype?: string;
  /** Contra Account (contraaccount: text) */
      contraaccount?: string;
  /** Deferral Account (deferralaccount: text) */
      deferralaccount?: string;
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
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Name (name: text) */
      name?: string;
  /** Period Offset (periodoffset: text) */
      periodoffset?: string;
  /** Target Account (targetaccount: text) */
      targetaccount?: string;
  /** Use Transaction Currency (useforeignamounts: checkbox) */
      useforeignamounts?: boolean;
}


// Search Filters

/** Revenue Recognition Template (revrectemplate) Search Filters definition */
export interface revrectemplateSearchFilter {
/** Method (amormethod: select) */
  amormethod?: string;
  /** Amortization Period (amorperiod: integer) */
  amorperiod?: string;
  /** Start Offset (amorstartoffset: integer) */
  amorstartoffset?: string;
  /** Term Source (amortermsrc: select) */
  amortermsrc?: string;
  /** Type (amortype: select) */
  amortype?: string;
  /** Contra Account (contraaccount: select) */
  contraaccount?: string;
  /** Deferral Account (deferralaccount: select) */
  deferralaccount?: string;
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
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Name (name: text) */
  name?: string;
  /** Period Offset (periodoffset: integer) */
  periodoffset?: string;
  /** Target Account (targetaccount: select) */
  targetaccount?: string;
  /** Use Transaction Currency (useforeignamounts: checkbox) */
  useforeignamounts?: boolean;
}


// Search Joins

/** Revenue Recognition Template (revrectemplate) Search Joins definitions. */
export interface revrectemplateSearchJoinTypes {

}


// Search Filter Types

/** Revenue Recognition Template (revrectemplate) Search Filter Type definitions. */
export interface revrectemplateSearchFilterTypes {
amormethod: 'select';
  amorperiod: 'integer';
  amorstartoffset: 'integer';
  amortermsrc: 'select';
  amortype: 'select';
  contraaccount: 'select';
  deferralaccount: 'select';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'text';
  periodoffset: 'integer';
  targetaccount: 'select';
  useforeignamounts: 'checkbox';
}


// Search Column Types

/** Revenue Recognition Template (revrectemplate) Search Column Type definitions. */
export interface revrectemplateSearchColumnTypes {
amorinactive: 'text';
  amormethod: 'text';
  amorperiod: 'text';
  amorstartoffset: 'text';
  amortermsrc: 'text';
  amortype: 'text';
  contraaccount: 'text';
  deferralaccount: 'text';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  name: 'text';
  periodoffset: 'text';
  targetaccount: 'text';
  useforeignamounts: 'checkbox';
}