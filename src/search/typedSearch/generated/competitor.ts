// This file is automatically generated - don't edit it. 
// Search Types for record Competitor (competitor)

// Search Columns

/** Competitor (competitor) Search Columns definition */
export interface competitorSearchColumn {
  /** Description (description: textarea) */
      description?: string;
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
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Name (name: text) */
      name?: string;
  /** Opportunity Notes (oppnotes: textarea) */
      oppnotes?: string;
  /** Opportunity (opportunity: select) */
      opportunity?: string;
  /** Winner (oppwinloss: checkbox) */
      oppwinloss?: boolean;
  /** Products/Services (productservices: richtext) */
      productservices?: string;
  /** Strategy (strategy: richtext) */
      strategy?: string;
  /** Strengths (strengths: richtext) */
      strengths?: string;
  /** Web Address (url: url) */
      url?: string;
  /** Weaknesses (weaknesses: richtext) */
      weaknesses?: string;
}


// Search Filters

/** Competitor (competitor) Search Filters definition */
export interface competitorSearchFilter {
/** Description (description: textarea) */
  description?: string;
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
  /** Opportunity Notes (oppnotes: textarea) */
  oppnotes?: string;
  /** Products/Services (productservices: textarea) */
  productservices?: string;
  /** Strategy (strategy: textarea) */
  strategy?: string;
  /** Strengths (strengths: textarea) */
  strengths?: string;
  /** Web Address (url: url) */
  url?: string;
  /** Weaknesses (weaknesses: textarea) */
  weaknesses?: string;
  /** Won Opportunity (wonopportunity: checkbox) */
  wonopportunity?: boolean;
}


// Search Joins

/** Competitor (competitor) Search Joins definitions. */
export interface competitorSearchJoinTypes {

}


// Search Filter Types

/** Competitor (competitor) Search Filter Type definitions. */
export interface competitorSearchFilterTypes {
description: 'textarea';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'text';
  oppnotes: 'textarea';
  productservices: 'textarea';
  strategy: 'textarea';
  strengths: 'textarea';
  url: 'url';
  weaknesses: 'textarea';
  wonopportunity: 'checkbox';
}


// Search Column Types

/** Competitor (competitor) Search Column Type definitions. */
export interface competitorSearchColumnTypes {
description: 'textarea';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isinactive: 'checkbox';
  name: 'text';
  oppnotes: 'textarea';
  opportunity: 'select';
  oppwinloss: 'checkbox';
  productservices: 'richtext';
  strategy: 'richtext';
  strengths: 'richtext';
  url: 'url';
  weaknesses: 'richtext';
}