const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
)
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)
$('svg').click(() => {
  console.log(1)
  $('body').toggleClass('body-js').css('transition', '0.5s ease-in-out')
  $('h2, p, .bold, .table').toggleClass('text-js')
  $('svg').toggleClass('night-mode-js').css('transition', '0.5s ease-in-out')
  $('.table').toggleClass('table-dark')
})
