const col = document.querySelectorAll("[data-day]");
let datas;
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    let index;
    let top = 0;
    col.forEach((e) => {
      switch (e.getAttribute("data-day")) {
        case "mon":
          e.setAttribute("data-number", `\$${json[0].amount}`);
          if (json[0].amount > top) {
            top = json[0].amount;
            index = 0;
          }
          break;
        case "tue":
          e.setAttribute("data-number", `\$${json[1].amount}`);
          if (json[1].amount > top) {
            top = json[1].amount;
            index = 1;
          }
          break;
        case "wed":
          e.setAttribute("data-number", `\$${json[2].amount}`);
          if (json[2].amount > top) {
            top = json[2].amount;
            index = 2;
          }
          break;
        case "thu":
          e.setAttribute("data-number",`\$${json[3].amount}`);
          if (json[3].amount > top) {
            top = json[3].amount;
            index = 3;
          }
          break;
        case "fri":
          e.setAttribute("data-number", `\$${json[4].amount}`);
          if (json[4].amount > top) {
            top = json[4].amount;
            index = 4;
          }
          break;
        case "sat":
          e.setAttribute("data-number", `\$${json[5].amount}`);
          if (json[5].amount > top) {
            top = json[5].amount;
            index = 5;
          }
          break;
        case "sun":
          e.setAttribute("data-number",`\$${json[6].amount}`);
          if (json[6].amount > top) {
            top = json[6].amount;
            index = 6;
          }
          break;
      }
    });
    col[index].classList.add("top")
    for(let i =0; i < col.length;i++){
      let n =  +col[i].getAttribute("data-number").replace("$","");
      let precint = (n / top)* 100;
      col[i].style.height = `${precint}%`  
    }
});