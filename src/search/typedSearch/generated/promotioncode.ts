// This file is automatically generated - don't edit it. 
// Search Types for record Promotion (promotioncode)

// Search Columns

/** Promotion (promotioncode) Search Columns definition */
export interface promotioncodeSearchColumn {
  /** Code (code: text) */
      code?: string;
  /** Description (description: text) */
      description?: string;
  /** Discount (discount: text) */
      discount?: string;
  /** Discount Amount (discountamount: currency) */
      discountamount?: number;
  /** End Date (enddate: date) */
      enddate?: Date;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: number;
  /** Formula (Date) (formuladate: date) */
      formuladate?: Date;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: number;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: number;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Available to all Customers (ispublic: checkbox) */
      ispublic?: boolean;
  /** Locations (location: multiselect) */
      location?: number;
  /** Name (name: text) */
      name?: string;
  /** Start Date (startdate: date) */
      startdate?: Date;
}


// Search Filters

/** Promotion (promotioncode) Search Filters definition */
export interface promotioncodeSearchFilter {
/** Apply Discount To (applydiscountto: select) */
  applydiscountto?: string;
  /** Code (code: text) */
  code?: string;
  /** Description (description: text) */
  description?: string;
  /** Discount (discount: select) */
  discount?: string;
  /** Discount Amount (discountamount: currency) */
  discountamount?: number;
  /** End Date (enddate: date) */
  enddate?: Date;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Free Shipping Method (freeshipitem: select) */
  freeshipitem?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Public (ispublic: checkbox) */
  ispublic?: boolean;
  /** Item (item: select) */
  item?: string;
  /** Location (location: select) */
  location?: string;
  /** Promotion Name (name: text) */
  name?: string;
  /** Partner (partner: select) */
  partner?: string;
  /** Start Date (startdate: date) */
  startdate?: Date;
}


// Search Joins

/** Promotion (promotioncode) Search Joins definitions. */
export interface promotioncodeSearchJoinTypes {

}


// Search Filter Types

/** Promotion (promotioncode) Search Filter Type definitions. */
export interface promotioncodeSearchFilterTypes {
applydiscountto: 'select';
  code: 'text';
  description: 'text';
  discount: 'select';
  discountamount: 'currency';
  enddate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  freeshipitem: 'select';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  ispublic: 'checkbox';
  item: 'select';
  location: 'select';
  name: 'text';
  partner: 'select';
  startdate: 'date';
}


// Search Column Types

/** Promotion (promotioncode) Search Column Type definitions. */
export interface promotioncodeSearchColumnTypes {
code: 'text';
  description: 'text';
  discount: 'text';
  discountamount: 'currency';
  enddate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isinactive: 'checkbox';
  ispublic: 'checkbox';
  location: 'multiselect';
  name: 'text';
  startdate: 'date';
}