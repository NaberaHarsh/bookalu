export function authHeader() {
  const user = JSON.parse(localStorage.getItem("token") || "{}");

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.idToken };

    // for Node.js Express back-end
    return {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Authorization": "Bearer" + " " + user.accessToken,
     
    };
  } else {
    return {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };
  }
}

// export const  nonAuthHeader =  {
//   "Content-Type": "application/x-www-form-urlencoded",
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
// }
