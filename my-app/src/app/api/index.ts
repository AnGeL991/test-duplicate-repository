const API_URL = 'http://localhost:8000/api';

export async function client(
  endpoint: RequestInfo,
  AuthToken?: string,
  data?: any,
  options?: RequestInit
) {
  const { ...customConfig } = options ?? {};
  const headers = { 'Content-Type': 'application/json' };
  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      ...headers,
      Authorization: AuthToken ? `Bearer ${AuthToken}` : '',
      ...customConfig.headers,
    },
    ...customConfig,
  };
  try {
    const response = await window.fetch(`${API_URL}/${endpoint}`, config);
    let res = await response.json();
    if (response.ok) {
      return res;
    }
    return Promise.reject(res);
  } catch (error: any) {
    return Promise.reject(error ? error.message : data);
  }
}
