var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poligoni_1 = new ol.format.GeoJSON();
var features_poligoni_1 = format_poligoni_1.readFeatures(json_poligoni_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligoni_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligoni_1.addFeatures(features_poligoni_1);
var lyr_poligoni_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligoni_1, 
                style: style_poligoni_1,
                interactive: true,
    title: 'poligoni<br />\
    <img src="styles/legend/poligoni_1_0.png" /> 22,3 - 25,2 <br />\
    <img src="styles/legend/poligoni_1_1.png" /> 25,2 - 28,4 <br />\
    <img src="styles/legend/poligoni_1_2.png" /> 28,4 - 30,4 <br />\
    <img src="styles/legend/poligoni_1_3.png" /> 30,4 - 32,1 <br />\
    <img src="styles/legend/poligoni_1_4.png" /> 32,1 - 36,6 <br />'
        });
var format_granicasavskivenac1_2 = new ol.format.GeoJSON();
var features_granicasavskivenac1_2 = format_granicasavskivenac1_2.readFeatures(json_granicasavskivenac1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granicasavskivenac1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granicasavskivenac1_2.addFeatures(features_granicasavskivenac1_2);
var lyr_granicasavskivenac1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_granicasavskivenac1_2, 
                style: style_granicasavskivenac1_2,
                interactive: false,
                title: '<img src="styles/legend/granicasavskivenac1_2.png" /> granica savski venac1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_poligoni_1.setVisible(true);lyr_granicasavskivenac1_2.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_poligoni_1,lyr_granicasavskivenac1_2];
lyr_poligoni_1.set('fieldAliases', {'id': 'id', 'br mesta': 'br mesta', 'br glasova sns': 'br glasova sns', 'ukupno glasova': 'ukupno glasova', 'udeo': 'udeo', });
lyr_granicasavskivenac1_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'name': 'name', 'name_de': 'name_de', 'name_en': 'name_en', 'name_sr': 'name_sr', 'name_sr-La': 'name_sr-La', 'ref_RS_ops': 'ref_RS_ops', 'type': 'type', 'website': 'website', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'name_prefi': 'name_prefi', 'name_pre_1': 'name_pre_1', 'name_pre_2': 'name_pre_2', 'name_pre_3': 'name_pre_3', 'name_suffi': 'name_suffi', 'postal_cod': 'postal_cod', 'population': 'population', 'name_hr': 'name_hr', 'name_ru': 'name_ru', });
lyr_poligoni_1.set('fieldImages', {'id': 'TextEdit', 'br mesta': 'TextEdit', 'br glasova sns': '', 'ukupno glasova': '', 'udeo': 'TextEdit', });
lyr_granicasavskivenac1_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_sr': 'TextEdit', 'name_sr-La': 'TextEdit', 'ref_RS_ops': 'TextEdit', 'type': 'TextEdit', 'website': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'name_prefi': 'TextEdit', 'name_pre_1': 'TextEdit', 'name_pre_2': 'TextEdit', 'name_pre_3': 'TextEdit', 'name_suffi': 'TextEdit', 'postal_cod': 'TextEdit', 'population': 'TextEdit', 'name_hr': 'TextEdit', 'name_ru': 'TextEdit', });
lyr_poligoni_1.set('fieldLabels', {'id': 'no label', 'br mesta': 'header label', 'br glasova sns': 'header label', 'ukupno glasova': 'header label', 'udeo': 'header label', });
lyr_granicasavskivenac1_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_leve': 'no label', 'boundary': 'no label', 'name': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_sr': 'no label', 'name_sr-La': 'no label', 'ref_RS_ops': 'no label', 'type': 'no label', 'website': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'name_prefi': 'no label', 'name_pre_1': 'no label', 'name_pre_2': 'no label', 'name_pre_3': 'no label', 'name_suffi': 'no label', 'postal_cod': 'no label', 'population': 'no label', 'name_hr': 'no label', 'name_ru': 'no label', });
lyr_granicasavskivenac1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});