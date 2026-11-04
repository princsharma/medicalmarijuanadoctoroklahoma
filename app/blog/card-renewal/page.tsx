import { createCategoryPage } from "@/lib/blog-category-routes";

const route = createCategoryPage("card-renewal");

export const generateMetadata = route.generateMetadata;
export default route.default;
