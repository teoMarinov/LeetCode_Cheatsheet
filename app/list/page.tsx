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

const ListEntries = () => {
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
   router.push('new')
    // axios
    //   .post("/api/newentry", {
    //     ...values,
    //     userId: session?.user?.id,
    //   })
    //   .then((res) => console.log(res));
  }

  const updateForm = (e: any) => {
    setPosition(e);
    form.setValue("difficulty", e);
  };

  return (
 <div>listing</div>
  );
};

export default ListEntries;
