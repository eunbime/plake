export default class ApiClient {
  private token?: string;
  private baseURL: string;

  constructor(token?: string) {
    this.token = token;
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || "";
    if (!this.baseURL) {
      throw new Error("API_URL 환경변수가 설정되지 않았습니다.");
    }
  }

  private async request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    body?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    const headers = new Headers();

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    const isFormData = body instanceof FormData;
    if (!isFormData) {
      headers.set("Content-Type", "application/json");
    }

    const res = await fetch(`${this.baseURL}${path}`, {
      method,
      headers,
      body: isFormData ? body : body ? JSON.stringify(body) : undefined,
      ...config,
    });

    const data = await res.json();

    if (!res.ok) {
      throw {
        status: res.status,
        code: data.code || "UNKNOWN",
        message: data.message || "요청 실패",
      };
    }

    return data;
  }

  get<T>(path: string) {
    return this.request<T>("GET", path);
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>("POST", path, body);
  }

  put<T>(path: string, body?: unknown) {
    return this.request<T>("PUT", path, body);
  }

  delete<T>(path: string) {
    return this.request<T>("DELETE", path);
  }
}
