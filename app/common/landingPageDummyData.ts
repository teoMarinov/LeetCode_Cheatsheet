const dummyData = {
  name: "Valid Anagram",
  link: "https://leetcode.com/problems/valid-anagram/description/",
  difficulty: "Hard",
  date: "02/21/2024",
  code: `var isMatch = function(s, p) {
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
  }`,
  description: `The function isMatch takes two parameters: s (the input string) and p (the pattern to match against).
  It initializes variables lenS and lenP to store the lengths of the input string s and pattern p, respectively.
  It initializes an empty object map to cache the results of subproblems to avoid redundant computations.
  The solution utilizes a recursive helper function check to perform the matching. This function takes two parameters: idxS (the current index in the input string s) and idxP (the current index in the pattern p).
  The function check returns true if the matching covers the entire input string and pattern (idxS === lenS and idxP === lenP).
  If the result for the current indices idxS and idxP has been computed previously and stored in the cache (map), it retrieves the result from the cache to avoid redundant computations.
  If the characters at the current indices in s and p match (or . is encountered in the pattern, which matches any single character), it recursively checks the next characters in s and p.
  If the next character in the pattern is *, it handles the zero or more occurrences of the preceding element by either advancing in the pattern without consuming any characters in s (check(idxS, idxP + 2)) or consuming one or more characters in s (check(idxS + 1, idxP)).
  If the characters do not match, and the next character in the pattern is *, it advances in the pattern to skip the current character and *.
  If the characters do not match and there is no * following the current character in the pattern, it returns false.
  The result for the current indices idxS and idxP is stored in the cache before returning it`,
};
export default dummyData;
