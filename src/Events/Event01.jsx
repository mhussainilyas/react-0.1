import React from "react";
import "../basic styling/index.css";

const Event01 = () => {
  const handleCopy = () => {
    alert("Stop stealing my content 😤");
  };

  const handleMove = () => {
    alert("Mouse move event fires 🎊");
  };
  return (
    <div>
      <p onCopy={handleCopy}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum
        provident animi aliquid ipsa asperiores. Ratione laboriosam ipsam
        voluptates maiores unde laudantium distinctio tenetur cupiditate
        veritatis, quos voluptatum reprehenderit error ullam delectus incidunt
        eum quibusdam blanditiis iste consequatur nobis minima quidem sit.
        Tempore minus non sapiente cum, ab quaerat enim! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Voluptas eum provident animi aliquid
        ipsa asperiores. Ratione laboriosam ipsam voluptates maiores unde
        laudantium distinctio tenetur cupiditate veritatis, quos voluptatum
        reprehenderit error ullam delectus incidunt eum quibusdam blanditiis
        iste consequatur nobis minima quidem sit. Tempore minus non sapiente
        cum, ab quaerat enim!
      </p>
      <br />
      <hr />
      <br />
      <p onMouseMove={handleMove}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eveniet
        ratione vero eum veritatis quibusdam itaque nisi dolorem tempora
        exercitationem, perferendis ex dolorum voluptatibus deleniti dolores
        perspiciatis aut laboriosam, aliquid cumque! Est aliquam corrupti sed
        autem, assumenda illo minima itaque ullam! Quaerat accusantium vel
        facilis beatae nulla dolor quam aperiam repellat dolores debitis. Nulla
        nemo suscipit, recusandae, rem sequi delectus laborum quod quia
        necessitatibus tempore qui debitis animi tenetur iusto cupiditate quo
        natus voluptas sunt ratione perferendis cumque excepturi aspernatur.
        Facilis quia placeat magnam? Rem sapiente dolores modi non doloremque
        deserunt nobis tenetur molestiae, minus ut laborum provident. Maiores,
        quae!
      </p>
    </div>
  );
};

export default Event01;
