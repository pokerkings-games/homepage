import style from "./TextboxContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export function TextboxContent(props: { title: string }) {
    return (
        <div className={style.textbox_container}>
            <div className={style.textbox_center}>
                <div
                    className={cx(style.textbox_title, {
                        fun: props.title === "A FUN INTERACTIVE GAME",
                    })}
                >
                    {props.title}
                </div>
                <div
                    className={cx(style.textbox_title_wrap, {
                        fun: props.title === "A FUN INTERACTIVE GAME",
                    })}
                >
                    {props.title}
                </div>

                <div
                    className={cx(style.textbox_content, {
                        reliability:
                            props.title === "RELIABILITY & TRANSPARENCY",
                    })}
                >
                    {props.title === "A FUN INTERACTIVE GAME"
                        ? "Play peer to peer & have a great interaction experience"
                        : props.title === "PLAY TO EARN (P2E)"
                        ? "Play tournaments & cash games to earn unlimited rewards"
                        : props.title === "REWARD CIRCULATION"
                        ? "Distribution of all collected rake fees to user rewards : \nStaking rewards / Tournament Tickets / Prizes"
                        : "Random dealing system contract & prevention of bots \nor any other programmatic abuse"}
                </div>
            </div>
        </div>
    );
}
