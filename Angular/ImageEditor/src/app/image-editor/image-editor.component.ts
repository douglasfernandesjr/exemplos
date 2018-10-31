import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent implements OnInit {
  //https://ionicacademy.com/ionic-image-crop-cropperjs/
  //https://foliotek.github.io/Croppie/

  @ViewChild('image')
  public imageInput: ElementRef;

  @ViewChild('imageCanvas')
  public canvas: ElementRef;

  @ViewChild('angularCropper')
  public angularCropper: CropperComponent;


  imageDisplay: boolean = false;
  imagePreview: string | ArrayBuffer | null;

  cropperEditor: boolean = false;
  cropperEditorPreview: string | ArrayBuffer | null;

  canvasDisplay: boolean = false;
  canvasPreview: string | ArrayBuffer | null;
  public ctxs: CanvasRenderingContext2D;

  cropperOptions: any;
  croppedImage = null;

  myImage = null;
  scaleValX = 1;
  scaleValY = 1;


  constructor() {

    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: 1,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
      showZoomer: true,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pinguim-DSC08880.JPG/220px-Pinguim-DSC08880.JPG'
    };

  }

  ngOnInit() {
  }

  loadImage() {

    if (this.imageInput.nativeElement.files && this.imageInput.nativeElement.files[0]) {
      const file = this.imageInput.nativeElement.files[0];

      const reader = new FileReader();
      reader.onload = e => { this.imagePreview = reader.result; this.imageDisplay = true; };

      reader.readAsDataURL(file);
    }
  }

  startCrop() {
    this.cropperEditorPreview = this.imagePreview;
    this.imageDisplay = false;
    this.cropperEditor = true;
  }

  startCanvas() {
    this.imageDisplay = false;
    this.canvasDisplay = true;
    let ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
    let cava = this.canvas.nativeElement;

    let img = new Image();
    img.src = <string>this.imagePreview;
    img.onload = function () {
      cava.width = img.width;
      cava.height = img.height;
      ctx.drawImage(img, 0, 0);
    };


    // variable that decides if something should be drawn on mousemove
    let drawing = false;

    // the last coordinates before the current move
    let lastX;
    let lastY;

    let currentX;
    let currentY;

    function draw(lX, lY, cX, cY) {
      // line from
      ctx.moveTo(lX, lY);
      // to
      ctx.lineTo(cX, cY);
      // color
      ctx.strokeStyle = "red";
      // draw it
      ctx.stroke();
    }



    this.canvas.nativeElement.addEventListener("mousedown", (event) => {
      if (event.offsetX !== undefined) {
        lastX = event.offsetX;
        lastY = event.offsetY;
      } else {
        lastX = event.layerX - event.currentTarget.offsetLeft;
        lastY = event.layerY - event.currentTarget.offsetTop;
      }
      // begins new line
      ctx.beginPath();

      drawing = true;

    });

    this.canvas.nativeElement.addEventListener("mousemove", (event) => {
      if (drawing) {
        // get current mouse position
        if (event.offsetX !== undefined) {
          currentX = event.offsetX;
          currentY = event.offsetY;
        } else {
          currentX = event.layerX - event.currentTarget.offsetLeft;
          currentY = event.layerY - event.currentTarget.offsetTop;
        }

        draw(lastX, lastY, currentX, currentY);

        // set current coordinates to last one
        lastX = currentX;
        lastY = currentY;
      }
    });

    this.canvas.nativeElement.addEventListener("mouseup", (event) => {
      // stop drawing
      drawing = false;
    });
  }

  saveCanvas() {
    this.imagePreview = this.canvas.nativeElement.toDataURL('image/jpeg');
    this.imageDisplay = true;
    this.canvasDisplay = false;
  }



  reset() {
    this.angularCropper.cropper.reset();
  }

  clear() {
    this.angularCropper.cropper.clear();
  }

  rotate() {
    this.angularCropper.cropper.rotate(90);
  }

  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }

  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }

  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }

  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }

  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.imagePreview = croppedImgB64String;
    this.imageDisplay = true;
    this.cropperEditor = false;
  }



}
