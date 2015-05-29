var Module = klass(function(id, containerNode, options) {

  this.id = id;
  this.classList = [];

  // cached DOM nodes
  this.layout = {
    container: containerNode
  };

  console.log(this);
})
.methods({
  addClass: function(className) {
    console.log('addClass', className);
    
    if (document.documentElement.classList) {
      this.layout.container.classList.add(className);

    } else {
      // legacy add class
      if (!this.hasClass(className)) {
        this.layout.container.className += ' ' + className;
      }
    }
  },
  removeClass: function(className) {
    if (document.documentElement.classList) {
      this.layout.container.classList.remove(className);
    } else {
      var regex = new RegExp('(?:\\s|^)' + className + '(?:\\s|$)');
      this.layout.container.className = this.layout.container.className.replace(regex, ' ');
    }
  },
  toggleClass: function(className) {
    this.hasClass(this.layout.container, className) ?
      this.removeClass(this.layout.container, className) :
      this.addClass(this.layout.container, className);
  },
  hasClass: function (className) {
    var regex = new RegExp('(?:\\s|^)' + className + '(?:\\s|$)');
    return !!this.layout.container.className.match(regex);
  },
});


var Card = Module.extend(function(id, containerNode, options) {
  
  this.expanded = false;

  // parse options
  for (var key in options) {
    this[key] = options[key];
  }

  if (this.expandable) {
    console.log('expandable');

    var self = this;

    this.layout.container.addEventListener('click', function(e) {
      self.onCardClicked(self);
    });
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
    console.log('Card ' + this.id + ' expanded');

    this.addClass('card--expanded');
  },
  contract: function() {
    console.log('Card.contract');
    this.expanded = false;
    this.removeClass('card--expanded');
  },
  debug: function() {
    console.log(this);
    debugger
  }
});

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



