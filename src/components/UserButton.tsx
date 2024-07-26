"use client";

import { logout } from "@/app/(auth)/actions";
import { useSession } from "@/app/(main)/SessionProvider";
import { cn } from "@/lib/utils";
import { LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* User Avatar */}
        <button className={cn("flex-none rounded-full", className)}>
          <UserAvatar avatarUrl={user.avatarUrl} size={40} />
        </button>
      </DropdownMenuTrigger>
      {/* Logged in as @username */}
      <DropdownMenuContent>
        <DropdownMenuLabel>Logged in as @{user.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* User Profile */}
        <Link href={`/users/${user.username}`}>
          <DropdownMenuItem>
            <UserIcon className="mr-2 size-4" /> Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        {/* User Avatar */}
        <DropdownMenuItem
          onClick={() => {
            logout();
          }}
        >
          <LogOutIcon className="mr-2 size-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
