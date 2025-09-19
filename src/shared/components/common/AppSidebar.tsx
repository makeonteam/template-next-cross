"use client";
import { useState } from "react";
import {
  ChevronDownIcon,
  EllipsisIcon,
  SettingsIcon,
  ImportIcon,
} from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarFooter,
} from "@components/shadcn/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@components/shadcn/ui/dropdown-menu";
import { Input } from "@components/shadcn/ui/input";
import { Button } from "@components/shadcn/ui/button";

import SidebarToggler from "@components/common/SidebarToggler";
import { BackwardAndForward } from "@components/common/AppTopbar";

function AppSidebar({ className }: React.ComponentProps<typeof Sidebar>) {
  const [workspace, setWorkspace] = useState("West Wong");
  const mockTabs = [...Array(40)];

  return (
    <Sidebar className={className}>
      <SidebarHeader className="pb-0">
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-between">
            <SidebarToggler />
            <BackwardAndForward />
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <span>West Wong</span>
                  <ChevronDownIcon className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-(--radix-popper-anchor-width)">
                <DropdownMenuRadioGroup
                  value={workspace}
                  onValueChange={setWorkspace}
                >
                  <DropdownMenuRadioItem value="West Wong">
                    West Wong
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Galaxy Insect">
                    Galaxy Insect
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <Input type="text" placeholder="Search" className="h-8" />
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel>Apps</SidebarGroupLabel>
          <SidebarGroupAction className="top-1.5 right-1">
            <EllipsisIcon /> <span className="sr-only">Setting</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-[1px]">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/boards">Boards</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/notes">Notes</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup className="h-full">
          <SidebarGroupLabel>Tabs</SidebarGroupLabel>
          <SidebarGroupAction>
            <EllipsisIcon /> <span className="sr-only">Setting</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-[1px]">
              {mockTabs.map((_, index) => {
                const tab = {
                  id: index,
                  name: `Note ${index + 1}`,
                };
                return (
                  <SidebarMenuItem key={tab.id}>
                    <SidebarMenuButton asChild>
                      <Link href={`/notes?id=${tab.id + 1}`}>{tab.name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-between">
            <Button variant="ghost" size="icon">
              <SettingsIcon className="size-4.5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ImportIcon className="size-4.5" />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
