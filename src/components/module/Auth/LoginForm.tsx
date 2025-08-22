import Password from "@/components/module/Auth/Password";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type FieldErrors } from "react-hook-form";
import { Link } from "react-router";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./authSchema";

function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };
  const onError = (errors: FieldErrors) => {
    const passwordErrors = errors.password;

    if (passwordErrors) {
      const messages = Array.isArray(passwordErrors.types)
        ? passwordErrors.types
        : [passwordErrors.message];

      messages.forEach((msg) => {
        toast.error(msg);
      });
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className="grid gap-6"
              id="login-form"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@doe.com"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your email.
                    </FormDescription>
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
                      <Password {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" form="login-form">
          Login
        </Button>

        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="underline underline-offset-4">
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
export default LoginForm;
