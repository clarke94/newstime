import { Article } from '../article/article';

export interface TopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
}
