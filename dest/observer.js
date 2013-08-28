(function() {
  var Observer, adultTv;

  Observer = function() {
    this.stack = {};
  };

  Observer.prototype.subscribe = function(topic, enentFn) {
    var _base;
    if ((_base = this.stack)[topic] == null) {
      _base[topic] = [];
    }
    return this.stack[topic].push(enentFn);
  };

  Observer.prototype.unsubscribe = function(topic) {
    if (this.stack[topic] != null) {
      return this.stack[topic].length = 0;
    }
  };

  Observer.prototype.publish = function() {
    var fn, topic, _i, _len, _ref, _results;
    topic = Array.prototype.shift.call(arguments);
    _ref = this.stack[topic];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      fn = _ref[_i];
      _results.push(fn.apply(this, arguments));
    }
    return _results;
  };

  adultTv = new Observer();

  adultTv.subscribe("play", function(data) {
    return console.log("今天是谁的电影" + data.name);
  });

  adultTv.publish("play", {
    'name': '麻生希'
  });

  adultTv.unsubscribe("play");

  adultTv.publish("play", {
    'name': 'rio'
  });

}).call(this);
