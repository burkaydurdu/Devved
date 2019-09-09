import { h, Component } from "preact";
import style from "./style";

export default class Card extends Component {
  state = {
    color: ["#FF3A3D", "#FFCC00", "#5993FF", "#43D140", "#3366FF", "#00D2FC"]
  };

  dateFormatter(date) {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(new Date(date));
  }

  render({ data }, { color }) {
    return (
      <div class={style.cardBox}>
        <div class={style.cardBoxBody}>
          <div class={style.cardBoxBodyImage}>
            {data.cover_image != null ? (
              <img src={data.cover_image} width="200" />
            ) : (
              <div class={style.devTo}>Dev.to</div>
            )}
          </div>
          <div class={style.cardBoxBodyContent}>
            <div>
              <a href={data.url}>{data.title}</a>
            </div>
            <div>
              <span>{data.description}</span>
            </div>
          </div>
        </div>
        <div class={style.cardBoxProfile}>
          <div class={style.cardBoxProfileAvatar}>
            <img src={data.user.profile_image_90} width="40" />
          </div>
          <div class={style.cardBoxProfileContent}>
            <p>{data.user.name}</p>
            <div class={style.cardBoxProfileLink}>
              {data.user.github_username ? (
                <a
                  href={"https://github.com/" + data.user.github_username}
                  target="_blank"
                >
                  <img src="/assets/icons/github.png" width="20" height="20" />
                </a>
              ) : (
                ""
              )}
              {data.user.twitter_username ? (
                <a
                  href={"https://twitter.com/" + data.user.twitter_username}
                  target="_blank"
                >
                  <img src="/assets/icons/twitter.png" width="20" height="20" />
                </a>
              ) : (
                ""
              )}
              {data.user.username ? (
                <a
                  href={"https://dev.to/" + data.user.username}
                  target="_blank"
                >
                  <img src="/assets/icons/dev.png" width="20" height="20" />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div class={style.cardBoxFooter}>
          <div class={style.cardBoxFooterTag}>
            {data.tag_list.map((item, index) => (
              <p
                class={style.cardBoxTagBox}
                style={"background-color:" + color[index % 6]}
              >
                {" "}
                {item}
              </p>
              // Math.floor(Math.random() * (5 - 0))
            ))}
          </div>
          <div class={style.cardBoxFooterRight}>
            <div class={style.cardBoxFooterRightPublished}>
              {this.dateFormatter(data.published_at)}
            </div>
            <div class={style.cardBoxFooterRightComment}>
              {data.comments_count}
            </div>
            <div class={style.cardBoxFooterRightLike}>
              {data.positive_reactions_count}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
