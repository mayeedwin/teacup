export const Confirm = (doc, table, count, price) => {
    return `
    <div class="confirm">
          <p>
            <b><i class="far fa-check-circle"></i></b>
              Your order for <b>${count} plates</b> of <b>${
    doc.data().name
  }</b>, total price <b>ksh. ${price}</b> successful!
          </p>
          <!--
            <div class="spans">
            <span class="cancel">
              Cancel
            </span>
            <span class="okay">
              OK
            </span>
          </div> -->
        </div>
   `;
};
