var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlesatelite_1 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Altura0Aerocivil_2 = new ol.format.GeoJSON();
var features_Altura0Aerocivil_2 = format_Altura0Aerocivil_2.readFeatures(json_Altura0Aerocivil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altura0Aerocivil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altura0Aerocivil_2.addFeatures(features_Altura0Aerocivil_2);
var lyr_Altura0Aerocivil_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Altura0Aerocivil_2, 
                style: style_Altura0Aerocivil_2,
                popuplayertitle: 'Altura 0 Aerocivil',
                interactive: true,
                title: '<img src="styles/legend/Altura0Aerocivil_2.png" /> Altura 0 Aerocivil'
            });
var format_ActuacionesEstratgicas_3 = new ol.format.GeoJSON();
var features_ActuacionesEstratgicas_3 = format_ActuacionesEstratgicas_3.readFeatures(json_ActuacionesEstratgicas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActuacionesEstratgicas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActuacionesEstratgicas_3.addFeatures(features_ActuacionesEstratgicas_3);
var lyr_ActuacionesEstratgicas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActuacionesEstratgicas_3, 
                style: style_ActuacionesEstratgicas_3,
                popuplayertitle: 'Actuaciones Estratégicas',
                interactive: true,
                title: 'Actuaciones Estratégicas'
            });
var format_Polgonos_4 = new ol.format.GeoJSON();
var features_Polgonos_4 = format_Polgonos_4.readFeatures(json_Polgonos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polgonos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polgonos_4.addFeatures(features_Polgonos_4);
var lyr_Polgonos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polgonos_4, 
                style: style_Polgonos_4,
                popuplayertitle: 'Polígonos',
                interactive: true,
                title: '<img src="styles/legend/Polgonos_4.png" /> Polígonos'
            });
var format_Predios_5 = new ol.format.GeoJSON();
var features_Predios_5 = format_Predios_5.readFeatures(json_Predios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_5.addFeatures(features_Predios_5);
var lyr_Predios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_5, 
                style: style_Predios_5,
                popuplayertitle: 'Predios',
                interactive: true,
    title: 'Predios<br />\
    <img src="styles/legend/Predios_5_0.png" /> 1<br />\
    <img src="styles/legend/Predios_5_1.png" /> 2<br />\
    <img src="styles/legend/Predios_5_2.png" /> <br />' });
var format_ViaProyectadaCra97_6 = new ol.format.GeoJSON();
var features_ViaProyectadaCra97_6 = format_ViaProyectadaCra97_6.readFeatures(json_ViaProyectadaCra97_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViaProyectadaCra97_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViaProyectadaCra97_6.addFeatures(features_ViaProyectadaCra97_6);
var lyr_ViaProyectadaCra97_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViaProyectadaCra97_6, 
                style: style_ViaProyectadaCra97_6,
                popuplayertitle: 'Via Proyectada Cra. 97.',
                interactive: true,
                title: '<img src="styles/legend/ViaProyectadaCra97_6.png" /> Via Proyectada Cra. 97.'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Googlesatelite_1.setVisible(true);lyr_Altura0Aerocivil_2.setVisible(true);lyr_ActuacionesEstratgicas_3.setVisible(true);lyr_Polgonos_4.setVisible(true);lyr_Predios_5.setVisible(true);lyr_ViaProyectadaCra97_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Googlesatelite_1,lyr_Altura0Aerocivil_2,lyr_ActuacionesEstratgicas_3,lyr_Polgonos_4,lyr_Predios_5,lyr_ViaProyectadaCra97_6];
lyr_Altura0Aerocivil_2.set('fieldAliases', {'id': 'id', });
lyr_ActuacionesEstratgicas_3.set('fieldAliases', {});
lyr_Polgonos_4.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_Predios_5.set('fieldAliases', {'fid': 'fid', 'LOTCODIGO': 'LOTCODIGO', 'LOTDISPERS': 'LOTDISPERS', 'LOTILDISPE': 'LOTILDISPE', 'LOTUPREDIA': 'LOTUPREDIA', 'MANZCODIGO': 'MANZCODIGO', 'LOTDISTRIT': 'LOTDISTRIT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'a_metros cuadrados': 'a_metros cuadrados', 'p_metros': 'p_metros', 'Tipo dei nteres': 'Tipo dei nteres', });
lyr_ViaProyectadaCra97_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Altura0Aerocivil_2.set('fieldImages', {'id': '', });
lyr_ActuacionesEstratgicas_3.set('fieldImages', {});
lyr_Polgonos_4.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_Predios_5.set('fieldImages', {'fid': 'TextEdit', 'LOTCODIGO': 'TextEdit', 'LOTDISPERS': 'TextEdit', 'LOTILDISPE': 'TextEdit', 'LOTUPREDIA': 'Range', 'MANZCODIGO': 'TextEdit', 'LOTDISTRIT': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'a_metros cuadrados': 'TextEdit', 'p_metros': 'TextEdit', 'Tipo dei nteres': 'Range', });
lyr_ViaProyectadaCra97_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Altura0Aerocivil_2.set('fieldLabels', {'id': 'hidden field', });
lyr_ActuacionesEstratgicas_3.set('fieldLabels', {});
lyr_Polgonos_4.set('fieldLabels', {'Nombre': 'no label', });
lyr_Predios_5.set('fieldLabels', {'fid': 'hidden field', 'LOTCODIGO': 'hidden field', 'LOTDISPERS': 'hidden field', 'LOTILDISPE': 'hidden field', 'LOTUPREDIA': 'hidden field', 'MANZCODIGO': 'hidden field', 'LOTDISTRIT': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'a_metros cuadrados': 'hidden field', 'p_metros': 'hidden field', 'Tipo dei nteres': 'inline label - visible with data', });
lyr_ViaProyectadaCra97_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ViaProyectadaCra97_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});