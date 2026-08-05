import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { normalizePath, RouterContext, useLocation } from "./router-context.js";

function normalizeBasePath(basePath) {
  return basePath ? normalizePath(basePath) : "";
}

function stripBasePath(path, basePath) {
  const normalizedPath = normalizePath(path);
  if (!basePath) return normalizedPath;
  if (normalizedPath === basePath) return "/";
  if (normalizedPath.startsWith(`${basePath}/`)) {
    return normalizePath(normalizedPath.slice(basePath.length));
  }
  return normalizedPath;
}

function addBasePath(path, basePath) {
  const normalizedPath = normalizePath(path);
  if (!basePath) return normalizedPath;
  return normalizedPath === "/" ? basePath : `${basePath}${normalizedPath}`;
}

export function RouterProvider({ children, basePath = "" }) {
  const resolvedBasePath = useMemo(() => normalizeBasePath(basePath), [basePath]);
  const [pathname, setPathname] = useState(() =>
    stripBasePath(window.location.pathname, normalizeBasePath(basePath)),
  );

  useEffect(() => {
    const handlePopState = () => setPathname(stripBasePath(window.location.pathname, resolvedBasePath));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [resolvedBasePath]);

  const navigate = useCallback((to) => {
    const nextPath = normalizePath(to);
    if (nextPath === pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    window.history.pushState({}, "", addBasePath(nextPath, resolvedBasePath));
    setPathname(nextPath);
  }, [pathname, resolvedBasePath]);

  const createHref = useCallback((to) => addBasePath(to, resolvedBasePath), [resolvedBasePath]);

  const value = useMemo(() => ({ createHref, pathname, navigate }), [createHref, navigate, pathname]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function Link({ to, onClick, children, ...props }) {
  const context = useContext(RouterContext);
  const href = context.createHref(to);

  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      props.target
    ) {
      return;
    }

    event.preventDefault();
    context.navigate(to);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, end = false, className, children, ...props }) {
  const { pathname } = useLocation();
  const path = normalizePath(to);
  const isActive = end ? pathname === path : pathname === path || pathname.startsWith(`${path}/`);
  const resolvedClassName =
    typeof className === "function"
      ? className({ isActive })
      : [className, isActive ? "is-active" : ""].filter(Boolean).join(" ");

  return (
    <Link to={to} className={resolvedClassName} {...props}>
      {typeof children === "function" ? children({ isActive }) : children}
    </Link>
  );
}
