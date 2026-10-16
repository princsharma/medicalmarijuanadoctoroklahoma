import goneUrls from "@/lib/gone-urls.json";

type GoneUrlData = {
  paths: string[];
  pIds: string[];
};

const data = goneUrls as GoneUrlData;

const EXTRA_GONE_PATHS = [
  "/doctors/cheryl-bugailiskis/",
  "/Z5(L%,57R!bX%7B$OoWDVTC%Mz%Zc@W8OofPsMuF2,/l/",
  "/Z5(L%,57R!bX{$OoWDVTC%Mz%Zc@W8OofPsMuF2,/l/",
];

function withSlash(pathname: string) {
  if (!pathname || pathname === "/") return pathname || "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function pathVariants(pathname: string) {
  const variants = new Set<string>([pathname, withSlash(pathname)]);
  for (const value of [...variants]) {
    try {
      variants.add(decodeURIComponent(value));
      variants.add(withSlash(decodeURIComponent(value)));
    } catch {
      /* ignore malformed encodings */
    }
    try {
      variants.add(encodeURI(value));
      variants.add(withSlash(encodeURI(value)));
    } catch {
      /* ignore */
    }
  }
  return variants;
}

export const GONE_PATHS = new Set(
  [...data.paths, ...EXTRA_GONE_PATHS].flatMap((path) => [...pathVariants(path)])
);
export const GONE_P_IDS = new Set(data.pIds);

export function isGoneRequest(pathname: string, searchParams: URLSearchParams) {
  const p = searchParams.get("p");
  if (p && GONE_P_IDS.has(p)) return true;

  return [...pathVariants(pathname)].some((variant) => GONE_PATHS.has(variant));
}
