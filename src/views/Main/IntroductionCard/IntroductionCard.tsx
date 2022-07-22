import Lottie from "lottie-web";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import animationData from "../../../Assets/Images/white-mouse.json";
import { TextboxContent } from "../../common/TextboxContent/TextboxContent";
import style from "./IntroductionCard.module.scss";

export default function IntroductionCard1(props: {
    page: any;
    innerPage: MutableRefObject<number | undefined>;
    titleFade: boolean;
}) {
    const transition = 0;
    const element = useRef<HTMLDivElement>(null);
    const [nowinnerpage, setNowinnerpage] = useState<number>(0);
    const [clickCheck, setClickCheck] = useState<boolean>(false);

    function opacityTransition(direction: number, id: string) {
        const object = document.getElementById(id);

        if (!object) {
            return;
        }
        if (direction === 0) {
            if (
                id === "opencard1" ||
                id === "opencard2" ||
                id === "opencard4"
            ) {
                object.style.opacity = "0.2";
            } else if (id === "textboxwrap") {
                object.style.display = "none";
                object.style.opacity = "0";
                object.style.zIndex = "1";
            } else if (id === "nextbutton") {
                object.style.opacity = "0";
                object.style.zIndex = "6";
            } else {
                object.style.opacity = "0";
            }
        } else if (direction === 1) {
            if (id === "dimmedcard") {
                object.style.opacity = "0.8";
            } else if (
                id === "opencard1" ||
                id === "opencard2" ||
                id === "opencard4"
            ) {
                object.style.opacity = "1";
            } else if (id === "nextbutton") {
                object.style.zIndex = "8";
                object.style.opacity = "1";
            } else if (id === "textboxwrap") {
                object.style.opacity = "1";
                object.style.zIndex = "2";
                object.style.display = "inline";
            } else if (id === "dimmed") {
                object.style.opacity = "0.6";
            } else {
                object.style.opacity = "1";
            }
        }
    }

    function buttonTransition(buttonid: string, margin: number) {
        const button = document.getElementById(buttonid);

        if (!button) {
            return;
        }

        if (window.innerWidth >= 1000) {
            button.style.marginLeft = margin + "px";
        } else {
            if (nowinnerpage === 0 || nowinnerpage === 5) {
                button.style.width = "calc(" + 100 + "% - " + 50 + "px";
                button.style.marginLeft = 0 + "%";
            } else {
                button.style.width = "calc(" + 50 + "% - " + 50 + "px";
                button.style.marginLeft = 25 + "%";

                if (buttonid === "prevbutton") {
                    button.style.marginLeft = -25 + "%";
                }
            }
        }
    }

    function mycardFlop(direction: number, id: number) {
        const card = document.getElementById("half" + id);
        if (!card) {
            return;
        }
        if (direction === 0) {
            card.style.right = 0 + "px";
            card.style.transform =
                "rotateY(" + 0 + "deg) translateZ(" + 1 + "px)";
        } else if (direction === 1) {
            if (window.innerWidth >= 1000) {
                card.style.right = 132 + "px";
                card.style.transform =
                    "rotateY(" + 180 + "deg) translateZ(" + 3 + "px)";
            } else {
                card.style.right = 70 + "px";
                card.style.transform =
                    "rotateY(" + 180 + "deg) translateZ(" + 3 + "px)";
            }
        }
    }

    function opencardFlop(direction: number, id: number) {
        const card = document.getElementById("opencard" + id);
        if (!card) {
            return;
        }
        if (direction === 0) {
            card.style.right = 0 + "px";
            card.style.transform =
                "rotateY(" + 0 + "deg) translateZ(" + 1 + "px)";
        } else if (direction === 1) {
            if (window.innerWidth >= 1000) {
                card.style.right = 75 + "px";
                card.style.transform =
                    "rotateY(" + 180 + "deg) translateZ(" + -2 + "px)";
            } else {
                card.style.right = 35 + "px";
                card.style.transform =
                    "rotateY(" + 180 + "deg) translateZ(" + -2 + "px)";
            }
        }
    }

    useEffect(() => {
        // start
        if (nowinnerpage === 0) {
            setTimeout(() => {
                opacityTransition(1, "titles");
                buttonTransition("nextbutton", 0);
                buttonTransition("prevbutton", 0);
                opacityTransition(0, "prevbutton");
                opacityTransition(0, "textcontent1");
                mycardFlop(0, 1);
                mycardFlop(0, 2);
                opacityTransition(0, "state1");
                opacityTransition(1, "phase1");
                opacityTransition(0, "phase2");
            }, transition);
        }
        // preflop
        else if (nowinnerpage === 1) {
            setTimeout(() => {
                opacityTransition(0, "titles");
                buttonTransition("nextbutton", 95);
                buttonTransition("prevbutton", -90);
                opacityTransition(1, "prevbutton");
                opacityTransition(1, "textcontent1");
                opacityTransition(0, "textcontent2");
                mycardFlop(1, 1);
                mycardFlop(1, 2);
                opencardFlop(0, 1);
                opencardFlop(0, 2);
                opencardFlop(0, 3);
                opacityTransition(1, "state1");
                opacityTransition(0, "state2");
                opacityTransition(0, "phase1");
                opacityTransition(1, "phase2");
                opacityTransition(0, "phase3");
            }, transition);
        }
        // flop
        else if (nowinnerpage === 2) {
            setTimeout(() => {
                opacityTransition(0, "textcontent1");
                opacityTransition(1, "textcontent2");
                opacityTransition(0, "textcontent3");
                opencardFlop(1, 1);
                opencardFlop(1, 2);
                opencardFlop(1, 3);
                opencardFlop(0, 4);
                opacityTransition(0, "state1");
                opacityTransition(1, "state2");
                opacityTransition(0, "state3");
                opacityTransition(0, "phase2");
                opacityTransition(1, "phase3");
                opacityTransition(0, "phase4");
            }, transition);
        }
        // turn
        else if (nowinnerpage === 3) {
            setTimeout(() => {
                opacityTransition(0, "textcontent2");
                opacityTransition(1, "textcontent3");
                opacityTransition(0, "textcontent4");
                opencardFlop(1, 4);
                opencardFlop(0, 5);
                opacityTransition(0, "state2");
                opacityTransition(1, "state3");
                opacityTransition(0, "state4");
                opacityTransition(0, "phase3");
                opacityTransition(1, "phase4");
                opacityTransition(0, "phase5");
            }, transition);
        }
        // river
        else if (nowinnerpage === 4) {
            setTimeout(() => {
                opacityTransition(0, "textcontent3");
                opacityTransition(1, "textcontent4");
                opacityTransition(0, "endtitle");
                opencardFlop(1, 5);
                opacityTransition(0, "state3");
                opacityTransition(1, "state4");
                opacityTransition(1, "opencard1");
                opacityTransition(1, "opencard2");
                opacityTransition(1, "opencard4");
                opacityTransition(1, "nextbutton");
                buttonTransition("prevbutton", -90);
                opacityTransition(0, "phase4");
                opacityTransition(1, "phase5");
                opacityTransition(0, "phase6");
            }, transition);
        }
        // end - dimmed
        else {
            setTimeout(() => {
                opacityTransition(0, "textcontent3");
                opacityTransition(0, "textcontent4");
                opacityTransition(1, "endtitle");
                opacityTransition(0, "opencard1");
                opacityTransition(0, "opencard2");
                opacityTransition(0, "opencard4");
                opacityTransition(0, "nextbutton");
                buttonTransition("prevbutton", 0);
                opacityTransition(1, "phase6");
                opacityTransition(0, "phase5");
            }, transition);
        }
    }, [nowinnerpage]);

    return (
        <div className={style.introductioncard1_bg} id="introductioncard1_bg">
            <div className={style.middleview}>
                <div className={style.bottomview}>
                    <div className={style.bottomview_wrap}>
                        <div className={style.bottomview_bg}>
                            <div
                                className={style.cards_phase1}
                                id="phase1"
                            ></div>
                            <div
                                className={style.cards_phase2}
                                id="phase2"
                            ></div>
                            <div
                                className={style.cards_phase3}
                                id="phase3"
                            ></div>
                            <div
                                className={style.cards_phase4}
                                id="phase4"
                            ></div>
                            <div
                                className={style.cards_phase5}
                                id="phase5"
                            ></div>
                            <div
                                className={style.cards_phase6}
                                id="phase6"
                            ></div>
                            <div className={style.nowstate_container}>
                                <div className={style.state1} id="state1">
                                    <div className={style.state_text}>
                                        {"Pair"}
                                    </div>
                                </div>
                                <div className={style.state2} id="state2">
                                    <div className={style.state_text}>
                                        {"Three of a Kind"}
                                    </div>
                                </div>
                                <div className={style.state3} id="state3">
                                    <div className={style.state_text}>
                                        {"Full House"}
                                    </div>
                                </div>
                                <div className={style.state4} id="state4">
                                    <div className={style.state_text}>
                                        {"Four of a Kind"}
                                    </div>
                                </div>
                            </div>

                            <div className={style.opencard_wrapper}>
                                <div className={style.opencard_table}>
                                    <div
                                        className={style.card1}
                                        id="opencard1"
                                    ></div>
                                    <div
                                        className={style.card2}
                                        id="opencard2"
                                    ></div>
                                    <div
                                        className={style.card3}
                                        id="opencard3"
                                    ></div>
                                    <div
                                        className={style.card4}
                                        id="opencard4"
                                    ></div>
                                    <div
                                        className={style.card5}
                                        id="opencard5"
                                    ></div>
                                </div>
                            </div>

                            <div className={style.mycard_table}>
                                <div
                                    className={style.cardhalf1}
                                    id="half1"
                                ></div>
                                <div
                                    className={style.cardhalf2}
                                    id="half2"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.textbox}>
                    <div className={style.topview_title_container} id="titles">
                        <div className={style.topview_title}>
                            {"KEY FEATURES\nOF TERRA POKER"}
                        </div>
                        <div className={style.topview_title_wrap}>
                            {"KEY FEATURES\nOF TERRA POKER"}
                        </div>
                    </div>
                    <div className={style.textcontent1} id="textcontent1">
                        <TextboxContent title="A FUN INTERACTIVE GAME" />
                    </div>
                    <div className={style.textcontent2} id="textcontent2">
                        <TextboxContent title="PLAY TO EARN (P2E)" />
                    </div>
                    <div className={style.textcontent3} id="textcontent3">
                        <TextboxContent title={"RELIABILITY & TRANSPARENCY"} />
                    </div>
                    <div className={style.textcontent4} id="textcontent4">
                        <TextboxContent title="REWARD CIRCULATION" />
                    </div>
                    <div className={style.topview_container_end} id="endtitle">
                        <div className={style.topview_title_end2}>
                            {"TERRA POKER"}
                        </div>
                        <div className={style.topview_title_end1}>
                            <div className={style.topview_title_end1wrap}>
                                <div className={style.topview_title_end1_first}>
                                    {"HAVE FUN & "}
                                </div>
                                <div
                                    className={style.topview_title_end1_second}
                                >
                                    {"EARN INFINITE PRIZES"}
                                </div>
                            </div>
                        </div>

                        <div className={style.topview_title_end2_wrap}>
                            {"TERRA POKER"}
                        </div>
                    </div>
                </div>

                <div className={style.textbox_wrap}></div>
                <div className={style.imgs} id="imgs">
                    <div className={style.img1} id="img1" />
                    <div className={style.img4} id="img4" />
                </div>
                <div className={style.imgs2} id="imgs2">
                    <div className={style.img2} id="img2" />
                    <div className={style.img3} id="img3" />
                </div>
                <div
                    className={style.topview_nextbutton}
                    onClick={() => {
                        if (!clickCheck) {
                            setClickCheck(true);
                            if (nowinnerpage !== 5) {
                                setNowinnerpage(nowinnerpage + 1);
                            }

                            setTimeout(() => {
                                setClickCheck(false);
                            }, 600);
                        }
                    }}
                    id="nextbutton"
                >
                    {"Next"}
                </div>
                <div
                    className={style.prevbutton}
                    onClick={() => {
                        if (!clickCheck) {
                            setClickCheck(true);
                            if (nowinnerpage !== 0) {
                                setNowinnerpage(nowinnerpage - 1);
                            }

                            setTimeout(() => {
                                setClickCheck(false);
                            }, 600);
                        }
                    }}
                    id="prevbutton"
                >
                    {"Previous"}
                </div>
            </div>
        </div>
    );
}
