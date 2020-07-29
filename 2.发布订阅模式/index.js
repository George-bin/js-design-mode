/**
 * TODO: 发布/订阅模式
 */

// 发布者
class Publisher  {
  constructor() {
    // 首先定义了一个事件容器，用来装事件数组（因为订阅者可以是多个）
    this.theme = {}
  }

  // 订阅
  addSubscibe (type, cb) {
    if (!(type in this.theme)) {
      this.theme[type] = []
    }
    this.theme[type].push(cb)
  }

  // 取消订阅
  removeSubscibe (type, cb) {
    let cbs = this.theme[type] || []
    let index = cbs.indexOf(cb)
    if (index > -1) {
      cbs.splice(index, 1)
    }
  }

  // 发布
  publish (type, ...params) {
    (this.theme[type] || []).forEach(cb => {
      cb(type, ...params)
    })
  }
}

// 实例化发布者
let dispatchCenter = new Publisher ()

// 函数person1和person2就是订阅者
function person1(type, ...args) {
  console.log(`person1收到 "${type}" 订阅信息：`, args)
}
function person2(type, ...args) {
  console.log(`person2收到 "${type}" 订阅信息：`, args)
}

// 添加订阅者
dispatchCenter.addSubscibe('A', person1)
dispatchCenter.addSubscibe('B', person1)
dispatchCenter.addSubscibe('B', person2)

// 发布
dispatchCenter.publish('A', '《喜洋洋》更新到201集了!', '《哪吒传奇》也更新啦!')
dispatchCenter.publish('B', '《熊出没》更新到11集了!')

// 删除订阅者
dispatchCenter.removeSubscibe('B', person1)
dispatchCenter.publish('B', '《大头儿子》更新到11集了!')


