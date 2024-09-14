import { useQuery } from "@tanstack/react-query";
import { apiInfoUserCurrent } from "../../service";

export const useGetInfoCurrent = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["user-current"],
        queryFn: () => apiInfoUserCurrent(),
        enabled: true,
    });
    return {
        info: data,
        isLoading,
    };
};