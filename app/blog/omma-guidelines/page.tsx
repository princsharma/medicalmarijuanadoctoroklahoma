import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("omma-guidelines");

export const generateMetadata = route.generateMetadata;
export default route.default;
