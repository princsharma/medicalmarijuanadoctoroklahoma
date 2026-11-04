import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("license-types");

export const generateMetadata = route.generateMetadata;
export default route.default;
