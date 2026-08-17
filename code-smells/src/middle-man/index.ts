type ArticleRawData = {
  id: string;
  title: string;
  content: string;
  category: CategoryRawData;
};

type CategoryRawData = {
  id: string;
  title: string;
  description: string;
};

interface ArticleService {
  getAllArticles(): Promise<ArticleRawData[]>;
  getArticleById(id: string): Promise<ArticleRawData | null>;
  getArticleByCategory(categoryId: string): Promise<ArticleRawData | null>;
  createArticle(article: ArticleRawData): Promise<void>;
}

interface CategoryService {
  getAllCategories(): Promise<CategoryRawData[]>;
  getCategoryById(id: string): Promise<CategoryRawData | null>;
  createCategory(category: CategoryRawData): Promise<void>;
}

export {};
