// creates a database with a given name
module.exports = function (hoodie, doneCallback) {

	hoodie.task.on('createdb:add', function(dbName, createDbTask) {

		hoodie.database.add(createDbTask.name, function(error) {
			if (error) {
				hoodie.task.error(dbName, createDbTask);
			} else {
				hoodie.task.success(dbName, createDbTask);
			}
		});

	});

	doneCallback();
};
