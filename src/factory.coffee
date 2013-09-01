BicycleShop = ->

BicycleShop.prototype =
    sellBicycle: (model) ->
        bicycle = @createBicycle model
        @getMoney()
        bicycle

    getMoney: ->
        console.log "getMoney!"

    createBicycle: (model) ->
        throw new Error "createBicycle must be implemented by a subclass"


MountainBicycleShop = Object.create BicycleShop.prototype

MountainBicycleShop .createBicycle = (model) ->
    Speedster = ->
        console.log "this is speedster"

    Lowrider = ->
        console.log "this is lowrider"

    switch model
        when 'speedster'
            bicycle = new Speedster()
        when 'lowrider'
            bicycle = new Lowrider()

    bicycle 

# test
MountainBicycleShop.sellBicycle "speedster"
