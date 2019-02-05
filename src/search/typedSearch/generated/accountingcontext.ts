// This file is automatically generated - don't edit it. 
// Search Types for record Accounting Context (accountingcontext)

// Search Columns

/** Accounting Context (accountingcontext) Search Columns definition */
export interface accountingcontextSearchColumn {
  /** External ID (externalid: select) */
      externalid?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Name (name: text) */
      name?: string;
}


// Search Filters

/** Accounting Context (accountingcontext) Search Filters definition */
export interface accountingcontextSearchFilter {
/** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Name (name: text) */
  name?: string;
}


// Search Joins

/** Accounting Context (accountingcontext) Search Joins definitions. */
export interface accountingcontextSearchJoinTypes {

}


// Search Filter Types

/** Accounting Context (accountingcontext) Search Filter Type definitions. */
export interface accountingcontextSearchFilterTypes {
externalid: 'select';
  externalidstring: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  name: 'text';
}


// Search Column Types

/** Accounting Context (accountingcontext) Search Column Type definitions. */
export interface accountingcontextSearchColumnTypes {
externalid: 'select';
  internalid: 'select';
  name: 'text';
}