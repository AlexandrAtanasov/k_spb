import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
// import { server } from '../../config'

// import Components
import { ModalCallback } from '../../Modal_Callback/Modal_Callback'
import { ModalContacts } from '../../Modal_Contacts/Modal_Contacts'

import useDocumentScrollThrottled from './useDocumentScrollThrottled'

// import data
import {local} from '../../../data/localization_data/components/Main/Navbar/Navbar'
import {resolvable_menu} from '../../../data/pages/resolvable/resolvable_menu'
import {additional_menu} from '../../../data/pages/additional/additional_menu'

// import menu
import {joints_menu} from '../../../data/menu/joints/joints_menu'
import {spine_menu} from '../../../data/menu/spine/spine_menu'
import {cardiovascular_menu} from '../../../data/menu/cardiovascular/cardiovascular_menu'
import {respiratory_menu} from '../../../data/menu/respiratory/respiratory_menu'
import {other_menu} from '../../../data/menu/other/other_menu'
import {neurological_menu} from '../../../data/menu/neurological/neurological_menu'
//
import {rehabilitation_menu} from '../../../data/menu/rehabilitation/rehabilitation_menu'
import {children_menu} from '../../../data/menu/children/children_menu'
import {for_pregnant_menu} from '../../../data/menu/pregnant/for_pregnant_menu'

// import styles
import style from '../../../styles/components/NavBarComponent.module.scss'


export function NavBarComponent() {

    // scroll logic start
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
    const shadowStyle = shouldShowShadow ? style.shadow : '';
    const hiddenStyle = shouldHideHeader ? style.hidden : '';
    // scroll logic end

    // close dropdown by click outside. start
    const node = useRef();
    
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        
        const basicNavbarNav = document.getElementById("basic-navbar-nav");
        const basicBavbarNavButton = document.getElementById("basic-navbar-nav-button");

        if (basicNavbarNav.classList.contains('show')) {
            basicBavbarNavButton.click();
        } 
        
        // browser info
        // const browser= (function(){
        //     var ua= navigator.userAgent, tem,
        //     M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        //     if(/trident/i.test(M[1])){
        //         tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        //         return 'IE '+(tem[1] || '');
        //     }
        //     if(M[1]=== 'Chrome'){
        //         tem= ua.match(/\b(OPR|Edge?)\/(\d+)/);
        //         if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');            
        //     }
        //     M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        //     if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        //     // return M.join(' ');
        //     return M;
        // })();
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    // close dropdown by click outside. end

const longMenu = useRef(null);

    return (
        <>
            <Navbar
                collapseOnSelect
                className={`${style.header} ${shadowStyle} ${hiddenStyle} ${style.fixedTop}`}
                expand="lg"
                ref={node}
            >
                <Link href={'/'} passHref>
                    <Navbar.Brand>
                        <img
                            alt="logo"
                            src={`/img/main/navbar/Logo.jpg`}
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ??????????????
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    id="basic-navbar-nav-button"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <Link href={'/'} passHref>
                            <Nav.Link>
                                ?????????????? ????????????????
                            </Nav.Link>
                        </Link>
  
                        {/* ?????? ???? ?????????? */}
                        <NavDropdown 
                            title={local.menu_resolvable} 
                            id="basic-nav-dropdown"
                            ref={longMenu}
                            // onClick={handleClickMakeFixedMenu(longMenu)}
                            // onClick={handleClickMakeLongMenu}
                        >
                            <NavDropdown 
                                title="??????????????" 
                                id="basic-nav-dropdown"
                                className={`${style.left_sub} ${style.submenu_margin}`}
                            >
                                {joints_menu.map(menu => {
                                    if (menu.id == 1) {
                                        return (
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                                key={menu.id}
                                            >
                                                <NavDropdown.Item 
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    {menu.title}
                                                </NavDropdown.Item>
                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <div key={menu.id}>
                                                <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                                <Link 
                                                    href={`/resolvable/[pid]`} 
                                                    as={`/resolvable/${menu.pid}`} 
                                                    passHref
                                                >
                                                    <NavDropdown.Item
                                                        className={`${style.lineHeight} ${style.wordBreak} `}
                                                    >
                                                        <div>
                                                            {menu.title}
                                                        </div>
                                                    </NavDropdown.Item>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </NavDropdown>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            
                            {/* ?????????????????????? */}
                            <NavDropdown 
                                title="??????????????????????" 
                                id="basic-nav-dropdown"
                                className={`${style.left_sub} ${style.submenu_margin}`}
                            >
                                {spine_menu.map(menu => {
                                    if (menu.id == 1) {
                                        return (
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                                key={menu.id}
                                            >
                                                <NavDropdown.Item 
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    {menu.title}
                                                </NavDropdown.Item>
                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <div key={menu.id}>
                                                <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                                <Link 
                                                    href={`/resolvable/[pid]`} 
                                                    as={`/resolvable/${menu.pid}`} 
                                                    passHref
                                                >
                                                    <NavDropdown.Item
                                                        className={`${style.lineHeight} ${style.wordBreak} `}
                                                    >
                                                        <div>
                                                            {menu.title}
                                                        </div>
                                                    </NavDropdown.Item>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </NavDropdown>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                         
                            {/* ????????????????-???????????????????? ?????????????????????? */}
                            <NavDropdown 
                                title="????????????????-???????????????????? ??????????????????????" 
                                id="basic-nav-dropdown"
                                className={`${style.left_sub} ${style.submenu_margin}`}
                            >
                                {cardiovascular_menu.map(menu => {
                                    if (menu.id == 1) {
                                        return (
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                                key={menu.id}
                                            >
                                                <NavDropdown.Item 
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    {menu.title}
                                                </NavDropdown.Item>
                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <div key={menu.id}>
                                                <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                                <Link 
                                                    href={`/resolvable/[pid]`} 
                                                    as={`/resolvable/${menu.pid}`} 
                                                    passHref
                                                >
                                                    <NavDropdown.Item
                                                        className={`${style.lineHeight} ${style.wordBreak} `}
                                                    >
                                                        <div>
                                                            {menu.title}
                                                        </div>
                                                    </NavDropdown.Item>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </NavDropdown> 
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            
                            {/* ?????????????????????? ?????????????? ?????????????? */}
                            <NavDropdown 
                                title="?????????????????????? ?????????????? ??????????????" 
                                id="basic-nav-dropdown"
                                className={`${style.left_sub} ${style.submenu_margin}`} 
                            >
                                {respiratory_menu.map(menu => {
                                    if (menu.id == 1) {
                                        return (
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                                key={menu.id}
                                            >
                                                <NavDropdown.Item 
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    {menu.title}
                                                </NavDropdown.Item>
                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <div key={menu.id}>
                                                <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                                <Link 
                                                    href={`/resolvable/[pid]`} 
                                                    as={`/resolvable/${menu.pid}`} 
                                                    passHref
                                                >
                                                    <NavDropdown.Item
                                                        className={`${style.lineHeight} ${style.wordBreak} `}
                                                    >
                                                        <div>
                                                            {menu.title}
                                                        </div>
                                                    </NavDropdown.Item>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </NavDropdown>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />


                            {other_menu.map(menu => {
                                if (menu.id == 1) {
                                    return (
                                        <Link 
                                            href={`/resolvable/[pid]`} 
                                            as={`/resolvable/${menu.pid}`} 
                                            passHref
                                            key={menu.id}
                                        >
                                            <NavDropdown.Item 
                                                className={`${style.lineHeight} ${style.wordBreak} `}
                                            >
                                                {menu.title}
                                            </NavDropdown.Item>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div key={menu.id}>
                                            <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                            >
                                                <NavDropdown.Item
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    <div>
                                                        {menu.title}
                                                    </div>
                                                </NavDropdown.Item>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />

                            {/* ???????????????????????????? ?????????????????????? */}
                            <NavDropdown 
                                title="?????????????????????????????? ??????????????????????" 
                                id="basic-nav-dropdown"
                                className={`${style.left_sub} ${style.submenu_margin}`} 
                            >
                                {neurological_menu.map(menu => {
                                    if (menu.id == 1) {
                                        return (
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                                key={menu.id}
                                            >
                                                <NavDropdown.Item 
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    {menu.title}
                                                </NavDropdown.Item>
                                            </Link>
                                        )
                                    } else {
                                        return (
                                            <div key={menu.id}>
                                                <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                                <Link 
                                                    href={`/resolvable/[pid]`} 
                                                    as={`/resolvable/${menu.pid}`} 
                                                    passHref
                                                >
                                                    <NavDropdown.Item
                                                        className={`${style.lineHeight} ${style.wordBreak} `}
                                                    >
                                                        <div>
                                                            {menu.title}
                                                        </div>
                                                    </NavDropdown.Item>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </NavDropdown>
                           
{/* 
                            {resolvable_menu.map(menu => {
                                if (menu.id == 1) {
                                    return (
                                        <Link 
                                            href={`/resolvable/[pid]`} 
                                            as={`/resolvable/${menu.pid}`} 
                                            passHref
                                            key={menu.id}
                                        >
                                            <NavDropdown.Item 
                                                className={`${style.lineHeight} ${style.wordBreak} `}
                                            >
                                                {menu.title}
                                            </NavDropdown.Item>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div key={menu.id}>
                                            <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                            >
                                                <NavDropdown.Item
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    <div>
                                                        {menu.title}
                                                    </div>
                                                </NavDropdown.Item>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                             */}

                        </NavDropdown>
                        {/* ???????????????????????? ?????????? */}
                        <NavDropdown 
                            title='???????????????????????? ??????????' 
                            id="basic-nav-dropdown"
                            ref={longMenu}
                            // onClick={handleClickMakeFixedMenu(longMenu)}
                            // onClick={handleClickMakeLongMenu}
                        >
                            {rehabilitation_menu.map(menu => {
                                if (menu.id == 1) {
                                    return (
                                        <Link 
                                            href={`/resolvable/[pid]`} 
                                            as={`/resolvable/${menu.pid}`} 
                                            passHref
                                            key={menu.id}
                                        >
                                            <NavDropdown.Item 
                                                className={`${style.lineHeight} ${style.wordBreak} `}
                                            >
                                                {menu.title}
                                            </NavDropdown.Item>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div key={menu.id}>
                                            <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                            >
                                                <NavDropdown.Item
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    <div>
                                                        {menu.title}
                                                    </div>
                                                </NavDropdown.Item>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </NavDropdown>
                        {/* ?????? ?????????? */}
                        <NavDropdown 
                            title='?????? ??????????' 
                            id="basic-nav-dropdown"
                            ref={longMenu}
                            // onClick={handleClickMakeFixedMenu(longMenu)}
                            // onClick={handleClickMakeLongMenu}
                        >
                            {children_menu.map(menu => {
                                if (menu.id == 1) {
                                    return (
                                        <Link 
                                            href={`/resolvable/[pid]`} 
                                            as={`/resolvable/${menu.pid}`} 
                                            passHref
                                            key={menu.id}
                                        >
                                            <NavDropdown.Item 
                                                className={`${style.lineHeight} ${style.wordBreak} `}
                                            >
                                                {menu.title}
                                            </NavDropdown.Item>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div key={menu.id}>
                                            <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                            >
                                                <NavDropdown.Item
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    <div>
                                                        {menu.title}
                                                    </div>
                                                </NavDropdown.Item>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </NavDropdown>
                        {/* ?????? ???????????????????? */}
                        <NavDropdown 
                            title='?????? ????????????????????' 
                            id="basic-nav-dropdown"
                            ref={longMenu}
                            // onClick={handleClickMakeFixedMenu(longMenu)}
                            // onClick={handleClickMakeLongMenu}
                        >
                            {for_pregnant_menu.map(menu => {
                                if (menu.id == 1) {
                                    return (
                                        <Link 
                                            href={`/resolvable/[pid]`} 
                                            as={`/resolvable/${menu.pid}`} 
                                            passHref
                                            key={menu.id}
                                        >
                                            <NavDropdown.Item 
                                                className={`${style.lineHeight} ${style.wordBreak} `}
                                            >
                                                {menu.title}
                                            </NavDropdown.Item>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <div key={menu.id}>
                                            <NavDropdown.Divider className={`${style.dropdownDivider} `} />
                                            <Link 
                                                href={`/resolvable/[pid]`} 
                                                as={`/resolvable/${menu.pid}`} 
                                                passHref
                                            >
                                                <NavDropdown.Item
                                                    className={`${style.lineHeight} ${style.wordBreak} `}
                                                >
                                                    <div>
                                                        {menu.title}
                                                    </div>
                                                </NavDropdown.Item>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </NavDropdown>
                        
                        <NavDropdown 
                            title="???????? ?? ??????????" 
                            id="basic-nav-dropdown"
                        >
                    
                            <Link href={`/price`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ?????????????????? ??????????
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            <Link href={`/sales`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ?????????? ?? ????????????
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <NavDropdown 
                            title="????????????????????" 
                            id="basic-nav-dropdown"
                        >
                            <Link href={`/persons`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ???????? ??????????????
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />

                            {/* <Link href={`/radio`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ??????????????????????????
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  /> */}
                            
                            <Link 
                                // href={`/vacancy`}
                                href={`/[vacancy]`} 
                                as={`/vacancy`}  
                                passHref
                            >
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ????????????????
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            <Link href={`/rules`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ?????????????? ??????????????????
                                </NavDropdown.Item>
                            </Link>
                            {/* <NavDropdown.Divider className={`${style.dropdownDivider} `}  /> */}
                            
                            {/* <Link href={`/methodology`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ?????????????????? ??????????????
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />*/}

                            {/* <Link href={`/organizations`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `} >
                                    ?????????????????????? ??????????????????????
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  /> */}
                            
                            {/* <Link href={`/reviews`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ????????????
                                </NavDropdown.Item>
                            </Link> */}
                            {/* <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            <Link href={`/news`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    {local.menu_news}
                                </NavDropdown.Item>
                            </Link> */}
                        </NavDropdown>

                        {/* <NavDropdown title={local.menu_additional} id="basic-nav-dropdown">
                            {additional_menu.map(menu => {
                                if (menu.id == 1) {
                                    return (
                                    <div key={menu.id}>
                                        <Link href={`/additional/[pid]`} as={`/additional/${menu.pid}`} passHref>
                                            <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `} >
                                                {menu.title}
                                            </NavDropdown.Item>
                                        </Link>
                                    </div>
                                    )
                                } else {
                                    return (
                                        <div key={menu.id}>
                                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                                            <Link href={`/additional/[pid]`} as={`/additional/${menu.pid}`} passHref>
                                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                                    {menu.title}
                                                </NavDropdown.Item>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </NavDropdown>
                        */}
                        
                        <NavDropdown title={local.menu_contacts} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#callback" className={`${style.lineHeight} ${style.wordBreak} `}> 
                                <ModalCallback />
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            <NavDropdown.Item href="#callToCenters" className={`${style.lineHeight} ${style.wordBreak} `}>
                                <ModalContacts />
                            </NavDropdown.Item>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            <Link href={`/contacts`} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    {local.menu_how_to_find_us}
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider className={`${style.dropdownDivider} `}  />
                            <Link href={'https://kinezis59.ru/'} passHref>
                                <NavDropdown.Item className={`${style.lineHeight} ${style.wordBreak} `}>
                                    ?????????????? ?? ??????????
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}