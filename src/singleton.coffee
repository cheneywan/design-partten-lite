Singleton = ->
  instantiated = null
  init = ->
    "publicMethod": ->
      console.log "hello world"
    "publicProperty": "single"

  "getInstance": ->
    instantiated || instantiated = init()

# test
Singleton().getInstance().publicMethod()
