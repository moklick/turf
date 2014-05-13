var t = require('../index'),
  should = require('should'),
  fs = require('fs')

describe('tin', function(){
  it('should create a TIN from a set of points', function(done){
    t.load(__dirname+'/testIn/Points3.geojson', function(err, points){
      var syncTin = t.tin(points, 'elevation', function(err, tin){
        if(err) throw err
        tin.should.be.ok
        tin.features[0].geometry.type.should.equal('Polygon')
        tin.features[0].geometry.coordinates.should.be.ok
        //fs.writeFileSync('./testOut/tin.geojson',JSON.stringify(tin))
      })

      if (typeof syncTin === 'Error') {
        throw syncTin;
      }

      syncTin.should.be.ok;
      syncTin.features[0].geometry.type.should.equal('Polygon');
      syncTin.features[0].geometry.coordinates.should.be.ok;

      done();
    })
  })
  it('should create a TIN from a set of points with a null z', function(done){
    t.load(__dirname+'/testIn/Points3.geojson', function(err, points){
      var syncTin = t.tin(points, null, function(err, tin){
        if(err) throw err
        tin.should.be.ok
        tin.features[0].geometry.type.should.equal('Polygon')
        tin.features[0].geometry.coordinates.should.be.ok
        //fs.writeFileSync('./testOut/tin2.geojson',JSON.stringify(tin))
      })

      if (typeof syncTin === 'Error') {
        throw syncTin;
      }

      syncTin.should.be.ok;
      syncTin.features[0].geometry.type.should.equal('Polygon');
      syncTin.features[0].geometry.coordinates.should.be.ok;

      done();
    })
  })
})