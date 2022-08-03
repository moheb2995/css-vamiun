img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

// .container {
//   column-count: 4;
//   column-gap: 10px;
// }


<div class="container">
  <figure>
    <img src="https://assets.codepen.io/12005/windmill.jpg" alt="A windmill" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/suspension-bridge.jpg" alt="The Clifton Suspension Bridge" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/sunset.jpg" alt="Sunset and boats" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/snowy.jpg" alt="a river in the snow" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/bristol-balloons1.jpg" alt="a single checked balloon" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/dog-balloon.jpg" alt="a hot air balloon shaped like a dog" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/abq-balloons.jpg" alt="View from a hot air balloon of other balloons" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/disney-balloon.jpg" alt="a balloon fairground ride" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/bristol-harbor.jpg" alt="sunrise over a harbor" />
  </figure>
  <figure>
    <img src="https://assets.codepen.io/12005/bristol-balloons2.jpg" alt="three hot air balloons in a blue sky" />
  </figure>
  <figure>
  <img src="https://assets.codepen.io/12005/toronto.jpg" alt="the Toronto light up sign at night" />
  </figure>
</div>