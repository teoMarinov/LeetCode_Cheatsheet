"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiMoon, FiSun } from "react-icons/fi";
interface UserSheetProps {
  name: string ;
  email: string ;
  resolvedTheme?: string;
  clickHandler: () => void;
  logOut: () => void;
  toggleTheme: () => void;
}
const UserSheet: React.FC<UserSheetProps> = ({
  name,
  email,
  resolvedTheme,
  clickHandler,
  logOut,
  toggleTheme,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-y-6">
          <SheetTitle className="text-center md:text-5xl text-3xl">
            {name}
          </SheetTitle>
          <SheetDescription className="break-words md:text-3xl text-xl text-center">
            {email}
          </SheetDescription>
        </SheetHeader>

        <Button className="mt-10 w-full" onClick={clickHandler} variant="outline">
          Add new
        </Button>

        <div className="py-10 flex flex-col items-center gap-y-2 md:gap-y-4">
          <p className="md:text-xl">Theme</p>
          {resolvedTheme === "dark" ? (
            <FiMoon size={48} onClick={toggleTheme} />
          ) : (
            <FiSun size={48} onClick={toggleTheme} />
          )}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full" onClick={logOut}>
              Log out
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UserSheet;
