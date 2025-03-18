interface HTTPInstance {
  get<R>(url: string, config?: RequestInit): Promise<R>;
  post<T, R>(url: string, data?: T, config?: RequestInit): Promise<R>;
  put<T, R>(url: string, data?: T, config?: RequestInit): Promise<R>;
  delete<R>(url: string, config?: RequestInit): Promise<R>;
}

class Service {
  public http: HTTPInstance;

  private baseURL: string;

  public token?: string;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

    this.http = {
      get: this.get.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      delete: this.delete.bind(this),
    };
  }

  public setToken(token: string) {
    this.token = token;
  }

  private async request<R = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<R> {
    try {
      const headers: HeadersInit & { Authorization?: string } = {
        "Content-Type": "application/json",
        ...config?.headers,
      };

      if (this.token) {
        headers.Authorization = `Bearer ${this.token}`;
      }

      const response = await fetch(this.baseURL + url, {
        method,
        headers: headers,
        body: data ? JSON.stringify(data) : undefined,
        ...config,
      });

      const responseData: R = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return responseData;
    } catch (error) {
      console.error("[Error]", method, url, error);
      throw error;
    }
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("GET", url, undefined, config);
  }

  private post<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>("POST", url, data, config);
  }

  private put<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>("PUT", url, data, config);
  }

  private delete<R>(url: string, config?: RequestInit): Promise<R> {
    return this.request<R>("DELETE", url, undefined, config);
  }
}

export default Service;
