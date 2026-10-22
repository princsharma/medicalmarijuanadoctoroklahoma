import { JsonLd } from "@/components/seo/json-ld";
import { logoSchema, organizationSchema, websiteSchema } from "@/lib/seo";

/** Global identity schema rendered on the server without client JS overhead */
export function SiteJsonLd() {
  return <JsonLd data={[organizationSchema(), logoSchema(), websiteSchema()]} />;
}
