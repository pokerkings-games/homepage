import { useCallback, useEffect, useRef, useState } from "react";
import style from "./Main.module.scss";
import TopCard from "./TopCard/TopCard";
import IntroductionCard1 from "./IntroductionCard/IntroductionCard";
import RoadmapCard from "./RoadmapCard/RoadmapCard";
import CommunityCard from "./CommunityCard/CommunityCard";
import Navbar from "../common/Navbar/Navbar";
import NavbarMobile from "../common/Navbar/NavbarMobile";

export enum NavMenus {
    terrapoker,
    introduction,
    roadmap,
    community,
}

export default function Main() {
    const [nowmenu, setNowmenu] = useState(NavMenus.terrapoker);

    const [page, setPage] = useState(0);
    const innerPage = useRef(0);

    const [titleFade, setTitleFade] = useState(false);

    const container = useRef<HTMLElement | null>(null);
    const section1 = useRef<HTMLElement | null>(null);
    const section2 = useRef<HTMLElement | null>(null);
    const section3 = useRef<HTMLElement | null>(null);
    const section4 = useRef<HTMLElement | null>(null);

    // 어느정도의 스크롤동안 할지 -> 500px
    const section2AnimDuration = 500;

    // 진척도 퍼센트
    const section2AnimProgress = useRef(0);

    // 브라우저 최상단 기준 y좌표가 들어 갈 변수
    const scrollOffset = useRef(0);

    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);

    function handleScroll() {
        if (!section2.current || !section3.current || !section4.current) {
            return;
        }

        if (
            window.pageYOffset >= section2.current.offsetTop &&
            window.pageYOffset < section3.current.offsetTop
        ) {
            setNowmenu(NavMenus.introduction);
        } else if (
            window.pageYOffset >= section3.current.offsetTop &&
            window.pageYOffset < 2430
        ) {
            setNowmenu(NavMenus.roadmap);
        } else if (window.pageYOffset >= 2430) {
            setNowmenu(NavMenus.community);
        } else {
            setNowmenu(NavMenus.terrapoker);
        }
    }

    function MenuScroll(menu: string) {
        if (!section2.current || !section3.current || !section4.current) {
            return;
        }

        if (menu === "terrapoker") {
            setPage(0);
            setNowmenu(NavMenus.terrapoker);
            window.scrollTo(0, 0);
        } else if (menu === "introduction") {
            setPage(1);
            setNowmenu(NavMenus.introduction);
            window.scrollTo(0, section2.current.offsetTop);
        } else if (menu === "roadmap") {
            setPage(2);
            setNowmenu(NavMenus.roadmap);
            window.scrollTo(0, section3.current.offsetTop);
        } else {
            setPage(3);
            setNowmenu(NavMenus.community);
            window.scrollTo(0, section4.current.offsetTop);
        }
    }

    useEffect(() => {
        section2.current = document.getElementById("section2");
        section3.current = document.getElementById("section3");
        section4.current = document.getElementById("section4");
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={style.main_container} id="container">
            <div className={style.main_nav}>
                <Navbar MenuScroll={MenuScroll} nowmenu={nowmenu} />
            </div>
            <div className={style.main_nav_mobile}>
                <NavbarMobile MenuScroll={MenuScroll} nowmenu={nowmenu} />
            </div>
            <div className={style.main_card_wrapper} id="main_card_wrapper">
                <div className={style.main_card} id="section1">
                    <TopCard page={page} />
                </div>
                <div className={style.main_card} id="section2">
                    <IntroductionCard1
                        page={page}
                        innerPage={innerPage}
                        titleFade={titleFade}
                    />
                </div>
                <div className={style.main_card} id="section3">
                    <RoadmapCard page={page} />
                </div>
                <div className={style.main_card} id="section4">
                    <CommunityCard page={page} />
                </div>
            </div>
        </div>
    );
}
