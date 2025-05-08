import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Récupérer l'URL de l'API depuis les variables d'environnement
// @ts-ignore - Vite injecte automatiquement les variables d'environnement
const API_BASE_URL = import.meta.env?.VITE_API_URL || '/api';

// Fonction pour préfixer les URLs avec l'URL de base de l'API
export function getApiUrl(path: string): string {
  // Si le chemin commence déjà par http/https ou par l'URL de base, ne pas préfixer
  if (path.startsWith('http') || path.startsWith(API_BASE_URL)) {
    return path;
  }
  // Si le chemin commence par /api, remplacer par l'URL de base
  if (path.startsWith('/api')) {
    return `${API_BASE_URL}${path.substring(4)}`;
  }
  // Sinon, préfixer avec l'URL de base
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Utiliser getApiUrl pour s'assurer que l'URL est correcte
  const apiUrl = getApiUrl(url);
  
  const res = await fetch(apiUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Convertir la clé de requête en URL et s'assurer qu'elle est correctement formatée
    const url = getApiUrl(queryKey[0] as string);
    
    const res = await fetch(url, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
