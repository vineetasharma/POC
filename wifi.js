/**
 * Created by ttnd on 26/10/16.
 */
/*
var WiFiControl = require('wifi-control');

//  Initialize wifi-control package with verbose output
WiFiControl.init({
    debug: true
});

//  Try scanning for access points:
WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);
    console.log('response----------------------------',response);
});*/
var usbDetect = require('usb-detection');

// Detect add/insert
usbDetect.on('add', function(device) { console.log('add', device); });
usbDetect.on('add:vid', function(device) { console.log('add', device); });
usbDetect.on('add:vid:pid', function(device) { console.log('add', device); });

// Detect remove
usbDetect.on('remove', function(device) { console.log('remove', device); });
usbDetect.on('remove:vid', function(device) { console.log('remove', device); });
usbDetect.on('remove:vid:pid', function(device) { console.log('remove', device); });

// Detect add or remove (change)
usbDetect.on('change', function(device) { console.log('change', device); });
usbDetect.on('change:vid', function(device) { console.log('change', device); });
usbDetect.on('change:vid:pid', function(device) { console.log('change', device); });

// Get a list of USB devices on your system, optionally filtered by `vid` or `pid`
usbDetect.find(function(err, devices) { console.log('find', devices, err); });
/*usbDetect.find(vid, function(err, devices) { console.log('find', devices, err); });
usbDetect.find(vid, pid, function(err, devices) { console.log('find', devices, err); });*/
// Promise version of `find`:
usbDetect.find().then(function(devices) { console.log(devices); }).catch(function(err) { console.log(err); });
/*
var usb = require('usb');
//var Buffer=require('buffer').Buffer;
//usb.setDebugLevel(true);
var devices=usb.getDeviceList();
//console.log('Devicesssss---usb--------------------------------------',devices);
var myUsb=usb.findByIds(1921, 21863);
console.log('MyUSB------------------------',myUsb);
myUsb.open(true);
myUsb.getStringDescriptor(2,function(err,data){console.log('GetDescriptor-------iProduct-------------',arguments);});
myUsb.getStringDescriptor(1,function(err,data){console.log('GetDescriptor------iManufect--------------',arguments);});
myUsb.getStringDescriptor(3,function(err,data){console.log('GetDescriptor-------serial-------------',arguments);});

//var inerfaces=myUsb.interface(0);
//myUsb.direction="in";
//usb.LIBUSB_ENDPOINT_IN="in";
//myUsb.transferType=usb.LIBUSB_TRANSFER_TYPE_BULK;
//console.log('My device-------------------interfaces--------------',inerfaces.endpoints[0].device);

//console.log('Buffer----------------------',Buffer);


//usb.InEndpoint(inerfaces.endpoints[0].device,inerfaces.endpoints[0].device.deviceDescriptor);
//usb.endpoint(0);
//var b = new Buffer([0xFF, 0x12, 0x01]);
//console.log('typeof------------------------b---------------------------------------------------',typeof Buffer,'Buffer:::::::::::::::',Buffer);
//myUsb.controlTransfer(0x80,0x6,0x1,0,0x12,function(err,data){
//    console.log('Dtaa-------------------------Transfer-----------------',data);
//    console.log('err-------------------------Transfer-----------------',err);
//});
////myUsb.startPoll(3,inerfaces.endpoints[0].device.deviceDescriptor.bMaxPacketSize0);
//usb.on('data',function(err,data){
//    console.log('Dtaa-------------------------mydevice-----------------',data);
//    console.log('err-------------------------mydevice-----------------',err);
//})
*/
