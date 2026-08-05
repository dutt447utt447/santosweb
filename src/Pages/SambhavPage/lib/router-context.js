import { createContext, useContext } from "react";

export const RouterContext = createContext(null);

export function normalizePath(path) {
  if (!path || path === "") return "/";
  const cleanPath = path.split("#")[0].split("?")[0] || "/";
  return cleanPath.length > 1 ? cleanPath.replace(/\/+$/, "") : cleanPath;
}

export function useLocation() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useLocation must be used inside RouterProvider");
  }

  return { pathname: context.pathname };
}
