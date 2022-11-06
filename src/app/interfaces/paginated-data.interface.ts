export interface IPaginatedData<Data> {
  info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
  }
  results: Data[];
}
