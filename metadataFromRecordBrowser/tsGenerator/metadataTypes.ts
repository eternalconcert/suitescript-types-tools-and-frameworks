import { Type } from "./sharedTypes";

export interface RecordMetadata {
  id: string;
  label: string;
  supportCustomFields: boolean;
  fields: RecordField[];
  sublists: Sublist[];
  searchFilters: AbstractField[];
  searchColumns: AbstractField[];
  searchData?: string
  searchJoins: {
    id: string;
    description: string;
    actualName: string;
  }[];
}
interface AbstractField {
  type: Type;
  id: string;
  label: string;
}
interface SublistField extends AbstractField {
  required: boolean;
  help: string;
}
interface RecordField extends SublistField {
  nlapiSubmitField: boolean;
}
interface Sublist {
  id: string;
  label: string;
  fields: SublistField[];
}
