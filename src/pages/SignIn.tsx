import { toast } from "react-toastify";
import FormCustom from "../components/common/FormCustom";
import { handleSetLocalStorage } from "../helper/Xfunction";
import withRouter from "../hocs/withRouter";
import { useLogin } from "../hooks";
import { TLogin } from "../types";
import { USER_LOCAL } from "../utils/constant";
import path from "../utils/path";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { isLoginState } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

let template = {
    title: "Đăng nhập",
    navigate: [
        {
            to: "/",
            caption: "Trở về trang chủ",
        },
        {
            to: "/signup",
            caption: "Đăng ký",
        },
    ],
    fields: [
        {
            name: "email",
            title: "Email",
            label: "Email",
            type: "email",
            description: "Nhập Email",
            validate: {
                required: true,
                maxLength: 40,
            },
        },
        {
            name: "password",
            title: "Password",
            label: "Password",
            type: "password",
            description: "Nhập password",
            validate: {
                required: true,
                maxLength: 20,
                pattern: {
                    value: /^.{8,}$/,
                    message: "Mật khẩu phải hơn 8 ký tự",
                },
            },
        },
    ],
    defaultValues: {
        email: "",
        password: "",
    },
};

const SignIn = () => {

    const { mutate: $login } = useLogin();
    const [_, setIsLogin] = useRecoilState(isLoginState);
    const navigate = useNavigate();

    const onSubmitHandle = async (data: TLogin) => {
        $login(data, {
            onSuccess: (response) => {
                if (response?.status) {
                    navigate(path.HOME);
                    handleSetLocalStorage(USER_LOCAL.KEY, response?.token);
                    toast.success("Đăng nhập thành công");
                    setIsLogin(true);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Thất Bại",
                        text: "Đăng nhập thất bại",
                        footer: '<a href="#">Lý do tại sao bạn đăng nhập thất bại?</a>',
                    });
                    setIsLogin(false);
                }
            },
            onError() {
                Swal.fire({
                    icon: "error",
                    title: "Thất Bại",
                    text: "Đăng nhập thất bại",
                    footer: '<a href="#">Lý do tại sao bạn đăng nhập thất bại?</a>',
                });
            },
        });
    };


    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <FormCustom template={template} onSubmitHandle={onSubmitHandle} />
            </div>
        </>
    );
};

export default withRouter(SignIn);
