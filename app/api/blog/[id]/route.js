import { deleteBlog } from "@/app/utils/database/deleteTask";
import { NextResponse } from "next/server";

export async function DELETE(__, {params}){
  const {id} = await params;

  const error = await deleteBlog(id);
  return NextResponse.json({error})

}