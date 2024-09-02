import { useMutation } from "react-query";
import { apiLogin } from "../../service";
import { TLogin } from "../../types";

export const useLogin = () => {
    return useMutation({
        mutationFn: (loginInfo: TLogin) => apiLogin(loginInfo),
    });
};