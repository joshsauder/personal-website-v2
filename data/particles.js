export const particlesStyle = {

    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  }
  
  export const particlesParam = {
  
      "particles": {
          "number": {
              "value": 70,
              "density": {
                  "enable": true,
                  "value_area": 830 
              }
          },
          "size": {
              "value": 2.5,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 0.8,
                  "size_min": 0.1,
                  "sync": false
                }
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": false,
                  "mode": "repulse"
              }
         }
      }
  }