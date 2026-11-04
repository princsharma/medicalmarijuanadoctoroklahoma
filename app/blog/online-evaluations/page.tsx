import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("online-evaluations");

export const generateMetadata = route.generateMetadata;
export default route.default;
