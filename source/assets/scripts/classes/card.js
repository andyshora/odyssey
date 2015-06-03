var Card = Module.extend(function(id, containerNode, options) {

  if (!this.nodes.container) {
    return console.error('node not found', id);
  }
  this.expanded = false;

  // parse options
  for (var key in options) {
    this[key] = options[key];
  }

  if (this.expandable) {
    console.log('expandable');

    this.addClass('card--expandable');

    var self = this;

    this.nodes.expandTriggers = this.nodes.container.getElementsByClassName('card__expand-trigger');
    console.log('this.nodes.expandTriggers', this.nodes.expandTriggers);

    for (var i = 0; i < this.nodes.expandTriggers.length; i++) {
      this.nodes.expandTriggers[i].addEventListener('click', function(e) {
        self.onCardClicked(self);
      });
    }
  }
});

// static variables on Class constructor
Card.statics({
  enable: function() {
    Card.enabled = true;
    console.log('All cards are now enabled');
  },
  disable: function() {
    Card.enabled = false;
    console.log('All cards are now disabled');
  }
});

// instance methods
Card.methods({
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
});


