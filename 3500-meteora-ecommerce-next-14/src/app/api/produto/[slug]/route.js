import { NextResponse } from "next/server";
import { getTodosProdutos } from "@/lib/api";

export async function GET(request, context) {
  const { params } = context;

  const produtos = getTodosProdutos();

  if (!produtos) {
    return new Response(null, { status: 404 });
  }

  const produto = produtos.find(
    produto => produto.id.toString() === params.slug
  );

  if(!produto) {
    return new Response(null, { status: 404 });
  }

  return NextResponse.json({ produto });

}