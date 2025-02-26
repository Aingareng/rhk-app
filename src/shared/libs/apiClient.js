export class ApiError extends Error {
  constructor(message, statusCode, data) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.data = data;
  }
}

export class ApiClient {
  constructor(endpoint) {
    this.baseUrl = endpoint;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = options.body
      ? {
          "Content-Type": "application/json",
          ...options.headers,
        }
      : options.headers;

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new ApiError(response.statusText, response.status, {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
    }

    return await response.json();
  }

  async get(endpoint, params, options = {}) {
    const queryString = params
      ? "?" + new URLSearchParams(params).toString()
      : "";
    return await this.request(`${endpoint}${queryString}`, {
      ...options,
      method: "GET",
    });
  }

  async post(endpoint, data, options = {}) {
    return await this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Tambahkan metode lain seperti put, delete, dll
}
