// app/middleware.ts
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const response = NextResponse.next();

  // Allow all origins (you can specify your origin for more security in production)
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return response;
  }

  return response;
}

