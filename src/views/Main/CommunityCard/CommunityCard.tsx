import style from "./CommunityCard.module.scss";

export default function CommunityCard(props: { page: any }) {
    return (
        <div className={style.communitycard_bg} id="communitycard_bg">
            <div className={style.community}>
                <div className={style.community_title}>{"COMMUNITY"}</div>
                <div className={style.community_content}>
                    {
                        "Terra’s ecosystem is booming. Join the creators, builders, and users of the Terra ecosystem to pioneer the future of DeFi & online communities."
                    }
                </div>
                <div className={style.community_icons}>
                    <a
                        className={style.com_icon1}
                        href={"https://twitter.com/tp_terrapoker"}
                        target="_blank"
                    >
                        <div className={style.com_icon1_img} />
                        <div className={style.com_icon1_text}>{"Twitter"}</div>
                    </a>
                    <a
                        className={style.com_icon2}
                        href={"https://t.me/+fasu2TAQweUzZmVl"}
                        target="_blank"
                    >
                        <div className={style.com_icon2_img} />
                        <div className={style.com_icon2_text}>{"Telegram"}</div>
                    </a>
                    {/* <a
                        className={style.com_icon3}
                        href={"https://www.naver.com/"}
                        target="_blank"
                    >
                        <div className={style.com_icon3_img} />
                        <div className={style.com_icon3_text}>{"Medium"}</div>
                    </a> */}
                </div>
            </div>
        </div>
    );
}
