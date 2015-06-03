var Module = klass(function(id, containerNode, options) {

  this.id = id;
  this.classList = [];

  // cached DOM nodes
  this.nodes = {
    container: containerNode
  };

  console.log(this);
})
.methods({
  addClass: function(className) {
    console.log('addClass', className);
    
    if (document.documentElement.classList) {
      this.nodes.container.classList.add(className);

    } else {
      // legacy add class
      if (!this.hasClass(className)) {
        this.nodes.container.className += ' ' + className;
      }
    }
  },
  removeClass: function(className) {
    if (document.documentElement.classList) {
      this.nodes.container.classList.remove(className);
    } else {
      var regex = new RegExp('(?:\\s|^)' + className + '(?:\\s|$)');
      this.nodes.container.className = this.nodes.container.className.replace(regex, ' ');
    }
  },
  toggleClass: function(className) {
    this.hasClass(this.nodes.container, className) ?
      this.removeClass(this.nodes.container, className) :
      this.addClass(this.nodes.container, className);
  },
  hasClass: function (className) {
    var regex = new RegExp('(?:\\s|^)' + className + '(?:\\s|$)');
    return !!this.nodes.container.className.match(regex);
  },
});
