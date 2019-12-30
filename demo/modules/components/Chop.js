const ul = document.querySelector(".accordion");

// Chop component
export const Chop = choppy => {
  // create Chop component
  const li = document.createElement("li");
  const button = document.createElement("button");
  const h2 = document.createElement("div");
  const div = document.createElement("div");
  const p = document.createElement("p");

  // li.setAttribute("data-id", choppy.id);
  button.setAttribute("class", "acc_ctrl");
  div.setAttribute("class", "acc_panel");
  h2.setAttribute("class", "title");
  p.setAttribute("class", "desc");

  h2.innerHTML = `<i class="far fa-check-circle"></i> ${choppy.name}`;
  p.innerText = choppy.desc;

  li.appendChild(button);
  li.appendChild(div);
  button.appendChild(h2);
  div.appendChild(p);

  ul.appendChild(li);
};
