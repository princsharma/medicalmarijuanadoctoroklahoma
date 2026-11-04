import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("application-guide");

export const generateMetadata = route.generateMetadata;
export default route.default;
