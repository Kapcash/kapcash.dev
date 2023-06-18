<template>
  <TresCanvas shadows alpha class="h-full">
    <TresPerspectiveCamera :position="[2, 1, 2]" />
    <OrbitControls />
    <Suspense>
      <primitive :object="scene" />
    </Suspense>
    <TresDirectionalLight :position="[50, 50, 50]" :intensity="1"/>
    <TresHemisphereLight :intensity="1"/>
  </TresCanvas>
</template>

<script lang="ts" setup>
import * as THREE from 'three'
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { useGLTF, OrbitControls } from '@tresjs/cientos'
import { earthTilt } from '~~/composables/use3d';

const { scene, nodes } = await useGLTF('http://localhost:3000/models/low_poly_earth.gltf')
  .catch(err => {
    console.log("Error while loading model", err)
    throw err;
  })


const meshGroup = (nodes as any).low_poly_earth
const [meshWater, meshEarth] = meshGroup.children as THREE.Mesh[]

// Material color
const waterColor = new THREE.MeshLambertMaterial({ color: 0x7DB3E7, side: THREE.BackSide });
const earthColor = new THREE.MeshLambertMaterial({ color: 0x64E75B, side: THREE.DoubleSide });
meshWater.material = waterColor
meshEarth.material = earthColor

// Rotate
meshGroup.rotateOnAxis(new THREE.Vector3(1,0,0), 0.5)
const earthTiltRotation = new THREE.Matrix4().makeRotationZ(-earthTilt)
meshWater.geometry.applyMatrix4(earthTiltRotation);
meshEarth.geometry.applyMatrix4(earthTiltRotation);
const earthAxis = new THREE.Vector3(Math.sin(-earthTilt), Math.cos(-earthTilt), 0).normalize();

const { onLoop } = useRenderLoop()

onLoop(({ delta, elapsed, clock }) => {
  meshGroup.rotateOnAxis(earthAxis, 0.002)
})
</script>
