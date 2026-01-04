// Type definitions for Expense Tracker

export interface BaseItem {
  id: string;
  createdAt: string;
  updatedAt?: string;
}

export interface FormState {
  isSubmitting: boolean;
  isValid: boolean;
  errors: Record<string, string>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface FilterOptions {
  search?: string;
  category?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  dateFrom?: string;
  dateTo?: string;
}

export interface ExportOptions {
  format: "csv" | "json" | "txt";
  includeHeaders?: boolean;
  filename?: string;
}

export type Status = "idle" | "loading" | "success" | "error";

export interface AsyncState<T> {
  data: T | null;
  status: Status;
  error: string | null;
}
