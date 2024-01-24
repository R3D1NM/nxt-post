import { JwtPayload, jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { User } from './model/User';
import axios from 'axios';

export async function middleware(request: NextRequest) {
    // No cookie available, go to login page
    const cookie = request.cookies.get('token')?.value
    if (!cookie) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${cookie}`
    let currentUser: User
    fetch(new URL('/api/auth/validate',request.url),{ method: "GET", headers: { 'Authorization': `Bearer ${cookie}` }, })
    .then((res)=>res.json())
    .then((data) => {
        currentUser = data
        if (!currentUser) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    })
    .catch((err)=>{
        console.log(err);
        
    })

}

export const config = {
    matcher: ['/main/:path*'],
}