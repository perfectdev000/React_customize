import React from "react";
// import { Link } from "react-router-dom";
import * as THREE from "three";

class Cube extends React.Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    // === Creating the scene ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // ====================
    var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
    var material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry1, material1 );
    // var geometry2 = new THREE.SphereGeometry(1,20,20);
    // var material2 = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
    // var sphere = new THREE.Mesh( geometry2, material2 );
    scene.add( cube );
    // scene.add( sphere );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;
      renderer.render( scene, camera );
    };
    animate();
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

export default Cube;