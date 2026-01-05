var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vertice_1 = new ol.format.GeoJSON();
var features_vertice_1 = format_vertice_1.readFeatures(json_vertice_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertice_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertice_1.addFeatures(features_vertice_1);
var lyr_vertice_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertice_1, 
                style: style_vertice_1,
                popuplayertitle: 'vertice',
                interactive: true,
                title: '<img src="styles/legend/vertice_1.png" /> vertice'
            });
var format_lote_2 = new ol.format.GeoJSON();
var features_lote_2 = format_lote_2.readFeatures(json_lote_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lote_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lote_2.addFeatures(features_lote_2);
var lyr_lote_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lote_2, 
                style: style_lote_2,
                popuplayertitle: 'lote',
                interactive: true,
                title: '<img src="styles/legend/lote_2.png" /> lote'
            });
var format_LINDERO_3 = new ol.format.GeoJSON();
var features_LINDERO_3 = format_LINDERO_3.readFeatures(json_LINDERO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINDERO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINDERO_3.addFeatures(features_LINDERO_3);
var lyr_LINDERO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LINDERO_3, 
                style: style_LINDERO_3,
                popuplayertitle: 'LINDERO',
                interactive: true,
                title: '<img src="styles/legend/LINDERO_3.png" /> LINDERO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_vertice_1.setVisible(true);lyr_lote_2.setVisible(true);lyr_LINDERO_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_vertice_1,lyr_lote_2,lyr_LINDERO_3];
lyr_vertice_1.set('fieldAliases', {'id': 'id', 'Norte': 'Norte', 'Este': 'Este', });
lyr_lote_2.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_LINDERO_3.set('fieldAliases', {'cat': 'cat', 'id': 'id', 'Distance': 'Distance', 'Azimuth': 'Azimuth', 'Rumbo': 'Rumbo', });
lyr_vertice_1.set('fieldImages', {'id': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', });
lyr_lote_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_LINDERO_3.set('fieldImages', {'cat': 'Range', 'id': 'Range', 'Distance': 'TextEdit', 'Azimuth': 'TextEdit', 'Rumbo': 'TextEdit', });
lyr_vertice_1.set('fieldLabels', {'id': 'inline label - always visible', 'Norte': 'inline label - always visible', 'Este': 'inline label - always visible', });
lyr_lote_2.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', });
lyr_LINDERO_3.set('fieldLabels', {'cat': 'hidden field', 'id': 'hidden field', 'Distance': 'inline label - always visible', 'Azimuth': 'inline label - always visible', 'Rumbo': 'inline label - always visible', });
lyr_LINDERO_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});