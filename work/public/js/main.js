// 'use strict';

// {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//       // const url = '?action=toggle';
//       // const options = {
//       //   method: 'POST',
//       //   body: new URLSearchParams({
//       //     id: checkbox.CDATA_SECTION_NODE.id,
//       //     token: checkbox.CDATA_SECTION_NODE.token,
//       //   }),
//       // };

//       // fetch(url, options);
//       fetch('?action=toggle', {
//         method: 'POST',
//         body: new URLSearchParams({
//           id: checkbox.CDATA_SECTION_NODE.id,
//           token: checkbox.CDATA_SECTION_NODE.token,
//         }),
//       });
//       // checkbox.parentNode.submit();
//       // checkbox.nextElementSibling.classList.toggle('done');
//     });
//   });
  
  
//   const deletes = document.querySelectorAll('.delete');
//   deletes.forEach(span => {
//     span.addEventListener('click', () => {
//       if (!confirm('Are you sure?')) {
//         return;
//       }
//       fetch('?action=delete', {
//         method: 'POST',
//         body: new URLSearchParams({
//           id: span.CDATA_SECTION_NODE.id,
//           token: span.CDATA_SECTION_NODE.token,
//         }),
//       });

//       span.parentNode.remove();
//     });
//   });
  

//   const purge = document.querySelector('.purge');

//   purge.addEventListener('click', () => {
//     if (!confirm('Are you sure?')) {
//       return;
//     }
//     purge.parentNode.submit();
//   });
// }




'use strict';

{
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      fetch('?action=toggle', {
        method: 'POST',
        body: new URLSearchParams({
          id: checkbox.dataset.id,
          token: checkbox.dataset.token,
        }),
      });
    });
  });

  const deletes = document.querySelectorAll('.delete');
  deletes.forEach(span => {
    span.addEventListener('click', () => {
      if (!confirm('Are you sure?')) {
        return;
      }
      
      fetch('?action=delete', {
        method: 'POST',
        body: new URLSearchParams({
          id: span.dataset.id,
          token: span.dataset.token,
        }),
      });

      span.parentNode.remove();
    });
  });

  const purge = document.querySelector('.purge');
  purge.addEventListener('click', () => {
    if (!confirm('Are you sure?')) {
      return;
    }

    fetch('?action=purge', {
      method: 'POST',
      body: new URLSearchParams({
        // id: span.dataset.id,
        token: purge.dataset.token,
      }),
    });
    // purge.parentNode.submit();
    
  });
}