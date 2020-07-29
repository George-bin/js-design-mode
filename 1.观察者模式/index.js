/**
 * TODO: 观察者模式
 */

// 被观察者（发布者）
var Subject = function(name) {
  this.subs = []
}

// 添加订阅者
Subject.prototype.add = function(ob) {
  this.subs.push(ob)
}
// 删除订阅者
Subject.prototype.remove = function(ob) {
  let subs = this.subs
  for (let i = 0; i < subs.length; i++) {
    if (subs[i] === ob) {
      subs.splice(i, 1)
    }
  }
}
// 通知订阅者
Subject.prototype.notify = function() {
  this.subs.forEach(item => {
    item.update()
  })
}

// 观察者（主动订阅或取消订阅）
function Observer(name) {
  this.name = name
}
Observer.prototype.update = function() {
  console.log('my name is ' + this.name)
}

let sub = new Subject()
let obs1 = new Observer('George')
let obs2 = new Observer('xiaoming')

sub.add(obs1)
sub.add(obs2)
sub.notify()
sub.remove(obs2)
sub.notify()
