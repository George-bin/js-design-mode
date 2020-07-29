/**
 * TODO: 发布/订阅模式
 */

//  调度中心
class DispatchCenter {
  constructor() {
    // 首先定义了一个事件容器，用来装事件数组（因为订阅者可以是多个）
    this.subs = {}
  }

  // 订阅
  addSubscibe (type, cb) {
    if (!(type in this.subs)) {
      this.subs[type] = []
    }
    this.subs[type].push(cb)
  }

  // 取消订阅
  removeSubscibe (type, cb) {
    let cbs = this.subs[type] || []
    let index = cbs.indexOf(cb)
    if (index > -1) {
      cbs.splice(index, 1)
    }
  }

  // 发布
  publish (type, ...params) {
    (this.subs[type] || []).forEach(cb => {
      cb(...params)
    })
  }
}

// 实例化调度中心
let dispatchCenter = new DispatchCenter()

dispatchCenter.addSubscibe('A', A)
dispatchCenter.addSubscibe('B', B)
function A(...args) {
  console.log('A收到了：', args)
}
function B(...args) {
  console.log(`B接收到了：`, args)
}

dispatchCenter.publish('A', '喜洋洋更新到201集了!')
dispatchCenter.publish('B', '熊出没更新到11集了!')







