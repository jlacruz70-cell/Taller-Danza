var APP_DATA = {
  "scenes": [
    {
      "id": "0-rea-principal",
      "name": "Área Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.964836002039757,
          "pitch": 0.11437977880384054,
          "rotation": 0,
          "target": "1-rea-estudio"
        },
        {
          "yaw": -0.25825001093669897,
          "pitch": -0.041692800912922934,
          "rotation": 0,
          "target": "2-acceso-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rea-estudio",
      "name": "Área Estudio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.128338009832193,
          "pitch": 0.02161200649368311,
          "rotation": 0,
          "target": "0-rea-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-acceso-",
      "name": "Acceso ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4974738732964461,
          "pitch": 0.035287647125802124,
          "rotation": 0,
          "target": "0-rea-principal"
        },
        {
          "yaw": 1.504035919565876,
          "pitch": 0.008446047290375347,
          "rotation": 0,
          "target": "1-rea-estudio"
        },
        {
          "yaw": -2.6978336083615897,
          "pitch": 0.02408771922902453,
          "rotation": 0,
          "target": "3-fuera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-fuera",
      "name": "FUERA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.600316147976347,
          "pitch": -0.024880767982377705,
          "rotation": 0,
          "target": "2-acceso-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
