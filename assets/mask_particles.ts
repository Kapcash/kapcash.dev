import { ISourceOptions } from 'tsparticles'

const options: ISourceOptions = {
  background: {
    color: {
      value: '#ffffff'
    },
    image: "url('/moi.jpg')",
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover'
  },
  backgroundMask: {
    cover: {
      color: {
        value: {
          r: 255,
          g: 255,
          b: 255
        }
      },
      opacity: 1
    },
    enable: true
  },
  fpsLimit: 45,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          force: 60
        }
      }
    },
    modes: {
      bubble: {
        distance: 120,
        duration: 2,
        opacity: 1,
        size: 25
      },
      push: {
        quantity: 1
      }
    }
  },
  motion: {
    reduce: {
      value: false
    }
  },
  particles: {
    links: {
      color: {
        value: '#ffffff'
      },
      distance: 50,
      enable: false
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200
        }
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
        default: 'out'
      },
      speed: 0.2
    },
    number: {
      limit: 100,
      value: 60
    },
    size: {
      value: {
        min: 3,
        max: 13
      },
      animation: {
        speed: 20,
        minimumValue: 0.1
      }
    }
  }
}

export default options
