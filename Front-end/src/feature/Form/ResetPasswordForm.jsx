import { MdLock } from "react-icons/md";
import FormInput from "./FormInput.jsx";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../../ui/FormError.jsx";
import toast from "react-hot-toast";
import { ResetPassSchema } from "../../utils/ResetPassSchema.js";
import { ResetPassAPI } from "../../services/apiResetPassword.js";

const onResetPassSubmit = async (data, token) => {
  try {
    const res = await ResetPassAPI(data, token);
    return res;
  } catch (err) {
    return false;
  }
};

function ResetPassForm() {
  const { token } = useParams();

  const ResetPassHook = useForm({
    resolver: zodResolver(ResetPassSchema),
  });
  return (
    <form
      className="space-y-4 md:space-y-6 text-right"
      onSubmit={ResetPassHook.handleSubmit(async (data) => {
        const res = await onResetPassSubmit(data, token);

        if (res.status === "success") {
          ResetPassHook.reset();
          toast.success(res.message);
        }
      })}
    >
      {/* Email input */}
      {/* password field */}
      <FormInput
        type={"password"}
        name={"password"}
        label={"Password"}
        id={"SignUpPassword"}
        icon={<MdLock></MdLock>}
        register={ResetPassHook.register}
      ></FormInput>
      <FormError
        msg={ResetPassHook.formState?.errors?.password?.message}
      ></FormError>

      {/* confirm Password */}
      <FormInput
        type={"password"}
        name={"confirmPassword"}
        label={"Confirm Password"}
        id={"SignUpConfirmPassword"}
        icon={<MdLock></MdLock>}
        register={ResetPassHook.register}
      ></FormInput>
      <FormError
        msg={ResetPassHook.formState?.errors?.confirmPassword?.message}
      ></FormError>
      <FormInput
        type={"submit"}
        value={ResetPassHook.formState.isSubmitting ? "Loading..." : "Continue"}
      ></FormInput>

      <p className="text-sm font-light text-gray-500 text-left">
        Did you remmeber the Password?{" "}
        <Link to={"/login"}>
          <span className="font-medium text-gray-600 hover:underline hover:text-black ">
            login
          </span>
        </Link>
      </p>
      {/* <DevTool control={ForgotPassHook.control} /> */}
    </form>
  );
}

export default ResetPassForm;
