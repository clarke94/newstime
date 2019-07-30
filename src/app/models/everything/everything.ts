import { Article } from '../article/article';

export interface Everything {
    status: string;
    totalResults: number;
    articles: Article[];
}
