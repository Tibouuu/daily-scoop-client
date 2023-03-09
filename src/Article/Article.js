import "./Article.css";
import {
  useParams, generatePath,
} from "react-router-dom";

function Article(props) {
  window.onload = function () {
    const articleImage = document.querySelector("#illustration")
    window.addEventListener("scroll", pictureOnScroll);

    function pictureOnScroll() {

      console.log(articleImage)
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          articleImage.classList.add("scrolled-down");
        } else {
          articleImage.classList.remove("scrolled-down");
        }
      });
    }
  }


  return (
    <>
      <div className="article-content">
        <h1>{props.title}</h1>
        <div className="img-container" id="illustration">
          <img
            className="illustration"
            src="https://wallpapercave.com/wp/wp7304269.jpg"
            alt="illustration article"
          />
        </div>

        <p className="extract">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="bottom-line">
          <p className="author">Author Username</p>
          <p className="date">01/01/23</p>
        </div>
        <div className="main-article extract">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            curabitur gravida arcu ac. Tellus pellentesque eu tincidunt tortor
            aliquam nulla. Velit laoreet id donec ultrices tincidunt. Viverra
            ipsum nunc aliquet bibendum. Lectus vestibulum mattis ullamcorper
            velit. Bibendum est ultricies integer quis auctor elit. Dictumst
            quisque sagittis purus sit. Tincidunt dui ut ornare lectus sit.
            Placerat vestibulum lectus mauris ultrices eros in. Sed viverra
            ipsum nunc aliquet bibendum enim facilisis. Condimentum id venenatis
            a condimentum vitae sapien. Auctor eu augue ut lectus.</p><p> Blandit massa
              enim nec dui nunc mattis enim. Non pulvinar neque laoreet
              suspendisse interdum consectetur libero id. Pretium nibh ipsum
              consequat nisl vel pretium lectus quam. Porttitor rhoncus dolor
              purus non enim praesent. Lorem sed risus ultricies tristique nulla
              aliquet. Et ligula ullamcorper malesuada proin libero nunc consequat
              interdum. Natoque penatibus et magnis dis parturient montes
              nascetur. Amet dictum sit amet justo donec enim diam vulputate ut.
              Ac felis donec et odio pellentesque diam volutpat commodo.</p><p> Morbi
                enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra
                nibh cras pulvinar mattis. Et leo duis ut diam quam nulla porttitor
                massa id. Laoreet suspendisse interdum consectetur libero id
                faucibus nisl tincidunt eget. Elit scelerisque mauris pellentesque
                pulvinar pellentesque habitant morbi tristique senectus. Potenti
                nullam ac tortor vitae purus faucibus.</p><p> At urna condimentum mattis
                  pellentesque id nibh. Odio eu feugiat pretium nibh ipsum consequat
                  nisl vel. Hendrerit dolor magna eget est lorem. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae. Turpis
                  cursus in hac habitasse platea dictumst. Iaculis urna id volutpat
                  lacus laoreet non curabitur gravida arcu.</p><p> Auctor augue mauris augue
                    neque gravida in fermentum et sollicitudin. Est ullamcorper eget
                    nulla facilisi etiam dignissim. Tortor condimentum lacinia quis vel
                    eros donec ac odio. Enim eu turpis egestas pretium aenean. Enim eu
                    turpis egestas pretium aenean. Adipiscing elit ut aliquam purus sit
                    amet luctus venenatis lectus. Et ligula ullamcorper malesuada proin

          </p>
        </div>
      </div>
    </>
  );
}

export default Article;
