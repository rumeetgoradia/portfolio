export interface TRPCResponse<T> {
  data?: T | null;
  isLoading?: boolean;
  isError?: boolean;
}
