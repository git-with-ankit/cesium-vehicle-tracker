import React, { useEffect, useRef } from "react";
import "./App.css";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";



window.CESIUM_BASE_URL = "/Cesium";
Cesium.Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_TOKEN;

function App(){
  const viewerRef = useRef(null);
 

  useEffect(()=>{
    
    const viewer = new Cesium.Viewer(viewerRef.current,{
      terrainProvider: Cesium.Terrain.fromWorldTerrain()
    });
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-74.0445, 40.6892, 100),
      point:{
        pixelSize : 10,
        color: Cesium.Color.RED,
      },
      label:{
        text : "Vehicle 1",
      }
    });
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-74.0445, 40.6892, 2000),
    });

    return () => viewer.destroy();
  },[]);

  return <div id="cesiumContainer" ref={viewerRef} style={{ height: "100vh", width: "100%" }} />;

}

export default App;

