export interface TableRow {
  name:string;
  age:number;
  job:string;
};

type TableRowKeys = keyof TableRow;

export interface TableHeader  {
  key:TableRowKeys;
  label: Capitalize<TableRowKeys>;
}
