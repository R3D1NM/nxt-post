import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { User } from './model/User';
import axios from 'axios';

export async function middleware(request: NextRequest) {
    // No cookie available, go to login page
    const isRootPath = request.nextUrl.pathname === '/';
    const cookie = request.cookies.get('token')?.value
    
    // In Login page
    if(isRootPath){
        if(cookie){
            return NextResponse.redirect(new URL('/main', request.url))
        }else{
            return
        }
    }
    
    if (!cookie) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    axios.defaults.headers.common["Authorization"] = `Bearer ${cookie}`
    // console.log(axios.defaults.headers.common);
    
    fetch(new URL('/api/auth/validate',request.url),{ method: "GET", headers: { 'Authorization': `Bearer ${cookie}` }, })
    .then((res)=>res.json())
    .then((data) => {
        const currentUser:User = data
        // console.log(currentUser);
        
        if (!currentUser) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    })
    .catch((err)=>{
        console.log(err);
        
    })

}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}