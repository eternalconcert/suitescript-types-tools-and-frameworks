// This file is automatically generated - don't edit it. 
// Search Types for record Pricing Group (pricinggroup)

// Search Columns

/** Pricing Group (pricinggroup) Search Columns definition */
export interface pricinggroupSearchColumn {
  /** External ID (externalid: select) */
      externalid?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Name (name: text) */
      name?: string;
}


// Search Filters

/** Pricing Group (pricinggroup) Search Filters definition */
export interface pricinggroupSearchFilter {
/** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Name (name: text) */
  name?: string;
}


// Search Joins

/** Pricing Group (pricinggroup) Search Joins definitions. */
export interface pricinggroupSearchJoinTypes {
/** pricinggroup's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Pricing Group (pricinggroup) Search Filter Type definitions. */
export interface pricinggroupSearchFilterTypes {
externalid: 'select';
  externalidstring: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'text';
}


// Search Column Types

/** Pricing Group (pricinggroup) Search Column Type definitions. */
export interface pricinggroupSearchColumnTypes {
externalid: 'select';
  internalid: 'select';
  isinactive: 'checkbox';
  name: 'text';
}