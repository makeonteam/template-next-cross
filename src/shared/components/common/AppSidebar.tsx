"use client";
import { useState, Suspense } from "react";
import { ChevronDownIcon, EllipsisIcon, SettingsIcon, ImportIcon, FileIcon } from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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
import LanguageSwitcher from "@components/common/LanguageSwitcher";
import { sidebarAppsConfigs } from "@shared/constants/configs/main";

function AppSidebarContent(_: React.ComponentProps<typeof Sidebar>) {
  const tMain = useTranslations();
  const sidebarApps = sidebarAppsConfigs();
  const [workspace, setWorkspace] = useState("West Wong");
  const mockTabs = [...Array(40)];

  const pathname = usePathname();
  const searchParamsString = useSearchParams().toString();
  const fullPath = searchParamsString ? `${pathname}?${searchParamsString}` : pathname;

  return (
    <>
      <SidebarHeader className="mt-safe pb-0">
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
                <DropdownMenuRadioGroup value={workspace} onValueChange={setWorkspace}>
                  <DropdownMenuRadioItem value="West Wong">West Wong</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Galaxy Insect">Galaxy Insect</DropdownMenuRadioItem>
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
          <SidebarGroupLabel>{tMain("common.sidebar.apps")}</SidebarGroupLabel>
          <SidebarGroupAction className="top-1.5 right-1">
            <EllipsisIcon /> <span className="sr-only">Setting</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-[1px]">
              {sidebarApps.map((app) => {
                const Icon = app.icon;
                return (
                  <SidebarMenuItem key={app.url}>
                    <SidebarMenuButton asChild isActive={fullPath === app.url}>
                      <Link href={app.url}>
                        <Icon />
                        {app.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup className="h-full p-0">
          <div className="sticky px-2 pt-2">
            <SidebarGroupLabel>{tMain("common.sidebar.tabs")}</SidebarGroupLabel>
            <SidebarGroupAction className="top-3.5 right-3">
              <EllipsisIcon /> <span className="sr-only">Setting</span>
            </SidebarGroupAction>
          </div>
          <SidebarGroupContent className="overflow-y-auto px-2 py-0">
            <SidebarMenu className="gap-[1px]">
              {mockTabs.map((_, index) => {
                const tab = {
                  id: index,
                  name: `Note ${index + 1}`,
                };
                return (
                  <SidebarMenuItem key={tab.id}>
                    <SidebarMenuButton asChild isActive={fullPath === `/notes?id=${tab.id + 1}`}>
                      <Link href={`/notes?id=${tab.id + 1}`}>
                        <FileIcon />
                        {tab.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-safe">
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon-sm">
                <SettingsIcon className="size-4.5" /> <span className="sr-only">{tMain("common.action.settings")}</span>
              </Button>
              <LanguageSwitcher />
            </div>
            <Button variant="ghost" size="icon-sm">
              <ImportIcon className="size-4.5" /> <span className="sr-only">{tMain("common.action.import")}</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}

function AppSidebar({ className }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className={className}>
      <Suspense fallback={null}>
        <AppSidebarContent />
      </Suspense>
    </Sidebar>
  );
}

export default AppSidebar;
