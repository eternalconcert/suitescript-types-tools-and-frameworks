// This file is automatically generated - don't edit it. 
// Search Types for record Bill of Materials (bom)

// Search Columns

/** Bill of Materials (bom) Search Columns definition */
export interface bomSearchColumn {
  /** Available For All Assemblies (availableforallassemblies: checkbox) */
      availableforallassemblies?: boolean;
  /** Available For All Locations (availableforalllocations: checkbox) */
      availableforalllocations?: boolean;
  /** Created Date (createddate: date) */
      createddate?: Date;
  /** ExternalId (externalid: text) */
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
  /** Include Children (includechildren: checkbox) */
      includechildren?: boolean;
  /** Internal ID (internalid: integer) */
      internalid?: number;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Memo (memo: text) */
      memo?: string;
  /** Name (name: text) */
      name?: string;
  /** Restrict To Assemblies (restricttoassemblies: multiselect) */
      restricttoassemblies?: number;
  /** Restrict To Locations (restricttolocations: multiselect) */
      restricttolocations?: number;
  /** Revision : Name (revisionname: text) */
      revisionname?: string;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Subsidiary (no hierarchy) (subsidiarynohierarchy: select) */
      subsidiarynohierarchy?: string;
  /** Use Component Yield (usecomponentyield: checkbox) */
      usecomponentyield?: boolean;
  /** Used on Assembly (usedonassembly: checkbox) */
      usedonassembly?: boolean;
}


// Search Filters

/** Bill of Materials (bom) Search Filters definition */
export interface bomSearchFilter {
/** Available For All Assemblies (availableforallassemblies: checkbox) */
  availableforallassemblies?: boolean;
  /** Available For All Locations (availableforalllocations: checkbox) */
  availableforalllocations?: boolean;
  /** Created Date (createddate: date) */
  createddate?: Date;
  /** ExternalId (externalid: text) */
  externalid?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Include Children (includechildren: checkbox) */
  includechildren?: boolean;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Memo (memo: text) */
  memo?: string;
  /** Name (name: text) */
  name?: string;
  /** Restrict To Assemblies (restricttoassemblies: multiselect) */
  restricttoassemblies?: number;
  /** Restrict To Locations (restricttolocations: multiselect) */
  restricttolocations?: number;
  /** Subsidiary (subsidiary: multiselect) */
  subsidiary?: number;
  /** Use Component Yield (usecomponentyield: checkbox) */
  usecomponentyield?: boolean;
  /** Used on Assembly (usedonassembly: checkbox) */
  usedonassembly?: boolean;
}


// Search Joins

/** Bill of Materials (bom) Search Joins definitions. */
export interface bomSearchJoinTypes {
/** bom's assemblyitem search filter. Assembly Item. Actual name: Assembly Item Bill of Materials. */
  assemblyitem: 'assemblyitem';
  /** bom's revision search filter. Revision. Actual name: Bill of Materials Revision. */
  revision: 'revision';
}


// Search Filter Types

/** Bill of Materials (bom) Search Filter Type definitions. */
export interface bomSearchFilterTypes {
availableforallassemblies: 'checkbox';
  availableforalllocations: 'checkbox';
  createddate: 'date';
  externalid: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  includechildren: 'checkbox';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  memo: 'text';
  name: 'text';
  restricttoassemblies: 'multiselect';
  restricttolocations: 'multiselect';
  subsidiary: 'multiselect';
  usecomponentyield: 'checkbox';
  usedonassembly: 'checkbox';
}


// Search Column Types

/** Bill of Materials (bom) Search Column Type definitions. */
export interface bomSearchColumnTypes {
availableforallassemblies: 'checkbox';
  availableforalllocations: 'checkbox';
  createddate: 'date';
  externalid: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  includechildren: 'checkbox';
  internalid: 'integer';
  isinactive: 'checkbox';
  memo: 'text';
  name: 'text';
  restricttoassemblies: 'multiselect';
  restricttolocations: 'multiselect';
  revisionname: 'text';
  subsidiary: 'select';
  subsidiarynohierarchy: 'select';
  usecomponentyield: 'checkbox';
  usedonassembly: 'checkbox';
}