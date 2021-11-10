import React from "react";
// import { Link } from "react-router-dom";
import * as THREE from "three";

export default class Shape extends React.Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    // === Creating the scene ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // ====================
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    const heartShape = new THREE.Shape();
    heartShape.moveTo( 25, 25 );
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
    heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
    const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    const shape = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );
    scene.add( shape );
    camera.position.z = 5;
    // var animate = function () {
    //   requestAnimationFrame( animate );
    //   shape.rotation.x += 0.05;
    //   shape.rotation.y += 0.05;
    //   renderer.render( scene, camera );
    // };
    // animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div >                
        <div ref={ref => (this.mount = ref)} />
      </div>
    );
  }
}