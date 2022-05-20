import { MutableRefObject, useEffect, useRef, useState } from "react";
import style from "./Introduction.module.scss";
import lottie from "lottie-web";
import animationData from "../../Assets/Images/white-mouse.json";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export enum Page {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    firstRe,
    secondRe,
    thirdRe,
    fourthRe,
    fifthRe,
}

export default function Introduction(props: {
    ref: MutableRefObject<HTMLElement | null>;
    progress: MutableRefObject<number | undefined>;
    progressCardopen: MutableRefObject<number | undefined>;
    progressCardopen2: MutableRefObject<number | undefined>;
    progressCardopen3: MutableRefObject<number | undefined>;
    progressEnd: MutableRefObject<number | undefined>;
    titleappear: boolean;
    titleappear_mobile: boolean;
}) {
    const [nowpage, setNowpage] = useState(Page.first);

    const [progress, setProgress] = useState<number | undefined>(undefined);
    const [progressCardopen, setProgressCardopen] = useState<
        number | undefined
    >(undefined);
    const [progressCardopen2, setProgressCardopen2] = useState<
        number | undefined
    >(undefined);
    const [progressCardopen3, setProgressCardopen3] = useState<
        number | undefined
    >(undefined);
    const [progressEnd, setProgressEnd] = useState<number | undefined>(
        undefined
    );

    // 스크롤section 초기 타이틀의 opacity는 1로 시작, imgs -> 뒷 배경에 있는 코인 이미지들
    let title_t = useRef<number>(1);
    let imgs_t = useRef<number>(0);
    let imgs_t2 = useRef<string>("");

    // 아이콘 및 text가 들어갈 box, wrap -> 무지개색 뒷 배경
    let textbox_t = useRef<number>(0);
    let textbox_wrap_t = useRef<number>(0);

    // textbox 안의 contents
    let textcontent1_t = useRef<number>(0);
    let textcontent2_t = useRef<number>(0);
    let textcontent3_t = useRef<number>(0);
    let textcontent4_t = useRef<number>(0);

    // 모든 스크롤action이 다 지나가고 마지막에 나오는 end title
    let endtitle_t = useRef<number>(0);

    // pair, three of a kind, full house 와 같은 state의 opacity를 위한 변수
    let state1_t = useRef<number | undefined>(undefined);
    let state2_t = useRef<number | undefined>(undefined);
    let state3_t = useRef<number | undefined>(undefined);
    let state4_t = useRef<number | undefined>(undefined);
    let state1_mobile_t = useRef<number>(0);
    let state2_mobile_t = useRef<number>(0);
    let state3_mobile_t = useRef<number>(0);
    let state4_mobile_t = useRef<number>(0);

    // 뒷 배경에 있는 토큰 이미지 두 개 -> 상 하로 계속 움직일 수 있게 하기위해서
    let img2opacity_t = useRef<number>(0);
    let img3opacity_t = useRef<number>(0);
    let img3transform_t = useRef<string>("");

    // mobile status
    let mobilestatus_t = useRef<number>(0);

    // 처음에 내 손에 잡혀있는 카드 두 장
    let cardopenhalf1 = useRef<HTMLDivElement | null>(null);
    let cardopenhalf2 = useRef<HTMLDivElement | null>(null);

    // 공동으로 제공되는 카드 첫 세 장 -> pre flop..?
    let cardopen = useRef<HTMLDivElement | null>(null);
    let cardopen_2 = useRef<HTMLDivElement | null>(null);
    let cardopen_3 = useRef<HTMLDivElement | null>(null);

    // 두 번째로 펼쳐지는 카드 한 장 -> flop..?
    let cardopen2 = useRef<HTMLDivElement | null>(null);

    // 세 번째로 펼쳐지는 마지막 카드 한 장 -> river
    let cardopen3 = useRef<HTMLDivElement | null>(null);

    // 카드 펼쳐지는 것 이후에 내 족보를 보여주면서 다머지 dimmed 처리 해주기 위한 변수 -> 카드가 세 장이라 세 개
    let cardend = useRef<HTMLDivElement | null>(null);
    let cardend2 = useRef<HTMLDivElement | null>(null);
    let cardend3 = useRef<HTMLDivElement | null>(null);

    // 이 이하는 위의 t -> transform 변수들이 적용 될 변수들
    let titlescroll = useRef<HTMLDivElement | null>(null);
    let textbox_wrap = useRef<HTMLDivElement | null>(null);
    let textbox = useRef<HTMLDivElement | null>(null);
    let imgs = useRef<HTMLDivElement | null>(null);

    let textcontent1 = useRef<HTMLDivElement | null>(null);
    let textcontent2 = useRef<HTMLDivElement | null>(null);
    let textcontent3 = useRef<HTMLDivElement | null>(null);
    let textcontent4 = useRef<HTMLDivElement | null>(null);

    let endtitle = useRef<HTMLDivElement | null>(null);

    let state1 = useRef<HTMLDivElement | null>(null);
    let state2 = useRef<HTMLDivElement | null>(null);
    let state3 = useRef<HTMLDivElement | null>(null);
    let state4 = useRef<HTMLDivElement | null>(null);
    let state1_mobile = useRef<HTMLDivElement | null>(null);
    let state2_mobile = useRef<HTMLDivElement | null>(null);
    let state3_mobile = useRef<HTMLDivElement | null>(null);
    let state4_mobile = useRef<HTMLDivElement | null>(null);

    let img2opacity = useRef<HTMLDivElement | null>(null);
    let img3opacity = useRef<HTMLDivElement | null>(null);
    let img3transform = useRef<HTMLDivElement | null>(null);

    let mobilestatus = useRef<HTMLDivElement | null>(null);

    const element = useRef<HTMLDivElement>(null);

    function handleScroll() {
        // 진척도 0 ~ 1.0
        setProgress(Number(props.progress.current?.toFixed(3)));
        setProgressCardopen(Number(props.progressCardopen.current?.toFixed(3)));
        setProgressCardopen2(
            Number(props.progressCardopen2.current?.toFixed(3))
        );
        setProgressCardopen3(
            Number(props.progressCardopen3.current?.toFixed(3))
        );
        setProgressEnd(Number(props.progressEnd.current?.toFixed(3)));
    }

    function NextPage() {
        if (nowpage === Page.first || nowpage === Page.firstRe) {
            setNowpage(Page.second);
        } else if (nowpage === Page.second || nowpage === Page.secondRe) {
            setNowpage(Page.third);
        } else if (nowpage === Page.third || nowpage === Page.thirdRe) {
            setNowpage(Page.fourth);
        } else if (nowpage === Page.fourth || nowpage === Page.fourthRe) {
            setNowpage(Page.fifth);
        } else if (nowpage === Page.fifth || nowpage === Page.fifthRe) {
            setNowpage(Page.sixth);
        } else {
            setNowpage(Page.sixth);
        }
    }

    function BeforePage() {
        if (nowpage === Page.second || nowpage === Page.secondRe) {
            setNowpage(Page.firstRe);
        } else if (nowpage === Page.third || nowpage === Page.thirdRe) {
            setNowpage(Page.secondRe);
        } else if (nowpage === Page.fourth || nowpage === Page.fourthRe) {
            setNowpage(Page.thirdRe);
        } else if (nowpage === Page.fifth || nowpage === Page.fifthRe) {
            setNowpage(Page.fourthRe);
        } else if (nowpage === Page.sixth) {
            setNowpage(Page.fifthRe);
        } else {
            setNowpage(Page.first);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // lottie -> scroll icon
    useEffect(() => {
        if (element.current)
            // add this
            lottie.loadAnimation({
                animationData,
                container: element.current,
                loop: true,
            });
    }, [element]);

    // progress -> 첫 번째 내 손에 있는 카드 두 장 오픈 하는 과정
    useEffect(() => {
        if (window.innerWidth > 800) {
            if (
                cardopenhalf1.current &&
                cardopenhalf2.current &&
                titlescroll.current &&
                textbox_wrap.current &&
                textbox.current &&
                imgs.current &&
                textcontent1.current &&
                state1.current &&
                img2opacity.current &&
                img3opacity.current &&
                img3transform.current &&
                progress !== undefined
            ) {
                // 카드의 개수에 따라 변수의 개수가 다르다. ex) r, r2
                const r = progress * 350;
                const t =
                    "rotateY(" +
                    progress * 200 * (180 / 100) +
                    "deg) translateZ(" +
                    (1 - progress * 200 * 0.02) +
                    "px)";

                // 모바일 환경에선 카드의 크기도 바뀌고 뒷 bg도 변경되면서 움직여야되는 r의 값이 달라져서 따로 설정
                const r_mobile = progress * 140;

                const r2 = progress * 175;
                const t2 =
                    "rotateY(" +
                    progress * 100 * (180 / 100) +
                    "deg) translateZ(" +
                    (1 - progress * 100 * 0.02) +
                    "px)";

                const r2_mobile = progress * 70;

                // progress를 3분할 해서 세 가지 애니메이션이 작동하게 조건문 설정
                // 1. 뒷 배경 + 토큰 이미지들이 함께 올라오고 토큰 이미지 두개 opacity가 점점 1로 수렴
                if (progress <= 0.3) {
                    // 0.1의 시간동안 뒷 배경이 올라온다.
                    if (progress <= 0.1) {
                        imgs_t2.current =
                            (1 - progress * 10) * 1155 + 45 + "px";
                        imgs_t.current = 1;
                        title_t.current = 1 - progress * 10;
                        img2opacity_t.current = 0;
                        img3opacity_t.current = 0;
                        img3transform_t.current = 303 + progress * 3000 + "px";
                    } else if (progress > 0.1 && progress <= 0.2) {
                        img2opacity_t.current = (progress - 0.1) * 5;
                        img3opacity_t.current = (progress - 0.1) * 5;
                        img3transform_t.current =
                            603 - (progress - 0.1) * 3000 + "px";
                    }
                    // 뒷 배경의 토큰 이미지 두 개의 opacity가 밝아진다.
                    else {
                        img2opacity_t.current = (progress - 0.1) * 5;
                        img3opacity_t.current = (progress - 0.1) * 5;
                        img3transform_t.current = 303 + "px";
                    }

                    textbox_t.current = 0;
                    textbox_wrap_t.current = 0;
                    textcontent1_t.current = 0;
                    state1_t.current = 0;
                }
                // 2. 텍스트박스의 opacity가 1로 수렴하면서 점점 나타나진다.
                else if (progress > 0.3 && progress <= 0.666) {
                    imgs_t2.current = "45px";
                    imgs_t.current = 1;
                    title_t.current = 0;
                    textbox_t.current = progress * 3 - 1;
                    textbox_wrap_t.current = 0;
                    textcontent1_t.current = 0;
                    img3transform_t.current = 303 + "px";

                    // progress의 반이 지난 시점부터 state(Pair)가 나타나게된다. ( 이미 내가 들고 있는 카드 두 장은 계속 뒤집어지는 중 )
                    if (progress >= 0.5) {
                        state1_t.current = progress * 2 - 1;
                    } else {
                        state1_t.current = 0;
                    }
                }
                // 3. textbox의 무지개색 뒷 배경이 밝아지면서 나오고, 0.5 부터 밝아지던 state가 계속해서 밝아진다.
                else {
                    imgs_t2.current = "45px";
                    imgs_t.current = 1;
                    title_t.current = 0;
                    textbox_t.current = 1;
                    textbox_wrap_t.current = progress * 3 - 2;
                    textcontent1_t.current = progress * 3 - 2;
                    state1_t.current = progress * 2 - 1;
                }

                // 내가 손에 들고 있는 카드 두 장이 뒤집히는 속도를 다르게 하기 위한 조건문
                // r -> 왼쪽 카드, 먼저 뒤집히고 뒤집힌 상태를 유지하기 위한 조건문
                if (r > 175) {
                    if (window.innerWidth <= 800) {
                        cardopenhalf1.current.style.right = 70 + "px";
                        cardopenhalf1.current.style.transform =
                            "rotateY(" +
                            100 * (180 / 100) +
                            "deg) translateZ(" +
                            (1 - 100 * 0.02) +
                            "px)";
                    } else {
                        cardopenhalf1.current.style.right = 175 + "px";
                        cardopenhalf1.current.style.transform =
                            "rotateY(" +
                            100 * (180 / 100) +
                            "deg) translateZ(" +
                            (1 - 100 * 0.02) +
                            "px)";
                    }
                } else {
                    if (window.innerWidth <= 800) {
                        cardopenhalf1.current.style.right = r_mobile + "px";
                    } else {
                        cardopenhalf1.current.style.right = r + "px";
                    }
                    cardopenhalf1.current.style.transform = t;
                }

                if (window.innerWidth <= 800) {
                    cardopenhalf2.current.style.right = r2_mobile + "px";
                } else {
                    cardopenhalf2.current.style.right = r2 + "px";
                }
                cardopenhalf2.current.style.transform = t2;

                // opacity, marginTop 등 앞선 조건문들에서 useRef를 통해서 변경되는 값들을 이용해서 수정
                titlescroll.current.style.opacity = title_t.current.toString();
                textbox.current.style.opacity = textbox_t.current.toString();
                textbox_wrap.current.style.opacity =
                    textbox_wrap_t.current.toString();
                imgs.current.style.opacity = imgs_t.current.toString();
                imgs.current.style.marginTop = imgs_t2.current;

                textcontent1.current.style.opacity =
                    textcontent1_t.current.toString();

                state1.current.style.opacity = state1_t.current.toString();

                img2opacity.current.style.opacity =
                    img2opacity_t.current.toString();
                img3opacity.current.style.opacity =
                    img3opacity_t.current.toString();
                img3transform.current.style.top = img3transform_t.current;
            }
        } else {
            if (
                mobilestatus.current &&
                state1_mobile.current &&
                cardopenhalf1.current &&
                cardopenhalf2.current &&
                titlescroll.current &&
                textbox_wrap.current &&
                textbox.current &&
                imgs.current &&
                textcontent1.current &&
                state1.current &&
                img2opacity.current &&
                img3opacity.current &&
                progress !== undefined
            ) {
                // 카드의 개수에 따라 변수의 개수가 다르다. ex) r, r2
                const r = progress * 350;
                const t =
                    "rotateY(" +
                    progress * 200 * (180 / 100) +
                    "deg) translateZ(" +
                    (1 - progress * 200 * 0.02) +
                    "px)";

                // 모바일 환경에선 카드의 크기도 바뀌고 뒷 bg도 변경되면서 움직여야되는 r의 값이 달라져서 따로 설정
                const r_mobile = progress * 140;

                const r2 = progress * 175;
                const t2 =
                    "rotateY(" +
                    progress * 100 * (180 / 100) +
                    "deg) translateZ(" +
                    (1 - progress * 100 * 0.02) +
                    "px)";

                const r2_mobile = progress * 70;

                // progress를 3분할 해서 세 가지 애니메이션이 작동하게 조건문 설정
                // 1. 뒷 배경 + 토큰 이미지들이 함께 올라오고 토큰 이미지 두개 opacity가 점점 1로 수렴
                if (progress <= 0.3) {
                    // 0.1의 시간동안 뒷 배경이 올라온다.
                    if (progress <= 0.1) {
                        imgs_t2.current =
                            (1 - progress * 10) * 1155 + 45 + "px";
                        imgs_t.current = 1;
                        title_t.current = 1 - progress * 10;
                        img2opacity_t.current = 0;
                        img3opacity_t.current = 0;
                    }
                    // 뒷 배경의 토큰 이미지 두 개의 opacity가 밝아진다.
                    else {
                        img2opacity_t.current = (progress - 0.1) * 5;
                        img3opacity_t.current = (progress - 0.1) * 5;
                    }

                    textbox_t.current = 0;
                    textbox_wrap_t.current = 0;
                    textcontent1_t.current = 0;
                    state1_t.current = 0;
                    state1_mobile_t.current = 0;
                    mobilestatus_t.current = 0;
                }
                // 2. 텍스트박스의 opacity가 1로 수렴하면서 점점 나타나진다.
                else if (progress > 0.3 && progress <= 0.666) {
                    imgs_t2.current = "45px";
                    imgs_t.current = 1;
                    title_t.current = 0;
                    textbox_t.current = progress * 3 - 1;
                    textbox_wrap_t.current = 0;
                    textcontent1_t.current = 0;
                    mobilestatus_t.current = progress * 3 - 1;

                    // progress의 반이 지난 시점부터 state(Pair)가 나타나게된다. ( 이미 내가 들고 있는 카드 두 장은 계속 뒤집어지는 중 )
                    if (progress >= 0.5) {
                        state1_t.current = progress * 2 - 1;
                        state1_mobile_t.current = progress * 2 - 1;
                    } else {
                        state1_t.current = 0;
                        state1_mobile_t.current = 0;
                    }
                }
                // 3. textbox의 무지개색 뒷 배경이 밝아지면서 나오고, 0.5 부터 밝아지던 state가 계속해서 밝아진다.
                else {
                    imgs_t2.current = "45px";
                    imgs_t.current = 1;
                    title_t.current = 0;
                    textbox_t.current = 1;
                    textbox_wrap_t.current = progress * 3 - 2;
                    textcontent1_t.current = progress * 3 - 2;
                    state1_t.current = progress * 2 - 1;
                    mobilestatus_t.current = 1;
                    state1_mobile_t.current = progress * 2 - 1;
                }

                // 내가 손에 들고 있는 카드 두 장이 뒤집히는 속도를 다르게 하기 위한 조건문
                // r -> 왼쪽 카드, 먼저 뒤집히고 뒤집힌 상태를 유지하기 위한 조건문
                if (r > 175) {
                    if (window.innerWidth <= 800) {
                        cardopenhalf1.current.style.right = 70 + "px";
                        cardopenhalf1.current.style.transform =
                            "rotateY(" +
                            100 * (180 / 100) +
                            "deg) translateZ(" +
                            (1 - 100 * 0.02) +
                            "px)";
                    } else {
                        cardopenhalf1.current.style.right = 175 + "px";
                        cardopenhalf1.current.style.transform =
                            "rotateY(" +
                            100 * (180 / 100) +
                            "deg) translateZ(" +
                            (1 - 100 * 0.02) +
                            "px)";
                    }
                } else {
                    if (window.innerWidth <= 800) {
                        cardopenhalf1.current.style.right = r_mobile + "px";
                    } else {
                        cardopenhalf1.current.style.right = r + "px";
                    }
                    cardopenhalf1.current.style.transform = t;
                }

                if (window.innerWidth <= 800) {
                    cardopenhalf2.current.style.right = r2_mobile + "px";
                } else {
                    cardopenhalf2.current.style.right = r2 + "px";
                }
                cardopenhalf2.current.style.transform = t2;

                // opacity, marginTop 등 앞선 조건문들에서 useRef를 통해서 변경되는 값들을 이용해서 수정
                titlescroll.current.style.opacity = title_t.current.toString();
                textbox.current.style.opacity = textbox_t.current.toString();
                textbox_wrap.current.style.opacity =
                    textbox_wrap_t.current.toString();
                imgs.current.style.opacity = imgs_t.current.toString();
                imgs.current.style.marginTop = imgs_t2.current;

                textcontent1.current.style.opacity =
                    textcontent1_t.current.toString();

                state1.current.style.opacity = state1_t.current.toString();
                state1_mobile.current.style.opacity =
                    state1_mobile_t.current.toString();

                img2opacity.current.style.opacity =
                    img2opacity_t.current.toString();
                img3opacity.current.style.opacity =
                    img3opacity_t.current.toString();

                mobilestatus.current.style.opacity =
                    mobilestatus_t.current.toString();
            }
        }
    }, [progress]);

    // progressCardopen을 통해서 애니메이션이 작동하게 설정
    // 이 후 progress들에선 기본적으로 textbox, textbox_wrap의 opacity가 0으로 갔다가 1으로 오면서 반짝거리는 효과를 준다.
    // textbox 안의 컨텐츠들또한 0으로 사라졌다가 새로운 contents들이 1으로 나타난다.
    // status 또한 Pair -> Two of a kind 와 같은 방식으로 족보를 갱신한다.
    // 카드를 뒤집는다. 카드가 2장이상일 경우 너무 정적이게 보여지게 하지않기위해서 뒤집어지는 속도를 달리했다.
    // pre-flop..?
    useEffect(() => {
        if (
            cardopen.current &&
            cardopen_2.current &&
            cardopen_3.current &&
            textbox_wrap.current &&
            textcontent1.current &&
            textcontent2.current &&
            state1.current &&
            state2.current &&
            img2opacity.current &&
            img3opacity.current &&
            progressCardopen !== undefined
        ) {
            const r = progressCardopen * 300;
            const t =
                "rotateY(" +
                progressCardopen * 300 * (180 / 100) +
                "deg) translateZ(" +
                (1 - progressCardopen * 300 * 0.02) +
                "px)";

            const r_mobile = progressCardopen * 105;

            const r2 = progressCardopen * 200;
            const t2 =
                "rotateY(" +
                progressCardopen * 200 * (180 / 100) +
                "deg) translateZ(" +
                (1 - progressCardopen * 200 * 0.02) +
                "px)";

            const r2_mobile = progressCardopen * 70;

            const r3 = progressCardopen * 100;
            const t3 =
                "rotateY(" +
                progressCardopen * 100 * (180 / 100) +
                "deg) translateZ(" +
                (1 - progressCardopen * 100 * 0.02) +
                "px)";

            const r3_mobile = progressCardopen * 35;

            if (progressCardopen <= 0.5) {
                if (window.innerWidth <= 800) {
                    if (window.scrollY <= 3550) {
                        textcontent1_t.current = 0;
                        textbox_wrap_t.current = 0;
                        state1_t.current = 0;
                        state1_mobile_t.current = 0;
                    } else {
                        textcontent1_t.current = 1;
                        textbox_wrap_t.current = 1;
                        state1_t.current = 1;
                        state1_mobile_t.current = 1;
                    }
                } else {
                    if (window.scrollY <= 4000) {
                        textcontent1_t.current = 0;
                        textbox_wrap_t.current = 0;
                        state1_t.current = 0;
                        state1_mobile_t.current = 0;
                    } else {
                        textcontent1_t.current = 1;
                        textbox_wrap_t.current = 1;
                        state1_t.current = 1;
                        state1_mobile_t.current = 1;
                    }
                }

                textcontent2_t.current = 0;
                state2_t.current = 0;
                state2_mobile_t.current = 0;
                img2opacity_t.current = progressCardopen * 20 + 1;
            } else {
                img2opacity_t.current = 10 - (progressCardopen - 0.5) * 20;
                if (progressCardopen <= 0.75) {
                    textcontent1_t.current = 1 - (progressCardopen - 0.5) * 4;
                    textcontent2_t.current = 0;
                    state1_t.current = 1 - (progressCardopen - 0.5) * 4;
                    state1_mobile_t.current = 1 - (progressCardopen - 0.5) * 4;
                    state2_t.current = 0;
                    state2_mobile_t.current = 0;
                    textbox_wrap_t.current = 1 - (progressCardopen - 0.5) * 4;
                } else {
                    textcontent1_t.current = 0;
                    textcontent2_t.current = (progressCardopen - 0.5) * 4 - 1;
                    state1_t.current = 0;
                    state1_mobile_t.current = 0;
                    state2_t.current = (progressCardopen - 0.5) * 4 - 1;
                    state2_mobile_t.current = (progressCardopen - 0.5) * 4 - 1;
                    textbox_wrap_t.current = (progressCardopen - 0.5) * 4 - 1;
                }
            }

            if (r > 100) {
                if (window.innerWidth <= 800) {
                    cardopen.current.style.right = 35 + "px";
                } else {
                    cardopen.current.style.right = 100 + "px";
                }

                cardopen.current.style.transform =
                    "rotateY(" +
                    100 * (180 / 100) +
                    "deg) translateZ(" +
                    (1 - 100 * 0.02) +
                    "px)";
            } else {
                if (window.innerWidth <= 800) {
                    cardopen.current.style.right = r_mobile + "px";
                } else {
                    cardopen.current.style.right = r + "px";
                }

                cardopen.current.style.transform = t;
            }

            if (r2 > 100) {
                if (window.innerWidth <= 800) {
                    cardopen_2.current.style.right = 35 + "px";
                } else {
                    cardopen_2.current.style.right = 100 + "px";
                }

                cardopen_2.current.style.transform =
                    "rotateY(" +
                    100 * (180 / 100) +
                    "deg) translateZ(" +
                    (1 - 100 * 0.02) +
                    "px)";
            } else {
                if (window.innerWidth <= 800) {
                    cardopen_2.current.style.right = r2_mobile + "px";
                } else {
                    cardopen_2.current.style.right = r2 + "px";
                }

                cardopen_2.current.style.transform = t2;
            }

            if (window.innerWidth <= 800) {
                cardopen_3.current.style.right = r3_mobile + "px";
            } else {
                cardopen_3.current.style.right = r3 + "px";
            }

            cardopen_3.current.style.transform = t3;

            textbox_wrap.current.style.opacity =
                textbox_wrap_t.current.toString();

            textcontent1.current.style.opacity =
                textcontent1_t.current.toString();
            textcontent2.current.style.opacity =
                textcontent2_t.current.toString();

            state1.current.style.opacity = state1_t.current.toString();
            state2.current.style.opacity = state2_t.current.toString();
            if (state1_mobile.current !== null) {
                state1_mobile.current.style.opacity =
                    state1_mobile_t.current?.toString();
            }
            if (state2_mobile.current !== null) {
                state2_mobile.current.style.opacity =
                    state2_mobile_t.current?.toString();
            }

            img2opacity.current.style.marginTop =
                img2opacity_t.current.toString() + "px";
            img3opacity.current.style.marginBottom =
                img2opacity_t.current.toString() + "px";

            img2opacity.current.style.opacity = "1";
            img3opacity.current.style.opacity = "1";
        }
    }, [progressCardopen]);

    // flop..?
    useEffect(() => {
        if (
            cardopen2.current &&
            textbox_wrap.current &&
            textcontent2.current &&
            textcontent3.current &&
            state2.current &&
            state3.current &&
            img2opacity.current &&
            img3opacity.current &&
            progressCardopen2 !== undefined
        ) {
            const r = progressCardopen2 * 100 + "px";
            const t =
                "rotateY(" +
                progressCardopen2 * 100 * (180 / 100) +
                "deg) translateZ(" +
                (1 - progressCardopen2 * 100 * 0.02) +
                "px)";

            const r_mobile = progressCardopen2 * 35 + "px";

            if (progressCardopen2 <= 0.5) {
                if (window.innerWidth <= 800) {
                    if (window.scrollY <= 6550) {
                        textcontent2_t.current = 0;
                        textbox_wrap_t.current = 0;
                        state2_t.current = 0;
                        state2_mobile_t.current = 0;
                    } else {
                        textcontent2_t.current = 1;
                        textbox_wrap_t.current = 1;
                        state2_t.current = 1;
                        state2_mobile_t.current = 1;
                    }
                } else {
                    if (window.scrollY <= 7000) {
                        textcontent2_t.current = 0;
                        textbox_wrap_t.current = 0;
                        state2_t.current = 0;
                        state2_mobile_t.current = 0;
                    } else {
                        textcontent2_t.current = 1;
                        textbox_wrap_t.current = 1;
                        state2_t.current = 1;
                        state2_mobile_t.current = 1;
                    }
                }

                textcontent3_t.current = 0;
                state3_t.current = 0;
                state3_mobile_t.current = 0;
                img2opacity_t.current = progressCardopen2 * 20 + 1;
            } else {
                img2opacity_t.current = 10 - (progressCardopen2 - 0.5) * 20;
                if (progressCardopen2 <= 0.75) {
                    textcontent2_t.current = 1 - (progressCardopen2 - 0.5) * 4;
                    textcontent3_t.current = 0;
                    state2_t.current = 1 - (progressCardopen2 - 0.5) * 4;
                    state2_mobile_t.current = 1 - (progressCardopen2 - 0.5) * 4;
                    state3_t.current = 0;
                    state3_mobile_t.current = 0;
                    textbox_wrap_t.current = 1 - (progressCardopen2 - 0.5) * 4;
                } else {
                    textcontent2_t.current = 0;
                    textcontent3_t.current = (progressCardopen2 - 0.5) * 4 - 1;
                    state2_t.current = 0;
                    state2_mobile_t.current = 0;
                    state3_t.current = (progressCardopen2 - 0.5) * 4 - 1;
                    state3_mobile_t.current = (progressCardopen2 - 0.5) * 4 - 1;
                    textbox_wrap_t.current = (progressCardopen2 - 0.5) * 4 - 1;
                }
            }

            if (window.innerWidth <= 800) {
                cardopen2.current.style.right = r_mobile;
            } else {
                cardopen2.current.style.right = r;
            }

            cardopen2.current.style.transform = t;

            textcontent2.current.style.opacity =
                textcontent2_t.current.toString();
            textcontent3.current.style.opacity =
                textcontent3_t.current.toString();

            textbox_wrap.current.style.opacity =
                textbox_wrap_t.current.toString();

            state2.current.style.opacity = state2_t.current.toString();
            state3.current.style.opacity = state3_t.current.toString();
            if (state2_mobile.current !== null) {
                state2_mobile.current.style.opacity =
                    state2_mobile_t.current?.toString();
            }
            if (state3_mobile.current !== null) {
                state3_mobile.current.style.opacity =
                    state3_mobile_t.current?.toString();
            }

            img2opacity.current.style.marginTop =
                img2opacity_t.current.toString() + "px";
            img3opacity.current.style.marginBottom =
                img2opacity_t.current.toString() + "px";

            img2opacity.current.style.opacity = "1";
            img3opacity.current.style.opacity = "1";
        }
    }, [progressCardopen2]);

    // river
    useEffect(() => {
        if (
            cardopen3.current &&
            textbox_wrap.current &&
            textcontent3.current &&
            textcontent4.current &&
            state3.current &&
            state4.current &&
            img2opacity.current &&
            img3opacity.current &&
            progressCardopen3 !== undefined
        ) {
            const r = progressCardopen3 * 100 + "px";
            const t =
                "rotateY(" +
                progressCardopen3 * 100 * (180 / 100) +
                "deg) translateZ(" +
                (1 - progressCardopen3 * 100 * 0.02) +
                "px)";

            const r_mobile = progressCardopen3 * 35 + "px";

            if (progressCardopen3 <= 0.5) {
                if (window.innerWidth <= 800) {
                    if (window.scrollY <= 9550) {
                        textcontent3_t.current = 0;
                        textbox_wrap_t.current = 0;
                        state3_t.current = 0;
                        state3_mobile_t.current = 0;
                    } else {
                        textcontent3_t.current = 1;
                        textbox_wrap_t.current = 1;
                        state3_t.current = 1;
                        state3_mobile_t.current = 1;
                    }
                } else {
                    if (window.scrollY <= 10000) {
                        textcontent3_t.current = 0;
                        textbox_wrap_t.current = 0;
                        state3_t.current = 0;
                        state3_mobile_t.current = 0;
                    } else {
                        textcontent3_t.current = 1;
                        textbox_wrap_t.current = 1;
                        state3_t.current = 1;
                        state3_mobile_t.current = 1;
                    }
                }

                textcontent4_t.current = 0;
                state4_t.current = 0;
                state4_mobile_t.current = 0;
                img2opacity_t.current = progressCardopen3 * 20 + 1;
            } else {
                img2opacity_t.current = 10 - (progressCardopen3 - 0.5) * 20;
                if (progressCardopen3 <= 0.75) {
                    textcontent3_t.current = 1 - (progressCardopen3 - 0.5) * 4;
                    textcontent4_t.current = 0;
                    state3_t.current = 1 - (progressCardopen3 - 0.5) * 4;
                    state3_mobile_t.current = 1 - (progressCardopen3 - 0.5) * 4;
                    state4_t.current = 0;
                    state4_mobile_t.current = 0;
                    textbox_wrap_t.current = 1 - (progressCardopen3 - 0.5) * 4;
                } else {
                    textcontent3_t.current = 0;
                    textcontent4_t.current = (progressCardopen3 - 0.5) * 4 - 1;
                    state3_t.current = 0;
                    state3_mobile_t.current = 0;
                    state4_t.current = (progressCardopen3 - 0.5) * 4 - 1;
                    state4_mobile_t.current = (progressCardopen3 - 0.5) * 4 - 1;
                    textbox_wrap_t.current = (progressCardopen3 - 0.5) * 4 - 1;
                }
            }

            if (window.innerWidth <= 800) {
                cardopen3.current.style.right = r_mobile;
            } else {
                cardopen3.current.style.right = r;
            }

            cardopen3.current.style.transform = t;

            textcontent3.current.style.opacity =
                textcontent3_t.current.toString();
            textcontent4.current.style.opacity =
                textcontent4_t.current.toString();

            textbox_wrap.current.style.opacity =
                textbox_wrap_t.current.toString();

            state3.current.style.opacity = state3_t.current.toString();
            state4.current.style.opacity = state4_t.current.toString();
            if (state3_mobile.current !== null) {
                state3_mobile.current.style.opacity =
                    state3_mobile_t.current?.toString();
            }
            if (state4_mobile.current !== null) {
                state4_mobile.current.style.opacity =
                    state4_mobile_t.current?.toString();
            }

            img2opacity.current.style.marginTop =
                img2opacity_t.current.toString() + "px";
            img3opacity.current.style.marginBottom =
                img2opacity_t.current.toString() + "px";

            img2opacity.current.style.opacity = "1";
            img3opacity.current.style.opacity = "1";
        }
    }, [progressCardopen3]);

    // river 이 후에 내 족보를 강조하기 위해서 쓸모없는 카드들을 dimmed 처리하고
    // textbox는 opacity 0으로 수렴, 마지막 end_title이 opacity 1로 수렴하며 나타나게 된다.
    useEffect(() => {
        if (
            cardend.current &&
            cardend2.current &&
            cardend3.current &&
            // imgs.current &&
            textbox.current &&
            textbox_wrap.current &&
            endtitle.current &&
            img2opacity.current &&
            img3opacity.current &&
            // mobilestatus.current &&
            progressEnd !== undefined
        ) {
            const r = (progressEnd * 80) / 100;

            if (progressEnd <= 0.5) {
                // imgs_t.current = 1;
                textbox_t.current = 1;
                textbox_wrap_t.current = 1;
                endtitle_t.current = 0;
                img2opacity_t.current = progressEnd * 20 + 1;
                textbox_wrap_t.current = 1 - progressEnd * 2;
                if (mobilestatus_t !== undefined) {
                    mobilestatus_t.current = 1 - progressEnd * 2;
                }
            } else {
                img2opacity_t.current = 10 - (progressEnd - 0.5) * 20;
                if (mobilestatus_t !== undefined) {
                    mobilestatus_t.current = 0;
                }
                if (progressEnd <= 0.75) {
                    // imgs_t.current = 1 - (progressEnd - 0.5) * 4;
                    textbox_t.current = 1 - (progressEnd - 0.5) * 4;
                    textbox_wrap_t.current = 0;
                    endtitle_t.current = 0;
                } else {
                    // imgs_t.current = 0;
                    textbox_t.current = 0;
                    textbox_wrap_t.current = 0;
                    endtitle_t.current = (progressEnd - 0.5) * 4 - 1;
                }
            }

            cardend.current.style.opacity = r.toString();
            cardend2.current.style.opacity = r.toString();
            cardend3.current.style.opacity = r.toString();

            // imgs.current.style.opacity = imgs_t.current.toString();

            textbox.current.style.opacity = textbox_t.current.toString();
            textbox_wrap.current.style.opacity =
                textbox_wrap_t.current.toString();

            endtitle.current.style.opacity = endtitle_t.current.toString();

            img2opacity.current.style.marginTop =
                img2opacity_t.current.toString() + "px";
            img3opacity.current.style.marginBottom =
                img2opacity_t.current.toString() + "px";

            img2opacity.current.style.opacity = "1";
            img3opacity.current.style.opacity = "1";

            if (mobilestatus.current !== null) {
                mobilestatus.current.style.opacity =
                    mobilestatus_t.current.toString();
            }
        }
    }, [progressEnd]);

    return (
        <div className={style.introduction}>
            {/* mobile과 pc 구분 */}
            {window.innerWidth > 800 ? (
                // PC 환경에서 내 손에든 카드 두 장이 제일 하단에 보여주게 하기 위해서 window.innerHeight 에 450의 높이를 빼주었다.
                <div
                    className={style.topview}
                    style={{
                        height: window.innerHeight - 450,
                    }}
                >
                    <div
                        // ref={titlescroll}
                        className={cx(style.topview_title_container, {
                            titleappear:
                                props.titleappear &&
                                window.innerWidth > 800 &&
                                (nowpage === Page.first ||
                                    nowpage === Page.firstRe),
                            second:
                                nowpage === Page.second && props.titleappear,
                            firstre:
                                nowpage === Page.firstRe && props.titleappear,
                        })}
                    >
                        <div className={style.topview_title}>
                            {"FIND OUT KEY FEATURES \nOF TERRA POKER"}
                        </div>
                        <div className={style.topview_title_wrap}>
                            {"FIND OUT KEY FEATURES \nOF TERRA POKER"}
                        </div>
                        <div ref={element} className={style.topview_gif} />
                        <div className={style.topview_scrolltext}>
                            {"Scroll down"}
                        </div>
                    </div>

                    <div
                        // ref={imgs}
                        className={cx(style.topview_container, {
                            second: nowpage === Page.second,
                            firstre: nowpage === Page.firstRe,
                        })}
                    >
                        <div
                            className={cx(style.imgs, {
                                second: nowpage === Page.second,
                                third: nowpage === Page.third,
                                fourth: nowpage === Page.fourth,
                                fifth: nowpage === Page.fifth,
                                sixth: nowpage === Page.sixth,
                                firstre: nowpage === Page.firstRe,
                                secondre: nowpage === Page.secondRe,
                                thirdre: nowpage === Page.thirdRe,
                                fourthre: nowpage === Page.fourthRe,
                                fifthre: nowpage === Page.fifthRe,
                            })}
                        >
                            <div
                                // ref={img2opacity}
                                className={cx(style.img1, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    firstre: nowpage === Page.firstRe,
                                    secondre: nowpage === Page.secondRe,
                                    thirdre: nowpage === Page.thirdRe,
                                    fourthre: nowpage === Page.fourthRe,
                                    fifthre: nowpage === Page.fifthRe,
                                })}
                            />
                            <div
                                className={cx(style.img2, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    firstre: nowpage === Page.firstRe,
                                })}
                            />
                            <div
                                // ref={img3transform}
                                className={cx(style.img3, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    firstre: nowpage === Page.firstRe,
                                })}
                            />
                            <div
                                // ref={img3opacity}
                                className={cx(style.img4, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    firstre: nowpage === Page.firstRe,
                                    secondre: nowpage === Page.secondRe,
                                    thirdre: nowpage === Page.thirdRe,
                                    fourthre: nowpage === Page.fourthRe,
                                    fifthre: nowpage === Page.fifthRe,
                                })}
                            />
                        </div>
                        <div
                            // ref={textbox_wrap}
                            className={cx(style.textbox_wrap, {
                                second: nowpage === Page.second,
                                third: nowpage === Page.third,
                                fourth: nowpage === Page.fourth,
                                fifth: nowpage === Page.fifth,
                                sixth: nowpage === Page.sixth,
                                firstre: nowpage === Page.firstRe,
                                secondre: nowpage === Page.secondRe,
                                thirdre: nowpage === Page.thirdRe,
                                fourthre: nowpage === Page.fourthRe,
                                fifthre: nowpage === Page.fifthRe,
                            })}
                        />
                        <div
                            // ref={textbox}
                            className={cx(style.textbox, {
                                second: nowpage === Page.second,
                                third: nowpage === Page.third,
                                fourth: nowpage === Page.fourth,
                                fifth: nowpage === Page.fifth,
                                sixth: nowpage === Page.sixth,
                                firstre: nowpage === Page.firstRe,
                                secondre: nowpage === Page.secondRe,
                                thirdre: nowpage === Page.thirdRe,
                                fourthre: nowpage === Page.fourthRe,
                                fifthre: nowpage === Page.fifthRe,
                            })}
                        >
                            <div
                                // ref={textcontent1}
                                className={cx(style.textcontent1, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    firstre: nowpage === Page.firstRe,
                                    secondre: nowpage === Page.secondRe,
                                })}
                            >
                                <TextboxContent title="A FUN INTERACTIVE GAME" />
                            </div>
                            <div
                                // ref={textcontent2}
                                className={cx(style.textcontent2, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    secondre: nowpage === Page.secondRe,
                                    thirdre: nowpage === Page.thirdRe,
                                })}
                            >
                                <TextboxContent title="Play to Earn (P2E)" />
                            </div>
                            <div
                                // ref={textcontent3}
                                className={cx(style.textcontent3, {
                                    second: nowpage === Page.second,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    thirdre: nowpage === Page.thirdRe,
                                    fourthre: nowpage === Page.fourthRe,
                                })}
                            >
                                <TextboxContent
                                    title={"RELIABILITY & TRANSPARENCY"}
                                />
                            </div>
                            <div
                                // ref={textcontent4}
                                className={cx(style.textcontent4, {
                                    second: nowpage === Page.second,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    fourthre: nowpage === Page.fourthRe,
                                    fifthre: nowpage === Page.fifthRe,
                                })}
                            >
                                <TextboxContent title="Reward Circulation" />
                            </div>
                        </div>
                    </div>

                    <div
                        // ref={endtitle}
                        className={cx(style.topview_container_end, {
                            sixth: nowpage === Page.sixth,
                            fifthre: nowpage === Page.fifthRe,
                        })}
                    >
                        <div className={style.topview_title_end1}>
                            {"PLAY FUN & EARN INFINITY"}
                        </div>
                        <div className={style.topview_title_end2}>
                            {"WITH TERRA POKER"}
                        </div>
                        <div className={style.topview_title_end1_wrap}>
                            {"PLAY FUN & EARN INFINITY"}
                        </div>
                        <div className={style.topview_title_end2_wrap}>
                            {"WITH TERRA POKER"}
                        </div>
                        {/* <div className={style.end_img1} />
            <div className={style.end_img2} />
            <div className={style.end_img3} />
            <div className={style.end_img4} /> */}
                    </div>
                </div>
            ) : (
                // mobile 환경에서는 navbar, section의 높이가 달라지기때문에 450이 아니라 180을 빼주었다.
                <div
                    className={style.topview}
                    style={{
                        height: window.innerHeight - 180,
                    }}
                >
                    <div
                        // ref={titlescroll}
                        className={cx(style.topview_title_container, {
                            titleappear:
                                props.titleappear && window.innerWidth <= 800,
                        })}
                    >
                        <div className={style.topview_title}>
                            {"FIND OUT KEY FEATURES \nOF TERRA POKER"}
                        </div>
                        <div className={style.topview_title_wrap}>
                            {"FIND OUT KEY FEATURES \nOF TERRA POKER"}
                        </div>
                        <div
                            // ref={element}
                            className={style.topview_gif}
                        />
                        <div className={style.topview_scrolltext}>
                            {"Scroll down"}
                        </div>
                    </div>

                    <div
                        // ref={imgs}
                        className={style.topview_container}
                    >
                        <div className={style.imgs}>
                            <div
                                // ref={img2opacity}
                                className={style.img1}
                            />
                            <div className={style.img2} />
                            <div
                                // ref={img3transform}
                                className={style.img3}
                            />
                            <div
                                // ref={img3opacity}
                                className={style.img4}
                            />
                        </div>
                        <div
                            // ref={textbox_wrap}
                            className={style.textbox_wrap}
                        />
                        <div
                            // ref={textbox}
                            className={style.textbox}
                        >
                            <div
                                // ref={textcontent1}
                                className={style.textcontent}
                            >
                                <TextboxContent title="A FUN INTERACTIVE GAME" />
                            </div>
                            <div
                                // ref={textcontent2}
                                className={style.textcontent}
                            >
                                <TextboxContent title="Play to Earn (P2E)" />
                            </div>
                            <div
                                // ref={textcontent3}
                                className={style.textcontent}
                            >
                                <TextboxContent
                                    title={"RELIABILITY & TRANSPARENCY"}
                                />
                            </div>
                            <div
                                // ref={textcontent4}
                                className={style.textcontent}
                            >
                                <TextboxContent title="Reward Circulation" />
                            </div>
                        </div>
                        <div
                            // ref={mobilestatus}
                            className={style.mobilestatus}
                        >
                            <div
                                // ref={state1_mobile}
                                className={style.state1}
                            >
                                <div className={style.state_text}>{"Pair"}</div>
                                <div className={style.state_text_wrap}>
                                    {"Pair"}
                                </div>
                            </div>
                            <div
                                // ref={state2_mobile}
                                className={style.state2}
                            >
                                <div className={style.state_text}>
                                    {"Three of a Kind"}
                                </div>
                                <div className={style.state_text_wrap}>
                                    {"Three of a Kind"}
                                </div>
                            </div>
                            <div
                                // ref={state3_mobile}
                                className={style.state3}
                            >
                                <div className={style.state_text}>
                                    {"Full House"}
                                </div>
                                <div className={style.state_text_wrap}>
                                    {"Full House"}
                                </div>
                            </div>
                            <div
                                // ref={state4_mobile}
                                className={style.state4}
                            >
                                <div className={style.state_text}>
                                    {"Four of a Kind"}
                                </div>
                                <div className={style.state_text_wrap}>
                                    {"Four of a Kind"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        // ref={endtitle}
                        className={style.topview_container_end}
                    >
                        <div className={style.topview_title_end1}>
                            {"PLAY FUN & EARN INFINITY"}
                        </div>
                        <div className={style.topview_title_end2}>
                            {"WITH TERRA POKER"}
                        </div>
                        <div className={style.topview_title_end1_wrap}>
                            {"PLAY FUN & EARN INFINITY"}
                        </div>
                        <div className={style.topview_title_end2_wrap}>
                            {"WITH TERRA POKER"}
                        </div>
                        <div className={style.endtoken1} />
                        <div className={style.endtoken2} />
                    </div>
                </div>
            )}

            <div className={style.bottomview}>
                <div className={style.bottomview_wrap}>
                    <div className={style.bottomview_bg}>
                        <div className={style.testbutton}>
                            <div
                                className={style.test2}
                                onClick={() => {
                                    BeforePage();
                                }}
                            ></div>
                            <div
                                className={style.test1}
                                onClick={() => {
                                    NextPage();
                                }}
                            ></div>
                        </div>
                        <div className={style.nowstate_container}>
                            <div
                                // ref={state1}
                                className={cx(style.state1, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    firstre: nowpage === Page.firstRe,
                                    secondre: nowpage === Page.secondRe,
                                })}
                            >
                                <div className={style.state_text}>{"Pair"}</div>
                                <div className={style.state_text_wrap}>
                                    {"Pair"}
                                </div>
                            </div>
                            <div
                                // ref={state2}
                                className={cx(style.state2, {
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    secondre: nowpage === Page.secondRe,
                                    thirdre: nowpage === Page.thirdRe,
                                })}
                            >
                                <div className={style.state_text}>
                                    {"Three of a Kind"}
                                </div>
                                <div className={style.state_text_wrap}>
                                    {"Three of a Kind"}
                                </div>
                            </div>
                            <div
                                // ref={state3}
                                className={cx(style.state3, {
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    thirdre: nowpage === Page.thirdRe,
                                    fourthre: nowpage === Page.fourthRe,
                                })}
                            >
                                <div className={style.state_text}>
                                    {"Full House"}
                                </div>
                                <div className={style.state_text_wrap}>
                                    {"Full House"}
                                </div>
                            </div>
                            <div
                                // ref={state4}
                                className={cx(style.state4, {
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    fourthre: nowpage === Page.fourthRe,
                                    fifthre: nowpage === Page.fifthRe,
                                })}
                            >
                                <div className={style.state_text}>
                                    {"Four of a Kind"}
                                </div>
                                <div className={style.state_text_wrap}>
                                    {"Four of a Kind"}
                                </div>
                            </div>
                        </div>
                        <div className={style.opencard_wrapper}>
                            <div className={style.opencard_table}>
                                <div
                                    // ref={cardopen}
                                    className={cx(style.card1, {
                                        third: nowpage === Page.third,
                                        fourth: nowpage === Page.fourth,
                                        fifth: nowpage === Page.fifth,
                                        sixth: nowpage === Page.sixth,
                                        secondre: nowpage === Page.secondRe,
                                        thirdre: nowpage === Page.thirdRe,
                                        fourthre: nowpage === Page.fourthRe,
                                        fifthre: nowpage === Page.fifthRe,
                                    })}
                                ></div>
                                <div
                                    // ref={cardopen_2}
                                    className={cx(style.card2, {
                                        third: nowpage === Page.third,
                                        fourth: nowpage === Page.fourth,
                                        fifth: nowpage === Page.fifth,
                                        sixth: nowpage === Page.sixth,
                                        secondre: nowpage === Page.secondRe,
                                        thirdre: nowpage === Page.thirdRe,
                                        fourthre: nowpage === Page.fourthRe,
                                        fifthre: nowpage === Page.fifthRe,
                                    })}
                                ></div>
                                <div
                                    // ref={cardopen_3}
                                    className={cx(style.card3, {
                                        third: nowpage === Page.third,
                                        fourth: nowpage === Page.fourth,
                                        fifth: nowpage === Page.fifth,
                                        sixth: nowpage === Page.sixth,
                                        secondre: nowpage === Page.secondRe,
                                        thirdre: nowpage === Page.thirdRe,
                                        fourthre: nowpage === Page.fourthRe,
                                        fifthre: nowpage === Page.fifthRe,
                                    })}
                                ></div>
                                <div
                                    // ref={cardopen2}
                                    className={cx(style.card4, {
                                        fourth: nowpage === Page.fourth,
                                        fifth: nowpage === Page.fifth,
                                        sixth: nowpage === Page.sixth,
                                        thirdre: nowpage === Page.thirdRe,
                                        fourthre: nowpage === Page.fourthRe,
                                        fifthre: nowpage === Page.fifthRe,
                                    })}
                                ></div>
                                <div
                                    // ref={cardopen3}
                                    className={cx(style.card5, {
                                        fifth: nowpage === Page.fifth,
                                        sixth: nowpage === Page.sixth,
                                        fourthre: nowpage === Page.fourthRe,
                                        fifthre: nowpage === Page.fifthRe,
                                    })}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cx(style.opencard_wrapper_dimmed, {
                                sixth: nowpage === Page.sixth,
                                fifthre: nowpage === Page.fifthRe,
                            })}
                        >
                            <div className={style.opencard_table_dimmed}>
                                <div
                                    // ref={cardend}
                                    className={style.card2_dimmed}
                                ></div>
                                <div
                                    // ref={cardend2}
                                    className={style.card2_dimmed2}
                                ></div>
                                <div
                                    // ref={cardend3}
                                    className={style.card2_dimmed3}
                                ></div>
                            </div>
                        </div>

                        <div className={style.mycard_table}>
                            <div
                                // ref={cardopenhalf1}
                                className={cx(style.cardhalf1, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    firstre: nowpage === Page.firstRe,
                                    secondre: nowpage === Page.secondRe,
                                    thirdre: nowpage === Page.thirdRe,
                                    fourthre: nowpage === Page.fourthRe,
                                    fifthre: nowpage === Page.fifthRe,
                                })}
                            ></div>
                            <div
                                // ref={cardopenhalf2}
                                className={cx(style.cardhalf2, {
                                    second: nowpage === Page.second,
                                    third: nowpage === Page.third,
                                    fourth: nowpage === Page.fourth,
                                    fifth: nowpage === Page.fifth,
                                    sixth: nowpage === Page.sixth,
                                    firstre: nowpage === Page.firstRe,
                                    secondre: nowpage === Page.secondRe,
                                    thirdre: nowpage === Page.thirdRe,
                                    fourthre: nowpage === Page.fourthRe,
                                    fifthre: nowpage === Page.fifthRe,
                                })}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TextboxContent(props: { title: string }) {
    return (
        <div className={style.textbox_container}>
            <div className={style.textbox_center}>
                <div className={style.textbox_title}>{props.title}</div>
                <div className={style.textbox_content}>
                    {props.title === "A FUN INTERACTIVE GAME"
                        ? "Terra Poker is the first gaming protocol on the Terra Blockchain that provides player to player (P2P) interaction. \n\nA user can  create their own distinguished profile (ie. any NFT character) to use in gameplay. \n\nTerra Poker is a proprietary Texas Hold’em game which offers fun and great gaming experience."
                        : props.title === "Play to Earn (P2E)"
                        ? "Unlike other casino protocols that are designed for players to lose, Terra Poker developed a poker platform for users to potentially earn huge profits, even with a small budget. \n\nTerra Poker offers tournament games that give players an opportunity to earn big rewards. Tournaments will be opened on a daily basis and 6 players from each tournament will take home winning prizes."
                        : props.title === "Reward Circulation"
                        ? "Terra Poker protocol collects a low percentage of rake fees from each game where most of the collected rake fee will be distributed as staking rewards. Governance stakers earn $tTP yields which can be used as tournament entry tickets. This process allows Terra Poker to be a sustainable poker platform in the Terra ecosystem."
                        : "Safety and transparency is the focused priority of Terra Poker. \n\nAll actions, transactions, and probabilities are recorded by smart contract on the blockchain. Our products prevent bots and any other programmatic abuse."}
                </div>
            </div>
        </div>
    );
}
