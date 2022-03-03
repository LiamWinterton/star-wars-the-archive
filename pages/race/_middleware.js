import { NextResponse } from "next/server"

export async function middleware(req) {
	if(req.page.name === "/race" || !req.page.name) {
		const url = req.nextUrl.clone()

		url.pathname = "/race/1"

		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}