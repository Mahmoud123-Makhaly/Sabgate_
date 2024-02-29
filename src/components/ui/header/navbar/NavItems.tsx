'use client';
import React, { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavLink } from 'reactstrap';
import clsx from 'clsx';
import { DropDown } from '@components';
import MegaMenu from '../../../common/atoms/mega-menu/MegaMenu';
import { MenuItem } from 'primereact/menuitem';
interface ILink {
  links: Array<{
    name: string;
    type?: 'link' | 'dropdown' | 'mega-menu';
    href?: string;
    icon?: React.ReactNode;
    children?: Array<ReactNode>;
    items?: MenuItem[];
    megaClassName?: string;
    megaChildren?: ReactNode;
  }>;
}
const NavItems = (props: ILink) => {
  const { links } = props;
  const [navMenu, setNavMenu] = useState('');

  const pathname = usePathname();
  const currentPathname = pathname.split('/').slice(2).join('/'); // Remove the locale

  return (
    <React.Fragment>
      {links.map((link, index) => {
        const navLinkPathname = link.href?.slice(1);
        return (
          <React.Fragment key={index}>
            {link.type === 'mega-menu' ? (
              <MegaMenu className={link.megaClassName} items={link.items!}>
                {link.megaChildren}
              </MegaMenu>
            ) : link.type === 'dropdown' ? (
              <DropDown className="text-no-wrap" key={index} title={link.name} menuItems={link.children!} />
            ) : (
              <NavLink
                href={link.href || undefined}
                className={clsx({
                  active: currentPathname === navLinkPathname,
                })}
                onClick={() => {
                  setNavMenu(navMenu === `${index}` ? '' : `${index}`);
                }}
              >
                <p className="navlink-name">{link.name}</p>
              </NavLink>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default NavItems;
