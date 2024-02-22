/**
 * Array of all the routes accessable without authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 *  Array of all the routes used for authentication
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefixare used for API authernication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path while logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/list";
