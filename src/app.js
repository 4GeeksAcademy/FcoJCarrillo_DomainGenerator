/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensiones = [".com", ".es", ".net"];
  let vueltas = 0;
  let tag = document.querySelector("#dominios");
  let dominios = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let h = 0; h < noun.length; h++) {
        for (let g = 0; g < extensiones.length; g++) {
          dominios +=
            "<li class='list-group-item'>" +
            pronoun[i] +
            adj[j] +
            noun[h] +
            extensiones[g] +
            "</li>";
          tag.innerHTML = dominios;
        }
      }
    }
    vueltas++;
  }
  console.log("Hello Rigo from the console!");
};
