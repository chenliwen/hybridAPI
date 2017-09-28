const scanCode = (needResult, type) => {
  hybridAPI.scanCode({ needResult, type })
  .then(response => {
    alert(`扫描出的结果：${JSON.stringify(response)}`)
  })
}

const apis = [
  [{
    button: '扫二维码返回结果',
    inline: true,
    method() {
      scanCode(1, ['qrCode'])
    }
  }, {
    button: '扫条行码返回结果',
    inline: true,
    method() {
      scanCode(1, ['barCode'])
    }
  }],

  [{
    button: '获取 geohash',
    inline: true,
    method() {
      hybridAPI.getGlobalGeohash()
      .then(geohash => alert(geohash))
      .catch(error => alert(error))
    },
  }, {
    button: '获取当前定位状态',
    inline: true,
    method() {
      hybridAPI.getLocateStatus()
      .then(status => alert(`LocateStatus: ${status}`))
      .catch(error => alert(error))
    },
  }],

  [{
    button: '退出前确认',
    inline: true,
    method() {
      hybridAPI.exitConfirm({
        title: '提示',
        content: '是否确认关闭页面?',
        yes_text: '关闭页面',
        no_text: '取消'
      })
    },
  }, {
    button: '获取网络状态',
    inline: true,
    method() {
      hybridAPI.networkType()
      .then(status => alert('NetworkType: ' + status))
    },
  }, {
    button: '设置 webview 标题',
    inline: true,
    method() {
      hybridAPI.setTitle('Test Title')
    },
  }, {
    button: '关闭 webview',
    inline: true,
    method() {
      hybridAPI.closePage()
    },
  }, {
    button: '获取通讯录',
    inline: true,
    method() {
      hybridAPI.contactList(10)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        alert(`获取失败了呢 ${JSON.stringify(error, null, 2)}`)
      })
    },
  }, {
    button: 'Set Nav',
    inline: true,
    method() {
      var random = () => Math.random() > .5
      var randomColor = function() {
        var color = '#' + Math.round(Math.random() * 0xffffffff).toString(16)
        if (random()) {
          color += ',#' + Math.round(Math.random() * 0xffffffff).toString(16)
        }
        return color
      }
      var params = {
        immersive: random(),
        navBg: random() ? randomColor() : {
          from: randomColor(),
          to: randomColor(),
          direction: random() ? 0 : 1,
        },
        navText: random() ? randomColor() : {
          from: randomColor(),
          to: randomColor(),
        },
        statusText: { solid: random() },
        triggerHeight: Math.round(100 * Math.random()),
      }
      hybridAPI.setNav(params)
    },
  }],

  [{
    button: '分享',
    inline: true,
    method() {
      hybridAPI.sharePanel({
        source: '',
        targets: ['weixin', 'weixin_timeline', 'weibo', 'qq', 'qzone'],
        title: '分享标题',
        text: '分享副标题',
        url: '分享链接',
        image_url: '分享图标'
      })
    },
  }, {
    button: '单独分享图片',
    inline: true,
    method() {
      hybridAPI.sharePanel({
        targets: ['weixin', 'qq'],
        text: '分享副标题',
        url: 'https://www.ele.me/',
        image_url: 'https://fuss10.elemecdn.com/7/ff/fa74fa510b1296cac782d29ee7b07jpeg.jpeg',
        image_only: true,
      })
    },
  }, {
    button: '右上角分享按钮',
    inline: true,
    method() {
      hybridAPI.share({
        title: '饿了么积分商城，任性兑换不花钱',
        text: '叫外卖，上饿了么，免费好礼等你来拿',
        weibo: '饿了么积分商城，任性兑换不花钱。叫外卖，上饿了么，免费好礼等你来拿。' + location.href + '（分享自@饿了么网上订餐）',
        url: 'https://h5.ele.me',
        image_url: 'https://fuss10.elemecdn.com/3/ca/80d890e2515fea76e46490a2c9455png.png'
      })
    },
  }, {
    button: '设置右上角菜单',
    inline: false,
    method() {
      hybridAPI.setRightMenu([{
        text: '分享',
        eventName: 'shareStage',
        action() {
          hybridAPI.sharePanel({
            targets: ['weixin', 'weixin_timeline', 'weibo', 'qq', 'qzone'],
          })
        },
      }])
    },
  }],
]

apis.forEach(api => {
  let group = document.createElement('div')
  api.forEach(item => {
    let button = document.createElement('button')
    button.innerText = item.button
    button.classList.add(item.inline ? 'inline' : '1')
    button.onclick = () => item.method()
    group.appendChild(button)
  })
  document.getElementById('container').appendChild(group)
})
