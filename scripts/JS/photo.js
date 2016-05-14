function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
        // display results in page
        //document.getElementById('results').innerHTML =
        //    '<h2>Here is your image:</h2>' +
        //    '<img src="' + data_uri + '"/>';

       

        var dbPromise = idb.open('photo', 1, function (upgradeDb) {
            var photoStore = upgradeDb.createObjectStore('photo', { keyPath: 'id' });
           // photoStore.createIndex('sourceDestIndex', ['source', 'dest'], { unique: true });

        });
        dbPromise.then(function (db) {
            var tx = db.transaction('photo', 'readwrite');
            var photoStore = tx.objectStore('photo');
            //var index = trainStore.index('sourceDestIndex');
            photoStore.put({
                json: data_uri,
                id: Math.random().toString(36).slice(2)
            });
            return tx.complete;
        }).then(function () {
            console.log('Added');
        }).catch(function (err) {
            console.log(err);
        });

       

    });
}