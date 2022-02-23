import { NextResponse } from "next/server"

export async function middleware(req) {
	console.log(req)

	if(req.page.name === "/people" || !req.page.name) {
		return NextResponse.redirect("/people/1")
	}

	return NextResponse.next()
}