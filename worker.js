// creates a database with a given name and optionally grant access
module.exports = function (hoodie, doneCallback) {

	hoodie.task.on('createdb:add', function(dbName, createDbTask) {

		hoodie.database.add(createDbTask.name, function(error, db) {
			if (error) {
				hoodie.task.error(dbName, createDbTask);
				return;
			}

			var grantMethod;
			if (createDbTask.read && !createDbTask.write) {
				grantMethod = db.grantPublicReadAccess;
			} else if (createDbTask.write) {
				grantMethod = db.grantPublicWriteAccess;
			}
			if (grantMethod) {
				grantMethod.call(db, function(error) {
					if (error) {
						hoodie.task.error(dbName, createDbTask);
						return;
					}
					hoodie.task.success(dbName, createDbTask);
				});
			} else {
				hoodie.task.success(dbName, createDbTask);
			}
		});
	});

	doneCallback();
};
