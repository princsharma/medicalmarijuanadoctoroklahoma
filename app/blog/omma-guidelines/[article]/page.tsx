import { createCategoryArticlePage } from "@/lib/blog-category-routes";

const route = createCategoryArticlePage("omma-guidelines");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.default;
