"use strict";

let mapMatrix = [
    "**1__111",
    "221__1*1",
    "____1221",
    "11__1*1_",
    "*1__111_",
    "11122211",
    "113**2*1",
    "1*3*3211"
];

const app = {
    map: mapMatrix,

    init: function () {

        let table = document.createElement("table");
        table.border = "1";
        let tablero = document.getElementById("tablero");
        for (let i = 0; i < app.map.length; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < app.map[i].length; j++) {
                let celda = document.createElement("td");
                celda.setAttribute("class", "back");
                celda.setAttribute("id", i + "" + j);
                celda.addEventListener("click", app.showNumber, true);
                filas.appendChild(celda);
            }
            table.appendChild(filas);
        }

        tablero.appendChild(table);
    },


    showNumber: function (e) {
        let id = this.id.split("");
        let myid = id[0] + id[1];
        let tdObjt = document.getElementById(myid);
        //minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] 
        if (app.map[parseInt(id[0], 10)][parseInt(id[1], 10)] == "_") {
            tdObjt.setAttribute("class", "white");
        } else if (app.map[parseInt(id[0], 10)][parseInt(id[1], 10)] == "*") {
            tdObjt.setAttribute("class", "bomb");
            alert("perdiste");
            // showBombs(mapBuscaminas);

        } else {
            let h3Valor = document.createElement("h3");
            h3Valor.setAttribute("class", "numeros");
            tdObjt.setAttribute("class", "white");
            let content = document.createTextNode(app.map[parseInt(id[0], 10)][parseInt(id[1], 10)]);
            h3Valor.appendChild(content);
            tdObjt.appendChild(h3Valor);
        }
    },
};



app.init();
