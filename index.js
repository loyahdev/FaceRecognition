const tf = require('@tensorflow/tfjs-node');
const faceapi = require('@vladmandic/face-api');
const canvas = require('canvas');
const { Canvas, Image, ImageData } = canvas;

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

async function detectFaces(imagePath) {
    await faceapi.nets.ssdMobilenetv1.loadFromDisk('./models/ssd_mobilenetv1');
    const img = await canvas.loadImage(imagePath);
    const detections = await faceapi.detectAllFaces(img);
    console.log(detections);
}

detectFaces('photo2.jpg');