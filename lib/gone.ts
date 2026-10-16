import goneUrls from "@/lib/gone-urls.json";

type GoneUrlData = {
  paths: string[];
  pIds: string[];
};

const data = goneUrls as GoneUrlData;

const EXTRA_GONE_PATHS = ["/doctors/cheryl-bugailiskis/"];

export const GONE_PATHS = new Set([...data.paths, ...EXTRA_GONE_PATHS]);
export const GONE_P_IDS = new Set(data.pIds);

export function isGoneRequest(pathname: string, searchParams: URLSearchParams) {
  const p = searchParams.get("p");
  if (p && GONE_P_IDS.has(p)) return true;

  const normalized =
    !pathname || pathname === "/"
      ? pathname || "/"
      : pathname.endsWith("/")
        ? pathname
        : `${pathname}/`;

  return GONE_PATHS.has(normalized);
}
