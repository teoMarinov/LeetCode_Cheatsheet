"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

import { Textarea } from "@/components/ui/textarea";

import { FormSchema } from "@/schemas";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import clsx from "clsx";

const NewEntry = () => {
  const [position, setPosition] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const session = useSession().data;
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      urlTo: "",
      difficulty: position,
      code: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    router.push("list");
    axios
      .post("/api/newentry", {
        ...values,
        userId: session?.user?.id,
      })
      .then((res) => console.log(res));
  }

  const updateForm = (e: any) => {
    setPosition(e);
    form.setValue("difficulty", e);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-y-4 gap-x-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-4 col-span-4">
              <FormLabel className="mx-[45%]">Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="urlTo"
          render={({ field }) => (
            <FormItem className="mt-4 col-span-4">
              <FormLabel className="mx-[45%]">Link</FormLabel>
              <FormControl>
                <Input placeholder="Link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="urlTo"
          render={() => (
            <FormItem className="mt-4 col-span-4">
              <FormLabel className="mx-[45%]">Difficulty</FormLabel>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className={clsx(
                        "w-full",
                        position === "Easy" &&
                          " hover:text-green-500 text-green-500",
                        position === "Medium" &&
                          "hover:text-yellow-400 text-yellow-400",
                        position === "Hard" && "hover:text-red-600 text-red-600"
                      )}
                    >
                      {position}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-20">
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={updateForm}
                      className="dark:text-gray-400"
                    >
                      <DropdownMenuRadioItem
                        value="Easy"
                        className="text-green-500"
                      >
                        Easy
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        className=" text-yellow-400"
                        value="Medium"
                      >
                        Medium
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        className=" text-red-600"
                        value="Hard"
                      >
                        Hard
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormControl>
                <Textarea
                  className="h-[600px] text-wrap whitespace-normal flex-none"
                  placeholder="Enter your solution's code..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className=" col-span-6">
              <FormControl>
                <Textarea
                  className="w-full h-[600px] text-wrap whitespace-normal flex-none"
                  placeholder="Give a description of the solution's logic..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-12 flex justify-center">
          <Button variant={"outline"} className="w-[400px]" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewEntry;
