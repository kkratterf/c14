import type { LucideIcon } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { Separator } from '@c14/design-system/components/ui/separator';
import { SheetClose } from "@c14/design-system/components/ui/sheet";
import { SidebarGroup, SidebarMenu, SidebarMenuButton } from "@c14/design-system/components/ui/sidebar"


export const MobileContent = ({ mainItems, secondaryItems,
}: {
    mainItems: {
        title: string;
        url: string;
        icon: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
    secondaryItems: {
        title: string;
        url: string;
        icon: LucideIcon;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}) => {
    const pathname = usePathname();

    return (
        <SidebarGroup className='flex flex-col gap-4 pt-4'>
            <SidebarMenu>
                {mainItems.map((item) => {
                    const isActive = pathname === item.url ||
                        (item.items?.some(subItem => pathname === subItem.url));
                    return (
                        <SheetClose asChild key={item.url}>
                            <Link href={item.url}>
                                <SidebarMenuButton data-active={isActive}>
                                    <item.icon />
                                    {item.title}
                                </SidebarMenuButton>
                            </Link>
                        </SheetClose>
                    );
                })}
            </SidebarMenu>
            <Separator />
            <SidebarMenu>
                {secondaryItems.map((item) => {
                    const isActive = pathname === item.url ||
                        (item.items?.some(subItem => pathname === subItem.url));
                    return (
                        <SheetClose asChild key={item.url}>
                            <Link href={item.url}>
                                <SidebarMenuButton data-active={isActive}>
                                    <item.icon />
                                    {item.title}
                                </SidebarMenuButton>
                            </Link>
                        </SheetClose>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
};