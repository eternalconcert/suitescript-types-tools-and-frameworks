// This file is automatically generated - don't edit it. 
// Search Types for record Sales Tax Item (salestaxitem)

// Search Columns

/** Sales Tax Item (salestaxitem) Search Columns definition */
export interface salestaxitemSearchColumn {
  /** Applies To Service (appliestoservice: checkbox) */
      appliestoservice?: boolean;
  /** Available On (availableon: select) */
      availableon?: string;
  /** Country (country: select) */
      country?: string;
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
  /** EC Code (iseccode: checkbox) */
      iseccode?: boolean;
  /** Is Excluded From Tax Reports (isexcludetaxreports: checkbox) */
      isexcludetaxreports?: boolean;
  /** Export (isexport: checkbox) */
      isexport?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Reverse Charge (isreversecharge: checkbox) */
      isreversecharge?: boolean;
  /** Name (itemid: text) */
      itemid?: string;
  /** Name (name: text) */
      name?: string;
  /** Parent (parent: select) */
      parent?: string;
  /** Rate (rate: currency) */
      rate?: string;
  /** Tax Type (taxtype: select) */
      taxtype?: string;
}


// Search Filters

/** Sales Tax Item (salestaxitem) Search Filters definition */
export interface salestaxitemSearchFilter {
/** Applies To Service (appliestoservice: checkbox) */
  appliestoservice?: boolean;
  /** Available On (availableon: select) */
  availableon?: string;
  /** Country (country: select) */
  country?: string;
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
  /** EC Code (iseccode: checkbox) */
  iseccode?: boolean;
  /** Excluded From Tax Reports (isexcludetaxreports: checkbox) */
  isexcludetaxreports?: boolean;
  /** Export (isexport: checkbox) */
  isexport?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Reverse Charge (isreversecharge: checkbox) */
  isreversecharge?: boolean;
  /** Name (itemid: text) */
  itemid?: string;
  /** Name (name: text) */
  name?: string;
  /** Parent (parent: select) */
  parent?: string;
  /** Tax Type (taxtype: select) */
  taxtype?: string;
}


// Search Joins

/** Sales Tax Item (salestaxitem) Search Joins definitions. */
export interface salestaxitemSearchJoinTypes {
/** salestaxitem's taxtype search filter. Tax Type. Actual name: Tax Type. */
  taxtype: 'taxtype';
}


// Search Filter Types

/** Sales Tax Item (salestaxitem) Search Filter Type definitions. */
export interface salestaxitemSearchFilterTypes {
appliestoservice: 'checkbox';
  availableon: 'select';
  country: 'select';
  description: 'textarea';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  iseccode: 'checkbox';
  isexcludetaxreports: 'checkbox';
  isexport: 'checkbox';
  isinactive: 'checkbox';
  isreversecharge: 'checkbox';
  itemid: 'text';
  name: 'text';
  parent: 'select';
  taxtype: 'select';
}


// Search Column Types

/** Sales Tax Item (salestaxitem) Search Column Type definitions. */
export interface salestaxitemSearchColumnTypes {
appliestoservice: 'checkbox';
  availableon: 'select';
  country: 'select';
  description: 'textarea';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  iseccode: 'checkbox';
  isexcludetaxreports: 'checkbox';
  isexport: 'checkbox';
  isinactive: 'checkbox';
  isreversecharge: 'checkbox';
  itemid: 'text';
  name: 'text';
  parent: 'select';
  rate: 'currency';
  taxtype: 'select';
}