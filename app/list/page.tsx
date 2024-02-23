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

import axios from "axios";

const ListEntries = () => {
  const [position, setPosition] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const session = useSession().data;

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
    axios.post("/api/newentry", {
      ...values,
      userId: session?.user?.id
    })
    .then((res) => console.log(res))
    console.log(values);
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
                      className="w-full dark:text-gray-400"
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
                      <DropdownMenuRadioItem value="Easy">
                        Easy
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Medium">
                        Medium
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Hard">
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
          <Button className="w-[400px]" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ListEntries;
