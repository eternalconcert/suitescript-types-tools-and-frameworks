// This file is automatically generated - don't edit it. 
// Search Types for record Merchandise Hierarchy Node (merchandisehierarchynode)

// Search Columns

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Columns definition */
export interface merchandisehierarchynodeSearchColumn {
  /** Description (description: text) */
      description?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Hierarchy Level (hierarchylevel: text) */
      hierarchylevel?: string;
  /** Hierarchy Version (hierarchyversion: text) */
      hierarchyversion?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Name (name: text) */
      name?: string;
  /** Hierarchy Parent Node (parentnode: text) */
      parentnode?: string;
}


// Search Filters

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Filters definition */
export interface merchandisehierarchynodeSearchFilter {
/** Description (description: text) */
  description?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Hierarchy Level (hierarchylevel: select) */
  hierarchylevel?: string;
  /** Hierarchy Version (hierarchyversion: select) */
  hierarchyversion?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Name (name: text) */
  name?: string;
  /** Hierarchy Parent Node (parentnode: select) */
  parentnode?: string;
}


// Search Joins

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Joins definitions. */
export interface merchandisehierarchynodeSearchJoinTypes {

}


// Search Filter Types

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Filter Type definitions. */
export interface merchandisehierarchynodeSearchFilterTypes {
description: 'text';
  externalid: 'select';
  externalidstring: 'text';
  hierarchylevel: 'select';
  hierarchyversion: 'select';
  internalid: 'select';
  internalidnumber: 'integer';
  name: 'text';
  parentnode: 'select';
}


// Search Column Types

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Column Type definitions. */
export interface merchandisehierarchynodeSearchColumnTypes {
description: 'text';
  externalid: 'select';
  hierarchylevel: 'text';
  hierarchyversion: 'text';
  internalid: 'select';
  name: 'text';
  parentnode: 'text';
}