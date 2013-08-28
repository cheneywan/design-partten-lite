Observer = ->
  @stack = {}
  return

Observer::subscribe = (topic, enentFn) ->
  @stack[topic] ?= []
  @stack[topic].push enentFn

Observer::unsubscribe = (topic) ->
  @stack[topic].length = 0 if @stack[topic]?

Observer::publish = ->
  topic = Array.prototype.shift.call arguments
  for fn in @stack[topic]
    fn.apply this, arguments

# test

adultTv = new Observer()

adultTv.subscribe "play", (data) ->
   console.log "今天是谁的电影" + data.name

adultTv.publish "play", {'name': '麻生希'}
adultTv.unsubscribe "play"
adultTv.publish "play", {'name': 'rio'}



