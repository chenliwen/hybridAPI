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
  }]
]
