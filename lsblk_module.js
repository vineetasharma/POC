/**
 * Created by ttnd on 2/11/16.
 */
/*
var blk = require('linux-blockutils');
var fs=require('');

blk.getBlockInfo({onlyStandard: true}, function (err, json) {
    if (err) {
        console.log("ERROR:" + err);
    } else {
        console.log(json, '____________________________________________');
        console.log(JSON.stringify(json, null, "  ").length);
    }
});*/


var sys = require('sys')
var exec = require('child_process').exec;
var child;

child = exec("lsblk --list --output NAME,MOUNTPOINT,RM,TYPE,FSTYPE,ROTA,LABEL,MODE,ALIGNMENT,MIN-IO,PHY-SEC,DISC-ALN,DISC-GRAN,SCHED,STATE", function (error, stdout, stderr) {
    console.log('stdout: typeof---------------------- ',typeof stdout);
    console.log('stdout: ',stdout);
    console.error('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});