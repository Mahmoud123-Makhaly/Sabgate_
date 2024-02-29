'use client';
import React, { ReactNode, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownProps, DropdownToggle } from 'reactstrap';
interface IDropDown extends DropdownProps {
  title?: string;
  menuItems: Array<string | ReactNode>;
  children?: ReactNode;
  itemClassName?: string;
  menuClassName?: string;
  caret?: boolean;
  headerClassName?: string;
}
const DropDown = (props: IDropDown) => {
  const { menuItems, title, children, itemClassName, menuClassName, headerClassName, caret = true } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <Dropdown isOpen={isOpen} toggle={toggleMenu}>
      <DropdownToggle caret={caret} className={`flex-between ${headerClassName}`}>
        {children}
        {title && <p>{title}</p>}
      </DropdownToggle>
      <DropdownMenu className={`text-nowrap ${menuClassName}`}>
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {typeof item === 'string' ? (
                <DropdownItem className={`w-100 ${itemClassName}`}>{item}</DropdownItem>
              ) : (
                <React.Fragment>{item}</React.Fragment>
              )}
            </React.Fragment>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
