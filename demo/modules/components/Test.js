// test render component
export const Test = (doc) => {
  let test = document.querySelector('.test');
  test.setAttribute("data-id", doc.id)
  test.innerText = doc.data().name;
};