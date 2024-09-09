import { useInfiniteQuery } from "@tanstack/react-query";
import { apiGetAllNews } from "../../service";
import { TFindNews } from "../../types";

export const useGetNews = (findInfo: TFindNews) => {
    return useInfiniteQuery({
        queryKey: ["news_infinite"],
        queryFn: ({ pageParam }) => {
            return apiGetAllNews({ ...findInfo, page: pageParam || 1 });
        },
        initialPageParam: 1,
        getNextPageParam: ({ data }) => {
            return data?.nextPageToken ?? undefined;
        },
    });
};