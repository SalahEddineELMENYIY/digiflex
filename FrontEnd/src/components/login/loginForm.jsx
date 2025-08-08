import { email, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
    email: z.string().email().min(8).max(50),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
});

export default function LoginForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    function onSubmit(values) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="capitalize">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
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
                            <FormLabel className="capitalize">
                                password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type={"password"}
                                    placeholder="Str0ng#pa55w0Rd!"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                at least 8 characters (12 recommended). Use a
                                combo of uppercase letters, lowercase letters,
                                numbers, and even some special characters (!, @,
                                $, %, ^, &, *, +, #).
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="capitalize">
                                confirm password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type={"password"}
                                    placeholder="confirm password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
