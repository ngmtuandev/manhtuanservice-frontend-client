import FormCustom from "../components/common/FormCustom";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const methods = useForm();
    const { watch } = methods;

    let template = {
        title: "Đăng ký",
        navigate: [
            {
                to: "/",
                caption: "Trở về trang chủ",
            },
            {
                to: "/signin",
                caption: "Đăng nhập",
            },
        ],
        fields: [
            {
                name: "firstName",
                title: "First Name",
                label: "Tên",
                type: "text",
                description: "Nhập Tên của bạn",
                validate: {
                    required: "Tên là bắt buộc",
                    maxLength: {
                        value: 20,
                        message: "Tên không được dài quá 20 kí tự",
                    },
                    pattern: {
                        value: /\w+/,
                        message: "Vui lòng nhập tên của bạn",
                    },
                },
            },
            {
                name: "lastName",
                title: "Last Name",
                label: "Họ",
                type: "text",
                description: "Nhập Họ của bạn",
                validate: {
                    required: "Họ là bắt buộc",
                    maxLength: {
                        value: 20,
                        message: "Họ không được dài quá 20 kí tự",
                    },
                },
            },
            {
                name: "email",
                title: "Email",
                label: "Địa chỉ Email",
                type: "email",
                description: "Nhập địa chỉ email của bạn",
                validate: {
                    required: "Email là bắt buộc",
                    maxLength: 40,
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Email không hợp lệ",
                    },
                },
            },
            {
                name: "phone",
                title: "Phone Number",
                label: "Số điện thoại",
                type: "phone",
                description: "Nhập số điện thoại của bạn",
                validate: {
                    required: "Số điện thoại là bắt buộc",
                    maxLength: 20,
                    pattern: {
                        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                        message: "Số điện thoại không hợp lệ!",
                    },
                },
            },
            {
                name: "password",
                title: "Password",
                label: "Mật khẩu",
                type: "password",
                description: "Nhập mật khẩu",
                validate: {
                    required: "Mật khẩu là bắt buộc",
                    maxLength: 20,
                    pattern: {
                        value: /^.{8,}$/,
                        message: "Mật khẩu phải hơn 8 kí tự",
                    },
                },
            },
            ,
            {
                name: "passwordConfirm",
                title: "passwordConfirm",
                label: "Nhập lại mật khẩu",
                type: "password",
                description: "Vui lòng nhập lại mật khẩu",
                validate: {
                    required: "Mật khẩu là bắt buộc",
                    maxLength: 20,
                    validate: (val: string) => {
                        if (watch("password") != val) {
                            return "Mật khẩu nhập lại không đúng";
                        }
                    },
                },
            },
        ],
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirm: "",
        },
    };

    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <FormCustom template={template} onSubmitHandle={() => { }} />
            </div>
        </>
    );
};

export default SignUpPage;
