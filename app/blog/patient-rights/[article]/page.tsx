import { createCategoryArticlePage } from "@/lib/blog-category-routes";

const route = createCategoryArticlePage("patient-rights");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.default;
