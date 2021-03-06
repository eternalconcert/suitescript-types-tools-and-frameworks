// This file is automatically generated - don't edit it. 
// Search Types for record Amortization Schedule (amortizationschedule)

// Search Columns

/** Amortization Schedule (amortizationschedule) Search Columns definition */
export interface amortizationscheduleSearchColumn {
  /** Accounting Book (accountingbook: select) */
      accountingbook?: string;
  /** Status (amorstatus: text) */
      amorstatus?: string;
  /** Template Name (amortemplate: select) */
      amortemplate?: string;
  /** Total Amortized (amortizedamount: currency) */
      amortizedamount?: string;
  /** Type (amortype: text) */
      amortype?: string;
  /** Amount (Schedule Total) (amount: currency) */
      amount?: string;
  /** Schedule Currency (currency: select) */
      currency?: string;
  /** Remaining Deferred Balance (deferredamount: currency) */
      deferredamount?: string;
  /** Destination Account (destacct: select) */
      destacct?: string;
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
  /** Initial Amount (initialamt: currency) */
      initialamt?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Is Recognized? (isrecognized: checkbox) */
      isrecognized?: boolean;
  /** Schedule Name (name: text) */
      name?: string;
  /** % Complete (pctcomplete: percent) */
      pctcomplete?: string;
  /** % Recog. (pctrecognition: percent) */
      pctrecognition?: string;
  /** Period Offset (periodoffset: integer) */
      periodoffset?: string;
  /** Amount (recuramount: currency) */
      recuramount?: string;
  /** Amount (Foreign Currency) (recurfxamount: currency) */
      recurfxamount?: string;
  /** Residual (residual: currency) */
      residual?: string;
  /** Date (scheddate: date) */
      scheddate?: string;
  /** Number (schedulenumber: text) */
      schedulenumber?: string;
  /** Source Account (sourceacct: select) */
      sourceacct?: string;
  /** Source Transaction (srctran: select) */
      srctran?: string;
  /** Posting Period (srctranpostperiod: select) */
      srctranpostperiod?: string;
  /** Start Offset (startoffset: integer) */
      startoffset?: string;
  /** Use Transaction Currency (useforeignamounts: checkbox) */
      useforeignamounts?: boolean;
}


// Search Filters

/** Amortization Schedule (amortizationschedule) Search Filters definition */
export interface amortizationscheduleSearchFilter {
/** Accounting Book (accountingbook: select) */
  accountingbook?: string;
  /** Status (amorstatus: select) */
  amorstatus?: string;
  /** Total Amortized (amortizedamount: currency) */
  amortizedamount?: string;
  /** Type (amortype: select) */
  amortype?: string;
  /** Amount (amount: currency) */
  amount?: string;
  /** Schedule Currency (currencyname: select) */
  currencyname?: string;
  /** Remaining Deferred Balance (deferredamount: currency) */
  deferredamount?: string;
  /** Destination Account (destacct: select) */
  destacct?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Initial Amount (initialamt: currency) */
  initialamt?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Is Recognized? (isrecognized: checkbox) */
  isrecognized?: boolean;
  /** Schedule Name (name: text) */
  name?: string;
  /** % Complete (pctcomplete: float) */
  pctcomplete?: string;
  /** % Recog. (pctrecognition: float) */
  pctrecognition?: string;
  /** Period Offset (periodoffset: integer) */
  periodoffset?: string;
  /** Posting Period (postperiod: select) */
  postperiod?: string;
  /** Residual (residual: currency) */
  residual?: string;
  /** Date (scheddate: date) */
  scheddate?: string;
  /** Number (schedulenumber: integer) */
  schedulenumber?: string;
  /** Number/ID (schedulenumbertext: text) */
  schedulenumbertext?: string;
  /** Source Account (sourceacct: select) */
  sourceacct?: string;
  /** Source Transaction Posting Period (srctranpostperiod: select) */
  srctranpostperiod?: string;
  /** Transaction Type (srctrantype: select) */
  srctrantype?: string;
  /** Start Offset (startoffset: integer) */
  startoffset?: string;
  /** Template Name (templatename: text) */
  templatename?: string;
  /** Use Transaction Currency (useforeignamounts: checkbox) */
  useforeignamounts?: boolean;
}


// Search Joins

/** Amortization Schedule (amortizationschedule) Search Joins definitions. */
export interface amortizationscheduleSearchJoinTypes {
/** amortizationschedule's user search filter. User. Actual name: Employee. */
  user: 'user';
  /** amortizationschedule's vendor search filter. Vendor. Actual name: Vendor. */
  vendor: 'vendor';
}


// Search Filter Types

/** Amortization Schedule (amortizationschedule) Search Filter Type definitions. */
export interface amortizationscheduleSearchFilterTypes {
accountingbook: 'select';
  amorstatus: 'select';
  amortizedamount: 'currency';
  amortype: 'select';
  amount: 'currency';
  currencyname: 'select';
  deferredamount: 'currency';
  destacct: 'select';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  initialamt: 'currency';
  internalid: 'select';
  internalidnumber: 'integer';
  isrecognized: 'checkbox';
  name: 'text';
  pctcomplete: 'float';
  pctrecognition: 'float';
  periodoffset: 'integer';
  postperiod: 'select';
  residual: 'currency';
  scheddate: 'date';
  schedulenumber: 'integer';
  schedulenumbertext: 'text';
  sourceacct: 'select';
  srctranpostperiod: 'select';
  srctrantype: 'select';
  startoffset: 'integer';
  templatename: 'text';
  useforeignamounts: 'checkbox';
}


// Search Column Types

/** Amortization Schedule (amortizationschedule) Search Column Type definitions. */
export interface amortizationscheduleSearchColumnTypes {
accountingbook: 'select';
  amorstatus: 'text';
  amortemplate: 'select';
  amortizedamount: 'currency';
  amortype: 'text';
  amount: 'currency';
  currency: 'select';
  deferredamount: 'currency';
  destacct: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  initialamt: 'currency';
  internalid: 'select';
  isrecognized: 'checkbox';
  name: 'text';
  pctcomplete: 'percent';
  pctrecognition: 'percent';
  periodoffset: 'integer';
  recuramount: 'currency';
  recurfxamount: 'currency';
  residual: 'currency';
  scheddate: 'date';
  schedulenumber: 'text';
  sourceacct: 'select';
  srctran: 'select';
  srctranpostperiod: 'select';
  startoffset: 'integer';
  useforeignamounts: 'checkbox';
}