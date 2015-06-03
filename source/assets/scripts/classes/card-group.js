var CardGroup = Module.extend(function(id, containerNode, options) {

  if (!this.nodes.container) {
    return console.error('node not found', id);
  }

  // parse options
  for (var key in options) {
    this[key] = options[key];
  }

  
  
});

// static variables on Class constructor
/*CardGroup.statics({
  enable: function() {
    Card.enabled = true;
    console.log('All cards are now enabled');
  },
  disable: function() {
    Card.enabled = false;
    console.log('All cards are now disabled');
  }
});*/

// instance methods
/*CardGroup.methods({
  onCardClicked: function(self) {
    
    // todo, need to access scope
    if (self.expanded) {
      self.contract();
    } else {
      self.expand();
      
    }
  },
  expand: function() {
    console.log('Card.expand');
    this.expanded = true;
    this.addClass('card--expanded');
  },
  contract: function() {
    console.log('Card.contract');
    this.expanded = false;
    this.removeClass('card--expanded');
  }
});*/
