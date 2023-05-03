import * as turf from '@turf/turf'

export default function FindClosest (coordinates) {

    const stores = { "type": "FeatureCollection", "features": [{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.089999433138,51.008714971864]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Sandy Beach","latitude":"51.0087149718638","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_4bg.gif","location_address":null,"location_city":null,"longitude":"-114.089999433138","general_info":"Access the site from 50 Ave S.W. by driving down the gravel road to the parking lot. From here, you can connect to the Elbow River pathway system.","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_sandy_beach_bg.gif"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.164821857509,51.068723406712]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Home Road","latitude":"51.0687234067123","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_1bg.gif","location_address":null,"location_city":null,"longitude":"-114.164821857509","general_info":"Access the site from highway 1 (16 Ave NW). Twinned pathways, cyclists must travel along Montgomery Ave to reach designated pathway.","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_home_road_bg.gif"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.156114898609,51.062068880684]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Edworthy South","latitude":"51.0620688806839","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_1bg.gif","location_address":null,"location_city":null,"longitude":"-114.156114898609","general_info":"Parking lot is open but cyclists must cross the Edworthy pedestrian bridge and use the north Bow River pathway. The south pathway is closed due to flood damage. Site offers easy access to the north and south sides of the Bow River pathway which both lead to downtown. The gate to the parking lot opens at 5 a.m. and closes at 11 p.m. ","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_edworthy_south_bg.gif"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.1509347541,51.063685804352]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Edworthy North","latitude":"51.063685804352","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_1bg.gif","location_address":null,"location_city":null,"longitude":"-114.1509347541","general_info":"The west side of parking lot allows for best access to pathway. Use caution when entering pathway as hundreds of cyclists use same pathway to get downtown.","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_edworthy_north_bg.gif"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.004928504105,51.043348776407]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Max Bell","latitude":"51.0433487764073","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_3bg.gif","location_address":null,"location_city":null,"longitude":"-114.004928504105","general_info":"The site can easily be accessed from Deerfoot Trail and Memorial Drive, westbound 17 Avenue S.E. and northbound Barlow Trail. The west side of the parking lot provides easy access to the pathway.","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_max_bell_bg.gif"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.018039103083,51.040429859026]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Pearce Estates","latitude":"51.0404298590255","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_3bg.gif","location_address":null,"location_city":null,"longitude":"-114.018039103083","general_info":"The site can easily be accessed from Deerfoot Trail and Blackfoot Trail. The gate to the parking lot opens at 5 a.m. and closes at 11 p.m.","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_pearce_estates_bg.gif"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.023940315209,51.074257114356]},"properties":{"location_state":null,"website":"http://www.calgary.ca/Transportation/TP/Pages/Cycling/Bicycle-Parking/Calgary-Park-N-Bike-sites.aspx","location_zip":null,"name":"Vista Heights","latitude":"51.0742571143558","route_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_get_there_2bg.gif","location_address":null,"location_city":null,"longitude":"-114.023940315209","general_info":"Access the site from 32 Ave N.E. and park in the west-most corner of the lot for easy access to the Nose Creek pathway system.","site_info":"http://www.calgary.ca/Transportation/TP/PublishingImages/pb_vista_heights_bg.gif"}}], "crs" : { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } } };
  
    stores.features.forEach((store, i) => {
        store.properties.id = i;
    });
  
    const options = { units: 'kilometers' };
    for (const store of stores.features) {
      store.properties.distance = turf.distance(
        coordinates,
        store.geometry,
        options
      );
    }
  
    stores.features.sort((a, b) => {
      if (a.properties.distance > b.properties.distance) {
      return 1;
      }
      if (a.properties.distance < b.properties.distance) {
      return -1;
      }
      return 0; // a must be equal to b
    });
  
    const closestName = stores.features[0].properties.name;

    const closestCoordinates = [stores.features[0].geometry.coordinates[0],stores.features[0].geometry.coordinates[1]];
    window.localStorage.setItem("drive", JSON.stringify(closestCoordinates));

    const closest = [closestName, closestCoordinates];
    
    return(
        closest
    )
  }