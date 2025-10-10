export type ApiResponseWithPagination<T> = {
  status: number;
  timestamp: string;
  message: string;
  data: {
    content: T;
    pageable: {
      pageNumber: number;
      pageSize: number;
    }
    totalElements: number;
    totalPages: number;
    last: boolean;
  };
};

export type ApiResponse<T> = {
  status: number;
  timestamp: string;
  message: string;
  data: T;
};