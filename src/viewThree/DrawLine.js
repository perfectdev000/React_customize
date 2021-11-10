import React from "react";
// import { Link } from "react-router-dom";
import * as THREE from "three";

export default class DrawLine extends React.Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    // === Creating the scene ===
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    const scene = new THREE.Scene();
    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry, material );
    scene.add( line );
    renderer.render( scene, camera );    
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