/**
@param {org.acme.mynetwork.VotoT} v
@transaction
*/

function voto(v) {
  var factory = getFactory();
  var voto = factory.newResource('org.acme.mynetwork','Voto',v.idVoto);
  voto.eleccion = v.eleccion;
  voto.candidato = v.candidato;
  return getAssetRegistry('org.acme.mynetwork.Voto')
    .then(function(assetRegistry){
        return assetRegistry.add(voto);
    }).then(function(){
    return query('selectLedgerCandidatoPorEleccionYCandidato')
  	.then (function (results){
      var ledgerCandidato = null;
      for(var i=0;i<results.length;i++){
        console.log(results[i])
        if(results[i].eleccion.$identifier == v.eleccion.$identifier && results[i].candidato.$identifier == v.candidato.$identifier){
          ledgerCandidato = results[i];
        }
      }
      console.log(v)
      ledgerCandidato.total++;
      return getAssetRegistry('org.acme.mynetwork.LedgerCandidato')
      .then(function(assetRegistry){
        return assetRegistry.update(ledgerCandidato)
        .then(function(){
          var ledgerCiudadano = factory.newResource('org.acme.mynetwork','LedgerCiudadano',v.idLCI);
          ledgerCiudadano.eleccion = v.eleccion;
          ledgerCiudadano.ciudadano = v.ciudadano;
          return getAssetRegistry('org.acme.mynetwork.LedgerCiudadano')
   			 .then(function(assetRegistry){
       		 return assetRegistry.add(ledgerCiudadano);
    		})
        })
    });
    })
  });
}