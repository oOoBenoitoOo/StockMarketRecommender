import { RecommendationKeys } from '../enum/recommendation.enum';

export interface Recommendation {
    date: Date;
    price: number;
    countPosts: number;
    recommendation: RecommendationKeys;
}
