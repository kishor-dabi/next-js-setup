import { NextRequest, NextResponse } from "next/server";

// we are not exporting by default
export async function middleware(req:NextRequest) {
  let userData:any = localStorage.getItem('userData');

  // console.log(' ---- middleware call ---')
  // if(userData) userData = JSON.parse(userData)

  // const token = userData.accessToken; //req ? req.cookies?.token : null;
  // // if profile exists you want to continue. Also
  // // maybe user sends request for log-in, and if a user wants to login, obviously it has no token
  // const { pathname } = req.nextUrl;
  // if (
  //   // whatever your api route for login is
  //   pathname.includes("/api/login") || token 
  // ) {
  //   return NextResponse.next();
  // }

  
  // if (!token && pathname !== "/login") {
  //   // since you want to redirect the user to "/"
  //   return NextResponse.redirect("/login");
  // }
}