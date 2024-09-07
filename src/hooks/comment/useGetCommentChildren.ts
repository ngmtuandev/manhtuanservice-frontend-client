import { useQuery } from "react-query";
import { apiGetComment } from "../../service";
import { TFindComment } from "../../types";

export const useGetCommentsChildren = (findCommentInfo: TFindComment) => {

  const { data, isLoading } = useQuery({
    queryKey: ["comments_children"],
    queryFn: () => apiGetComment(findCommentInfo),
    enabled: false
  });
  return {
    comments_children: data?.data,
    isLoading,
  };
};
