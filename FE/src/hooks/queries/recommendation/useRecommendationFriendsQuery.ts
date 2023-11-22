import { getRecommendationFriends } from '@/api/recommendation';
import { RecommendationFriend } from '@/types/social';
import { useQuery } from '@tanstack/react-query';

// 추천 친구 목록 조회
const useRecommendationFriendsQuery = () => {
  const query = useQuery<RecommendationFriend[]>({
    queryKey: ['useRecommendationFriendsQuery'],
    queryFn: getRecommendationFriends,
  });

  return query;
};

export default useRecommendationFriendsQuery;
