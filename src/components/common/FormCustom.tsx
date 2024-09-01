
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

export type Field = {
  label: string;
  placeholder: string;
  variant: "flat" | "faded" | "bordered" | "underlined" | undefined;
  description: string;
  type: string;
  name: string;
  validate: any;
};

const FormCustom = ({ template, onSubmitHandle }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: template.defaultValues,
  });

  const onSubmit = (data: any) => {
    onSubmitHandle(data)
      .then((status: boolean) => {
        if (status === true) {
          reset();
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const inputRegister = (name: string, validate: any) => {
    if (validate.validate) {
      return register(name, {
        required: "Mật khẩu là bắt buộc",
        maxLength: 20,
        validate: (val: string) => {
          if (watch("password") != val) {
            return "Mật khẩu không giống";
          }
        },
      });
    }
    return register(name, { ...validate });
  };

  const renderInputs = (fields: Field[]) => {
    return fields?.map((field: Field, key: number) => {
      const error = errors?.[field?.name]; // Access the error object for the current field
      let errorMessage: string | undefined = undefined;
      if (error) {
        if (typeof error === 'string') {
          errorMessage = error; // If error is a string, use it directly
        } else if (error.message) {
          errorMessage = `${error.message}`; // If error is a FieldError object, use its message property
        }
      }
      return (
        <div key={key} className="flex flex-col w-full max-w-xs gap-4">
          <Input
            size="sm"
            className="min-w-[18rem] my-1"
            label={field?.label}
            placeholder={field?.placeholder}
            variant="bordered"
            type={field?.type}
            isInvalid={error ? true : false}
            description={field?.description}
            errorMessage={errorMessage}
            {...inputRegister(field?.name, field?.validate)}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen overflow-auto ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start shadow-2xl px-14 py-8 rounded-lg bg-white"
      >
        <h1 className="text-2xl font-bold mb-4">{template.title}</h1>
        {renderInputs(template.fields)}
        <Button color="primary" type="submit">
          {template.title}
        </Button>
        <div className="mt-2 flex justify-between w-full">
          {template.navigate && template.navigate.map((item: any, index: number) => (
            <Link key={index} to={item?.to} className="text-sm text-slate-500 hover:text-blue-600 ">{item?.caption}</Link>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FormCustom;
