import { Button } from "../components/common/button";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Register() {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  renderCount++;
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo/"
          />
          Eventnity
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create and account ({renderCount / 2})
            </h1>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
              className="space-y-4 md:space-y-6"
              noValidate
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email format",
                    },
                    validate: (fieldValue) => {
                      return (
                        fieldValue !== "dindahaf@gmail.com" ||
                        "Enter a different address"
                      );
                    },
                  })}
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Password
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.password?.message}
                </p>
              </div>
              <div>
                <label
                  htmlFor="cofirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "confirm password is required",
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <p className="text-red-500 text-xs text-left">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    {...register("checkbox", {
                      required: {
                        value: true,
                        message:
                          "please accept the terms & conditions to register an account",
                      },
                    })}
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="terms" className="font-light text-gray-500 ">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline "
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                  <p className="text-red-500 text-xs text-left bg-[#fdf0f2] rounded-[3px] p-1.5">
                    {errors.checkbox?.message}
                  </p>
                </div>
              </div>
              <Button
                type={"submit"}
                className={
                  "w-full lg:rounded-lg lg:px-5 lg:py-2.5 text-center md:text-sm"
                }
                variant={"primary"}
              >
                Create an account
              </Button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Login here
                </a>
              </p>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </div>
    </div>

    // <section className="bg-gray-50">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <a
    //       href="#"
    //       className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
    //     >
    //       <img
    //         className="w-8 h-8 mr-2"
    //         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
    //         alt="logo/"
    //       />
    //       Eventnity
    //     </a>
    //     <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
    //           Create and account
    //         </h1>
    //         <form className="space-y-4 md:space-y-6" action="#">
    //           <div>
    //             <label
    //               for="email"
    //               className="block mb-2 text-sm font-medium text-gray-900 "
    //             >
    //               Your email
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
    //               placeholder="name@company.com"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="password"
    //               className="block mb-2 text-sm font-medium text-gray-900 "
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="••••••••"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="confirm-password"
    //               className="block mb-2 text-sm font-medium text-gray-900 "
    //             >
    //               Confirm password
    //             </label>
    //             <input
    //               type="confirm-password"
    //               name="confirm-password"
    //               id="confirm-password"
    //               placeholder="••••••••"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
    //               required=""
    //             />
    //           </div>
    //           <div className="flex items-start">
    //             <div className="flex items-center h-5">
    //               <input
    //                 id="terms"
    //                 aria-describedby="terms"
    //                 type="checkbox"
    //                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
    //                 required=""
    //               />
    //             </div>
    //             <div className="ml-3 text-sm">
    //               <label
    //                 for="terms"
    //                 className="font-light text-gray-500 "
    //               >
    //                 I accept the{" "}
    //                 <a
    //                   className="font-medium text-primary-600 hover:underline "
    //                   href="#"
    //                 >
    //                   Terms and Conditions
    //                 </a>
    //               </label>
    //             </div>
    //           </div>
    //           <button
    //             type="submit"
    //             className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
    //           >
    //             Create an account
    //           </button>
    //           <Button type={"submit"} className={"w-full lg:rounded-lg lg:px-5 lg:py-2.5 text-center md:text-sm"} variant={"primary"}>
    //           Create an account
    //           </Button>
    //           <p className="text-sm font-light text-gray-500 ">
    //             Aleardy have an account?{" "}
    //             <a
    //               href="#"
    //               className="font-medium text-primary-600 hover:underline "
    //             >
    //               Login here
    //             </a>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Register;
