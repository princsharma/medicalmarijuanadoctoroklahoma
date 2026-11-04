import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("dosage-and-usage");

export const generateMetadata = route.generateMetadata;
export default route.default;
