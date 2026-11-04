import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("patient-rights");

export const generateMetadata = route.generateMetadata;
export default route.default;
