// This file is automatically generated - don't edit it. 
// Search Types for record CMS Content Type (cmscontenttype)

// Search Columns

/** CMS Content Type (cmscontenttype) Search Columns definition */
export interface cmscontenttypeSearchColumn {
  /** Custom Record Id (customrecordid: integer) */
      customrecordid?: string;
  /** Custom Record Script Id (customrecordscriptid: richtext) */
      customrecordscriptid?: string;
  /** Description (description: textarea) */
      description?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Icon Image Path (iconimagepath: richtext) */
      iconimagepath?: string;
  /** Internal ID (id: integer) */
      id?: string;
  /** Internal ID (internalid: integer) */
      internalid?: string;
  /** Label (label: richtext) */
      label?: string;
  /** Name (name: richtext) */
      name?: string;
}


// Search Filters

/** CMS Content Type (cmscontenttype) Search Filters definition */
export interface cmscontenttypeSearchFilter {
/** Custom Record Id (customrecordid: integer) */
  customrecordid?: string;
  /** Custom Record Script Id (customrecordscriptid: richtext) */
  customrecordscriptid?: string;
  /** Description (description: textarea) */
  description?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Icon Image Path (iconimagepath: richtext) */
  iconimagepath?: string;
  /** Internal ID (id: integer) */
  id?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Label (label: richtext) */
  label?: string;
  /** Name (name: richtext) */
  name?: string;
}


// Search Joins

/** CMS Content Type (cmscontenttype) Search Joins definitions. */
export interface cmscontenttypeSearchJoinTypes {

}


// Search Filter Types

/** CMS Content Type (cmscontenttype) Search Filter Type definitions. */
export interface cmscontenttypeSearchFilterTypes {
customrecordid: 'integer';
  customrecordscriptid: 'richtext';
  description: 'textarea';
  externalid: 'select';
  externalidstring: 'text';
  iconimagepath: 'richtext';
  id: 'integer';
  internalid: 'select';
  internalidnumber: 'integer';
  label: 'richtext';
  name: 'richtext';
}


// Search Column Types

/** CMS Content Type (cmscontenttype) Search Column Type definitions. */
export interface cmscontenttypeSearchColumnTypes {
customrecordid: 'integer';
  customrecordscriptid: 'richtext';
  description: 'textarea';
  externalid: 'select';
  iconimagepath: 'richtext';
  id: 'integer';
  internalid: 'integer';
  label: 'richtext';
  name: 'richtext';
}