"use client";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
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
  DropdownMenuItem,
} from "@components/shadcn/ui/dropdown-menu";

import SidebarToggler from "@components/common/SidebarToggler";
import { BackwardAndForward } from "@components/common/AppTopbar";
import { Input } from "../shadcn/ui/input";

import { useRouter } from "next/navigation";

function AppSidebar({ className }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const tabs = [...Array(40)];

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
                  West Wong
                  <ChevronDownIcon className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-(--radix-popper-anchor-width)">
                <DropdownMenuItem>West Wong</DropdownMenuItem>
                <DropdownMenuItem>Galaxy Insect</DropdownMenuItem>
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
            <PlusIcon /> <span className="sr-only">Add app</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-[1px]">
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    router.push("/boards");
                  }}
                >
                  Boards
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    router.push("/notes");
                  }}
                >
                  Notes
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
            <PlusIcon /> <span className="sr-only">Add app</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-[1px]">
              {tabs.map((_, index) => {
                const tab = {
                  id: index,
                  name: `Note ${index + 1}`,
                };
                return (
                  <SidebarMenuItem key={tab.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        router.push(`/notes?id=${tab.id + 1}`);
                      }}
                    >
                      {tab.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Hello</SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
