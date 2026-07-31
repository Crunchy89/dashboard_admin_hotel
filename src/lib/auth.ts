import { AUTH_COOKIE, AUTH_STORAGE_KEY } from "./auth-constants";

export { AUTH_COOKIE, AUTH_STORAGE_KEY };

export type StoredAuthUser = {
  username: string;
};

export function setAuthCookie(token: string, remember = true) {
  const maxAge = remember ? 60 * 60 * 24 * 7 : undefined;
  const parts = [
    `${AUTH_COOKIE}=${encodeURIComponent(token)}`,
    "path=/",
    "SameSite=Lax",
  ];
  if (maxAge) parts.push(`max-age=${maxAge}`);
  document.cookie = parts.join("; ");
}

export function clearAuthCookie() {
  document.cookie = `${AUTH_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

export function saveAuthUser(user: StoredAuthUser) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function loadAuthUser(): StoredAuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredAuthUser;
  } catch {
    return null;
  }
}

export function clearAuthUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
