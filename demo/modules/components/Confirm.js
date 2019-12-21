export const Confirm = doc => {
  return `
    <div class="confirm">
          <p>
            <b><i class="far fa-check-circle"></i></b>
              Your order for <b> ${doc.data().name}</b>, 
              total price <b>ksh.${doc.data().price}</b> successful!
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
