export interface TableRow {
  name: string;
  age: number;
  job: string;
}

export interface TableHeader {
  key: keyof TableRow;
  label: string;
}
