
var assert = require('assert')

var seneca = require('seneca')()
      .use('../app-queue.js')

seneca.act('role:salestax,cmd:calculate,net:100',function(err,out){
  assert.ok(null==err)
  assert.equal(120,out.product)
})
