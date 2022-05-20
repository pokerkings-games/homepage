import style from "./TopCard.module.scss";

export default function TopCard(props: { page: any }) {
  return (
    <div className={style.topcard_bg} id="topcard_bg">
      <div className={style.topsection}>
        <div className={style.bgimg_wrap}>
          <div className={style.bgimg}>
            <div className={style.title_container}>
              <div className={style.title}>{"Terra Poker"}</div>
              <div className={style.sub}>{"Coming Soon"}</div>
            </div>
          </div>
        </div>
        <div className={style.bgimg_wrap_mobile}>
          <div className={style.title_container_mobile}>
            <div className={style.title_mobile}>{"Terra Poker"}</div>
            <div className={style.sub_mobile}>{"Coming Soon"}</div>
          </div>
          <div className={style.bgimg_mobile} />
        </div>
      </div>
    </div>
  );
}
