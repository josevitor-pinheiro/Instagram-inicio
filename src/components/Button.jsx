import InstagramImg from "./img/instagram-img.png";

function Button(props) {
  function Img(props) {
    let Img = null;
    if (props.src) {
      Img = InstagramImg;
    }
    return <img src={Img} alt="" />;
  }
  return (
    <button className="button">
      <Img />
      <span>
        <a href="_">{props.title}</a>
      </span>
    </button>
  );
}

export default Button;
