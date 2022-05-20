import style from "./RoadmapCard.module.scss";

export default function RoadmapCard(props: { page: any }) {
    return (
        <div className={style.roadmap_bg} id="roadmap_bg">
            <div className={style.roadmap}>
                <div className={style.roadmap_title}>{"ROADMAP"}</div>
                <div className={style.roadmap_line} />
                <div className={style.roadmap_dot1} />
                <div className={style.roadmap_dot1wrap} />
                <div className={style.roadmap_dot2} />
                <div className={style.roadmap_dot2wrap} />
                <div className={style.roadmap_dot3} />
                <div className={style.roadmap_dot3wrap} />
                <div className={style.bgtoken1} />
                <div className={style.bgtoken2} />
                <div className={style.bgcard} />
                <div className={style.q2box}>
                    <div className={style.q2boxwrap}>
                        <div className={style.q2title}>{"2Q"}</div>
                        <div className={style.q2content}>
                            <ul>
                                <li>{"Landing Page Launch"}</li>
                                <li>{"Token Sale"}</li>
                                <li>{"Publish Litepaper"}</li>
                                <li>{"TGE (Webapp Launch)"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.q2card} />
                <div className={style.q3box}>
                    <div className={style.q3boxwrap}>
                        <div className={style.q3title}>{"3Q"}</div>
                        <div className={style.q3content}>
                            <ul>
                                <li>{"Tournament Open"}</li>
                                <li>{"Terra Poker NFT Launch"}</li>
                                <li>{"Boost Marketing Engagement"}</li>
                                <li>{"YouTube Live Streaming open"}</li>
                                <li>{"Dapp Activation Airdrop"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.q3card} />
                <div className={style.q4box}>
                    <div className={style.q4boxwrap}>
                        <div className={style.q4title}>{"4Q"}</div>
                        <div className={style.q4content}>
                            <ul>
                                <li>{"Cross-Chain Support"}</li>
                            </ul>
                            <div className={style.q4contentsub}>
                                {
                                    "(Expand the Terra Poker universe by joining the COSMOS ecosystem via IBC)"
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.q4card} />
            </div>

            <div className={style.roadmap_m}>
                <div className={style.roadmap_bgtoken1} />
                <div className={style.roadmap_bgtoken2} />
                <div className={style.roadmap_bgcard_m} />
                <div className={style.roadmap_title_m}>{"ROADMAP"}</div>
                <div className={style.roadmap_1q}>
                    <div className={style.roadmap_1qbox_m}>
                        <div className={style.q2boxwrap}>
                            <div className={style.q2title}>{"2Q"}</div>
                            <div className={style.q2content}>
                                <ul>
                                    <li>{"Landing Page Launch"}</li>
                                    <li>{"Token Sale"}</li>
                                    <li>{"Publish Litepaper"}</li>
                                    <li>{"TGE (Webapp Launch)"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.roadmap_1qcard_m} />
                </div>
                <div className={style.roadmap_2q}>
                    <div className={style.roadmap_2qbox_m}>
                        <div className={style.q3boxwrap}>
                            <div className={style.q3title}>{"3Q"}</div>
                            <div className={style.q3content}>
                                <ul>
                                    <li>{"Tournament Open"}</li>
                                    <li>{"Terra Poker NFT Launch"}</li>
                                    <li>{"Boost Marketing Engagement"}</li>
                                    <li>{"YouTube Live Streaming open"}</li>
                                    <li>{"Dapp Activation Airdrop"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.roadmap_2qcard_m} />
                </div>
                <div className={style.roadmap_3q}>
                    <div className={style.roadmap_3qbox_m}>
                        <div className={style.q4boxwrap}>
                            <div className={style.q4title}>{"4Q"}</div>
                            <div className={style.q4content}>
                                <ul>
                                    <li>{"Cross-Chain Support"}</li>
                                </ul>
                                <div className={style.q4contentsub}>
                                    {
                                        "(Expand the Terra Poker universe by joining the COSMOS ecosystem via IBC)"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.roadmap_3qcard_m} />
                </div>
            </div>
        </div>
    );
}
