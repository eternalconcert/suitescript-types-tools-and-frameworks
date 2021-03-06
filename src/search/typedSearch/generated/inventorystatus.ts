// This file is automatically generated - don't edit it. 
// Search Types for record Inventory Status (inventorystatus)

// Search Columns

/** Inventory Status (inventorystatus) Search Columns definition */
export interface inventorystatusSearchColumn {
  /** Description (description: text) */
      description?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Make Inventory Available (inventoryavailable: checkbox) */
      inventoryavailable?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Name (name: text) */
      name?: string;
  /** State (state: text) */
      state?: string;
}


// Search Filters

/** Inventory Status (inventorystatus) Search Filters definition */
export interface inventorystatusSearchFilter {
/** Description (description: text) */
  description?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Internal Id (internalid: select) */
  internalid?: string;
  /** Internal Id (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Make Inventory Available (inventoryavailable: checkbox) */
  inventoryavailable?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Name (name: text) */
  name?: string;
  /** State (state: select) */
  state?: string;
}


// Search Joins

/** Inventory Status (inventorystatus) Search Joins definitions. */
export interface inventorystatusSearchJoinTypes {

}


// Search Filter Types

/** Inventory Status (inventorystatus) Search Filter Type definitions. */
export interface inventorystatusSearchFilterTypes {
description: 'text';
  externalid: 'select';
  externalidstring: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  inventoryavailable: 'checkbox';
  isinactive: 'checkbox';
  name: 'text';
  state: 'select';
}


// Search Column Types

/** Inventory Status (inventorystatus) Search Column Type definitions. */
export interface inventorystatusSearchColumnTypes {
description: 'text';
  externalid: 'select';
  internalid: 'select';
  inventoryavailable: 'checkbox';
  isinactive: 'checkbox';
  name: 'text';
  state: 'text';
}