import { FileConfig } from '../generateProject';
import { indent } from '../util';
import { getType } from '../getType';

export function generateFile(config: FileConfig): { output: string } {
  const { data } = config;
  const output = `
// This file is automatically generated - don't edit it. 
// Search Types for record ${data.label} (${data.id})

// Search Columns

${generateSearchColumn(config).output}


// Search Filters

${generateSearchFilter(config).output}


// Search Joins

${generateSearchJoins(config).output}


// Search Filter Types

${generateSearchFilterTypes(config).output}


// Search Column Types

${generateSearchColumnTypes(config).output}

`.trim()
  return { output }
}


export function generateSearchColumn(config: FileConfig): { output: string } {
  const { data } = config;
  const output = `
/** ${data.label} (${data.id}) Search Columns definition */
export interface ${data.id}SearchColumn {${data.searchColumns.map(c => {
    const type = getType(c.type);
    return `
${indent()}/** ${c.label} (${c.id}: ${c.type}) */
${indent()}${c.id}?: ${type};
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}


export function generateSearchFilter(config: FileConfig): { output: string } {
  const { data } = config;
  const output = `
/** ${data.label} (${data.id}) Search Filters definition */
export interface ${data.id}SearchFilter {${data.searchFilters.map(c => {
    const type = getType(c.type);
    return `
/** ${c.label} (${c.id}: ${c.type}) */
${indent()}${c.id}?: ${type};
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}


export function generateSearchJoins(config: FileConfig): { output: string } {
  const { data } = config;
  const output = `
/** ${data.label} (${data.id}) Search Joins definitions. */
export interface ${data.id}SearchJoin {${data.searchJoins.map(c => {
    return `
/** ${data.id}'s ${c.id} search filter. ${c.description}. Actual name: ${c.actualName}. */
${indent()}${c.id}: '${c.id}';
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}

export function generateSearchFilterTypes(config: FileConfig): { output: string } {
  const { data } = config;
  const output = `
/** ${data.label} (${data.id}) Search Filter Type definitions. */
export interface ${data.id}SearchFilterTypes {${data.searchFilters.map(c => {
    return `
${indent()}${c.id}: '${c.type}';
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}

export function generateSearchColumnTypes(config: FileConfig): { output: string } {
  const { data } = config;
  const output = `
/** ${data.label} (${data.id}) Search Column Type definitions. */
export interface ${data.id}SearchColumnTypes {${data.searchColumns.map(c => {
    return `
${indent()}${c.id}: '${c.type}';
`.trim()
  }).join(`\n${indent()}`)}
}`.trim()
  return { output }
}



// TODO
// interface itemSearchFilterTypes {
//   account: 'select';
// }
// interface itemSearchColumnTypes {
//   location: 'checkbox';
// }
