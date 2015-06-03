var ProductCard = Card.extend(function(id, containerNode, options) {
  // super class is automagically called
});

ProductCard.methods({
  expand: function() {
    this.supr();
    
    console.log('ProductCard expand');
    // send request for additional content, etc...
    
  }
});



