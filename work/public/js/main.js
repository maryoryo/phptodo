'use strict';

{
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // const url = '?action=toggle';
      // const options = {
      //   method: 'POST',
      //   body: new URLSearchParams({
      //     id: checkbox.CDATA_SECTION_NODE.id,
      //     token: checkbox.CDATA_SECTION_NODE.token,
      //   }),
      // };

      // fetch(url, options);
      fetch('?action=toggle', {
        method: 'POST',
        body: new URLSearchParams({
          id: checkbox.CDATA_SECTION_NODE.id,
          token: checkbox.CDATA_SECTION_NODE.token,
        }),
      });
      // checkbox.parentNode.submit();
      checkbox.nextElementSibling.classList.toggle('done');
    });
  });
  
  
  const deletes = document.querySelectorAll('.delete');
  deletes.forEach(span => {
    span.addEventListener('click', () => {
      if (!confirm('Are you sure?')) {
        return;
      }
      span.parentNode.submit();
    });
  });
  

  const purge = document.querySelector('.purge');

  purge.addEventListener('click', () => {
    if (!confirm('Are you sure?')) {
      return;
    }
    purge.parentNode.submit();
  });
}