// This file is automatically generated - don't edit it. 
// Search Types for record Topic (topic)

// Search Columns

/** Topic (topic) Search Columns definition */
export interface topicSearchColumn {
  /** Description (description: text) */
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
  /** Title (name: text) */
      name?: string;
}


// Search Filters

/** Topic (topic) Search Filters definition */
export interface topicSearchFilter {
/** Description (description: text) */
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
  /** Title (name: text) */
  name?: string;
}


// Search Joins

/** Topic (topic) Search Joins definitions. */
export interface topicSearchJoinTypes {
/** topic's solution search filter. Solution. Actual name: Solution. */
  solution: 'solution';
}


// Search Filter Types

/** Topic (topic) Search Filter Type definitions. */
export interface topicSearchFilterTypes {
description: 'text';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'text';
}


// Search Column Types

/** Topic (topic) Search Column Type definitions. */
export interface topicSearchColumnTypes {
description: 'text';
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
}