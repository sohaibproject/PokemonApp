export interface PaginationProps {
  parPage: number;
  total: number;
  currentPage: number;
  paginate: (number: number) => void;
  handelItemPerpage: (number: number) => void;
}
