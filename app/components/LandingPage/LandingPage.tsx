"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { useState } from "react";
import Header from "./Header";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const code = `var isMatch = function(s, p) {
    var lenS = s.length;
    var lenP = p.length;
    var map = {};
  
    return check(0, 0);
  
    function check(idxS, idxP) {
      if (map[idxS + ':' + idxP] !== undefined) return map[idxS + ':' + idxP];
      if (idxS > lenS) return false;
      if (idxS === lenS && idxP === lenP) return true;
  
      if (p[idxP] === '.' || p[idxP] === s[idxS]) {
        map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
          check(idxS + 1, idxP) || check(idxS, idxP + 2) :
          check(idxS + 1, idxP + 1);
      } else {
        map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
          check(idxS, idxP + 2) : false;
      }
      return map[idxS + ':' + idxP];
    }
  }`;
  const text = `The function isMatch takes two parameters: s (the input string) and p (the pattern to match against).
It initializes variables lenS and lenP to store the lengths of the input string s and pattern p, respectively.
It initializes an empty object map to cache the results of subproblems to avoid redundant computations.
The solution utilizes a recursive helper function check to perform the matching. This function takes two parameters: idxS (the current index in the input string s) and idxP (the current index in the pattern p).
The function check returns true if the matching covers the entire input string and pattern (idxS === lenS and idxP === lenP).
If the result for the current indices idxS and idxP has been computed previously and stored in the cache (map), it retrieves the result from the cache to avoid redundant computations.
If the characters at the current indices in s and p match (or . is encountered in the pattern, which matches any single character), it recursively checks the next characters in s and p.
If the next character in the pattern is *, it handles the zero or more occurrences of the preceding element by either advancing in the pattern without consuming any characters in s (check(idxS, idxP + 2)) or consuming one or more characters in s (check(idxS + 1, idxP)).
If the characters do not match, and the next character in the pattern is *, it advances in the pattern to skip the current character and *.
If the characters do not match and there is no * following the current character in the pattern, it returns false.
The result for the current indices idxS and idxP is stored in the cache before returning it`;

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="pt-60 flex flex-col gap-y-10 w-[98%]">
        <h1 className="text-7xl text-center font-bold">
          LeetCode_
          <span
            className="
        block 
        text-transparent 
        bg-clip-text 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-violet-400 to-violet-700"
          >
            CheatSheet
          </span>
        </h1>
        <h3 className="text-4xl text-center font-semibold">
          Your{" "}
          <span
            className=" 
        text-transparent 
        bg-clip-text 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-violet-400 to-violet-700"
          >
            CheatSheet
          </span>{" "}
          to write down the solutions for all LeetCode problems you{"'"}ve
          solved!
        </h3>

        <Table className="mb-14 border-b border-gray-300 shadow-md">
          <TableHeader>
            <TableRow className=" divide-x divide-gray-500">
              <TableHead className="w-[11%]">Name</TableHead>
              <TableHead className="w-[5%]">Difficulty</TableHead>
              <TableHead className="w-[5%]">Date</TableHead>
              <TableHead className="w-[37%]">Code</TableHead>
              <TableHead className="w-[37%]">Description</TableHead>
              <TableHead className="w-[2%]">Expand</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className=" divide-x divide-gray-500">
              <TableCell className="font-medium text-center">
                <a
                  className="underline hover:text-sky-700"
                  href="https://leetcode.com/problems/valid-anagram/description/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Valid Anagram
                </a>
              </TableCell>
              <TableCell className="font-medium bg-red-600 text-center">
                <div>Hard</div>
              </TableCell>
              <TableCell className="text-center">
                <time>02/21/2024</time>
              </TableCell>
              <TableCell>
                <pre
                  className={clsx(
                    `overflow-hidden font-medium text-wrap pl-2`,
                    isOpen || "h-[55px]"
                  )}
                >
                  <code className="text-lg">{code}</code>
                </pre>
              </TableCell>
              <TableCell className="">
                <pre
                  className={clsx(
                    `overflow-hidden text-wrap`,
                    isOpen || "h-[55px]"
                  )}
                >
                  <p className="font-medium text-lg">{text}</p>
                </pre>
              </TableCell>
              <TableCell
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer "
              >
                <div className="flex flex-col items-center cursor-pointer">
                  {isOpen ? <SlArrowUp /> : <SlArrowDown />}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LandingPage;
