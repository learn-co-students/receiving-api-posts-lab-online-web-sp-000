console.log("hello from products");

$(function(){
  $('form').submit(function(event) {
    event.preventDefault()
    let values = $(this).serialize()
    let posting = $.post('/products', values)
    posting.done((data) => {
      $('#name').text(data['name'])
      $('#price').text(data['price'])
      $('#inventory').text(data['inventory'])
    })
  })
})