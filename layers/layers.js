var wms_layers = [];

var format_Recuadro_0 = new ol.format.GeoJSON();
var features_Recuadro_0 = format_Recuadro_0.readFeatures(json_Recuadro_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recuadro_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recuadro_0.addFeatures(features_Recuadro_0);
var lyr_Recuadro_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recuadro_0, 
                style: style_Recuadro_0,
                interactive: true,
                title: '<img src="styles/legend/Recuadro_0.png" /> Recuadro'
            });
var format_Radios_1 = new ol.format.GeoJSON();
var features_Radios_1 = format_Radios_1.readFeatures(json_Radios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radios_1.addFeatures(features_Radios_1);
var lyr_Radios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Radios_1, 
                style: style_Radios_1,
                interactive: true,
                title: '<img src="styles/legend/Radios_1.png" /> Radios'
            });
var format_QuintasconReferencia_2 = new ol.format.GeoJSON();
var features_QuintasconReferencia_2 = format_QuintasconReferencia_2.readFeatures(json_QuintasconReferencia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuintasconReferencia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuintasconReferencia_2.addFeatures(features_QuintasconReferencia_2);
var lyr_QuintasconReferencia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QuintasconReferencia_2, 
                style: style_QuintasconReferencia_2,
                interactive: true,
                title: '<img src="styles/legend/QuintasconReferencia_2.png" /> Quintas con Referencia'
            });
var format_ChacrasconReferencia_3 = new ol.format.GeoJSON();
var features_ChacrasconReferencia_3 = format_ChacrasconReferencia_3.readFeatures(json_ChacrasconReferencia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChacrasconReferencia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacrasconReferencia_3.addFeatures(features_ChacrasconReferencia_3);
var lyr_ChacrasconReferencia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChacrasconReferencia_3, 
                style: style_ChacrasconReferencia_3,
                interactive: true,
                title: '<img src="styles/legend/ChacrasconReferencia_3.png" /> Chacras con Referencia'
            });
var format_Chacrasconreferencia3_4 = new ol.format.GeoJSON();
var features_Chacrasconreferencia3_4 = format_Chacrasconreferencia3_4.readFeatures(json_Chacrasconreferencia3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chacrasconreferencia3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chacrasconreferencia3_4.addFeatures(features_Chacrasconreferencia3_4);
var lyr_Chacrasconreferencia3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chacrasconreferencia3_4, 
                style: style_Chacrasconreferencia3_4,
                interactive: true,
                title: '<img src="styles/legend/Chacrasconreferencia3_4.png" /> Chacras con referencia 3'
            });
var format_calles_5 = new ol.format.GeoJSON();
var features_calles_5 = format_calles_5.readFeatures(json_calles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calles_5.addFeatures(features_calles_5);
var lyr_calles_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_calles_5, 
                style: style_calles_5,
                interactive: true,
                title: '<img src="styles/legend/calles_5.png" /> calles'
            });
var format_LotesconDeuda_6 = new ol.format.GeoJSON();
var features_LotesconDeuda_6 = format_LotesconDeuda_6.readFeatures(json_LotesconDeuda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesconDeuda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesconDeuda_6.addFeatures(features_LotesconDeuda_6);
var lyr_LotesconDeuda_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LotesconDeuda_6, 
                style: style_LotesconDeuda_6,
                interactive: true,
                title: '<img src="styles/legend/LotesconDeuda_6.png" /> Lotes con Deuda'
            });
var group_QuemuQuemu = new ol.layer.Group({
                                layers: [lyr_Recuadro_0,lyr_Radios_1,lyr_QuintasconReferencia_2,lyr_ChacrasconReferencia_3,lyr_Chacrasconreferencia3_4,],
                                title: "Quemu Quemu"});

lyr_Recuadro_0.setVisible(true);lyr_Radios_1.setVisible(true);lyr_QuintasconReferencia_2.setVisible(true);lyr_ChacrasconReferencia_3.setVisible(true);lyr_Chacrasconreferencia3_4.setVisible(true);lyr_calles_5.setVisible(true);lyr_LotesconDeuda_6.setVisible(true);
var layersList = [group_QuemuQuemu,lyr_calles_5,lyr_LotesconDeuda_6];
lyr_Recuadro_0.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Radios_1.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_QuintasconReferencia_2.set('fieldAliases', {'FID': 'FID', 'text': 'text', });
lyr_ChacrasconReferencia_3.set('fieldAliases', {'FID': 'FID', 'text': 'text', });
lyr_Chacrasconreferencia3_4.set('fieldAliases', {'FID': 'FID', 'text': 'text', });
lyr_calles_5.set('fieldAliases', {'id': 'id', 'calle': 'calle', });
lyr_LotesconDeuda_6.set('fieldAliases', {'FID': 'FID', 'Lote': 'Lote', 'Manzana': 'Manzana', 'text': 'text', 'UUDeuda': 'UUDeuda', 'Propietari': 'Propietari', 'Calle': 'Calle', 'Numero': 'Numero', 'Referencia': 'Referencia', });
lyr_Recuadro_0.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_Radios_1.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'width': '', 'thickness': '', 'ext': '', });
lyr_QuintasconReferencia_2.set('fieldImages', {'FID': '', 'text': '', });
lyr_ChacrasconReferencia_3.set('fieldImages', {'FID': '', 'text': '', });
lyr_Chacrasconreferencia3_4.set('fieldImages', {'FID': 'TextEdit', 'text': 'TextEdit', });
lyr_calles_5.set('fieldImages', {'id': 'TextEdit', 'calle': 'TextEdit', });
lyr_LotesconDeuda_6.set('fieldImages', {'FID': '', 'Lote': '', 'Manzana': '', 'text': '', 'UUDeuda': '', 'Propietari': '', 'Calle': '', 'Numero': '', 'Referencia': '', });
lyr_Recuadro_0.set('fieldLabels', {});
lyr_Radios_1.set('fieldLabels', {});
lyr_QuintasconReferencia_2.set('fieldLabels', {});
lyr_ChacrasconReferencia_3.set('fieldLabels', {});
lyr_Chacrasconreferencia3_4.set('fieldLabels', {});
lyr_calles_5.set('fieldLabels', {'id': 'inline label', 'calle': 'inline label', });
lyr_LotesconDeuda_6.set('fieldLabels', {'FID': 'inline label', 'Lote': 'inline label', 'Manzana': 'inline label', 'text': 'inline label', 'UUDeuda': 'inline label', 'Propietari': 'inline label', 'Calle': 'inline label', 'Numero': 'inline label', 'Referencia': 'inline label', });
lyr_LotesconDeuda_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});