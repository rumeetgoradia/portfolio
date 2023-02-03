export interface TRPCResponse<T> {
  data?: T;
  isLoading?: boolean;
  isError?: boolean;
}
