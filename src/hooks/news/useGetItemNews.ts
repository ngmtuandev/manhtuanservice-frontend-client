import { useQuery } from "@tanstack/react-query";
import { TGetDetailNews } from "../../types";
import { apiDetailNews } from "../../service";
import { useRecoilState } from "recoil";
import { stateNewsDetail } from "../../store/news-detail-info.store";

export const useGetItemNews = (detailInfo?: TGetDetailNews) => {
    const [newsInfo] = useRecoilState(stateNewsDetail);
    const { data, isLoading } = useQuery({
        queryKey: ["detail_news", newsInfo.newsId],
        queryFn: () => apiDetailNews(detailInfo),
        enabled: true,
    });
    return {
        news_detail: data?.data,
        isLoading,
    };
};