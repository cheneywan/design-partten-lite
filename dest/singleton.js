(function() {
  var Singleton;

  Singleton = function() {
    var init, instantiated;
    instantiated = null;
    init = function() {
      return {
        "publicMethod": function() {
          return console.log("hello world");
        },
        "publicProperty": "single"
      };
    };
    return {
      "getInstance": function() {
        return instantiated || (instantiated = init());
      }
    };
  };

  Singleton().getInstance().publicMethod();

}).call(this);
