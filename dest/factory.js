(function() {
  var BicycleShop, MountainBicycleShop;

  BicycleShop = function() {};

  BicycleShop.prototype = {
    sellBicycle: function(model) {
      var bicycle;
      bicycle = this.createBicycle(model);
      this.getMoney();
      return bicycle;
    },
    getMoney: function() {
      return console.log("getMoney!");
    },
    createBicycle: function(model) {
      throw new Error("createBicycle must be implemented by a subclass");
    }
  };

  MountainBicycleShop = Object.create(BicycleShop.prototype);

  MountainBicycleShop.createBicycle = function(model) {
    var Lowrider, Speedster, bicycle;
    Speedster = function() {
      return console.log("this is speedster");
    };
    Lowrider = function() {
      return console.log("this is lowrider");
    };
    switch (model) {
      case 'speedster':
        bicycle = new Speedster();
        break;
      case 'lowrider':
        bicycle = new Lowrider();
    }
    return bicycle;
  };

  MountainBicycleShop.sellBicycle("speedster");

}).call(this);
