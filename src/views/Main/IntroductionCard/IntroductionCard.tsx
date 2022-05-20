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
            } else {
                object.style.opacity = "1";
            }
        }
    }

    function imgmoveTransition(
        imgnum: number,
        direction: number,
        margin: number
    ) {
        const img = document.getElementById("img" + imgnum);

        if (!img) {
            return;
        }
        if (direction === 0) {
            img.style.top = margin + "px";
            img.style.opacity = "0";
        } else if (direction === 1) {
            img.style.top = margin + "px";
            img.style.opacity = "1";
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

    // function textboxResizeMove(direction: number) {
    //     const textbox = document.getElementById("textbox");
    //     const textboxwrap = document.getElementById("textboxwrap");

    //     if (!textbox || !textboxwrap) {
    //         return;
    //     }

    //     if (window.innerWidth > 1000) {
    //         if (direction === 1) {
    //             textbox.style.height = 450 + "px";
    //             textbox.style.top = 60 + "px";
    //             textboxwrap.style.height = 450 + "px";
    //             textboxwrap.style.width = 800 + "px";
    //             textboxwrap.style.top = 60 + "px";
    //         } else if (direction === 2) {
    //             textbox.style.height = 430 + "px";
    //             textbox.style.top = 70 + "px";
    //             textboxwrap.style.height = 430 + "px";
    //             textboxwrap.style.top = 70 + "px";
    //         } else if (direction === 3) {
    //             textbox.style.height = 380 + "px";
    //             textbox.style.top = 100 + "px";
    //             textboxwrap.style.height = 380 + "px";
    //             textboxwrap.style.top = 100 + "px";
    //         } else if (direction === 4) {
    //             textbox.style.height = 370 + "px";
    //             textbox.style.top = 105 + "px";
    //             textboxwrap.style.height = 370 + "px";
    //             textboxwrap.style.top = 105 + "px";
    //         } else if (direction === 5) {
    //             textbox.style.height = 150 + "px";
    //             textbox.style.top = 150 + "px";
    //         } else {
    //             textbox.style.height = 420 + "px";
    //             textbox.style.top = 80 + "px";
    //             textboxwrap.style.height = 420 + "px";
    //             textboxwrap.style.top = 80 + "px";
    //         }
    //     }
    // }

    useEffect(() => {
        // start
        if (nowinnerpage === 0) {
            setTimeout(() => {
                opacityTransition(1, "title");
                buttonTransition("nextbutton", 0);
                buttonTransition("prevbutton", 0);
                opacityTransition(0, "prevbutton");
                // opacityTransition(0, "imgs");
                // imgmoveTransition(2, 0, 1500);
                // imgmoveTransition(3, 0, 1500);
                // imgfadeinTransition(1, 0);
                // imgfadeinTransition(4, 0);
                // opacityTransition(0, "textbox");
                // opacityTransition(0, "textboxwrap");
                opacityTransition(0, "textcontent1");
                mycardFlop(0, 1);
                mycardFlop(0, 2);
                opacityTransition(0, "state1");
                // opacityTransition(0, "state1_m");
                // gifMovedown(0);
                // textboxResizeMove(0);
            }, transition);
        }
        // preflop
        else if (nowinnerpage === 1) {
            setTimeout(() => {
                opacityTransition(0, "title");
                buttonTransition("nextbutton", 95);
                buttonTransition("prevbutton", -90);
                opacityTransition(1, "prevbutton");
                // opacityTransition(1, "imgs");
                // imgmoveTransition(2, 1, 0);
                // imgmoveTransition(3, 1, 303);
                // imgfadeinTransition(1, 1);
                // imgfadeinTransition(4, 1);
                // opacityTransition(1, "textbox");
                // opacityTransition(1, "textboxwrap");
                opacityTransition(1, "textcontent1");
                opacityTransition(0, "textcontent2");
                mycardFlop(1, 1);
                mycardFlop(1, 2);
                opencardFlop(0, 1);
                opencardFlop(0, 2);
                opencardFlop(0, 3);
                opacityTransition(1, "state1");
                opacityTransition(0, "state2");
                // opacityTransition(1, "state1_m");
                // opacityTransition(0, "state2_m");
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
                // opacityTransition(0, "state1_m");
                // opacityTransition(1, "state2_m");
                // opacityTransition(0, "state3_m");
                // textboxResizeMove(2);
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
                // opacityTransition(0, "state2_m");
                // opacityTransition(1, "state3_m");
                // opacityTransition(0, "state4_m");
                // textboxResizeMove(3);
            }, transition);
        }
        // river
        else if (nowinnerpage === 4) {
            setTimeout(() => {
                opacityTransition(0, "textcontent3");
                opacityTransition(1, "textcontent4");
                // opacityTransition(1, "textbox");
                // opacityTransition(1, "textboxwrap");
                opacityTransition(0, "endtitle");
                opencardFlop(1, 5);
                opacityTransition(0, "state3");
                opacityTransition(1, "state4");
                // opacityTransition(0, "state3_m");
                // opacityTransition(1, "state4_m");
                // opacityTransition(0, "dimmedcard");
                opacityTransition(1, "opencard1");
                opacityTransition(1, "opencard2");
                opacityTransition(1, "opencard4");
                opacityTransition(1, "nextbutton");
                buttonTransition("prevbutton", -90);
                // textboxResizeMove(4);
            }, transition);
        }
        // end - dimmed
        else {
            setTimeout(() => {
                opacityTransition(0, "textcontent3");
                opacityTransition(0, "textcontent4");
                // opacityTransition(0, "textbox");
                // opacityTransition(0, "textboxwrap");
                opacityTransition(1, "endtitle");
                // opacityTransition(1, "dimmedcard");
                opacityTransition(0, "opencard1");
                opacityTransition(0, "opencard2");
                opacityTransition(0, "opencard4");
                opacityTransition(0, "nextbutton");
                buttonTransition("prevbutton", 0);
                // textboxResizeMove(5);
            }, transition);
        }
    }, [nowinnerpage]);

    // useEffect(() => {
    //   if (element.current)
    //     // add this
    //     Lottie.loadAnimation({
    //       animationData,
    //       container: element.current,
    //       loop: true,
    //     });
    // }, [element]);

    return (
        <div className={style.introductioncard1_bg} id="introductioncard1_bg">
            <div className={style.middleview}>
                <div className={style.bottomview}>
                    <div className={style.bottomview_wrap}>
                        <div className={style.bottomview_bg}>
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
                    <div className={style.topview_title_container} id="title">
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

            {/* <div className={style.topview}>
                <div className={style.topview_title_container} id="title">
                    <div className={style.topview_title}>
                        {"KEY FEATURES\nOF TERRA POKER"}
                    </div>
                    <div className={style.topview_title_wrap}>
                        {"KEY FEATURES\nOF TERRA POKER"}
                    </div>
                    <div
                        className={style.topview_nextbutton}
                        onClick={() => {
                            setNowinnerpage(nowinnerpage + 1);
                        }}
                    >
                        {"Next"}
                    </div>
                </div>

                <div className={style.topview_container}>
                    <div className={style.imgs} id="imgs">
                        <div className={style.img1} id="img1" />
                        <div className={style.img2} id="img2" />
                        <div className={style.img3} id="img3" />
                        <div className={style.img4} id="img4" />
                    </div>
                    <div className={style.textbox_wrap} id="textboxwrap" />
                    <div className={style.textbox} id="textbox">
                        <div className={style.textcontent1} id="textcontent1">
                            <TextboxContent title="A Fun Interactive Game" />
                        </div>
                        <div className={style.textcontent2} id="textcontent2">
                            <TextboxContent title="Play to Earn (P2E)" />
                        </div>
                        <div className={style.textcontent3} id="textcontent3">
                            <TextboxContent
                                title={"RELIABILITY & TRANSPARENCY"}
                            />
                        </div>
                        <div className={style.textcontent4} id="textcontent4">
                            <TextboxContent title="Reward Circulation" />
                        </div>
                        <div className={style.textbuttons}>
                            <div
                                className={style.prevbutton}
                                onClick={() => {
                                    setNowinnerpage(nowinnerpage - 1);
                                }}
                            >
                                {"Previous"}
                            </div>
                            <div
                                className={style.nextbutton}
                                onClick={() => {
                                    setNowinnerpage(nowinnerpage + 1);
                                }}
                            >
                                {"Next"}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.topview_container_end} id="endtitle">
                    <div className={style.topview_title_end1}>
                        <div className={style.topview_title_end1wrap}>
                            <div className={style.topview_title_end1_first}>
                                {"Have Fun, Play Smart,"}
                            </div>
                            <div className={style.topview_title_end1_second}>
                                {"Earn Infinite Prizes"}
                            </div>
                        </div>
                    </div>
                    <div className={style.topview_title_end2}>
                        {"WITH TERRA POKER"}
                    </div>
                    <div className={style.topview_title_end1_wrap}>
                        <div className={style.topview_title_end1wrap_wrap}>
                            <div
                                className={style.topview_title_end1_wrap_first}
                            >
                                {"Have Fun, Play Smart,"}
                            </div>
                            <div
                                className={style.topview_title_end1_wrap_second}
                            >
                                {"Earn Infinite Prizes"}
                            </div>
                        </div>
                    </div>
                    <div className={style.topview_title_end2_wrap}>
                        {"WITH TERRA POKER"}
                    </div>
                    <div className={style.endtoken1} />
                    <div className={style.endtoken2} />
                    <div
                        className={style.endprevbutton}
                        onClick={() => {
                            setNowinnerpage(nowinnerpage - 1);
                        }}
                    >
                        {"Previous"}
                    </div>
                </div>
            </div> */}
        </div>
    );
}
