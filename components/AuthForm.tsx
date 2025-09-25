"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import Button from "./Button";
import CustomFileInput from "./CustomFileInput";

const formSchema = z.object({
  firstName: z.string().min(8, {
    message: "First Name must be at least 8 characters.",
  }),
  lastName: z.string().min(8, {
    message: "Last Name must be at least 8 characters.",
  }),
  userName: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid phone number.",
    }),
  profilePicture: z
    .instanceof(File)
    .optional(),
    password: z.string().min(8, {
        message: "Username must be at least 8 characters.",
      }),
});

const AuthForm = ({ type }: { type: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {type === "account" && (
          <div className="w-full md:flex justify-between items-start">
            <div>
              <CustomInput
                className="mb-3"
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
              />
              <CustomInput
                className="mb-3"
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
              />
              <CustomInput
                className="mb-3"
                control={form.control}
                name="userName"
                label="Username"
                placeholder="Enter your username"
              />
              <CustomInput
                className="mb-3"
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email address"
              />
              <CustomInput
                control={form.control}
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mt-5 md:mr-24 md:mt-0">
              <CustomFileInput
                // control={form.control}
                // name="profilePicture"
              />
            </div>
          </div>
        )}

        {type === "security" && (
            <>
              <CustomInput
                control={form.control}
                name="password"
                label="Old Password"
                placeholder="**********"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="New Password"
                placeholder="**********"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Retype Password"
                placeholder="**********"
              />
            </>
        )}

        {type === "sign-in" && (
          <>
             <CustomInput
                className="mb-3"
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email address"
              />

            <CustomInput
                control={form.control}
                name="password"
                label="New Password"
                placeholder="**********"
              />

              <div className="flex gap-3">
              <input type="checkbox" />
              <p>Keep me signed in</p>
              </div>

              <Button 
              text="Login"
              className="w-full mx-auto md:mx-0 py-2 bg-[#299D91] text-[#ffffff]"
              />

              <p className="text-center text-[#AAAEB3]">or sign in with</p>

              <Button
               text="Continue with Google"
              className="w-full mx-auto md:mx-0 py-2 bg-[#E4E7EB] text-[#4B5768]"
              />

              <p className="text-[#299D91] text-center font-bold">Create an account</p>
          </>
        )}

      {type === "sign-up" && (
          <>
            <h3 className="font-extrabold text-sm text-[#191919] tect-center">Create an account</h3>
             <CustomInput
                className="mb-3"
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="Enter your First Name"
              />

             <CustomInput
                className="mb-3"
                control={form.control}
                name="lastName"
                label="Lsst Name"
                placeholder="Enter your Lsst Name"
              />

             <CustomInput
                className="mb-3"
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email address"
              />

            <CustomInput
                control={form.control}
                name="password"
                label="New Password"
                placeholder="**********"
              />

              <p>By continuing, you agree to our <span className="text-[#299D91]">terms of service</span> </p>

              <Button 
              text="Sign up"
              className="w-full text-center mx-auto md:mx-0 py-2 bg-[#299D91] text-[#ffffff]"
              />

              <p className="text-center text-[#AAAEB3]">or sign up with</p>

              <Button
               text="Continue with Google"
              className="w-full text-center mx-auto md:mx-0 py-2 bg-[#E4E7EB] text-[#4B5768]"
              />

              <p className="text-[#C1C3C7] text-center font-bold">Already have an account <span className="text-[#299D91] text-center font-bold">Sign in here</span></p>
          </>
        )}

    {type === "forgot-password" && (
      <>
      <h3 className="font-extrabold text-sm text-[#191919] tect-center">Forgot Password?</h3>
      <p className="text-[ABABAC] text-sm text-center">Enter your email address to get the password reset link</p>
      <CustomInput
        className="mb-3"
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email address"
              />

      <Button
        text="Password Reset"
        className="mx-auto md:mx-0 py-2 px-6 bg-[#299D91] text-[#ffffff]"
      />
      <p className="text-center">Back login</p> 
      </>
    )}

        {type === "security" || type === "account" ? (
          <Button
            text="Update Profile"
            className="mx-auto md:mx-0 py-2 px-6 bg-[#299D91] text-[#ffffff]"
            loadingState={form.formState.isSubmitting}
          />
        ) : null}
      
      </form>
    </Form>
  );
};

export default AuthForm;
