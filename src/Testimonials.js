import favicon from './icons_assets/favicon.png'

function Testimonials() {
    return (
      <>
      <div class="testimonials">
        <div class="testimonials1">
          <text class="testtext">Testimonials</text>
        </div>
        <div class="testimonials2">
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: 0000</text>
            <text>Name: john </text>
            <text>lorem ipsum</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: 0000</text>
            <text>Name: hnaaa</text>
            <text> Text</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating:000000</text>
            <text>Name: hhhhhh</text>
            <text> Text</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: 000</text>
            <text>Name: LaAMA</text>
            <text>000000000 Text</text>
          </div>
        </div>
      </div>
      </>
    );
  }


export default Testimonials;
