// Дворец спорта 
if  (tick==0) {
if (typeof(sceneexist)=='undefined') { 
 OpenCanvas('wCanvas',WC=520,HC=400);
 var scene, camera, renderer; 
 CreateScene(WC,HC);
 InitParameters();
 X=0; Y=0; Z=-10; W=30;

 // МАТЕРИАЛ СТЕКЛА И БОКОВ
  glassfile="http://livelab.spb.ru/labs/files/glass.png";
  watertex="http://livelab.spb.ru/labs/files/glass.png";
  poltex="http://livelab.spb.ru/labs/files/TexturePol.jpg";

  var load = new  THREE.TextureLoader().load(glassfile);
  var materialGlass = new THREE.MeshPhongMaterial( {color: 0xffffff,
      map: load, overdraw: false,
      depthWrite: true, opacity: 0.3, transparent: true} );

 var Zdanie = new THREE.Object3D();
 Zdanie1=DrawZdanie(5,2,2);
  var roof=DrawRoof(5,2,0.89); Zdanie1.add(roof);
  //Dver
  var geometry = new THREE.BoxGeometry(0.45,0.1,0.8);
  var material = new THREE.MeshBasicMaterial( {color: 0xEE7700} );
  var dver = new THREE.Mesh( geometry, material ); 
  dver.position.set(0,1.05,-0.3);
 Zdanie1.add(dver);
 Zdanie1.position.z=1;

 Zdanie2=DrawZdanie(3,1,1);
  var roof=DrawRoof(3,1,0.09); roof.position.x+=0.2; Zdanie2.add(roof);
 Zdanie2.position.set(-1.5,2.6,1);  Zdanie2.rotation.z=-PI/2;

 Zdanie3=Zdanie2.clone(); Zdanie3.rotation.z=PI;
 Zdanie3.position.set(0.2,3.32,1);  

 var roof1=DrawRoof(1,1,1.6); roof1.rotation.z+=PI/2;
 var roof2=DrawRoof(2,2,1.9); roof2.rotation.z+=PI/2; 

 ZdanieL=DrawZdanie(1,1,2); ZdanieR=ZdanieL.clone(); ZdanieR.scale.x=1.1; 
 ZdanieL.position.set(-1.5,-0.82,1); roof1.position.set(-1.5,-0.7,1.8);
 ZdanieR.position.set(0,-0.82,1);    roof2.scale.set(0.6,1.3,0.3);

 Resh1=GetReshetka(25,0.1); Resh1.position.set(-0.7,-1.4,0.4);
 Resh2=GetReshetka(25,0.1); Resh2.position.set(-0.7,-1.4,1.3);

//Добавляем на сцену
Zdanie.add(Zdanie1);
Zdanie.add(Zdanie2);
Zdanie.add(Zdanie3);
Zdanie.add(ZdanieL);
Zdanie.add(ZdanieR);
Zdanie.add(roof1);
Zdanie.add(roof2);
Zdanie.add(Resh1);
Zdanie.add(Resh2);
Zdanie.position.set(X,Y+W,Z-W/40);
Zdanie.scale.set(W/5,W/5,W/5);
scene.add(Zdanie);

  Poliana=DrawPoliana();
  Poliana.position.set(X,Y,Z);
  Poliana.scale.set(W,W,W);
  scene.add(Poliana);

  Grass="http://livelab.spb.ru/labs/files/GrassTex.png";
  Noch="http://livelab.spb.ru/labs/files/Noch.png";
  NochR="http://livelab.spb.ru/labs/files/NochR.png";
  NochL="http://livelab.spb.ru/labs/files/NochL.png";
  Noch5="http://livelab.spb.ru/labs/files/Noch5.png";

  s=W/8; var geometry = new THREE.CubeGeometry(s,1.9*s,s);
var loadManager = new THREE.LoadingManager();
var loader = new THREE.TextureLoader(loadManager);
 
var materials = [
  new THREE.MeshBasicMaterial({map: loader.load(Noch)}),
  new THREE.MeshBasicMaterial({map: loader.load(Noch5)}),
  new THREE.MeshBasicMaterial({map: loader.load(watertex)}),
  new THREE.MeshBasicMaterial({map: loader.load(Grass)}),
  new THREE.MeshBasicMaterial({map: loader.load(NochR)}),
  new THREE.MeshBasicMaterial({map: loader.load(NochL)}),
];
 
loadManager.onLoad = () => {
  var cubeNoch = new THREE.Mesh(geometry, materials);
  cubeNoch.rotation.set(PI/2,0,0);
  cubeNoch.position.z=-W/5;
  cubeNoch.rotation.y+=PI/2;
  scene.add(cubeNoch);
} 

  for (Num=0; Num<2; Num++) { 
          Dart[Num] = DrawDart(Num); 
          Dart[Num].scale.set(W,W,W);
          Dart[0].rotation.z = PI/2;
          Dart[Num].rotation.z = -PI/2;
          Dart[Num].position.set(X+6,Y+10,Z);
          Dart[0].position.set(X-6,Y+10,Z);
          scene.add(Dart[Num]);
        }
        
for (Num=0; Num<2; Num++) { 
        head[Num].rotation.z=-0.6;
        tors[Num].rotation.z=0.3;
        plechoR[Num].rotation.z=-0.3;

        handR1[Num].rotation.x=-PI/4;
        handR2[Num].rotation.x=-PI/4;
        handL1[Num].rotation.x=PI/4;
        handL2[Num].rotation.x=-PI/4;
    
        legR1[Num].rotation.x=-PI/4;
        legR2[Num].rotation.x=PI/4;
        legL1[Num].rotation.x=-PI/4;
        legL2[Num].rotation.x=PI/4;
        bedroL[Num].rotation.z=PI;
        //Dart[Num].position.z=Z-W*cos(legR1[Num].rotation.x);
  }

  scene.rotation.z=-PI/4;
  render();
  }
}

angle=-PI/4+0.8*(cos(0.1*tick)-1);
angle2=-PI/4+0.5*(cos(0.1*tick)-1);
angle3=-PI/4+0.2*(cos(0.1*tick)-1);
angle4=(cos(0.1*tick))*1;
angle5=sin(0.1*tick);
angle6=sin(0.2*tick);
angle7=-PI/2-0.5*(sin(0.1*tick)-1);
  
animate();

puts(tick+" angle="+format(angle,100));
restart(50); 

  function render(){  
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  }

function animate() {
  if (tick<65){
  handR2[0].rotation.x=angle;
  handR3[1].rotation.y=angle2;
  handR2[1].rotation.x=angle;
  }
  if (tick>=65 && tick < 100){
    legR1[0].rotation.x=angle2;
  }
  if (tick>=100 && tick <105){
    legR1[0].rotation.x=angle2;
    legL1[0].rotation.x=angle3;
    legL2[0].rotation.x=angle3/4;    
    legL3[0].rotation.z=PI;
    legR1[0].rotation.x=angle3;
    handL1[0].rotation.x=-angle3;
    handL2[0].rotation.x=angle3/4;
    Dart[0].position.set(X, Y+10, Z);
  }
  if (tick>=105 && tick<125) {
  Dart[1].position.set(X+9, Y+10, Z+0.3);
  legL1[1].rotation.x=0;
  legL2[1].rotation.x=0;
  legL3[1].rotation.z=PI;
  legL3[1].rotation.x=0.5;
  legR2[1].rotation.x=0;
  handL1[1].rotation.x=-1;
  handL2[1].rotation.y=1;
  }
  if (tick>=125 && tick<145) {
  handR1[0].rotation.x=-PI/2;
  handR2[0].rotation.x=0;
  }
  if (tick>=145 && tick<165) {
  handR3[1].rotation.y=angle2;
  handR2[1].rotation.x=angle;
  legL1[1].rotation.x=angle4;
  legL2[1].rotation.x=0;
  legL3[1].rotation.x=0;
  legR2[1].rotation.x=1;
  legR3[1].rotation.x=-0.5;
  }
  if (tick>=165 && tick<185) {
  Dart[1].position.set(X+11, Y+10, Z+0.4);
  }
  if (tick>=165 && tick<185) {
  handR2[0].rotation.x=-PI/2;
  handR1[0].rotation.x=angle5;
  legL1[0].rotation.x=angle6;
  Dart[0].position.set(X, Y+10, Z+0.5);
  legL2[0].rotation.x=0;
  legL1[0].rotation.x=0;
  handL1[0].rotation.x=0;
  handL2[0].rotation.x=-PI/4;
  }
  if (tick>=185 && tick<205) {
  legL1[1].rotation.x=0;
  Dart[1].position.set(X+11, Y+10, Z+0.5);
  legR1[1].rotation.x=angle2;
  legR3[1].rotation.x=0;
  handL1[1].rotation.x=1;
  handL2[1].rotation.y=PI/2;
  handR3[1].rotation.y=0;
  head[1].rotation.x=0;
  }
  if (tick>=205 && tick<235) {
  handR3[1].rotation.x=0;
  handR2[1].rotation.x=angle7;
  legR1[0].rotation.x=-PI/6;
  }
}

function InitParameters() {
 Dart=[]; 
 head=[];  tors=[];
 plechoR=[]; plechoL=[]; bedroR=[]; bedroL=[];
 handR1=[]; handR2=[]; handR3=[];
 handL1=[]; handL2=[]; handL3=[];
 legR1=[]; legR2=[]; legR3=[];
 legL1=[]; legL2=[]; legL3=[];
}

function GetReshetka(N,Step) {
var i,deska,deska2,zabor1;
// ДОСКА-ЗАБОР
  var material = new THREE.MeshPhongMaterial( { color: 0xFFDDDD } );
  var geometry = new THREE.CubeGeometry(0.05,0.05,1);
  var deska = new THREE.Mesh( geometry, material );
  var zabor1=new THREE.Object3D();   
  for (i=1;i<N;i++) { 
  var deska2=deska.clone(); 
    deska2.position.x=Step*(i-N/2);
    if (i%2!=0) {
     deska2.scale.z=1.02; deska2.position.z=0.01; 
    }
    zabor1.add(deska2);
  }

  var geometry = new THREE.CubeGeometry((N-1)*Step,0.025,0.05);
  var perekladina1 = new THREE.Mesh( geometry, material);  
  var perekladina2 = perekladina1.clone();
  perekladina1.position.z = 0.35 ;
  perekladina2.position.z = -0.35 ;

  zabor1.add(perekladina1);
  zabor1.add(perekladina2);
  zabor1.scale.z=0.3;
 return zabor1;
}

function DrawDart(Num) {
// Тип Родни, суставный

function DrawKubik(xk,yk,zk,dx,dy,dz,Col) {
var j,x,y,z,WS;
 // ЛАСТИК ИЗ ШАРА
  WS=2/3;
  var material = new THREE.MeshStandardMaterial( { color: Col } );
  var geometry = new THREE.SphereGeometry(1,25,25);
  var last = new THREE.Mesh( geometry, material );
    for (var j = 0; j < geometry.vertices.length; j++) {
       x=geometry.vertices[j].x; 
       y=geometry.vertices[j].y; 
       z=geometry.vertices[j].z; 
       if (x>WS) x=WS; if (x<-WS) x=-WS;
       if (y>WS) y=WS; if (y<-WS) y=-WS;
       if (z>WS) z=WS; if (z<-WS) z=-WS;
       geometry.vertices[j].x=x;
       geometry.vertices[j].y=y;
       geometry.vertices[j].z=z;
    }
 last.position.set(xk,yk,zk);
 last.scale.set(dx,dy,dz);
return last;
}

function DrawTelo() {
var j,x,y,z,p,r,K;

  // СФЕРЫ ЯГОДИЦ
  var material = new THREE.MeshStandardMaterial({ color: 0xfffafa, roughness: 0.54, metalness:0.1  });
  var geometry = new THREE.SphereGeometry(0.45,40,20);
  var ball1 = new THREE.Mesh( geometry, material );
    K=0.85 // сжатие в дыньку
    for (var j = 0; j < geometry.vertices.length; j++) {
       z=geometry.vertices[j].z; 
       x=geometry.vertices[j].x; 
       y=geometry.vertices[j].y; 
       var p=0.3; if (y<-p) y=-p; 
       geometry.vertices[j].z=z;
       geometry.vertices[j].x=K*x;
       geometry.vertices[j].y=K*y;
    }
  var ball2 = ball1.clone();
  var p=0; var dwn = -0.75; // вниз
  ball1.position.set(0.1,p,dwn);
  ball2.position.set(-0.1,p,dwn);

  // ТЕЛО ИЗ СФЕРЫ 
  var material = new THREE.MeshStandardMaterial({ color: 0xfffafa, roughness: 0.54, metalness:0.1 });
  var geometry = new THREE.SphereGeometry(1,40,20);
  var tube = new THREE.Mesh( geometry, material );
  tube.add(ball1,ball2);

    K=0.5; // сжатие в дыньку
    for (j = 0; j < geometry.vertices.length; j++) {
       z=geometry.vertices[j].z; 
       x=geometry.vertices[j].x; 
       y=geometry.vertices[j].y; 
       // КРЕСТЕЦ
       if (z<-0.4) {
          x=1.2*x;
       }
       // ПЛЕЧИ
       if (z>0.2) if (z<0.8) x=2*x;
       // СПИНА И ТОРС
       if (y>0.6) y=0.6; 
       if (z<0.4) geometry.vertices[j].z=1.2*z;
       geometry.vertices[j].x=K*x;
       geometry.vertices[j].y=K*y;
    }

  // ГРУДНЫЕ МЫШЦЫ И МЫШЦЫ ЖИВОТА
  var kubR = DrawKubik(-0.25,-0.425,0.35,0.25,0.1,0.25,0xfffafa);
  var kubL = kubR.clone(); kubL.position.x=-kubR.position.x;
  tube.add(kubL,kubR);
  for (j = 0; j < 3; j++) {
  var kubR = DrawKubik(-0.1,-0.41-0.01*j,-0.35+0.1*j,0.15,0.1,0.1,0xfffafa);
  var kubL = kubR.clone(); kubL.position.x=-kubR.position.x;
  tube.add(kubL,kubR);
  }
  
// юстировка
var out = new THREE.Object3D(); 
    var WS=3; tube.scale.set(WS,WS,WS);
    tube.position.z=0.8*WS;
    out.add(tube);
return out;
}

function DrawSustav(typ,dx,dz) {
var x,y,z,p,r,K;
  // ИЗ СФЕРЫ 
  var material = new THREE.MeshStandardMaterial({ color: 0xfffafa, roughness: 0.54, metalness:0.1 });
  var geometry = new THREE.SphereGeometry(1,50,25);
  var tube = new THREE.Mesh( geometry, material );
    K=0.15; // сжатие в дыньку
    for (var j = 0; j < geometry.vertices.length; j++) {
       z=geometry.vertices[j].z; 
       x=geometry.vertices[j].x; 
       y=geometry.vertices[j].y; 
        if (typ==0) { if (z>0) if (abs(x)<dx) z=dz; }else 
        if (typ==1) { if (z>0) if (abs(x)>dx) z=dz; }else 
        if (typ==2) { if (z>0) { if (x>dx) z=dz; } 
                      else if (abs(x)>dx) z=-dz;
                    }else 
        if (typ==3) { if (z>0) { if (x<-dx) z=dz; } 
                      else if (abs(x)>dx) z=-dz;
                    }   
       p=0.7; if (z>p) z=p; if (z<-p) z=-p;
       geometry.vertices[j].z=z;
       geometry.vertices[j].x=K*x;
       geometry.vertices[j].y=K*y;
    }
    if (typ==1) tube.rotation.y=PI;
    tube.position.z=-1.5;

// юстировка
var out = new THREE.Object3D(); 
    var WS=2.5; tube.scale.set(WS,WS,WS);
    out.add(tube);
return out;
}

function DrawBedro() {
        var material = new THREE.MeshStandardMaterial({ color: 0xfffafa, roughness: 0.54, metalness:0.1  });
        var geometry = new THREE.SphereGeometry(0.8,40,20);
        var bedro = new THREE.Mesh( geometry, material );
        bedro.scale.set(1,1,1.2);
return bedro;
}

function DrawStupnia() {
    var material = new THREE.MeshStandardMaterial({ color: 0xCCCCCC });
    var geometry = new THREE.CylinderBufferGeometry(1/4,1/4,0.85,40,2,false,0,PI);
    var fingersR = new THREE.Mesh(geometry, material);
    fingersR.rotation.z = PI/2;
    var geometry = new THREE.PlaneGeometry(0.85, 0.7);
    var fingersR2 = new THREE.Mesh(geometry, material);
    fingersR2.rotation.x = PI/2;
    var legR3out = new THREE.Object3D();
        legR3out.add(fingersR);
        legR3out.add(fingersR2);
    legR3out.rotation.set(0,PI/2,PI/2);

// юстировка
var out = new THREE.Object3D(); 
    var WS=2; legR3out.scale.set(WS,WS,WS);
    legR3out.position.set(0,-0.1*WS,-0.2*WS);
    out.add(legR3out);
return out;
}

function DrawHand() {
    var material = new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.54, metalness:0.1 });
    var geometry = new THREE.BoxBufferGeometry(0.4,1,1.5);
    var hand = new THREE.Mesh(geometry, material);
// юстировка
var out = new THREE.Object3D(); 
    var WS=1; hand.scale.set(WS,WS,WS);
    hand.position.set(0,-0.05*WS,-0.2*WS);
    out.add(hand);
return out;
}

function DrawHead() {
var j,x,y,z,r; headcol=0xffdead;

         r=1.01;
         var geometry = new THREE.SphereGeometry(r,16,16,0,PI);
         var material = new THREE.MeshPhongMaterial({ color: 0xfffafa});
         var BackHeir = new THREE.Mesh(geometry, material); 

         var geometry = new THREE.CylinderGeometry(r,r,0.1,20);
         var BackHeirDown = new THREE.Mesh(geometry, material); 
         BackHeir.add(BackHeirDown); BackHeirDown.rotation.x=PI/2;
         BackHeir.rotation.x = PI+0.75;
        
         // ИЗ СФЕРЫ голова
         Face='http://livelab.spb.ru/labs/files/MashaF.jpg?12345';
         var texture = new THREE.TextureLoader().load(Face);
         var material = 
         new THREE.MeshLambertMaterial( { color: headcol, map: texture } );
         var geometry = new THREE.SphereGeometry(1,20,20,0,PI);
       //  var material = new THREE.MeshLambertMaterial( { color: headcol } );
         var headMesh = new THREE.Mesh( geometry, material );
         BackHeir2=BackHeir.clone(); BackHeir2.rotation.x=3;
         Podbor=BackHeir.clone(); Podbor.rotation.x=1.5; // 2.5;
         headMesh.add(BackHeir,BackHeir2,Podbor);
       // Лицо сетки смотрит вверх, высота y  
         headMesh.rotation.set(PI/2,0,0);

         lipsdist=-0.3; // граница губ по высоте
         eyedist=-0.65;   // отстояние глаз от затылка
          for (var j = 0; j < geometry.vertices.length; j++) {
             x=geometry.vertices[j].x; 
             y=geometry.vertices[j].y; 
             z=geometry.vertices[j].z; 
             r=0.7; // низ головы срезаем
             // Лицо сетки смотрит вверх, высота y  
             if (y<-r) geometry.vertices[j].y=-r;
             else 
             if (z>0) { // лицевая часть
             if (y>lipsdist+0.1) // граница губ
             // делаем плоское лицо (выполаживаем)
             if ((abs(x)<0.5)&&(y<0.5)) { r=0.95;
             // на нос попадает одна точка из 20x20
             if ((abs(x)<0.1)&&(y>-0.1)&&(y<0.1)) r=1.01;  
             geometry.vertices[j].z=r*z;
             geometry.vertices[j].x=r*x; 
             }}
             // голова дынькой/редькой
             x=geometry.vertices[j].x; 
             z=geometry.vertices[j].z; 
              r=0.85+0.05*(1-y); z=r*z; x=r*x; 
             // r=1-0.1*(1+y); z=r*z; x=r*x; 
             geometry.vertices[j].z=r*z;
             geometry.vertices[j].x=r*x; 
             geometry.vertices[j].y=r*y; 
          }
         // Пересчитываем нормали после изменения вершин
         headMesh.geometry.computeVertexNormals();
         var head = new THREE.Object3D(); head.add(headMesh);
          
         // Юстировка размера и высоты головы на шее
         var WS=1.2; head.scale.set(WS,WS,WS); 
         head.position.set(0,0,1.2);
         // красный шарик центра 0xff2222 -> шея
         var material = new THREE.MeshStandardMaterial({ color: headcol });
         var geometry = new THREE.SphereGeometry(0.35,50,25);
         var Marker = new THREE.Mesh( geometry, material );
         var out = new THREE.Object3D();
         out.add(head,Marker);
         return out;    
}

function DrawShpaga() {
  var materialBlade = new THREE.MeshStandardMaterial({ color: 0xCCCCCC, metalness: 0.8, roughness: 0.2 }); // Серый цвет для клинка
  var materialTip = new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.9, roughness: 0.1 }); // Золотистый цвет для наконечника
  var materialHandle = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); 
  // Коричневый цвет для рукояти

  // Создаем плоский клинок
  var bladeGeometry = new THREE.BoxGeometry(0.25, 0.01, 8); 
  // Плоский и длинный клинок
  var blade = new THREE.Mesh(bladeGeometry, materialBlade);
  blade.position.z = 20;
  blade.castShadow = true;

  // Создаем треугольный наконечник
  var tipGeometry = new THREE.ConeGeometry(0.12, 1, 2); 
  // Треугольный наконечник
  var tip = new THREE.Mesh(tipGeometry, materialTip);
  tip.rotation.y = PI / 2;
  tip.rotation.x = PI / 2; // Повернуть наконечник
  tip.position.z = 4.5;    // Позиционируем на конце клинка
  blade.add(tip); 

 // Создаем гарду из сферы
var guardGeometry = new THREE.SphereGeometry(0.5, 32, 32); 
// Сфера для гарды
var guard = new THREE.Mesh(guardGeometry, materialHandle);
guard.position.z = -4;
guard.scale.set(1, 1, 0.3); // Сужаем сферу в полукруглую линию
blade.add(guard); // Добавляем гарду к клинку
  // Создаем рукоять
  var handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32); 
  // Длина рукояти 1
  var handle = new THREE.Mesh(handleGeometry, materialHandle);
  handle.rotation.x = Math.PI / 2; 
  // Повернуть рукоять, чтобы она прилегала к клинку
  handle.position.z = -5; // Позиционируем рукоять ниже гарды
  blade.add(handle); // Добавляем рукоять к клинку

  // Создаем эфес
  var hiltGeometry = new THREE.SphereGeometry(0.2, 32, 32); 
  // Маленькая сфера для эфеса
  var hilt = new THREE.Mesh(hiltGeometry, materialHandle);
  hilt.position.z = -6; // Позиционируем эфес на конце рукояти
  blade.add(hilt); // Добавляем эфес к клинку

  // Юстировка
  var out = new THREE.Object3D();
  WS = 0.6;
  blade.scale.set(WS, WS, WS);
  blade.rotation.x=PI;
  blade.position.z=-4.5*WS;
  out.add(blade);
  return out;
}

function DrawScabbard() {
  var materialScabbard = new THREE.MeshStandardMaterial({ color: 0x8B0000, metalness: 0.5, roughness: 0.8 }); // Темно-красный цвет для ножен
  // Создаем ножны основной части
  var scabbardGeometry = new THREE.BoxGeometry(0.3, 0.1, 9);  
  // Длина ножен меньше длины клинка, чтобы клинок выглядывал
  var scabbard = new THREE.Mesh(scabbardGeometry, materialScabbard);
  scabbard.position.z = 21; 
  // Позиционируем ножны так, чтобы клинок выглядывал
  // Юстировка
  var out = new THREE.Object3D();
  WS = 0.6; scabbard.scale.set(WS, WS, WS);
  scabbard.rotation.x=PI;
  scabbard.position.z=-3*WS;
  out.add(scabbard);
return out;
}

function DrawSapogGolen() {
   var material = new THREE.MeshStandardMaterial({ color: 0x654321, metalness: 0.2, roughness: 0.65 });
   var geometry = new THREE.CylinderBufferGeometry(0.65,0.43,3,50,4,false,PI*2,2*PI);
   var golenishe = new THREE.Mesh( geometry, material );
   golenishe.rotation.x=PI/2;
// юстировка
var out = new THREE.Object3D(); 
    var WS=1; golenishe.scale.set(WS,WS,WS);
    golenishe.position.set(0,0,-2*WS);
    out.add(golenishe);
return out;
}
function DrawSapogStopa() {
   var material = new THREE.MeshStandardMaterial({ color: 0x654321, metalness: 0.2, roughness: 0.65 });
   var geometry = new THREE.SphereGeometry(0.5,20,20);
   var stopa = new THREE.Mesh( geometry, material );
    for (var j = 0; j < geometry.vertices.length; j++) {
       z=geometry.vertices[j].z; 
       x=geometry.vertices[j].x; 
       y=geometry.vertices[j].y;
       if (z<0) z=0;
       if (y>0.35) y=0.4;
       if (z>0.2) if (y<0.3) if (y>-0.5) z=(1-(abs(y-0.5)));
       if (z>-1) if (z<1) y=(1-(z*-0.2))*y, x=(1-(z*-0.2))*x;
       geometry.vertices[j].z=0.6*z;
       geometry.vertices[j].x=0.6*x;
       geometry.vertices[j].y=y;
    }
    var material = new THREE.MeshStandardMaterial({ color: 0x757575 });
    var geometry = new THREE.TorusGeometry(0.25,0.03,50,100);
    var obod = new THREE.Mesh( geometry, material );
    WS=1; obod.scale.set(WS,WS,2*WS); obod.rotation.x = PI/6;
    obod.position.y=0.1; stopa.position.set(0,-0.4,-0.25);
    var sapstopa = new THREE.Object3D();
        sapstopa.add(obod); sapstopa.add(stopa);

// юстировка
var out = new THREE.Object3D(); 
    var WS=2; sapstopa.scale.set(WS,WS,WS);
    //sapstopa.position.set(0,0,0*WS);
    out.add(sapstopa);
return out;
}

        var Dart = new THREE.Object3D(); 

        head[Num] = DrawHead();
        tors[Num] = DrawTelo();
        head[Num].position.z=5.4;
        tors[Num].position.z=6.7;
        // head[Num].rotation.x=-PI/4;
        // tors[Num].rotation.x=PI/2;
        tors[Num].add(head[Num]);
        Dart.add(tors[Num]);

        plechoR[Num] = new THREE.Object3D();  
        handR1[Num] = DrawSustav(1,0.3,0.5);
        handR2[Num] = DrawSustav(0,0.3,0.5);
        handR3[Num] = DrawHand();
        handR2[Num].add(handR3[Num]);
        handR1[Num].add(handR2[Num]);

        handR2[Num].position.z = handR1[Num].position.z-3;
        handR3[Num].position.z = handR2[Num].position.z;
        // handR1[Num].position.set(-2,0,4);
        plechoR[Num].position.set(-2,0,4);
        plechoR[Num].add(handR1[Num]); 
        tors[Num].add(plechoR[Num]);

        plechoL[Num] = new THREE.Object3D();
        handL1[Num] = DrawSustav(1,0.3,0.5);
        handL2[Num] = DrawSustav(0,0.3,0.5);
        handL3[Num] = DrawHand();
        handL2[Num].add(handL3[Num]);
        handL1[Num].add(handL2[Num]);
        handL2[Num].position.z = handL1[Num].position.z-3; 
        handL3[Num].position.z = handL2[Num].position.z;
        // handL1[Num].position.set(2,0,4);
        plechoL[Num].position.set(2,0,4);
        plechoL[Num].add(handL1[Num]); 
        tors[Num].add(plechoL[Num]);

        bedroR[Num] = new THREE.Object3D(); 
        legR1[Num] = DrawSustav(2,0.3,0.5);
        legR2[Num] = DrawSustav(0,0.3,0.5);
        legR3[Num] = DrawSapogStopa();
        legR2[Num].add(legR3[Num]);
        legR1[Num].add(legR2[Num]);
        legR2[Num].position.z = legR1[Num].position.z-3;
        legR3[Num].position.z = legR2[Num].position.z;  
        var musclebedroR = DrawBedro();
        musclebedroR.position.set(0.1,0.1,-0.3);
        legR1[Num].add(musclebedroR);
        legR2[Num].add(DrawSapogGolen());
        bedroR[Num].add(legR1[Num]);
        bedroR[Num].position.set(-0.8,0,6.8);
        Dart.add(bedroR[Num]);

        bedroL[Num] = new THREE.Object3D();
        legL1[Num] = DrawSustav(3,0.3,0.5);
        legL2[Num] = DrawSustav(0,0.3,0.5);
        legL3[Num] = DrawSapogStopa();
        legL2[Num].add(legL3[Num]);
        legL1[Num].add(legL2[Num]);
        legL2[Num].position.z = legL1[Num].position.z-3; 
        legL3[Num].position.z = legL2[Num].position.z;  
        var musclebedroL = musclebedroR.clone();
        musclebedroL.position.x=-0.1;
        legL2[Num].add(DrawSapogGolen());
        legL1[Num].add(musclebedroL);
        bedroL[Num].add(legL1[Num]);
        bedroL[Num].position.set(0.8,0,6.8);
        Dart.add(bedroL[Num]);

        var Shpaga=DrawShpaga();
        Shpaga.position.set(0,0,-0.8);
        Shpaga.rotation.z=PI/4;
        handR3[Num].add(Shpaga);

// юстировка
var out = new THREE.Object3D(); 
    var WS=0.02; Dart.scale.set(WS,WS,WS);
    Dart.position.z=-0.45*WS;
    out.add(Dart);
return out;
}

function DrawRoof(N,M,ZK) {
var WK,LK; WK=0.65*M; LK=0.74*(N+1);
  var material = new THREE.MeshPhongMaterial( {color: 0xDDAAAA} );
  var geometry = new THREE.CylinderGeometry(WK,WK,LK,3);
  var roof = new THREE.Mesh( geometry, material );
  roof.scale.z=0.3; roof.position.z=ZK; roof.rotation.z=PI/2;
return roof;
}

function DrawZdanie(N,M,K) {
var i,j,k,etag,zdanie;
var Dom=DrawDom(15);
// ЦИКЛ ФОРМИРОВАНИЯ КОМНАТ
zdanie = new THREE.Object3D();
Cx=(N-1)/2; Cy=(M-1)/2;
for (k=0;k<K; k++) {
etag = new THREE.Object3D();
for (i=0;i<N; i++) 
for (j=0;j<M; j++) {
 var buf=Dom.clone();
 if (j==1) buf.rotation.z+=PI;
 buf.position.x = 0.8*(i-Cx);
 buf.position.y = 1.05*(j-Cy);
 etag.add(buf);
}
etag.position.z=0.75*(k-1);
zdanie.add(etag);
}
return zdanie;
}

function DrawDom(N) {
var i,dom; 

  // WINDOW
  var korobka = new THREE.Object3D();
  var material = new THREE.MeshPhongMaterial( { color: 0xDDDDDD } );

  // ДЕТАЛИ КОРОБКИ
  var geometry = new THREE.CubeGeometry(1,1/3,1/20);
  var sidedown = new THREE.Mesh( geometry, material );
   korobka.add(sidedown); 
  var geometry = new THREE.CubeGeometry(0.85,1/3,1/20);
  var sideup = new THREE.Mesh( geometry, material );
   sideup.position.z=1.2;
   korobka.add(sideup); 
  var geometry = new THREE.CubeGeometry(1/20,1/3,1.2);
  var sideL = new THREE.Mesh( geometry, material );
   sideR=sideL.clone();
   sideL.position.set(-0.4,0,0.6);
   sideR.position.set(0.4,0,0.6);
   korobka.add(sideL); korobka.add(sideR); 
  var geometry = new THREE.CubeGeometry(0.8,1/20,1.2);
  var sidePered = new THREE.Mesh( geometry, materialGlass );
   sideZad=sidePered.clone();
   sidePered.position.set(0,-0.16,0.6);
   sideZad.position.set(0,0.16,0.6);
   korobka.add(sidePered); korobka.add(sideZad);
   
  // ДОСКА-СТЕНА
  var material = new THREE.MeshPhongMaterial( { color: 0xFFDDDD } );
  var geometry = new THREE.CubeGeometry(1.05,1/20,1/20);
  var doska = new THREE.Mesh( geometry, material );
  var stenaback=doska.clone(); 
  for (i=0;i<N;i++) { 
    var doska2=doska.clone(); doska2.position.z=i/20;
    if (i%2==0) doska2.scale.y=0.8;
    stenaback.add(doska2);
  }
  stenaR=stenaback.clone(); 
  stenaR.scale.x=0.8; stenaR.rotation.z=PI/2; 
  
   var stenaLD=doska.clone();  N=6; 
  for (i=0;i<N;i++) { 
    var doska2=doska.clone(); doska2.position.z=i/20;
    if (i%2==0) doska2.scale.y=0.8;
    stenaLD.add(doska2);
  } 
  stenaLD.scale.x=0.8; stenaLD.rotation.z=PI/2;  
   var stenaLU=doska.clone();  N=15; 
  for (i=N-2;i<N;i++) { 
    var doska2=doska.clone(); doska2.position.z=i/20;
    if (i%2==0) doska2.scale.y=0.8;
    stenaLU.add(doska2);
  } 
  stenaLU.scale.x=0.8; stenaLU.rotation.z=PI/2;  
  // sides
  stenaLB=stenaback.clone(); 
  stenaLB.scale.x=0.215; stenaLB.rotation.z=PI/2; 
  stenaLF=stenaLB.clone();  

stenaFU=stenaback.clone(); 

 var load = new  THREE.TextureLoader().load(poltex);
  var polmatr = new THREE.MeshPhongMaterial({
  map: load,overdraw: true,color: 0xFFFFFF} );
 var geom = new THREE.CubeGeometry(1,0.8,0.04);
 var pol = new THREE.Mesh(geom,polmatr);

  var dom = new THREE.Object3D();
  dom.add(pol);
  dom.add(stenaback); stenaback.position.y=0.4;
  dom.add(stenaFU);  stenaFU.position.y=-0.4;
  dom.add(stenaR);  stenaR.position.x=0.5;
  dom.add(stenaLD); stenaLD.position.x=-0.5;
  dom.add(stenaLU); stenaLU.position.x=-0.5;
  dom.add(stenaLB); stenaLB.position.set(-0.5,0.3,0);
  dom.add(stenaLF); stenaLF.position.set(-0.5,-0.31,0);
  korobka.position.set(-0.225,-0.4,0.275);
  korobka.scale.set(0.45,0.2,0.285);  
  korobka2=korobka.clone(); korobka2.rotation.z=PI/2;
  korobka2.position.set(-0.5,-0.005,0.275);
  dom.add(korobka2);  
  dom.rotation.z=PI/2;
return dom;
}

function DrawPoliana() {
  // ПЛОЩАДКА С ОТВЕРСТИЕМ !
  WS=2/3; WS2=0.3; WSK=WS/40;
  var material = new THREE.MeshLambertMaterial( { color: 0x339922 } );
  var geometry = new THREE.TorusGeometry(1,0.75,25,25);
  var earthbody = new THREE.Mesh( geometry, material );
    for (var j = 0; j < geometry.vertices.length; j++) {
       x=geometry.vertices[j].x; 
       y=geometry.vertices[j].y; 
       z=geometry.vertices[j].z; 
       if (x>WS) x=WS; if (x<-WS) x=-WS;
       if (y>5*WS) y=5*WS; if (y<-WS) y=-WS;
       if (z>WSK) z=WSK; if (z<-WSK) z=-WSK;
       earthbody.geometry.vertices[j].x=x;
       earthbody.geometry.vertices[j].y=y;
       earthbody.geometry.vertices[j].z=z;
    }

// ВОДА

var load = new  THREE.TextureLoader().load(watertex);
var material = new THREE.MeshPhongMaterial( {color: 0x7fc7ff, 
map: load, overdraw: false, depthWrite: true, opacity: 0.9, transparent: true} );
var geometry = new THREE.SphereGeometry(WS/2, 32, 32,0,PI,PI,PI);
var watersphere = new THREE.Mesh( geometry, material );

var watergeom = new THREE.CircleGeometry(WS/2,32);
var load = new  THREE.TextureLoader().load(watertex);
    load.anisotropy = 8;
    var watermatr = new THREE.MeshBasicMaterial({
    map: load,
    overdraw: true,
    color: 0xABCDEF,
    // blending: THREE.AdditiveBlending,
     side: THREE.DoubleSide,
     depthWrite: false,
     opacity: 0.6, transparent: true} );
  var water = new THREE.Mesh(watergeom,watermatr);
  watersphere.add(water);

  var earth= new THREE.Object3D();
    earth.add(earthbody);
    earth.add(watersphere);
return earth;
}

 
function render(){
      requestAnimationFrame(render);
      controls.update();
      renderer.render(scene,camera);
}

function CreateScene(WC,HC) {
if (typeof(sceneexist)=='undefined') { sceneexist=true;
  // объявление сцены
     scene = new THREE.Scene();
     scene.background = new THREE.Color(0x444488 );
     camera = new THREE.PerspectiveCamera(35,WC/HC,1,1000 );
  camera.position.x = 0;
  camera.position.y = -50;
  camera.position.z = 40;
     camera.lookAt( scene.position );
     renderer = new THREE.WebGLRenderer({
     alpha: true, antialias: true});

     renderer.setPixelRatio( window.devicePixelRatio );
  // привяжем отрисовку к html и высоте канвы
  // renderer.setSize( window.innerWidth, window.innerHeight );
     document.getElementById("wCanvas").appendChild(renderer.domElement);
     renderer.setSize(WC,HC);
  // установим модуль управления камерой
     controls = new THREE.TrackballControls( camera,renderer.domElement );
     controls.rotateSpeed = 1.0;
     controls.zoomSpeed = 1.2;
     controls.panSpeed = 0.8;
     controls.noZoom = false;
     controls.noPan = true;
     controls.staticMoving = false;
     controls.dynamicDampingFactor = 0.2;
  // источники света
   scene.add( new THREE.AmbientLight( 0x555555 ) );
   var directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1 );
   directionalLight.position.set(100,-100,40).normalize();
   scene.add( directionalLight );
directionalLight.position.set(100,-100,40).normalize();
scene.add( directionalLight );
}}

{{html
<!DOCTYPE html>
<head>
 <script SRC="http://livelab.spb.ru/x3d/three.min.js"></script>
 <script SRC="http://livelab.spb.ru/x3d/TrackballControls.js"></script>
 <script SRC="http://livelab.spb.ru/x3d/OBJLoader.js"></script>
 <script SRC="http://livelab.spb.ru/x3d/DDSLoader.js"></script>
 <script SRC="http://livelab.spb.ru/x3d/MTLLoader.js"></script>
</head>
html}}
