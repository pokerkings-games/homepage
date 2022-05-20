import { NavMenus } from "../../Main/Main";
import style from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function Navbar(props: {
    MenuScroll: (menu: string) => void;
    nowmenu: NavMenus;
}) {
    return (
        <div className={style.navbar}>
            <div className={style.navbar_wrap}>
                <div className={style.logo}>
                    <div
                        className={style.logoimg}
                        onClick={() => props.MenuScroll("terrapoker")}
                    />
                </div>
                <div className={style.menus}>
                    <div
                        className={cx(style.terrapoker, {
                            enable: props.nowmenu === NavMenus.terrapoker,
                        })}
                        onClick={() => props.MenuScroll("terrapoker")}
                    >
                        {"Terra Poker"}
                    </div>
                    <div
                        className={cx(style.introduction, {
                            enable: props.nowmenu === NavMenus.introduction,
                        })}
                        onClick={() => props.MenuScroll("introduction")}
                    >
                        {"Introduction"}
                    </div>
                    <div
                        className={cx(style.roadmap, {
                            enable: props.nowmenu === NavMenus.roadmap,
                        })}
                        onClick={() => props.MenuScroll("roadmap")}
                    >
                        {"Roadmap"}
                    </div>
                    <div
                        className={cx(style.economy, {
                            enable: props.nowmenu === NavMenus.community,
                        })}
                        onClick={() => props.MenuScroll("community")}
                    >
                        {"Community"}
                    </div>
                </div>
            </div>
        </div>
    );
}
