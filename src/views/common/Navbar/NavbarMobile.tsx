import { NavMenus } from "../../Main/Main";
import style from "./NavbarMobile.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

export default function NavbarMobile(props: {
    MenuScroll: (menu: string) => void;
    nowmenu: NavMenus;
}) {
    const [showMenu, setShowMenu] = useState(false);
    const [containerShow, setContainerShow] = useState(false);

    const menus = [
        { title: "Terra Poker" },
        { title: "Introduction" },
        { title: "Roadmap" },
        { title: "Community" },
    ];

    useEffect(() => {
        const body: any = document.querySelector("body");
        // body.style.overflow = showMenu ? "hidden" : "auto";

        if (showMenu) {
            setContainerShow(true);
        } else if (!showMenu) {
            setTimeout(() => {
                setContainerShow(false);
            }, 400);
        }
    }, [showMenu]);

    useEffect(() => {
        function handleClickOutside(event: any) {
            const obj3 = document.getElementById("header_mobile_menu_wrapper");
            const obj4 = document.getElementById("header_mobile_button_menu");
            if (obj3 && obj4) {
                if (
                    !(obj3 as any).contains(event.target) &&
                    !(obj4 as any).contains(event.target)
                ) {
                    setShowMenu(false);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowMenu]);

    return (
        <div className={style.navbar_mobile}>
            <div className={style.navbar_mobile_logo_wrap}>
                <div
                    className={style.navbar_mobile_logo}
                    onClick={() => props.MenuScroll("terrapoker")}
                />
            </div>
            {/* <div className={style.navbar_mobile_menubutton_wrap}>
        <div
          id="header_mobile_button_menu"
          className={cx(style.navbar_mobile_menubutton, { show: showMenu })}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div> */}

            {containerShow ? (
                <div
                    className={cx(style.inner_container, {
                        showmenu: showMenu,
                    })}
                >
                    <MenuPanel
                        menus={menus}
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                    />
                </div>
            ) : (
                <div />
            )}
        </div>
    );
}

function MenuPanel(props: {
    menus: { title: string }[];
    showMenu: boolean;
    setShowMenu: (b: boolean) => void;
}) {
    return (
        <div id="header_mobile_menu_wrapper" className={style.menu_container}>
            {props.menus.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={style.menu}
                        onClick={() => {
                            props.setShowMenu(false);
                        }}
                    >
                        <div className={style.title}>{item.title}</div>
                    </div>
                );
            })}
        </div>
    );
}
