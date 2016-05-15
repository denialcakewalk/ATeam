


if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js').then(function (reg) {
        console.log("sw registered");


        reg.addEventListener('updatefound', function () {
            reg.installing.addEventListener('statechange', function () {
                if (this.state == 'installed') {
                    console.log('update ready');
                    //alert('update ready');
                }
                if (this.state == 'waiting') {
                    // alert('waiting');
                }
                if (this.state == 'installing') {
                    // alert('installing');
                }
            })
        });
        var displayOnlineStatus = document.getElementById("online-status"),
            isOnline = function () {
                alert('Online');
                this.SyncData();
            },
            isOffline = function () {
                alert('Offline');
            };

        if (window.addEventListener) {
            window.addEventListener("online", isOnline, false);
            window.addEventListener("offline", isOffline, false);
        }
        else {
            document.body.ononline = isOnline;
            document.body.onoffline = isOffline;
        }

    }).catch(function (error) {
        console.log(error);
    });
}


// Listen for claiming of our ServiceWorker
navigator.serviceWorker.addEventListener('message', function (event) {
});

function SyncData(){
    SyncPersonDetails();
    SyncViditorDetails();
}
function SyncPersonDetails() {
    var dbPromise = idb.open('persondetails', 1, function (upgradeDb) {
        var persondetailStore = upgradeDb.createObjectStore('persondetails', { keyPath: 'id' });
        persondetailStore.createIndex('persondetailsIndex', ['name', 'faltnumber'], { unique: true });
    });
    return dbPromise.then(function (db) {
        var tx = db.transaction('persondetails', 'readwrite');
        var persondetailStore = tx.objectStore('persondetails');
        var index = persondetailStore.index('persondetailsIndex');
        // var resp = index.get(IDBKeyRange.only([$("#txtSource").val(), $("#txtDest").val()]));
        index.getAll().then(function(data){
                for(var i=0;i<data.length;i++){
                    $.ajax({
                        type: "POST",
                        url: "http://192.101.102.165:4030/api/persondetails",
                        data: {
                            name: data[0].name,
                            towernumber:  data[0].towernumber,
                            faltnumber:  data[0].faltnumber,
                            gender:  data[0].gender,
                            contactnumber:  data[0].contactnumber,
                            photo:  data[0].photo
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data != ""){
                                console.log(data);

                                var dbPromise = idb.open('persondetails', 1, function (upgradeDb) {
                                    var persondetailStore = upgradeDb.createObjectStore('persondetails', { keyPath: 'id' });
                                    persondetailStore.createIndex('persondetailsIndex', ['name', 'faltnumber'], { unique: true });
                                });
                                return dbPromise.then(function (db) {
                                    var tx = db.transaction('persondetails', 'readwrite');
                                    var persondetailStore = tx.objectStore('persondetails');
                                    var index = persondetailStore.index('persondetailsIndex');


                                    persondetailStore.getAll().then(function (item) {
                                        for(var i=0;i<item.length;i++){
                                            if(data.name==item[i].name && data.towernumber==item[i].towernumber){
                                                persondetailStore.delete(item[i].id);
                                            }
                                        }
                                        console.log(data)
                                    }).catch(function (err) {
                                        console.log(err);
                                    });

                                });
                            }

                        },
                        error: function (xhr, err, status) {
                            console.error(err);
                        }
                    });

                }
            }
        );

        return tx.complete;
    }).then(function () {
        console.log('Added');
    });
}
function SyncViditorDetails() {

    var dbPromise = idb.open('newvisitordetails', 1, function (upgradeDb) {
        var persondetailStore = upgradeDb.createObjectStore('persondetails', { keyPath: 'id' });
        persondetailStore.createIndex('persondetailsIndex', ['name', 'faltnumber'], { unique: true });
    });
    return dbPromise.then(function (db) {
        var tx = db.transaction('newvisitors', 'readwrite');
        var persondetailStore = tx.objectStore('newvisitors');
        var index = persondetailStore.index('newvisitorsIndex');
        // var resp = index.get(IDBKeyRange.only([$("#txtSource").val(), $("#txtDest").val()]));
        index.getAll().then(function(data){
                for(var i=0;i<data.length;i++){
                    $.ajax({
                        type: "POST",
                        url: "http://192.101.102.165:4030/api/newvisitors",
                        data: {
                            name:data[i].name,
                            address:data[i].address,
                            gender:data[i].gender,
                            contactnumber:data[i].contactnumber,
                            verificationnumber:data[i].verificationnumber,
                            verificationtypeid:data[i].verificationtypeid,
                            towernumber:data[i].towernumber,
                            flatnumber:data[i].flatnumber,
                            visitortypeid:data[i].visitortypeid,

                        },
                        dataType: "json",
                        success: function (data) {
                            if (data != ""){
                                console.log(data);

                                var dbPromise = idb.open('newvisitors', 1, function (upgradeDb) {
                                    var visitordetailStore = upgradeDb.createObjectStore('newvisitors', { keyPath: 'id' });
                                    visitordetailStore.createIndex('newvisitorsIndex', ['name', 'faltnumber'], { unique: true });
                                });
                                return dbPromise.then(function (db) {
                                    var tx = db.transaction('newvisitors', 'readwrite');
                                    var visitordetailStore = tx.objectStore('newvisitors');
                                    var index = visitordetailStore.index('newvisitorsIndex');

                                    visitordetailStore.getAll().then(function (item) {
                                        for(var i=0;i<item.length;i++){
                                        if(data.name==item[i].name && data.towernumber==item[i].towernumber){
                                            visitordetailStore.delete(item[i].id);
                                        }
                                        }
                                        console.log(data)
                                    }).catch(function (err) {
                                        console.log(err);
                                    });

                                });
                            }

                        },
                        error: function (xhr, err, status) {
                            console.error(err);
                        }
                    });

                }
            }
        );

        return tx.complete;
    }).then(function () {
        console.log('Added');
    });
}


