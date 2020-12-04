import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "my-home",
  template: `
    <title-head></title-head>
    <div class="vdo">
      <iframe
        width="1000"
        height="400"
        src="https://www.youtube.com/embed/RZZZEwNxdH8?autoplay=1"
      >
      </iframe>
    </div>

    <p class="title">Discover</p>
    <p class="tit1">Our Story & Locations</p>
    <div class="loc">
      <p class="loctnt">
        Bellicious is a right place in town to taste the best food, established
        as one of the most popular entrant into the string which serves Chinese
        food along with South and North Indian. Authentic cuisines made with
        passion and attention to detail treat your taste buds well. The various
        ingredients that they use are fresh and instantly give a soul-satisfying
        taste to the diners.<br />
        Working towards a high degree of commitment and quality,our restaurant
        chain had expanded gloriously with 20 branches in India, especially to
        mention a landmark branch at
        <b>highest motorable point in world(Leh)</b>, a successful preferred
        destination food store in <b>Andaman & Nicobar islands</b>. Without
        compromising on quality and service, we take every step to make your
        dining experience, a pleasurable one. We also desire Bellicious to be
        preferred for its refreshing ambience for faster and on-time delivery.
        Come celebrate your special occasions at Bellicious with range of
        cusines and taste of Asia at your door step. Once you taste our food,
        you could sense mom's presence.
      </p>
    </div>
  `,
  styles: [
    `
      .vdo {
        text-align: center;
        padding-bottom: 4em;
      }

      .loctnt {
        text-align: justify;
        margin-left: 2em;
        margin-right: 0.5em;
        width: 1200px;
        height: 600px;
        font-family: cursive;
        font-size: 150%;
      }
      .title {
        text-align: center;
        font-size: 220%;
        margin-bottom: 0em;

        font-weight: bold;
      }
      .tit1 {
        text-align: center;
        font-size: 160%;
        margin-top: -0.1em;
        margin-bottom: -0.5em;

        font-weight: bold;
      }
    `
  ]
})
export class HomeComponent {}
