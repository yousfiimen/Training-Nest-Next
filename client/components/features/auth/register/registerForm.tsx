"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Lottie from "lottie-react";
import loginLottie from "@/assets/login.json";
import { registerValues, registerSchema } from "@/types/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
interface IregisterForm {}

export default function registerForm({}: IregisterForm) {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<registerValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      birthday: "",
    },
  });
  async function onSubmitHandler  (values: registerValues) {
    const res = await fetch('https://api.example.com/...')

   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return console.log(res.json());
  };

  return (
    <div className="flex sm:flex-row lg:w-7/12 mx-auto custom-box-shadow mt-5">
      <div className="flex-1 p-4 hidden lg:block">
        <div className="w-full h-auto   lg:block  bg-cover rounded-l-lg">
          <Lottie animationData={loginLottie} />
        </div>
      </div>

      <div className="flex-1 p-4  flex items-center justify-center">
        <div className="w-full p-5">
          <div>
            <div className="mb-4 md:mr-2 md:mb-0">
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitHandler)}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="*********"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="************"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="birthday"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Birthday</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="01/01/2001"
                              type="date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="my-3 float-right">
                      <Button type="submit" loading={loading}>
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
