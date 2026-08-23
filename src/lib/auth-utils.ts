import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function getAuthSession() {
  return getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getAuthSession();
  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return user;
}

export async function requireAuth(req: NextRequest) {
  const session = await getAuthSession();
  if (!session?.user) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return user;
}

export async function requireAdmin(req: NextRequest) {
  const user = await requireAuth(req);
  if (!user || user.role !== "ADMIN") {
    return null;
  }
  return user;
}

export function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export function forbidden() {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export function notFound() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export function logAudit(
  userId: string | null | undefined,
  action: string,
  resourceType: string,
  resourceId?: string,
  details?: any,
  ipAddress?: string
) {
  // Async, don't await
  prisma.auditLog
    .create({
      data: {
        userId: userId || undefined,
        action,
        resourceType,
        resourceId,
        details,
        ipAddress,
      },
    })
    .catch((e) => console.error("Audit log error:", e));
}
