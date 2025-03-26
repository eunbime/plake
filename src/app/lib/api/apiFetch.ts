export const apiFetch = async <T>(
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: unknown,
  token?: string,
): Promise<T> => {
  const headers = new Headers();

  if (token) headers.set("Authorization", `Bearer ${token}`);

  const isFormData = body instanceof FormData;
  if (!isFormData) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    method,
    headers,
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
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
};
