var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucionIndicedeHumedad_1 = new ol.format.GeoJSON();
var features_EvolucionIndicedeHumedad_1 = format_EvolucionIndicedeHumedad_1.readFeatures(json_EvolucionIndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeHumedad_1.addFeatures(features_EvolucionIndicedeHumedad_1);
var lyr_EvolucionIndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeHumedad_1, 
                style: style_EvolucionIndicedeHumedad_1,
                interactive: false,
    title: 'Evolucion Indice de Humedad<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_0.png" /> -0,08 - -0,03<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_1.png" /> -0,03 - 0,02<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_2.png" /> 0,02 - 0,06<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_3.png" /> 0,06 - 0,11<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_4.png" /> 0,11 - 0,15<br />'
        });
var format_IndicedeHumedad_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad_2 = format_IndicedeHumedad_2.readFeatures(json_IndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_2.addFeatures(features_IndicedeHumedad_2);
var lyr_IndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_2, 
                style: style_IndicedeHumedad_2,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_2_0.png" /> -0,17 - -0,04<br />\
    <img src="styles/legend/IndicedeHumedad_2_1.png" /> -0,04 - 0,10<br />\
    <img src="styles/legend/IndicedeHumedad_2_2.png" /> 0,10 - 0,24<br />\
    <img src="styles/legend/IndicedeHumedad_2_3.png" /> 0,24 - 0,38<br />\
    <img src="styles/legend/IndicedeHumedad_2_4.png" /> 0,38 - 0,51<br />'
        });
var format_EvolucionIndicedeHumedad_3 = new ol.format.GeoJSON();
var features_EvolucionIndicedeHumedad_3 = format_EvolucionIndicedeHumedad_3.readFeatures(json_EvolucionIndicedeHumedad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeHumedad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeHumedad_3.addFeatures(features_EvolucionIndicedeHumedad_3);
var lyr_EvolucionIndicedeHumedad_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeHumedad_3, 
                style: style_EvolucionIndicedeHumedad_3,
                interactive: false,
    title: 'Evolucion Indice de Humedad<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_3_0.png" /> -0,20 - -0,11<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_3_1.png" /> -0,11 - -0,01<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_3_2.png" /> -0,01 - 0,09<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_3_3.png" /> 0,09 - 0,18<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_3_4.png" /> 0,18 - 0,28<br />'
        });
var format_IndicedeVegetacion_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_4 = format_IndicedeVegetacion_4.readFeatures(json_IndicedeVegetacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_4.addFeatures(features_IndicedeVegetacion_4);
var lyr_IndicedeVegetacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_4, 
                style: style_IndicedeVegetacion_4,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_4_0.png" /> 0,13 - 0,29<br />\
    <img src="styles/legend/IndicedeVegetacion_4_1.png" /> 0,29 - 0,44<br />\
    <img src="styles/legend/IndicedeVegetacion_4_2.png" /> 0,44 - 0,60<br />\
    <img src="styles/legend/IndicedeVegetacion_4_3.png" /> 0,60 - 0,75<br />\
    <img src="styles/legend/IndicedeVegetacion_4_4.png" /> 0,75 - 0,91<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucionIndicedeHumedad_1.setVisible(true);lyr_IndicedeHumedad_2.setVisible(true);lyr_EvolucionIndicedeHumedad_3.setVisible(true);lyr_IndicedeVegetacion_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucionIndicedeHumedad_1,lyr_IndicedeHumedad_2,lyr_EvolucionIndicedeHumedad_3,lyr_IndicedeVegetacion_4];
lyr_EvolucionIndicedeHumedad_1.set('fieldAliases', {'E_NDMI': 'E_NDMI', });
lyr_IndicedeHumedad_2.set('fieldAliases', {'NDMI': 'NDMI', });
lyr_EvolucionIndicedeHumedad_3.set('fieldAliases', {'E_NDVI': 'E_NDVI', });
lyr_IndicedeVegetacion_4.set('fieldAliases', {'NDVI': 'NDVI', });
lyr_EvolucionIndicedeHumedad_1.set('fieldImages', {'E_NDMI': 'TextEdit', });
lyr_IndicedeHumedad_2.set('fieldImages', {'NDMI': 'TextEdit', });
lyr_EvolucionIndicedeHumedad_3.set('fieldImages', {'E_NDVI': 'TextEdit', });
lyr_IndicedeVegetacion_4.set('fieldImages', {'NDVI': 'TextEdit', });
lyr_EvolucionIndicedeHumedad_1.set('fieldLabels', {'E_NDMI': 'no label', });
lyr_IndicedeHumedad_2.set('fieldLabels', {'NDMI': 'no label', });
lyr_EvolucionIndicedeHumedad_3.set('fieldLabels', {'E_NDVI': 'no label', });
lyr_IndicedeVegetacion_4.set('fieldLabels', {'NDVI': 'no label', });
lyr_IndicedeVegetacion_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});