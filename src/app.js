/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es", ".net"];
  let tag = document.querySelector("#domain");
  let domain = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let h = 0; h < noun.length; h++) {
        for (let g = 0; g < extension.length; g++) {
          domain +=
          "<li class='list-group-item'>" +
          pronoun[i] +
          adj[j] +
          noun[h] +
          extension[g] +
          "</li>";
          tag.innerHTML = domain;
        }
      }
    }
  }

  
  /*
  let lista = [
    {
      palabra: ["the", "our"]
    },
    {
      palabra: ["great", "big"]
    },
    {
      palabra: ["jogger", "racoon"]
    }
  ];
  let objetos = {
    pronoun: ["the", "our"],
    adj: ["great", "big"],
    noun: ["jogger", "racoon"]
  };
  for (const i of pronoun) {
    for (const j of adj) {
      for (const k of noun) {
        for (const h of extensiones) {
          dominios += "<li class='list-group-item'>" + i + j + k + h + "</li>";
          tag.innerHTML = dominios;
        }
      }
    }
  }
  */
  /*
  pronoun.map(i => {
    adj.map(j => {
      noun.map(k => {
        extensiones.map(h => {
          dominios += "<li class='list-group-item'>" + i + j + k + h + "</li>";
          tag.innerHTML = dominios;
        });
      });
    });
  });
  lista.map((item, id) => {
    //AQUI PODEMOS AÑADIR TODO EL CODIGO HTML QUE QUERAMOS
    dominios += `<li class = "list-group-item" key=${item.palabra}>
    <div>
    ${item.palabra}
    </div>
    <div>
      <span><i class="fa-solid fa-eye"></i></span>
      <span><i class="fa-solid fa-trash"></i></span>
    </div>
    </li>`;
    console.log(item, id);
    tag.innerHTML = dominios;
  });
  */

};
